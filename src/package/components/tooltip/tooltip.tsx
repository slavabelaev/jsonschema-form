import React from "react";
import {createCn} from "bem-react-classname";
import HelpIcon from "arui-feather/icon/ui/help";
import {Dropdown, DropdownProps} from "arui-feather/dropdown";
import './tooltip.scss';

const cn = createCn('tooltip');

export type TooltipProps = DropdownProps;

export function Tooltip({
    className,
    children,
    theme = 'alfa-on-white',
    size = 'm',
    ...props
}: TooltipProps) {
    const rootClassName = [cn(), className].join(' ');

    const icon = children || (
        <HelpIcon
            colored={true}
            size={size}
            theme={theme}
        />
    );

    return (
        <Dropdown
            className={rootClassName}
            mode='hover'
            theme={theme}
            size={size}
            {...props}
            popupProps={{
                size: 's',
                maxWidth: 240,
                directions: ['right-center', 'right-top', 'right-bottom'],
                ...props.popupProps
            }}
        >
            {icon}
        </Dropdown>
    );
}
