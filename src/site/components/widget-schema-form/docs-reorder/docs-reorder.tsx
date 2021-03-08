import React from "react";
import {createCn} from 'bem-react-classname';
import ArrowDownIcon from "arui-feather/icon/ui/arrow-down";
import ArrowUpIcon from "arui-feather/icon/ui/arrow-up";
import './docs-reorder.scss';

export type ReorderProps = {
    className?: HTMLDivElement['className'];
    onClickDown?: (event: any) => void;
    onClickUp?: (event: any) => void;
    disabledUp?: boolean;
    disabledDown?: boolean;
}

const cn = createCn('docs-reorder');

export function DocsReorder({
    className,
    disabledDown = false,
    disabledUp = false,
    onClickUp,
    onClickDown
}: ReorderProps) {
    const classNames = [cn(), className].join(' ');

    return (
        <div className={classNames}>
            <button
                type="button"
                className={cn('button')}
                disabled={disabledUp}
                onClick={onClickUp}
            >
                <ArrowUpIcon className={cn('icon')} size="s" />
            </button>
            <button
                type="button"
                className={cn('button')}
                disabled={disabledDown}
                onClick={onClickDown}
            >
                <ArrowDownIcon className={cn('icon')} size="s" />
            </button>
        </div>
    )
}
