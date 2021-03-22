import React, {ReactNode} from 'react';
import DraftIcon from "arui-feather/icon/entity/draft";
import {Tooltip, TooltipProps} from "../../../package/components/tooltip";

export type EditIconLinkProps = TooltipProps & {
    className?: string;
    url: string;
    hint?: ReactNode;
}

export function EditIconLink({ url, theme, size, hint = 'Редактировать', ...otherProps }: EditIconLinkProps) {
    return (
        <Tooltip
            popupContent={hint}
            popupProps={{
                directions: ["left-center"]
            }}
            theme={theme}
            size={size}
            {...otherProps}
        >
            <a href={url} target='_blank'>
                <DraftIcon
                    theme={theme}
                    size={'s'}
                />
            </a>
        </Tooltip>
    )
}
