import React, {useState} from "react";
import {createCn} from "bem-react-classname";
import copy from 'copy-to-clipboard';
import {IconButton} from "arui-feather/icon-button";
import {ButtonProps} from "arui-feather/button";
import {Spin} from 'arui-feather/spin';
import IconCopy from 'arui-feather/icon/action/copy';
import IconDownload from 'arui-feather/icon/action/download';
import IconTick from 'arui-feather/icon/ui/tick';
import { ControlledEditor, ControlledEditorProps} from "@monaco-editor/react";
import {WidgetProps} from "../../types/widget-props";
import {Helper} from "../../components/helper";
import {download} from "../../utils/download";
import {toType} from "../../utils/to-type";
import {mapHelperProps} from "../../utils/map-helper-props";
import './editor-widget.scss';
import {Tooltip} from "../../components/tooltip";

const cn = createCn('editor-widget');

export type EditorUiOptions = ControlledEditorProps['options'];

export function mapEditorLanguage({ schema }: WidgetProps): ControlledEditorProps['language'] {
    switch (schema.contentMediaType) {
        case "text/plain": return "plaintext";
        case "application/json": return "json";
        case "text/x-apex-source":
        case "text/x-apex": return "apex";
        case "text/x-coffeescript":
        case "text/coffeescript": return "coffeescript";
        case "text/css": return "css";
        case "text/x-dart-source":
        case "text/x-dart": return "dart";
        case "application/graphql": return "graphql";
        case "text/x-handlebars-template": return "handlebars";
        case "text/html":
        case "text/x-jshtm":
        case "text/template":
        case "text/ng-template": return "html";
        case "text/x-java-source":
        case "text/x-java": return "java";
        case "text/javascript": return "javascript";
        case "text/x-kotlin-source":
        case "text/x-kotlin": return "kotlin";
        case "text/x-less":
        case "text/less": return "less";
        case "text/x-mips":
        case "text/mips":
        case "text/plaintext": return "mips";
        case "text/x-pascal-source":
        case "text/x-pascal": return "pascal";
        case "application/x-php": return "php";
        case "text/x-cshtml": return "razor";
        case "text/x-scala-source":
        case "text/x-scala":
        case "text/x-sbt":
        case "text/x-dotty": return "scala";
        case "text/x-scss":
        case "text/scss": return "scss";
        case "text/swift": return "swift";
        case "text/x-twig": return "twig";
        case "text/typescript": return "typescript";
        case "text/xml":
        case "application/xml":
        case "application/xaml+xml":
        case "application/xml-dtd": return "xml";
        case "application/x-yaml": return "yaml";
        default: return schema.contentMediaType?.match(/text\/x-(.*)/)?.[1];
    }
}

export function mapEditorProps(props: WidgetProps): ControlledEditorProps {
    const {
        value,
        disabled,
        readonly,
        schema,
        options,
        onChange,
        formContext: {
            theme = 'alfa-on-white'
        }
    } = props;
    const className = [cn(), props.className].join(' ');

    const toInput = (value: any): ControlledEditorProps['value'] => {
        switch (typeof value) {
            case "undefined": return;
            case "string": return value;
            default: return toType(value, 'string');
        }
    }

    const handleChange: ControlledEditorProps['onChange'] = (ev, newValue) => {
        switch (schema?.type) {
            case "string":
                onChange(newValue);
                break;
            default: {
                const output = toType(newValue, schema.type);
                onChange(output);
            }
        }
    }

    const loading = (
        <Spin
            visible={true}
            theme={theme}
        />
    );

    return {
        className,
        height: typeof options?.height === 'string'
            ? options.height
            : '200px',
        language: mapEditorLanguage(props),
        line: undefined,
        loading,
        theme: ({
            'alfa-on-color': 'dark',
            'alfa-on-white': 'light'
        })[theme],
        value: toInput(value),
        width: undefined,
        wrapperClassName: undefined,
        overrideServices: undefined,
        editorDidMount: undefined,
        options: {
            minimap: {
                enabled: false
            },
            ...options,
            readOnly: disabled || readonly,
        },
        onChange: handleChange
    }
}

function NotifiedIconButton({ onClick, children, ...props }: ButtonProps) {
    const [pressed, setPressed] = useState(false);
    const handleClick = () => {
        setPressed(true);
        setTimeout(() => setPressed(false), 360);
        onClick?.();
    }

    return (
        <Tooltip
            hint='Копировать'
            popupProps={{
                directions: ['left-center']
            }}
        >
            <IconButton
                className={cn('icon-button')}
                onClick={handleClick}
                disabled={pressed}
                {...props}
            >
                {pressed ? <IconTick colored={true} /> : children}
            </IconButton>
        </Tooltip>
    );
}

export function EditorWidget(props: WidgetProps) {
    const { label, schema, value, formContext: { view } } = props;
    const handleDownload = () => download(label, value, schema.contentMediaType);
    const handleCopy = () => copy(value);

    const downloadButton = (
        <Tooltip
            hint='Скачать'
            popupProps={{
                directions: ['left-center']
            }}
        >
            <IconButton
                className={cn('icon-button')}
                onClick={handleDownload}
                size='s'
            >
                <IconDownload size='m' />
            </IconButton>
        </Tooltip>
    );

    const copyButton = (
        <NotifiedIconButton
            className={cn('icon-button')}
            onClick={handleCopy}
            size='s'
        >
            <IconCopy size='m' />
        </NotifiedIconButton>
    );

    return (
        <div className={cn({ view: view as string })}>
            <header className={cn('header')}>
                <label className={cn('label')}>
                    {label}
                </label>
                {downloadButton}
                {copyButton}
            </header>
            <ControlledEditor {...mapEditorProps( props )} />
            <Helper {...mapHelperProps(props)} />
        </div>
    );
}
