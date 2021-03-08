import React from "react";
import {createCn} from "bem-react-classname";
import {WidgetProps} from "../../types/widget-props";
import {CheckBox, CheckboxProps} from "arui-feather/checkbox";
import {toType} from "../../utils/to-type";
import {Helper} from "../../components/helper";
import {fromMarkdown} from "../../utils/from-markdown";
import {mapHelperProps} from "../../utils/map-helper-props";
import './checkbox-widget.scss';

const cn = createCn('checkbox-widget');

export type CheckboxUiOptions = Omit<CheckboxProps,
    'name' |
    'width' |
    'checked' |
    'className' |
    'disabled' |
    'size' |
    'text' |
    'theme' |
    'title' |
    'value' |
    'indeterminate' |
    'onChange' |
    'onBlur' |
    'onFocus'
>;

export function mapCheckboxSize({ formContext, options }: WidgetProps): CheckboxProps['size'] {
    const { size } = formContext || {};
    const { type } = options || {};

    switch (type) {
        case 'button': return size;
        case 'normal':
        default: {
            switch (size) {
                case "s":
                case "m": return "m";
                case "l": return "l";
                case "xl": return "l";
                default: return "m";
            }
        }
    }
}

export function mapCheckboxProps(props: WidgetProps): CheckboxProps {
    const {
        id,
        label,
        disabled,
        readonly,
        value,
        schema,
        formContext,
        onChange,
        onFocus,
        onBlur
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options;

    const toInput = (value?: any): CheckboxProps['value'] => {
        switch (typeof value) {
            case 'undefined': return;
            case "string": return value;
            default: return toType(value, 'string');
        }
    }

    const handleChange: CheckboxProps['onChange'] = (isChecked, newValue) => {
        switch(schema.type) {
            case "boolean": onChange(isChecked);
                break;
            default: {
                const output = toType(newValue, schema.type);
                onChange(output);
            }
        }
    };

    return {
        "data-test-id": undefined,
        id: undefined,
        name: undefined,
        type: undefined,
        onMouseEnter: undefined,
        onMouseLeave: undefined,
        ...uiOptions,
        className,
        indeterminate: typeof value === "undefined",
        checked: toType(value, 'boolean'),
        disabled: disabled || readonly,
        size: mapCheckboxSize(props),
        width: formContext?.width,
        theme: formContext?.theme,
        text: fromMarkdown(label),
        title: schema.description,
        value: toInput(value),
        onChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value),
    }
}

export function CheckboxWidget(props: WidgetProps) {
    return (
        <div className={cn()}>
            <CheckBox {...mapCheckboxProps(props)} />
            <Helper {...mapHelperProps(props)} />
        </div>
    )
}
