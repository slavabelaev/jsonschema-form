import React, {useEffect, useState} from 'react';
import {createCn} from "bem-react-classname";
import get from 'lodash/get';
import template from 'lodash/template';
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

function mapInputAutocompleteOptions(props: WidgetProps): InputAutocompleteProps['options'] {
    return mapEnumOptions(props).map(({ label, value, readonly}) => ({
        description: undefined,
        content: undefined,
        props: {
            disabled: readonly,
            value: value
        },
        value: label || value,
        text: label,
        type: 'item'
    }));
}

export function mapInputAutocompleteProps(props: WidgetProps): InputAutocompleteProps {
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as InputAutocompleteUiOptions;
    const inputProps = mapInputProps(props);
    const options = mapInputAutocompleteOptions(props);

    const toInput = (value: any): InputAutocompleteProps['value'] => {
        if (options?.length) {
            const option = options?.find(
                (item: any) => item?.props?.value === value
            );
            return option?.value;
        } else {
            return inputProps.value;
        }
    }

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
        value: toInput(props.value),
        options,
    }
}

function mapSuggestions(data: any, config: RemoteConfig): InputAutocompleteProps['options'] {
    const { itemsKey, valueKey, titleKey, descriptionKey } = config?.response || {};
    const items = itemsKey ? get(data, itemsKey) : data;
    return items?.map((item: any) => {
        const value = valueKey ? get(item, valueKey) : item;
        const label = titleKey ? get(item, titleKey) : item;
        const description = descriptionKey ? get(item, descriptionKey) : undefined;
        return { value, label, description, props: { value } }
    }).splice(0, 7);
}

function fetchSuggestions(config: RemoteConfig, input: string): Promise<any> {
    const jsonRequest = JSON.stringify(config?.request)
    const compiledJsonRequest = template(jsonRequest, CONFIG.template)({ input });
    const request = JSON.parse(compiledJsonRequest);

    return fetch(request.url, {
        ...request,
        body: JSON.stringify(request.body)
    }).then(response => response.json());
}

function filterOptions(options: InputAutocompleteProps['options'], search?: string, exact?: boolean) {
    if (!search) return options;

    if (exact) {
        return options?.filter(({ props }) => (props as any)?.value === search);
    }

    return options?.filter(({ value }) =>
        new RegExp(search as string, 'gi').test(value as string)
    );
}

export function InputAutocompleteWidget(props: WidgetProps) {
    const isEnum = Object(props.schema).hasOwnProperty('enum');
    const { onChange, value, ...inputProps } = mapInputAutocompleteProps(props);
    const [options, setOptions] = useState<InputAutocompleteProps['options']>();
    const uiOptions = props.options as InputAutocompleteUiOptions;
    const { remoteConfig } = uiOptions || {};

    useEffect(() => {
        const filteredOptions = filterOptions(inputProps.options, value, !isEnum);
        setOptions(filteredOptions);
    }, [value]);

    const handleChange = (newValue?: string) => {
        if (newValue && remoteConfig) {
            fetchSuggestions(remoteConfig, newValue)
                .then(data => mapSuggestions(data, remoteConfig))
                .then(setOptions);
            onChange?.(newValue);
        } else if (isEnum) {
            onChange?.(newValue);
        } else {
            const filteredOptions = filterOptions(inputProps.options, newValue) || [];
            const nextValue = (filteredOptions.length === 1)
                ? (filteredOptions?.[0]?.props as any).value
                : undefined;
            onChange?.(nextValue);
        }
    }

    return (
        <InputAutocomplete
            {...inputProps}
            value={value}
            onChange={handleChange}
            options={options}
        />
    )
}
