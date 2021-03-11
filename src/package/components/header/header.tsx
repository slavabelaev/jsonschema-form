import React, {ReactNode} from "react";
import {HeadingProps} from "arui-feather/heading";
import {createCn} from "bem-react-classname";
import {Paragraph} from "arui-feather/paragraph";
import './header.scss';

const cn = createCn('header');

export type HeaderProps = {
    className?: string;
    theme?: HeadingProps['theme'];
    size?: HeadingProps['size'];
    title?: ReactNode;
    description?: ReactNode;
}

export function Header(props: HeaderProps) {
    const { title, description, theme = 'alfa-on-white' } = props;
    const className = [cn({ theme }), props.className].join(' ');

    const heading = title && (
        <legend className={cn('heading')}>
            {title}
        </legend>
    );

    const paragraph = description && (
        <Paragraph
            className={cn('paragraph')}
            theme={theme}
        >
            {description}
        </Paragraph>
    );

    return (heading || paragraph) ? (
        <header className={className}>
            {heading}
            {paragraph}
        </header>
    ) : null;
}
