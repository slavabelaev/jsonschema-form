import React from "react";
import {createCn} from "bem-react-classname";
import {JSONSchema7} from "json-schema";
import {Calendar, CalendarProps} from "arui-feather/calendar";
import {Label} from "arui-feather/label";
import {WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {Helper} from "../../components/helper";
import {mapLabelProps} from "../label-widget";
import {mapHelperProps} from "../../utils/map-helper-props";
import "./calendar-widget.scss";

const cn = createCn('calendar-widget');

export type CalendarUiOptions = Omit<CalendarProps,
    'className' |
    'id' |
    'theme' |
    'width' |
    'outputFormat' |
    'value' |
    'onValueChange' |
    'onBlur' |
    'onFocus'
>;

export function mapCalendarEarlierLimit({ schema }: WidgetProps): CalendarProps['earlierLimit'] {
    const schemas = (schema?.anyOf || schema?.oneOf) as JSONSchema7[];
    let allMinimums = [schema?.exclusiveMinimum, schema?.minimum];

    schemas?.forEach(schema => {
        allMinimums.push(schema?.minimum);
        allMinimums.push(schema?.exclusiveMinimum);
    });

    const allMinimumsNumbers = (allMinimums as any[])?.filter(Number.isFinite);

    if (allMinimumsNumbers.length > 0) {
        return Math.min.apply(Math, allMinimumsNumbers);
    }
}

export function mapCalendarLaterLimit({ schema }: WidgetProps): CalendarProps['earlierLimit'] {
    const schemas = (schema?.anyOf || schema?.oneOf) as JSONSchema7[];
    const allMaximums = [schema?.exclusiveMaximum, schema?.maximum];

    schemas?.forEach(schema => {
        allMaximums.push(schema?.maximum);
        allMaximums.push(schema?.exclusiveMaximum);
    });

    const allMaximumsNumbers = (allMaximums as any[])?.filter(Number.isFinite);

    if (allMaximumsNumbers.length > 0) {
        return Math.max.apply(Math, allMaximumsNumbers);
    }
}

export function mapCalendarOutputFormat(schema: JSONSchema7): CalendarProps['outputFormat'] {
    switch (schema.format) {
        case 'date-time': return 'YYYY-MM-DDThh:mm:ssZ';
        case 'date':
        default: return 'YYYY-MM-DD';
    }
}

export function getTimezoneOffsetTime() {
    const currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
    const timeInHour = 3600000;
    return currentTimeZoneOffsetInHours * timeInHour;
}

export function mapCalendarOffDays(schema: JSONSchema7): CalendarProps['offDays'] {
    const schemaNot = schema?.not as JSONSchema7;
    const timezoneOffsetTime = getTimezoneOffsetTime();
    return schemaNot?.enum?.map(item => {
        switch (typeof item) {
            case "number": return item;
            case "string":
            default: return new Date(item as string).getTime() + timezoneOffsetTime;
        }
    });
}

export function mapCalendarProps(props: WidgetProps): CalendarProps {
    const {
        id,
        schema,
        value,
        disabled,
        readonly,
        formContext,
        onChange,
        onBlur,
        onFocus
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as CalendarUiOptions;

    const toInput = (value?: any): CalendarProps['value'] => {
        switch (typeof value) {
            case 'undefined': return;
            case 'number': return value;
            case 'string': {
                switch (schema.format) {
                    case 'date':
                    case 'date-time': return new Date(value).getTime();
                    default: {
                        const ISODateString = value.split('.').reverse().join('-');
                        return new Date(ISODateString).getTime();
                    }
                }
            }
            default: return new Date(value).getTime();
        }
    };

    const handleChange: CalendarProps['onValueChange'] = (timestamp, dateString) => {
        switch (schema.type) {
            case 'integer':
            case 'number': onChange(timestamp);
                break;
            case 'string': onChange(dateString);
                break;
            default:
                const output = toType(timestamp, schema.type);
                onChange(output);
        }
    }

    const propsWhenDisabled = (disabled || readonly) && {
        earlierLimit: -10800000,
        laterLimit: -10800000,
        offDays: [-10800000],
        onValueChange: undefined,
    };
    return {
        "data-test-id": undefined,
        id: undefined,
        eventDays: undefined,
        isKeyboard: undefined,
        month: undefined,
        months: undefined,
        selectedFrom: undefined,
        selectedTo: undefined,
        showArrows: undefined,
        showToday: undefined,
        weekdays: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined,
        onMonthChange: undefined,
        ...uiOptions,
        outputFormat: mapCalendarOutputFormat(schema),
        offDays: mapCalendarOffDays(schema),
        earlierLimit: mapCalendarEarlierLimit(props),
        laterLimit: mapCalendarLaterLimit(props),
        className,
        theme: formContext?.theme,
        width: formContext?.width,
        value: toInput(value),
        onValueChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value),
        ...propsWhenDisabled,
    }
}

export function CalendarWidget(props: WidgetProps) {
    return (
        <div className='calendar-widget'>
            <Label {...mapLabelProps(props)} />
            <Calendar {...mapCalendarProps(props)} />
            <Helper {...mapHelperProps(props)} />
        </div>
    )
}
