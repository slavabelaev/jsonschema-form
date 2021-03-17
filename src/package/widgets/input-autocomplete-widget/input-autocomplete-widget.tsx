import React, {useEffect, useState} from 'react';
import {createCn} from "bem-react-classname";
import template from "lodash.template";
import isEmpty from "lodash.isempty";
import uniqBy from "lodash.uniqby";
import get from "lodash.get";
import {WidgetProps} from "../../types/widget-props";
import {InputAutocomplete, InputAutocompleteProps} from "arui-feather/input-autocomplete";
import {InputOmitProps, mapInputProps} from "../input-widget";
import {mapEnumOptions} from "../../utils/map-enum-options";
import {CONFIG} from "../../config";
import "./input-autocomplete.scss";
import './bugfix';

const cn = createCn('input-autocomplete-widget');

export type RemoteConfig = {
    request: {
        url: string;
        method?: string,
        headers?: {
            [key: string]: string;
        }
    },
    response: {
        itemsKey?: string;
        valueKey?: string;
        titleKey?: string;
        descriptionKey?: string;
    }
};

export type InputAutocompleteUiOptions = Omit<InputAutocompleteProps, InputOmitProps | 'options'> & {
    remoteConfig?: RemoteConfig
};

function mapRemoteSuggestions(data: any, config: RemoteConfig): InputAutocompleteProps['options'] {
    const { itemsKey, valueKey, titleKey, descriptionKey } = config?.response || {};
    const items = itemsKey ? get(data, itemsKey) : data;

    return items?.map((item: any) => {
        const value = valueKey ? get(item, valueKey) : item;
        const label = titleKey ? get(item, titleKey) : item;
        const description = descriptionKey ? get(item, descriptionKey) : undefined;
        return { value, label, description, props: { uid: value } }
    });
}

function fetchSuggestions(config: RemoteConfig, input: string): Promise<InputAutocompleteProps['options']> {
    const jsonRequest = JSON.stringify(config?.request)
    const compiledJsonRequest = template(jsonRequest, CONFIG.template)({ input });
    const request = JSON.parse(compiledJsonRequest);

    return fetch(request.url, {
        ...request,
        body: JSON.stringify(request.body)
    })
        .then(response => response.json())
        .then(data => mapRemoteSuggestions(data, config))
}

export function findSuggestions(options?: InputAutocompleteProps['options'], input?: any) {
    return options?.filter(({ value }) => {
        if (!input) return options;
        const query = input?.toString();
        return value && RegExp(query, 'gi').test(value)
    });
}

async function getSuggestions(
    options: InputAutocompleteProps['options'],
    input?: string,
    remoteConfig?: InputAutocompleteUiOptions['remoteConfig']
): Promise<InputAutocompleteProps['options']> {
    if (!input) return options;

    const suggestions = remoteConfig
        ? await fetchSuggestions(remoteConfig, input)
        : findSuggestions(options, input);

    return uniqBy(suggestions, 'props.uid');
}

export function mapInputAutocompleteOptions(props: WidgetProps): InputAutocompleteProps['options'] {
    return mapEnumOptions(props).map(({ label, value, readonly}) => ({
        description: undefined,
        content: undefined,
        props: {
            disabled: readonly,
            uid: value
        },
        value: label || value,
        text: label,
        type: 'item'
    }));
}

export function mapInputAutocompleteProps(props: WidgetProps): InputAutocompleteProps {
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as InputAutocompleteUiOptions || {};
    const inputProps = mapInputProps(props);
    const options = mapInputAutocompleteOptions(props);

    return {
        "data-test-id": undefined,
        popupMaxHeight: undefined,
        popupClassName: undefined,
        opened: undefined,
        equalPopupWidth: undefined,
        directions: undefined,
        updateValueOnItemSelect: undefined,
        onItemSelect: undefined,
        renderPopupOnFocus: undefined,
        defaultValue: undefined,
        closeOnSelect: true,
        clear: true,
        ...uiOptions,
        ...inputProps,
        className,
        options
    }
}

function InputUIDsAutocompleteWidget(props: WidgetProps) {
    const { value: uid, options, onChange, ...inputProps } = mapInputAutocompleteProps(props);
    const { remoteConfig } = props.options as InputAutocompleteUiOptions || {};
    const [input, setInput] = useState<string>();
    const [suggestions, setSuggestions] = useState<InputAutocompleteProps['options']>(options);

    const updateSuggestions = (input?: string) => {
        getSuggestions(options, input, remoteConfig)
            .then(setSuggestions);
    }

    useEffect(() => {
        const hasUID = !isEmpty(uid);

        if (hasUID) {
            const selectedOption = options?.find(({ props }) => (props as any)?.uid === uid);
            const { text = '' } = selectedOption || {};
            setInput(text);
            updateSuggestions(text);
        }
    }, [uid]);

    return (
        <InputAutocomplete
            {...inputProps}
            options={suggestions}
            value={input}
            onChange={(value, ...args) => {
                setInput(value);
                updateSuggestions(value);
            }}
            onItemSelect={(option) => {
                const { uid } = option?.props as any || {};
                setTimeout(() => props.onChange(uid), 1);
            }}
            updateValueOnItemSelect={false}
            onKeyDown={() => inputProps.onClearClick?.()}
        />
    )
}

function InputEnumAutocompleteWidget(props: WidgetProps) {
    const { options, onChange, ...otherProps } = mapInputAutocompleteProps(props);
    const [suggestions, setSuggestions] = useState<InputAutocompleteProps['options']>(options);
    const { remoteConfig } = props.options as InputAutocompleteUiOptions || {};

    return (
        <InputAutocomplete
            {...otherProps}
            options={suggestions}
            onChange={(value) => {
                onChange?.(value);
                getSuggestions(options, value, remoteConfig)
                    .then(setSuggestions);
            }}
        />
    );
}

export function InputAutocompleteWidget(props: WidgetProps) {
    const { schema } = props;
    const uiOptions = props.options as InputAutocompleteUiOptions || {};
    const { remoteConfig } = uiOptions || {};
    const { titleKey, valueKey } = remoteConfig?.response || {};
    const remoteSuggestionsHasUIDs = titleKey && (valueKey !== titleKey);

    if (schema.anyOf || schema.oneOf || remoteSuggestionsHasUIDs) {
        return InputUIDsAutocompleteWidget(props);
    }

    return InputEnumAutocompleteWidget(props);
}
