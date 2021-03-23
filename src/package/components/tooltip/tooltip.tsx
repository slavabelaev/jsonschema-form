import React from "react";
import {createCn} from "bem-react-classname";
import HelpIcon from "arui-feather/icon/ui/help";
import {Dropdown, DropdownProps} from "arui-feather/dropdown";
import './tooltip.scss';

const cn = createCn('tooltip');

export type TooltipProps = DropdownProps & {
    onClick?: (event?: any) => void;
};

export function Tooltip({
    className,
    children,
    theme = 'alfa-on-white',
    size = 'm',
    onClick,
    disabled,
    ...props
}: TooltipProps) {
    const rootClassName = [cn(), className].join(' ');
    const handleClick = disabled ? undefined : onClick;

    const helpIcon = (
        <HelpIcon
            colored={true}
            size={size}
            theme={theme}
        />
    );

    const icon = children || helpIcon;

    return (
        <Dropdown
            className={rootClassName}
            mode='hover'
            theme={theme}
            size={size}
            disabled={disabled}
            {...props}
            switcherType={'button'}
            popupProps={{
                size: 's',
                maxWidth: 240,
                directions: ['right-center', 'right-top', 'right-bottom'],
                ...props.popupProps
            }}
        >
            <span
                role='button'
                onClick={handleClick}
            >
                {icon}
            </span>
        </Dropdown>
    );
}
