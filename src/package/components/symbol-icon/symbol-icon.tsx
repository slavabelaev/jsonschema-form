import React from 'react';
import {createCn} from "bem-react-classname";
import {FormProps} from "arui-feather/form";
import './symbol-icon.scss';

const cn = createCn('symbol-icon');

export type SymbolIconProps = {
    className?: string;
    symbol?: number | string;
    theme?: FormProps['theme'];
    size?: FormProps['size'];
}

export function SymbolIcon({
    className,
    symbol,
    theme = 'alfa-on-white',
    size = 'm'
}: SymbolIconProps) {
    const classNames = [cn({ theme, size }), className].join(' ');

    return (
        <div className={classNames}>
            {symbol}
        </div>
    )
}
