import React, {PropsWithChildren, ReactNode, useState} from "react";
import {createCn} from "bem-react-classname";
import {SlideDown, SlideDownProps} from "arui-feather/slide-down";
import DownIcon from "arui-feather/icon/ui/down";
import ErrorIcon from "arui-feather/icon/ui/error";
import {FormProps} from "arui-feather/form";
import {Heading} from "arui-feather/heading";
import {Tooltip} from "../tooltip";
import './collapse-item.scss';

const cn = createCn('collapse-item');

export type CollapseItemProps = PropsWithChildren<{
    className?: string;
    label: ReactNode;
    hint?: ReactNode;
    hasError?: boolean;
    isExpanded?: SlideDownProps['isExpanded'];
    theme?: FormProps['theme'];
    size?: FormProps['size'];
    disablePadding?: boolean;
}>;

const mapErrorIconSize = (size: CollapseItemProps['size']) => {
    switch (size) {
        case 's': return 's';
        case 'm':
        case 'l': return 'm';
        case 'xl':
        default: return 'l';
    }
}

export function CollapseItem(props: CollapseItemProps) {
    const { label, hint, hasError, size = 'm', theme = 'alfa-on-white', children, disablePadding } = props;
    const [expanded, setExpanded] = useState<boolean>(props?.isExpanded || false);
    const [needRender, setNeedRender] = useState<boolean>(props?.isExpanded || false);
    const iconSize = ['s', 'xs'].includes(size) ? size : 's';

    const toggle = () => {
        setNeedRender(true);
        setExpanded(!expanded);
    }

    const expandIcon = (
        <DownIcon
            className={cn('expand-icon', { expanded })}
            size={iconSize}
            theme={theme}
        />
    );

    const heading = label && (
        <Heading
            className={cn('heading')}
            size={size}
            theme={theme}
            hasDefaultMargins={false}
        >
            {label}
        </Heading>
    );

    const errorIcon = hasError && (
        <ErrorIcon
            className={cn('error-icon')}
            colored={true}
            size={mapErrorIconSize(size)}
            theme={theme}
        />
    );

    const hintIcon = hint && (
        <Tooltip
            className={cn('hint-icon')}
            hint={hint}
            size={size}
            theme={theme}
        />
    );

    const header = label && (
        <header
            className={cn('header', { size, theme })}
            onClick={toggle}
        >
            {heading}
            {hintIcon}
            {errorIcon}
            {expandIcon}
        </header>
    );

    const slideDown = (
        <SlideDown
            isExpanded={expanded}
            theme={theme}
        >
            <div className={cn('content', { 'with-padding': !disablePadding })}>
                {needRender ? children : null}
            </div>
        </SlideDown>
    )

    return (
        <section className={cn({ expanded, theme })}>
            {header}
            {slideDown}
        </section>
    )
}
