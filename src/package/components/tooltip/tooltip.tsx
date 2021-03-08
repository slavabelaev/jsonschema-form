import React, {ReactNode, useEffect, useState} from "react";
import {createCn} from "bem-react-classname";
import HelpIcon from "arui-feather/icon/ui/help";
import {Popup, PopupProps} from "arui-feather/popup";
import {IconButton} from "arui-feather/icon-button";
import {ButtonProps} from "arui-feather/button";
import './tooltip.scss';

const cn = createCn('tooltip');

export type TooltipProps = ButtonProps & {
    hint: ReactNode;
    popupProps?: PopupProps;
}

export function Tooltip({
    hint,
    children,
    theme = 'alfa-on-white',
    size = 'm',
    popupProps,
    ...props
}: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    let iconButtonRef: any;
    let popupRef: any;
    const popupClassName = [
        cn('popup'),
        popupProps?.className,
    ].filter(Boolean).join(' ');

    useEffect(() => {
        popupRef.setTarget(iconButtonRef.control);
    }, []);

    const popup = (
        <Popup
            maxWidth={240}
            directions={['right-center', 'right-top', 'right-bottom']}
            {...popupProps}
            className={popupClassName}
            ref={(popup) => popupRef = popup}
            theme={theme}
            size={'s'}
            onClickOutside={hide}
            visible={visible}
        >
            {hint}
        </Popup>
    );

    const icon = children || (
        <HelpIcon
            colored={true}
            size={size}
            theme={theme}
        />
    );

    const iconButton = (
        <IconButton
            className={cn()}
            ref={(iconButton) => iconButtonRef = iconButton}
            onMouseEnter={show}
            onMouseLeave={hide}
            size={'s'}
            theme={theme}
            {...props}
        >
            {icon}
        </IconButton>
    );

    return (
        <React.Fragment>
            {iconButton}
            {popup}
        </React.Fragment>
    )
}
