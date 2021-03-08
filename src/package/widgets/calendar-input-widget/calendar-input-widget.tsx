import React from "react";
import {createCn} from "bem-react-classname";
import {CalendarInput, CalendarInputProps} from "arui-feather/calendar-input";
import {WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {InputOmitProps, mapInputProps} from "../input-widget";
import {mapCalendarProps} from "../calendar-widget";
import "./calendar-input-widget.scss";

const cn = createCn('calendar-input-widget');

export type CalendarInputUiOptions = Omit<CalendarInputProps, InputOmitProps>;

// to YYYY-MM-DD
export function toISODateString(input: number) {
    try {
        return new Date(input).toLocaleDateString('ru').split('.').reverse().join('-');
    } catch {}
}

export function mapCalendarInputProps(props: WidgetProps): CalendarInputProps {
    const calendarProps = mapCalendarProps(props);
    const { schema, value, onChange } = props;
    const { autocomplete, value: _value, onChange: _onChange, ...inputProps } = mapInputProps(props);
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as CalendarInputUiOptions;

    const toInput = (value: string | number): CalendarInputProps['value'] => {
        switch (typeof value) {
            case 'undefined': return;
            case 'string': {
                return value.match(/\d{4}-\d{2}-\d{2}/)
                    ? new Date(value).toLocaleDateString('ru')
                    : value;
            }
            case "number":
            default: return new Date(value).toLocaleDateString('ru');
        }
    }

    const handleChange: CalendarInputProps['onChange'] = (newValue, timestamp) => {
        switch (schema.type) {
            case "string": {
                if (!timestamp) {
                    onChange(newValue);
                    return;
                }

                switch (schema.format) {
                    case 'date': {
                        const output = toISODateString(timestamp);
                        onChange(output);
                        break;
                    }
                    case 'date-time': {
                        const output = new Date(timestamp).toISOString();
                        onChange(output);
                        break;
                    }
                    default: onChange(newValue);
                }
                break;
            }
            default: {
                const output = toType(timestamp, schema.type);
                onChange(output);
            }
        }
    };

    return {
        "data-test-id": undefined,
        autocomplete: undefined,
        defaultMonth: undefined,
        directions: undefined,
        leftAddons: undefined,
        mobileMode: undefined,
        mobileTitle: undefined,
        name: undefined,
        opened: undefined,
        resetError: undefined,
        rightAddons: undefined,
        withIcon: undefined,
        onCalendarChange: undefined,
        onCalendarKeyDown: undefined,
        onInputBlur: undefined,
        onInputChange: undefined,
        onInputFocus: undefined,
        onInputKeyDown: undefined,
        onKeyDown: undefined,
        defaultValue: undefined,
        ...uiOptions,
        ...inputProps,
        className,
        calendar: {
            ...uiOptions?.calendar,
            earlierLimit: calendarProps.earlierLimit,
            laterLimit: calendarProps.laterLimit,
            offDays: calendarProps.offDays,
            theme: calendarProps.theme,
            width: calendarProps.width,
            outputFormat: 'DD.MM.YYYY',
        },
        value: toInput(value),
        onChange: handleChange,
    }
}

export function CalendarInputWidget(props: WidgetProps) {
    return <CalendarInput {...mapCalendarInputProps(props)} />;
}
