import React from 'react';
import {createCn} from "bem-react-classname";
import creditCardType from "credit-card-type";
import {CardInput, CardInputProps} from "arui-feather/card-input";
import CardMaestroIcon from "arui-feather/icon/brand/card-maestro";
import CardMastercardIcon from "arui-feather/icon/brand/card-mastercard";
import CardVisaIcon from "arui-feather/icon/brand/card-visa";
import UnionPayIcon from "arui-feather/icon/brand/unionpay";
import BelkartIcon from "arui-feather/icon/brand/card-belkart";
import CardVisaElectronIcon from "arui-feather/icon/brand/card-visa-electron";
import CardMirIcon from "arui-feather/icon/brand/card-mir";
import CardVoidIcon from "arui-feather/icon/entity/card-void";
import {InputOmitProps, mapInputProps} from "../input-widget";
import {WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import "./card-input-widget.scss";

const cn = createCn('card-input-widget');

export type CardInputUiOptions = Omit<CardInputProps, InputOmitProps | 'type'>;

creditCardType.addCard({
    niceType: "Visa Electron",
    type: "visa-electron",
    patterns: [4026, 417500, 4508, 4844, 4913, 4917],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
        name: "CVV",
        size: 3,
    },
});

creditCardType.addCard({
    niceType: "БЕЛКАРТ",
    type: "belkart",
    patterns: [9112],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
        name: "CVV",
        size: 3,
    },
});

function getCardIcon(cardType: string) {
    switch (cardType) {
        case 'maestro': return CardMaestroIcon;
        case 'mastercard': return CardMastercardIcon;
        case 'mir': return CardMirIcon;
        case 'visa': return CardVisaIcon;
        case 'visa-electron': return CardVisaElectronIcon;
        case 'belkart': return BelkartIcon;
        case 'unionpay': return UnionPayIcon;
        default: return CardVoidIcon;
    }
}

export function mapCardInputIcon(props: WidgetProps): CardInputProps['icon'] {
    const { value, formContext } = props;
    const { theme } = formContext || {};
    const matchedCards = creditCardType(String(value));
    const { type } = matchedCards?.[0] || {};
    const Icon = (matchedCards.length === 1)
        ? getCardIcon(type)
        : CardVoidIcon;

    return (
        <Icon
            size={'m'}
            theme={theme}
            colored={true}
        />
    );
}

export function mapCardInputProps(props: WidgetProps): CardInputProps {
    const { schema, onChange } = props;
    const { maxLength, ...inputProps } = mapInputProps(props);
    const className = [cn(), props.className].join(' ');

    const handleChange: CardInputProps['onChange'] = (newValue) => {
        switch (schema.type) {
            case "string": {
                const output = newValue?.split(' ').join('');
                onChange(output);
                break;
            }
            default: {
                const output = toType(newValue, schema.type);
                onChange(output);
            }
        }
    }

    return {
        clear: true,
        ...inputProps,
        className,
        type: 'card',
        leftAddons: mapCardInputIcon(props),
        onChange: handleChange,
    }
}

export function CardInputWidget(props: WidgetProps) {
    return <CardInput {...mapCardInputProps( props )} />
}
