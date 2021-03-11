import React from 'react';
import {createCn} from "bem-react-classname";
import {Button, ButtonProps} from "arui-feather/button";
import {Heading, HeadingProps} from "arui-feather/heading";
import {Paragraph, ParagraphProps} from "arui-feather/paragraph";
import './success-notification.scss';

const cn = createCn('success-notification');

export type SuccessNotificationProps = {
    className?: string;
    buttonProps?: ButtonProps;
    headingProps?: HeadingProps;
    paragraphProps?: ParagraphProps;
}

export function SuccessNotification({
    className,
    buttonProps,
    headingProps,
    paragraphProps,
}: SuccessNotificationProps) {
    const rootClassName = [cn(), className].join(' ');

    const renderButton = () => {
        const { children = 'Вернуться' } = buttonProps || {};
        return (
            <Button
                className={cn('button')}
                theme={'alfa-on-white'}
                {...buttonProps}
            >
                {children}
            </Button>
        )
    };

    const renderHeading = () => {
        const { children = 'Данные успешно отправлены!' } = headingProps || {};
        return (
            <Heading
                className={cn('heading')}
                hasDefaultMargins={false}
                size={'m'}
                {...headingProps}
            >
                {children}
            </Heading>
        )
    };

    const renderParagraph = () => {
        const { children = 'Данные успешно отправлены!' } = paragraphProps || {};
        return (
            <Paragraph
                className={cn('paragraph')}
                {...paragraphProps}
            >
                {children}
            </Paragraph>
        )
    }

    return (
        <div className={rootClassName}>
            {renderHeading()}
            {renderParagraph()}
            {renderButton()}
        </div>
    )
}
