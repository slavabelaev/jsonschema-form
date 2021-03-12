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
    theme?: InputProps['theme'];
}

const cn = createCn('helper');

export function Helper({
    className = '',
    text,
    isError = false,
    size = 'm',
    theme = 'alfa-on-white'
}: HelperProps) {
    const classNames = cn({ error: isError, size, theme });

    if (!text) return null;

    return (
        <div className={[classNames, className].join(' ')}>
            {typeof text === 'string' ? fromMarkdown(text) : text}
        </div>
    )
}
