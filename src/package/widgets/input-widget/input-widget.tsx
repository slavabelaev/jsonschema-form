import React from "react";
import {createCn} from "bem-react-classname";
import {Input, InputProps} from "arui-feather/input";
import {WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {fromMarkdown} from "../../utils/from-markdown";
import {mapError} from "../../utils/map-error";
import "./input-widget.scss";

const cn = createCn('input-widget');

export type InputOmitProps = 'width' |
    'name'|
    'defaultValue' |
    'maxLength' |
    'value' |
    'tabIndex' |
    'error' |
    'resetError' |
    'disabled' |
    'className' |
    'pattern' |
    'id' |
    'size' |
    'theme' |
    'view' |
    'title' |
    'type' |
    'onChange' |
    'onBlur' |
    'onFocus';
export type InputUiOptions = Omit<InputProps, InputOmitProps>;

const mapInputType = (schema: WidgetProps['schema']): InputProps['type'] => {
    const { type, format } = schema;
    switch (type) {
        case 'integer':
        case 'number':
            switch (format) {
                case 'number':
                case 'card':
                case 'hidden':
                case 'money':
                case 'password':
                case 'tel': return format;
                default: return 'number';
            }
        case 'string':
            switch (format) {
                case 'number':
                case 'card':
                case 'email':
                case 'file':
                case 'hidden':
                case 'money':
                case 'password':
                case 'tel': return format;
                default: return 'text';
            }
        default:
            switch (format) {
                case 'hidden': return format;
                default: return 'text';
            }
    }
}

const mapInputPlaceholder = (props: WidgetProps): InputProps['placeholder'] => {
    const { placeholder, schema: { examples } } = props;
    const uiOptions = props.options as InputUiOptions;
    if (placeholder) return placeholder;
    if (uiOptions?.placeholder) return uiOptions.placeholder;

    if (examples instanceof Array) {
        if (!examples.length) return;
        return toType(examples[0], 'string');
    }

    return toType(examples, 'string');
}

const mapMaskFormatCharacters = (props: WidgetProps): InputProps['maskFormatCharacters'] => {
    const uiOptions = props.options as InputUiOptions;
    if (!uiOptions?.maskFormatCharacters) return;

    const getTransform = (transform: any) => {
        switch (transform) {
            case "toUpperCase": return (char: string) => char.toUpperCase();
            case "toLowerCase": return (char: string) => char.toLowerCase();
            default: return transform;
        }
    }

    const getValidate = (validate: any) => {
        switch (typeof validate) {
            case "string": return (char: string) => char.match(validate);
            default: return validate;
        }
    }

    const charOptions = Object.entries(uiOptions?.maskFormatCharacters).map(([char, props]) => ({
        [char]: {
            transform: getTransform(props.transform),
            validate: getValidate(props.validate),
        }
    }));

    return Object.assign({}, ...charOptions);
}

export function mapInputProps(props: WidgetProps): InputProps {
    const {
        id,
        label,
        disabled,
        readonly,
        tabIndex,
        schema,
        value,
        title,
        formContext,
        onChange,
        onBlur,
        onFocus,
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as InputUiOptions;

    const toInput = (value?: any): InputProps['value'] => {
        if (value === null) return '';

        switch (typeof value) {
            case 'undefined': return '';
            case 'string': return value;
            default: return toType(value, 'string');
        }
    };

    const handleChange: InputProps['onChange'] = (newValue) => {
        switch (schema.type) {
            case "string": onChange(newValue);
                break;
            default: {
                const output = toType(newValue, schema.type);
                onChange(output);
            }
        }
    }

    return {
        "data-test-id": undefined,
        icon: undefined,
        id: undefined,
        name: undefined,
        defaultValue: undefined,
        rightAddons: undefined,
        leftAddons: undefined,
        useWhitespacesInMask: undefined,
        autocomplete: undefined,
        focused: undefined,
        mask: undefined,
        disabledAttr: undefined,
        inputRef: undefined,
        onClearClick: undefined,
        onClick: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined,
        onPaste: undefined,
        onProcessMaskInputEvent: undefined,
        onTouchCancel: undefined,
        onTouchEnd: undefined,
        onTouchMove: undefined,
        onTouchStart: undefined,
        formNoValidate: undefined,
        ...uiOptions,
        className,
        maskFormatCharacters: mapMaskFormatCharacters(props),
        // props
        resetError: false,
        maxLength: schema.maxLength,
        value: toInput(value),
        tabIndex,
        placeholder: mapInputPlaceholder(props),
        error: mapError(props),
        hint: fromMarkdown(uiOptions?.hint || schema.description),
        label: uiOptions?.label || label,
        disabled: disabled || readonly,
        pattern: schema.pattern,
        size: formContext?.size,
        theme: formContext?.theme,
        view: formContext?.view,
        width: formContext?.width,
        title,
        type: mapInputType(schema),
        onChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value),
    }
}

export function InputWidget(props: WidgetProps) {
    const inputProps = mapInputProps(props);
    return <Input {...inputProps} />;
}
