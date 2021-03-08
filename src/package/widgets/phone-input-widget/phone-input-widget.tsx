import React from 'react';
import {createCn} from "bem-react-classname";
import {Input, InputProps} from "arui-feather/input";
import {WidgetProps} from "../../types/widget-props";
import {InputOmitProps, mapInputProps} from "../input-widget";
import "./phone-input-widget.scss";

const cn = createCn('phone-input-widget');

export type PhoneInputUiOptions = Omit<InputProps, InputOmitProps | 'type'>;

export function mapPhoneInputProps(props: WidgetProps): InputProps {
    const className = [cn(), props.className].join(' ');
    const { mask, ...inputProps } = mapInputProps(props);

    const handleChange: InputProps['onChange'] = (newValue) => {
        const output = newValue?.replace(/\s/g, '');
        inputProps?.onChange?.(output);
    }

    return {
        ...inputProps,
        className,
        type: 'tel',
        mask: mask || '+7 111 111 11 11',
        onChange: handleChange
    }
}

export function PhoneInputWidget(props: WidgetProps) {
    return <Input {...mapPhoneInputProps(props)} />
}
