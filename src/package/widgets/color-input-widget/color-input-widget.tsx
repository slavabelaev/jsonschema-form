import React from "react";
import {createCn} from "bem-react-classname";
import {WidgetProps} from "@rjsf/core";
import {IconButton} from "arui-feather/icon-button";
import {Input, InputProps} from "arui-feather/input";
import {InputOmitProps, mapInputProps} from "../input-widget";
import "./color-input-widget.scss";

const cn = createCn('color-input-widget');

export type ColorInputProps = Omit<InputProps, 'type' | 'icon' | 'clear'>;
export type ColorInputUiOptions = Omit<ColorInputProps, InputOmitProps>;

export function mapColorInputWidget(props: WidgetProps): ColorInputProps {
    const {
        type: _type,
        icon: _icon,
        clear: _clear,
        ...inputProps
    } = mapInputProps(props);
    const className = [cn(), props.className].join(' ');

    return {
        ...inputProps,
        className,
        placeholder: inputProps.placeholder || '#ffffff'
    }
}

export function ColorInputWidget(props: WidgetProps) {
    const inputProps = mapColorInputWidget(props);
    const { value, onChange } = inputProps;
    const id = Math.random().toString(16);
    const pickerId = `${id}-color-picker`;

    const iconButton = (
        <IconButton key="icon-button">
            <label
                htmlFor={pickerId}
                style={{
                    display: 'inline-block',
                    cursor: 'pointer',
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: value || 'rgba(0,0,0,.05)',
                }}
            />
            <input
                id={pickerId}
                type="color"
                hidden
                value={value}
                onChange={event => onChange?.(event?.target?.value)}
            />
        </IconButton>
    );

    return (
        <Input
            {...mapColorInputWidget(props)}
            mask='\#ffffff'
            maskFormatCharacters={{
                'f': {
                    transform: char => char.toLowerCase(),
                    validate: char => /[0-9A-f]/.test(char)
                }
            }}
            icon={iconButton}
            clear={false}
        />
    );
}
