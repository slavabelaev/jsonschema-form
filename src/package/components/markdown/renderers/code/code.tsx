import React, {PropsWithChildren} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {createCn} from "bem-react-classname";
import { idea } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {CopyIconButton} from "../../../copy-icon-button";
import './code.scss';

const cn = createCn('md-code');

export function Code(props: PropsWithChildren<any>) {
    const { language, value } = props;

    const copyButton = (
        <CopyIconButton
            className={cn('copy-icon-button')}
            copyContent={value}
        />
    );

    return (
        <div className={cn()}>
            {copyButton}
            <SyntaxHighlighter
                language={language}
                style={idea}
            >
                {value}
            </SyntaxHighlighter>
        </div>
    )
}
