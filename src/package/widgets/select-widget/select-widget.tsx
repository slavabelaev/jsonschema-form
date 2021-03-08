import React from  "react";
import {createCn} from "bem-react-classname";
import {Select, SelectProps} from "arui-feather/select";
import {WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {fromMarkdown} from "../../utils/from-markdown";
import {mapError} from "../../utils/map-error";
import {mapEnumOptions} from "../../utils/map-enum-options";
import "./select-widget.scss";
import './bugfix';

const cn = createCn('select-widget');

export type SelectUiOptions = Omit<SelectProps,
    'name' |
    'className' |
    'disabled' |
    'error' |
    'hint' |
    'id' |
    'label' |
    'mode' |
    'size' |
    'theme' |
    'view' |
    'width' |
    'placeholder' |
    'options' |
    'value' |
    'onChange' |
    'onBlur' |
    'onFocus'
>

const mapSelectOptions = (props: WidgetProps): SelectProps['options'] => {
    const enumOptions = mapEnumOptions(props);
    return enumOptions.map(({ value, label, readonly}) => ({
        checkedText: undefined,
        description: undefined,
        nativeText: undefined,
        icon: undefined,
        props: {
            disabled: readonly
        },
        value,
        text: label,
        // type: 'item',
    }));
}

export function mapSelectProps(props: WidgetProps): SelectProps {
    const {
        id,
        label,
        disabled,
        readonly,
        schema,
        placeholder,
        value,
        multiple,
        formContext,
        onChange,
        onBlur,
        onFocus
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as SelectUiOptions;

    const toInput = (value?: any): SelectProps['value'] => {
        if (value === null) return [];
        if (value instanceof Array) return value;

        switch(typeof value) {
            case "undefined": return [];
            default: {
                const input = toType(value, 'string');
                return [input];
            }
        }
    };

    const handleChange: SelectProps['onChange'] = (newValue) => {
        switch (schema.type) {
            case 'array': onChange(newValue);
                break;
            default: {
                const output = toType(newValue?.[0], schema.type);
                onChange(output);
            }
        }
    }

    return {
        "data-test-id": undefined,
        id: undefined,
        name: undefined,
        directions: undefined,
        equalPopupWidth: undefined,
        groupView: undefined,
        hideTick: undefined,
        maxHeight: undefined,
        mobileMenuMode: undefined,
        mobileTitle: undefined,
        opened: undefined,
        renderPopupOnFocus: undefined,
        renderButtonContent: undefined,
        popupSecondaryOffset: undefined,
        popupMainOffset: undefined,
        nativeOptionPlaceholder: undefined,
        onButtonBlur: undefined,
        onButtonFocus: undefined,
        onClick: undefined,
        onClickOutside: undefined,
        onKeyDown: undefined,
        onMenuBlur: undefined,
        onMenuFocus: undefined,
        ...uiOptions,
        className,
        disabled: disabled || readonly,
        error: mapError(props),
        hint: fromMarkdown(schema.description),
        label: label || schema.title,
        mode: multiple ? 'check' : 'radio',
        size: formContext?.size,
        theme: formContext?.theme,
        view: formContext?.view,
        width: formContext?.width,
        placeholder: placeholder || 'Выберите',
        options: mapSelectOptions(props),
        value: toInput(value),
        onChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value),
    }
}

export function SelectWidget(props: WidgetProps) {
    return <Select {...mapSelectProps(props)} />
}
