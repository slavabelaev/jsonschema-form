import React, {CSSProperties} from 'react';
import { createCn } from 'bem-react-classname';
import Button, {ButtonProps} from 'arui-feather/button';
import IconArrowLeft from 'arui-feather/icon/ui/arrow-left';
import Spin from 'arui-feather/spin';
import './navigation.scss';

export type NavigationProps = {
    className?: HTMLDivElement['className'];
    style?: CSSProperties;
    onBack?: VoidFunction;
    onNext?: VoidFunction;
    textBack?: string;
    textNext?: string;
    disabledBack?: boolean;
    disabledNext?: boolean;
    showNext?: boolean;
    showBack?: boolean;
    loading?: boolean;
    buttonProps?: ButtonProps;
};

const cn = createCn('navigation');

export function Navigation({
    className,
    style,
    onBack,
    onNext,
    textNext = 'Продолжить',
    textBack = 'Вернуться',
    disabledBack = false,
    disabledNext = false,
    showNext = true,
    showBack = true,
    loading = false,
    buttonProps
}: NavigationProps) {
    const classNames = [cn(), className].join(' ');

    const backButtonIcon = (
        <IconArrowLeft
            size="xl"
        />
    );

    const backButton = showBack && (
        <Button
            className={ cn('back-button') }
            text={ textBack }
            disabled={ disabledBack }
            leftAddons={ backButtonIcon }
            onClick={ onBack }
            {...buttonProps}
        />
    );

    const nextButtonIcon = loading && (
        <Spin size={buttonProps?.size} visible={ true } />
    );

    const nextButton = showNext && (
        <Button
            text={ textNext }
            disabled={ disabledNext }
            onClick={ onNext }
            icon={ nextButtonIcon }
            view="extra"
            {...buttonProps}
        />
    );

    return (
        <div
            className={classNames}
            style={style}
        >
            { backButton }
            { nextButton }
        </div>
    );
}
