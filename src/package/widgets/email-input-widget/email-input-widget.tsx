import React from 'react';
import {createCn} from "bem-react-classname";
import {WidgetProps} from "../../types/widget-props";
import {InputOmitProps} from "../input-widget";
import {InputAutocomplete, InputAutocompleteProps} from "arui-feather/input-autocomplete";
import {mapInputAutocompleteProps} from "../input-autocomplete-widget";
import "./email-input-widget.scss";

const cn = createCn('email-input-widget');

export type EmailInputUiOptions = Omit<InputAutocompleteProps, InputOmitProps | 'type'> & {
    providers?: string[];
};

const defaultProviders = [
    'gmail.com',
    'yandex.ru',
    'yandex.ua',
    'yandex.by',
    'yandex.kz',
    'ya.ru',
    'yandex.com',
    'mail.ru',
    'internet.ru',
    'bk.ru',
    'inbox.ru',
    'list.ru',
    'outlook.com',
    'hotmail.com',
    'alfabank.ru',
];

const getSuggestions = ({ value: query, options }: WidgetProps): InputAutocompleteProps['options'] => {
    const uiOptions = options as EmailInputUiOptions;
    const { providers } = uiOptions || {};
    const [, username = '', domain] = query?.match(/(.*?)@(.*)/) || [];
    return (providers || defaultProviders)
        .filter(item => item.startsWith(domain) && domain !== item)
        .splice(0, 7)
        .map(item => ({ value: `${username}@${item}` }));
}

export function mapEmailInputProps(props: WidgetProps): InputAutocompleteProps {
    const className = [cn(), props.className].join(' ');
    return {
        ...mapInputAutocompleteProps(props),
        className,
        type: 'email',
        options: getSuggestions(props)
    }
}

export function EmailInputWidget(props: WidgetProps) {
    return <InputAutocomplete {...mapEmailInputProps(props)} />;
}
