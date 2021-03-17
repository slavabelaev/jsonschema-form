import React, {useEffect, useState} from 'react';
import get from "lodash/get";
import template from "lodash/template";
import {InputAutocomplete, InputAutocompleteProps} from "arui-feather/input-autocomplete";
import {WidgetProps} from "../../types/widget-props";
import {CONFIG} from "../../config";
import {InputAutocompleteUiOptions, mapInputAutocompleteProps} from "./input-autocomplete-widget";

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

function mapRemoteSuggestions(data: any, config: RemoteConfig): InputAutocompleteProps['options'] {
    const { itemsKey, valueKey, titleKey, descriptionKey } = config?.response || {};
    const items = itemsKey ? get(data, itemsKey) : data;

    return items?.map((item: any) => {
        const value = valueKey ? get(item, valueKey) : item;
        const label = titleKey ? get(item, titleKey) : item;
        const description = descriptionKey ? get(item, descriptionKey) : undefined;
        return { value, label, description, props: { uid: value } }
    }).splice(0, 7);
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

const filterOptions = (options?: InputAutocompleteProps['options'], input?: any) => options?.filter(({ value }) => {
    if (!input) return options;
    return value && value.toString() === input?.toString();
});

export function InputAutocompleteRemoteWidget(props: WidgetProps) {
    const isEnum = Object(props.schema).hasOwnProperty('enum');
    const { onChange, value, ...inputProps } = mapInputAutocompleteProps(props);
    const [options, setOptions] = useState<InputAutocompleteProps['options']>();
    const uiOptions = props.options as InputAutocompleteUiOptions;
    const { remoteConfig } = uiOptions || {};

    useEffect(() => {
        const filteredOptions = filterOptions(inputProps.options, value);
        setOptions(filteredOptions);
    }, [value]);

    const handleChange = (newValue?: string) => {
        if (newValue && remoteConfig) {
            fetchSuggestions(remoteConfig, newValue).then(setOptions);
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
