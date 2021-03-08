import React from 'react';
import {createCn} from "bem-react-classname";
import {RadioGroup, RadioGroupProps} from "arui-feather/radio-group";
import {Radio, RadioProps} from "arui-feather/radio";
import {EnumOption, WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {fromMarkdown} from "../../utils/from-markdown";
import {mapEnumOptions} from "../../utils/map-enum-options";
import {mapError} from "../../utils/map-error";
import "./radio-group-widget.scss";

const cn = createCn('radio-group-widget');

export type RadioGroupUiOptions = Omit<RadioGroupProps,
    'name' |
    'children' |
    'className' |
    'disabled' |
    'error' |
    'hint' |
    'label' |
    'size' |
    'theme' |
    'width' |
    'value' |
    'onChange' |
    'onBlur' |
    'onFocus'
    >

export function mapRadioSize({ formContext, options }: WidgetProps): RadioProps['size'] {
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

export function mapRadioGroupProps(props: WidgetProps): RadioGroupProps {
    const {
        value,
        id,
        label,
        disabled,
        readonly,
        schema,
        formContext,
        onChange,
        onBlur,
        onFocus,
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as RadioGroupUiOptions;

    const toInput = (value?: any): RadioGroupProps['value'] => {
        switch (typeof value) {
            case "undefined": return;
            case "string": return value;
            default: return toType(value, 'string');
        }
    };

    const handleChange: RadioGroupProps['onChange'] = (newValue) => {
        switch (schema.type) {
            case "string": onChange(newValue);
                break;
            default: {
                const output = toType(newValue, schema.type);
                onChange(output);
            }
        }
    }

    const renderOption = ({ label, value, readonly }: EnumOption) => (
        <Radio
            key={value}
            value={value}
            text={label || value}
            disabled={readonly}
            type={uiOptions?.type === 'button' ? 'button' : undefined}
            theme={formContext?.theme}
            width={formContext?.width}
            size={mapRadioSize(props)}
        />
    );

    return {
        "data-test-id": undefined,
        name: undefined,
        type: undefined,
        ...uiOptions,
        className,
        children: mapEnumOptions(props)?.map(renderOption),
        disabled: disabled || readonly || undefined,
        error: mapError(props),
        hint: fromMarkdown(schema.description),
        label,
        size: formContext?.size,
        theme: formContext?.theme,
        // width: formContext?.width,
        value: toInput(value),
        onChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value)
    }
}

export function RadioGroupWidget(props: WidgetProps) {
    return <RadioGroup {...mapRadioGroupProps(props)} />
}
