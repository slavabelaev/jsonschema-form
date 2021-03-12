import React, {PropsWithChildren, ReactNode, useState} from "react";
import {createCn} from "bem-react-classname";
import {SlideDown, SlideDownProps} from "arui-feather/slide-down";
import ArrowRightIcon from "arui-feather/icon/ui/arrow-right";
import './collapse-nav.scss'

const cn = createCn('collapse-nav');

export type CollapseNavProps = PropsWithChildren<{
    className?: string;
    headerText: ReactNode;
    isExpanded?: SlideDownProps['isExpanded'];
    theme?: SlideDownProps['theme'];
}>

export function CollapseNav(props: CollapseNavProps) {
    const { theme = 'alfa-on-white' } = props;
    const className = [cn({ theme }), props.className].join(' ');
    const [isExpanded, setExpanded] = useState(props.isExpanded || false);
    const toggleExpand = () => setExpanded(!isExpanded);

    const expandIcon = (
        <ArrowRightIcon
            className={cn('expand-icon', { expanded: isExpanded })}
            theme={theme}
        />
    )

    const headerText = (
        <span className={cn('header-text')}>
            {props.headerText}
        </span>
    )

    const header = (
        <header
            className={cn('header')}
            onClick={toggleExpand}
        >
            {expandIcon}
            {headerText}
        </header>
    )

    const slideDown = (
        <SlideDown
            className={cn('slide-down')}
            isExpanded={isExpanded}
            theme={theme}
        >
            {props.children}
        </SlideDown>
    )

    return (
        <div className={className}>
            {header}
            {slideDown}
        </div>
    )
}
