import React from "react";
import {createCn} from "bem-react-classname";
import {FieldTemplateProps} from "@rjsf/core";
import {ErrorList} from "../../components/error-list";
import {fromMarkdown} from "../../utils/from-markdown";
import {Header} from "../../components/header";
import {TemplateConfig, useThemeConfig} from "../../providers/template-config-provider";
import './field-template.scss';

const cn = createCn('field-template');

function mapFieldTemplateHeader(props: FieldTemplateProps, templateConfig: TemplateConfig) {
    const { displayLabel, displayHint } = templateConfig || {};
    const { classNames, rawErrors, label, rawDescription, formContext } = props;
    const { theme, size } = formContext || {};
    const isObjectField = classNames?.match(/field-(object)/);

    if (!isObjectField) return null;

    const errorList = (
        <ErrorList
            errors={rawErrors?.map(fromMarkdown)}
            theme={theme}
        />
    );

    const header = (
        <Header
            className={cn('header')}
            title={displayLabel ? label : undefined}
            description={displayHint ? fromMarkdown(rawDescription) : undefined}
            theme={theme}
            size={size}
        />
    );

    return (
        <React.Fragment>
            {header}
            {errorList}
        </React.Fragment>
    )
}

export function FieldTemplate(props: FieldTemplateProps) {
    const templateConfig = useThemeConfig();
    const { children } = props;
    const classNames = [cn(), props.classNames].join(' ');
    const header = mapFieldTemplateHeader(props, templateConfig)

    return (
        <div className={classNames}>
            {header}
            {children}
        </div>
    )
}
