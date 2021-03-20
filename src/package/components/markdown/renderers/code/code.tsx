import React, {PropsWithChildren} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export function Code(props: PropsWithChildren<any>) {
    const { language, value } = props;

    return (
        <SyntaxHighlighter
            customStyle={{
                padding: 16,
                borderRadius: 4
            }}
            language={language}
            style={a11yDark}
        >
            {value}
        </SyntaxHighlighter>
    )
}
