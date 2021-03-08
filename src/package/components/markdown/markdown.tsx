import React from "react";
import {createCn} from "bem-react-classname";
import ReactMarkdown, {ReactMarkdownProps, renderers as defaultRenderers} from "react-markdown";
import gfm from 'remark-gfm'
import {renderers} from "./renderers";
import './markdown.scss';

const cn = createCn('markdown');

export function Markdown(props: ReactMarkdownProps) {
    const className = [cn(), props.className].join(' ');
    return (
        <ReactMarkdown
            plugins={[gfm]}
            unwrapDisallowed={true}
            linkTarget="_blank"
            {...props}
            className={className}
            renderers={{
                ...defaultRenderers as ReactMarkdownProps['renderers'],
                ...renderers,
                ...props.renderers,
            }}
        />
    );
}
