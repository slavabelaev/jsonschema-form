import React, {ReactNode} from 'react';
import DraftIcon from "arui-feather/icon/entity/draft";
import {Tooltip} from "../../../package/components/tooltip";

export type EditIconLinkProps = {
    className?: string;
    url: string;
    hint?: ReactNode;
}

export function EditIconLink({ className, url, hint = 'Редактировать' }: EditIconLinkProps) {
    return (
        <Tooltip
            className={className}
            hint={hint}
            popupProps={{
                directions: ["left-center"]
            }}
        >
            <a href={url} target='_blank'>
                <DraftIcon size='s' />
            </a>
        </Tooltip>
    )
}
