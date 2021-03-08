import React from 'react';
import {createCn} from "bem-react-classname";
import {MoneyInput} from "arui-feather/money-input";
import {WidgetProps} from "../../types/widget-props";
import {InputOmitProps, mapInputProps} from "../input-widget";
import "./money-input-widget.scss";

const cn = createCn('money-input-widget');

export type MoneyInputProps = typeof MoneyInput.prototype.props;
export type MoneyInputUiOptions = Omit<MoneyInputProps, InputOmitProps | 'type'>;

export function mapMoneyInputProps(props: WidgetProps): MoneyInputProps {
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as MoneyInputUiOptions;
    const { onChange, ...inputProps } = mapInputProps(props);

    const handleChange = (value?: string) => {
        const output = value?.split(' ').join('');
        onChange?.(output);
    }

    return {
        'data-test-id': undefined,
        integerLength: undefined,
        fractionLength: undefined,
        bold: undefined,
        currencyCode: undefined,
        showCurrency: true,
        ...uiOptions,
        ...inputProps,
        className,
        type: 'money',
        onChange: handleChange as MoneyInputProps['onChange']
    }
}

export function MoneyInputWidget(props: WidgetProps) {
    return <MoneyInput {...mapMoneyInputProps(props)} />
}
