import React, {ReactNode} from "react";
import {createCn} from 'bem-react-classname';
import {InputProps} from "arui-feather/input";
import {fromMarkdown} from "../../utils/from-markdown";
import './helper.scss';

export interface HelperProps {
    className?: string;
    text?: ReactNode;
    isError?: boolean;
    size?: InputProps['size'];
}

const cn = createCn('helper');

export function Helper({
    className = '',
    text,
    isError = false,
    size = 'm'
}: HelperProps) {
    if (!text) return null;
    const classNames = cn({ error: isError, size });

    return (
        <div className={[classNames, className].join(' ')}>
            {typeof text === 'string' ? fromMarkdown(text) : text}
        </div>
    )
}
