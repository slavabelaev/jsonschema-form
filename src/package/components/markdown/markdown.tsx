import React from "react";
import {createCn} from "bem-react-classname";
import ReactMarkdown, {ReactMarkdownProps, renderers as defaultRenderers} from "react-markdown";
import gfm from 'remark-gfm'
import {renderers} from "./renderers";
import { CodeThemeProvider } from "./renderers/code/code-theme-toggle/code-theme-provider";
import './markdown.scss';

const cn = createCn('markdown');

export type MarkdownProps = ReactMarkdownProps;

export function Markdown(props: MarkdownProps) {
    const { className, plugins = [], ...otherProps } = props;
    const classNames = [cn(), className].join(' ');

    plugins.push(gfm);

    return (
        <CodeThemeProvider>
            <ReactMarkdown
                unwrapDisallowed={true}
                linkTarget="_blank"
                {...otherProps}
                className={classNames}
                plugins={plugins}
                renderers={{
                    ...defaultRenderers as ReactMarkdownProps['renderers'],
                    ...renderers,
                    ...props.renderers,
                }}
            />
        </CodeThemeProvider>
    );
}
