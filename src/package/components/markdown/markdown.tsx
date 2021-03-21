import React from "react";
import {createCn} from "bem-react-classname";
import ReactMarkdown, {ReactMarkdownProps, renderers as defaultRenderers} from "react-markdown";
import gfm from 'remark-gfm'
import {renderers} from "./renderers";
import './markdown.scss';

const cn = createCn('markdown');

export type MarkdownProps = ReactMarkdownProps;

export function Markdown(props: MarkdownProps) {
    const { className, plugins = [], ...otherProps } = props;
    const rootClassName = [cn(), className].join(' ');

    plugins.push(gfm);

    return (
        <ReactMarkdown
            unwrapDisallowed={true}
            linkTarget="_blank"
            {...otherProps}
            className={rootClassName}
            plugins={plugins}
            renderers={{
                ...defaultRenderers as ReactMarkdownProps['renderers'],
                ...renderers,
                ...props.renderers,
            }}
        />
    );
}
