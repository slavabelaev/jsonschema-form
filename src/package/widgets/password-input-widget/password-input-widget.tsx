import React, {useState} from "react";
import {createCn} from "bem-react-classname";
import {Input, InputProps} from "arui-feather/input";
import {IconButton} from "arui-feather/icon-button";
import PasswordShowIcon from "arui-feather/icon/action/password-show";
import PasswordHideIcon from "arui-feather/icon/action/password-hide";
import {WidgetProps} from "../../types/widget-props";
import {InputOmitProps, mapInputProps} from "../input-widget";
import "./password-input-widget.scss";

const cn = createCn('password-input-widget');

export type PasswordInputProps = Omit<InputProps, 'type' | 'icon' | 'clear'>;
export type PasswordUiOptions = Omit<PasswordInputProps, InputOmitProps> & {
    visible: boolean;
};

export function mapPasswordInputProps(props: WidgetProps): PasswordInputProps {
    const className = [cn(), props.className].join(' ');
    const { type, icon, clear, ...inputProps} = mapInputProps(props);
    return {
        ...inputProps,
        className
    };
}

export function PasswordInputWidget(props: WidgetProps) {
    const uiOptions = props.options as PasswordUiOptions;
    const [show, setShow] = useState(uiOptions?.visible);
    const toggleShow = () => setShow(!show);
    const inputProps = mapPasswordInputProps(props);
    const type = show ? 'text' : 'password';

    const iconButton = (
        <IconButton
            key="icon-button"
            onClick={toggleShow}
            theme={inputProps.theme}
            size={inputProps.size}
            width={inputProps.width}
        >
            {show ? <PasswordShowIcon /> : <PasswordHideIcon />}
        </IconButton>
    );

    return (
        <Input
            {...uiOptions}
            {...inputProps}
            icon={iconButton}
            type={type}
            clear={false}
        />
    );
}
