import React from "react";
import {createCn} from "bem-react-classname";
import {Input, InputProps} from "arui-feather/input";
import {WidgetProps} from "../../types/widget-props";
import {InputOmitProps, mapInputProps} from "../input-widget";
import {toType} from "../../utils/to-type";
import {getTimezoneOffsetTime} from "../calendar-widget";
import "./date-time-input-widget.scss";

const cn = createCn('date-time-input-widget');

export type DateTimeInputProps = Omit<InputProps, 'type' | 'icon' | 'clear' | 'focused'>;
export type DateTimeInputUiOptions = Omit<DateTimeInputProps, InputOmitProps |
    'focused' |
    'clear'
>

const toDateTimeString = (input: number | string) => {
    try {
        return new Date(input).toISOString().match(/.*T[0-9]{2}:[0-9]{2}/)?.[0];
    } catch {}
};
const toISOString = (input: number | string) => {
    try {
        const time = new Date(input).getTime() - getTimezoneOffsetTime();
        return new Date(time).toISOString();
    } catch {}
}
const toTimestamp = (input: number | string) => {
    try {
        return new Date(input).getTime() - getTimezoneOffsetTime();
    } catch {}
}

export function mapDateTimeInputProps(props: WidgetProps): DateTimeInputProps {
    const { schema, value, onChange } = props;
    const className = [cn(), props.className].join(' ');
    const {
        type: _type,
        icon: _icon,
        clear: _clear,
        focused: _focused,
        ...inputProps
    } = mapInputProps(props);

    const toInput = (value?: any): DateTimeInputProps['value'] => {
        switch (typeof value) {
            case 'undefined': return;
            case "string":
            case "number": return toDateTimeString(value);
            default: return toType(value, 'string');
        }
    };

    const inputRef: InputProps['inputRef'] = (input) => {
        if (!input) return;
        if (schema.minimum) input.min = toDateTimeString(schema.minimum) || '';
        if (schema.maximum) input.max = toDateTimeString(schema.maximum) || '';
        input.type = 'datetime-local';
    }

    const handleChange: InputProps['onChange'] = (newValue) => {
        switch (schema.type) {
            case "string": {
                const output = newValue && toISOString(newValue);
                onChange(output);
                break;
            }
            case "number":
            case "integer": {
                const output = newValue && toTimestamp(newValue);
                onChange(output);
                break;
            }
            default:
                const timestamp = newValue && toTimestamp(newValue);
                const output = toType(timestamp, schema.type);
                onChange(output);
        }
    }

    return {
        ...inputProps,
        inputRef,
        className,
        value: toInput(value),
        onChange: handleChange
    }
}

export function DateTimeInputWidget(props: WidgetProps) {
    const inputProps = mapDateTimeInputProps(props);
    return (
        <Input
            {...inputProps}
            clear={false}
            focused={true}
        />
    )
}
