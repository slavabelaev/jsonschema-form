import {ButtonProps} from "arui-feather/button";
import copyToClipboard from "copy-to-clipboard";
import React, {useState} from "react";
import {createCn} from "bem-react-classname";
import {IconButton} from "arui-feather/icon-button";
import IconTick from "arui-feather/icon/ui/tick";
import IconCopy from "arui-feather/icon/action/copy";
import {Tooltip, TooltipProps} from "../tooltip";
import './copy-icon-button.scss';

const cn = createCn('copy-icon-button');

export type CopyIconButtonProps = {
    className?: string;
    theme?: ButtonProps['theme'];
    size?: ButtonProps['size'];
    buttonProps?: ButtonProps;
    tooltipProps?: TooltipProps;
    copyContent: string;
    onCopied?: () => void;
};

export function CopyIconButton({
    className,
    onCopied,
    buttonProps,
    tooltipProps,
    copyContent,
    theme,
    size = 's'
}: CopyIconButtonProps) {
    const rootClassName = [cn(), className].join(' ');
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        copyToClipboard(copyContent);
        setPressed(true);
        setTimeout(() => setPressed(false), 360);
        onCopied?.();
    }

    const icon = pressed
        ? <IconTick theme={theme} colored={true} />
        : <IconCopy theme={theme} />;

    return (
        <Tooltip
            hint='Копировать'
            popupProps={{
                directions: ['left-center']
            }}
            {...tooltipProps}
            className={rootClassName}
        >
            <IconButton
                onClick={handleClick}
                disabled={pressed}
                size={'s'}
                {...buttonProps}
                className={cn('icon-button')}
            >
                {icon}
            </IconButton>
        </Tooltip>
    );
}
