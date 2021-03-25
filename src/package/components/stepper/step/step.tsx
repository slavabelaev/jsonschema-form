import React, {PropsWithChildren, ReactNode} from "react";
import {createCn} from 'bem-react-classname';
import {Button, ButtonProps} from "arui-feather/button";
import {SlideDown} from "arui-feather/slide-down";
import IconError from "arui-feather/icon/ui/error";
import IconTick from "arui-feather/icon/ui/tick";
import {FormProps} from "arui-feather/form";
import './step.scss';

const cn = createCn('step');

export type StepProps = PropsWithChildren<{
    className?: string;
    icon: ReactNode;
    label: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    isActive?: boolean;
    isCompleted?: boolean;
    backButtonProps?: ButtonProps;
    nextButtonProps?: ButtonProps;
    theme?: FormProps['theme'];
    size?: FormProps['size'];
}>;

export function Step({
    className,
    isActive,
    isCompleted,
    error,
    icon,
    children,
    backButtonProps,
    nextButtonProps,
    theme = 'alfa-on-white',
    size = 'm',
    ...props
}: StepProps) {
    const classNames = [cn({
        theme,
        'active': Boolean(isActive),
        'completed': Boolean(isCompleted),
        'error': Boolean(error),
    }), className].join(' ');

    const footer = isActive ? (
        <div className={cn( 'footer' )}>
            <Button
                view='default'
                theme={theme}
                size={size}
                children='Назад'
                {...backButtonProps}
            />
            <Button
                view='extra'
                theme={theme}
                size={size}
                children='Продолжить'
                {...nextButtonProps}
            />
        </div>
    ) : null;

    const renderIcon = () => {
        if (error) return (
            <IconError
                colored={true}
                theme={theme}
            />
        );

        if (isCompleted) return (
            <IconTick
                colored={true}
                theme={theme}
            />
        );

        return icon;
    }

    const label = props.label ? (
        <div className={cn( 'label' )}>
            {props.label}
        </div>
    ) : null;

    const hint = (props.hint || error) ? (
        <div className={cn( 'hint' )}>
            {error || props.hint}
        </div>
    ) : null;

    const header = (
        <header className={cn( 'header' )}>
            {renderIcon()}
            <div className={cn( 'caption' )}>
                {label}
                {hint}
            </div>
        </header>
    );

    const content = (
        <div className={cn( 'content' )}>
            <SlideDown isExpanded={isActive}>
                {children}
                {footer}
            </SlideDown>
        </div>
    );

    return (
        <div className={classNames}>
            {header}
            {content}
        </div>
    );
}

export default Step;
