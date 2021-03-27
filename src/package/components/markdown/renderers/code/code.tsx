import React, {PropsWithChildren} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {createCn} from "bem-react-classname";
import { a11yLight, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {CopyIconButton} from "../../../copy-icon-button";
import {CodeThemeToggle} from "./code-theme-toggle"
import {useCodeTheme} from "./code-theme-toggle/code-theme-provider";
import './code.scss';

const cn = createCn('md-code');

export function Code(props: PropsWithChildren<any>) {
    const { theme = 'alfa-on-white' } = useCodeTheme();
    const style = theme === 'alfa-on-color'
        ? a11yDark
        : a11yLight;
    const { language, value } = props;

    if (!value) return null;

    const copyButton = (
        <CopyIconButton
            className={cn('button')}
            copyContent={value}
            theme={theme}
        />
    );

    const brightnessButton = (
        <CodeThemeToggle />
    )

    const actions = (
        <div className={cn('actions')}>
            {brightnessButton}
            {copyButton}
        </div>
    )

    const syntaxHighlighter = (
        <SyntaxHighlighter
            language={language}
            style={style}
            children={value}
        />
    )

    return (
        <div className={cn({ theme })}>
            {actions}
            {syntaxHighlighter}
        </div>
    )
}
