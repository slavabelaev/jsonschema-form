import React, {PropsWithChildren} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {createCn} from "bem-react-classname";
import { idea } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import './code.scss';

const cn = createCn('md-code');

export function Code(props: PropsWithChildren<any>) {
    const { language, value } = props;

    return (
        <div className={cn()}>
            <SyntaxHighlighter
                language={language}
                style={idea}
            >
                {value}
            </SyntaxHighlighter>
        </div>
    )
}
