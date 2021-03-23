import React from 'react';
import {createCn} from "bem-react-classname";
import IconDownload from "arui-feather/icon/action/download";
import {Tooltip, TooltipProps} from "../tooltip";
import {download} from "./download";
import './download-icon-button.scss';

const cn = createCn('download-icon-button');

export type DownloadIconButtonProps = Omit<TooltipProps, 'onClick'> & {
    file: {
        name?: string;
        content: string;
        mimeType?: string;
    }
    onDownload?: () => void;
}

export function DownloadIconButton({
    className,
    file,
    theme = 'alfa-on-white',
    size = 's',
    onDownload,
    ...tooltipProps
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
            onClick={handleDownload}
        >
            <IconDownload
                theme={theme}
                size='m'
            />
        </Tooltip>
    )
}
