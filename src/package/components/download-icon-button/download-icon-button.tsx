import React from 'react';
import {createCn} from "bem-react-classname";
import {IconButton} from "arui-feather/icon-button";
import IconDownload from "arui-feather/icon/action/download";
import {ButtonProps} from "arui-feather/button";
import {Tooltip, TooltipProps} from "../tooltip";
import {download} from "./download";
import './download-icon-button.scss';

const cn = createCn('download-icon-button');

export type DownloadIconButtonProps = {
    className?: string;
    file: {
        name?: string;
        content: string;
        mimeType?: string;
    }
    theme?: ButtonProps['theme'];
    size?: ButtonProps['size'];
    tooltipProps?: TooltipProps;
    buttonProps?: ButtonProps;
    onDownload?: () => void;
}

export function DownloadIconButton({
    className,
    file,
    theme,
    size = 's',
    tooltipProps,
    buttonProps,
    onDownload
}: DownloadIconButtonProps) {
    const rootClassName = [cn(), className].join(' ');

    const handleDownload = () => {
        download(file.name, file.content, file.mimeType);
        onDownload?.();
    };

    return (
        <Tooltip
            popupContent='Скачать'
            popupProps={{
                directions: ['left-center']
            }}
            theme={theme}
            {...tooltipProps}
            className={rootClassName}
        >
            <IconButton
                size={size}
                theme={theme}
                {...buttonProps}
                className={cn('icon-button')}
                onClick={handleDownload}
            >
                <IconDownload theme={theme} size='m' />
            </IconButton>
        </Tooltip>
    )
}
