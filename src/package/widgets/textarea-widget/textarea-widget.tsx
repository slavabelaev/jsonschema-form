import React from "react";
import {createCn} from "bem-react-classname";
import { Textarea, TextareaProps} from "arui-feather/textarea";
import {WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {fromMarkdown} from "../../utils/from-markdown";
import {mapError} from "../../utils/map-error";
import "./textarea-widget.scss";

const cn = createCn('textarea-widget');

export type TextareaUiOptions = Omit<TextareaProps,
    'name' |
    'label' |
    'id' |
    'className' |
    'disabled' |
    'error' |
    'hint' |
    'size' |
    'placeholder' |
    'tabIndex' |
    'theme' |
    'view' |
    'width' |
    'value' |
    'defaultValue' |
    'onChange' |
    'onBlur' |
    'onFocus'
>

function mapTextareaProps(props: WidgetProps): TextareaProps {
    const {
        value,
        schema,
        placeholder,
        tabIndex,
        label,
        disabled,
        readonly,
        id,
        formContext,
        onChange,
        onBlur,
        onFocus,
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as TextareaUiOptions;

    const toInput = (value?: any): TextareaProps['value'] => {
        switch (typeof value) {
            case "undefined": return;
            case "string": return value;
            default: return toType(value,  'string');
        }
    }

    const handleChange: TextareaProps['onChange'] = (newValue) => {
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
        id: undefined,
        name: undefined,
        defaultValue: undefined,
        minRows: undefined,
        maxRows: undefined,
        maxHeight: undefined,
        resize: undefined,
        autosize: undefined,
        autocomplete: undefined,
        icon: undefined,
        onHeightChange: undefined,
        onKeyDown: undefined,
        onKeyPress: undefined,
        onPaste: undefined,
        ...uiOptions,
        className,
        label,
        disabled: disabled || readonly,
        error: mapError(props),
        maxLength: schema.maxLength,
        hint: fromMarkdown(schema.description),
        placeholder,
        tabIndex,
        size: formContext?.size,
        theme: formContext?.theme,
        view: formContext?.view,
        width: formContext?.width,
        value: toInput(value),
        onChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value),
    }
}

export function TextareaWidget(props: WidgetProps) {
    return <Textarea {...mapTextareaProps(props)} />
}
