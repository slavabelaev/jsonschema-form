import React from 'react';
import {createCn} from "bem-react-classname";
import {PhoneInput, PhoneInputProps} from "arui-feather/phone-input";
import {WidgetProps} from "../../types/widget-props";
import {InputOmitProps} from "../input-widget";
import {mapPhoneInputProps} from "../phone-input-widget";
import "./intl-phone-input-widget.scss";

const cn = createCn('intl-phone-input-widget');

export type IntlPhoneInputUiOptions = Omit<PhoneInputProps, InputOmitProps | 'type'>;

export function mapIntlPhoneInputProps(props: WidgetProps): PhoneInputProps {
    const className = [cn(), props.className].join(' ');
    const { mask, ...phoneInputProps } = mapPhoneInputProps(props);
    return {
        ...phoneInputProps,
        className
    };
}

export function IntlPhoneInputWidget(props: WidgetProps) {
    return <PhoneInput {...mapIntlPhoneInputProps(props)} />
}
