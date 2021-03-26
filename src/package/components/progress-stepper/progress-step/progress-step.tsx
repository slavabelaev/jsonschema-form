import React, {PropsWithChildren, ReactNode} from 'react';
import {createCn} from "bem-react-classname";
import {FormProps} from "arui-feather/form";
import {Paragraph} from "arui-feather/paragraph";
import {Button} from "arui-feather/button";
import SystemBackIcon from "arui-feather/icon/action/back";
import CategoryGuardIcon from "arui-feather/icon/category/category-guard";
import {Progress} from "../../progress";
import './progress-step.scss';

const cn = createCn('progress-step');

export type ProgressStepProps = PropsWithChildren<{
    className?: string;
    label?: ReactNode;
    hint?: ReactNode;
    stepNumber?: number;
    totalSteps?: number;
    minPercent?: number;
    percent?: number;
    maxPercent?: number;
    errorsNumber?: number;
    canNext?: boolean;
    canBack?: boolean;
    onBack?: () => void;
    onNext?: () => void;
    theme?: FormProps['theme'];
    size?: FormProps['size'];
}>

const mapNextButtonSize = (size: FormProps['size']) => {
    switch (size) {
        case "s": return "m";
        case "m": return "l";
        case "l": return "xl";
        case "xl": return "xl";
        default: return "l";
    }
}

export function ProgressStep({
    className,
    hint,
    stepNumber,
    totalSteps,
    minPercent = 0,
    maxPercent = 100,
    percent = 0,
    children,
    theme = 'alfa-on-white',
    size = 'm',
    onNext,
    onBack,
    canBack,
    canNext
}: ProgressStepProps) {
    const classNames = [cn({ theme }), className].join(' ');

    const help = hint && (
        <Paragraph
            className={cn('hint', { theme })}
            theme={theme}
        >
            {hint}
        </Paragraph>
    );

    const title = (
        <Paragraph
            className={cn('title', { theme })}
            theme={theme}
        >
            Шаг {stepNumber} из {totalSteps}: Заполнено на {percent.toFixed(0)}%
        </Paragraph>
    )

    const progress = (
        <Progress
            className={cn('progress')}
            percent={percent}
            maxPercent={maxPercent}
            theme={theme}
            size={size}
        />
    )

    const header = (
        <header className={cn('header')}>
            {title}
            {progress}
            {help}
        </header>
    )

    const nextButton = (
        <Button
            className={cn('next-button')}
            view='extra'
            size={mapNextButtonSize(size)}
            theme={theme}
            onClick={onNext}
            disabled={!canNext}
        >
            Продолжить
        </Button>
    );

    const backButton = canBack && (
        <Button
            className={cn('back-button')}
            onClick={onBack}
            icon={(
                <SystemBackIcon
                    theme={theme}
                    size={size}
                />
            )}
            theme={theme}
            size={size}
        >
            Предыдущий шаг
        </Button>
    );

    const message = (
        <Paragraph
            className={cn('message')}
            theme={theme}
        >
            <CategoryGuardIcon
                className={cn('icon')}
                theme={theme}
                size={size}
            />
            Мы гарантируем безопасность и сохранность ваших данных
        </Paragraph>
    );

    const footer = (nextButton || message) && (
        <footer className={cn('footer', { theme })}>
            {nextButton}
            {message}
        </footer>
    )

    const secondaryFooter = backButton && (
        <footer className={cn('secondary-footer')}>
            {backButton}
        </footer>
    )

    const content = children && (
        <div className={cn('content')}>
            {children}
        </div>
    );

    return (
        <div className={classNames}>
            {header}
            {content}
            {footer}
            {secondaryFooter}
        </div>
    );
}
