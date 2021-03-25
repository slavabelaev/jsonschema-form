import copyToClipboard from "copy-to-clipboard";
import React, {useState} from "react";
import {createCn} from "bem-react-classname";
import IconTick from "arui-feather/icon/ui/tick";
import IconCopy from "arui-feather/icon/action/copy";
import {Tooltip, TooltipProps} from "../tooltip";
import './copy-icon-button.scss';

const cn = createCn('copy-icon-button');

export type CopyIconButtonProps = Omit<TooltipProps, 'onClick'> & {
    copyContent: string;
    onCopied?: () => void;
};

export function CopyIconButton({
    className,
    onCopied,
    copyContent,
    theme,
    size = 's',
    ...tooltipProps
}: CopyIconButtonProps) {
    const classNames = [cn(), className].join(' ');
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
            popupContent='Копировать'
            popupProps={{
                directions: ['left-center']
            }}
            theme={theme}
            size={size}
            {...tooltipProps}
            className={classNames}
            disabled={pressed}
            onClick={handleClick}
        >
            {icon}
        </Tooltip>
    );
}
