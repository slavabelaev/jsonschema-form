import React, {useContext} from "react";
import {createCn} from "bem-react-classname";
import {FieldTemplateProps} from "@rjsf/core";
import {ErrorList} from "../../components/error-list";
import {fromMarkdown} from "../../utils/from-markdown";
import {Header} from "../../components/header";
import {TemplateConfig, TemplateConfigContext} from "../../providers/template-config-provider";
import './field-template.scss';

const cn = createCn('field-template');

function mapFieldTemplateHeader(props: FieldTemplateProps, templateConfig: TemplateConfig) {
    const { displayLabel, displayHint } = templateConfig || {};
    const { classNames, rawErrors, label, rawDescription, formContext } = props;
    const { theme, size } = formContext || {};
    const isGroupField = classNames?.match(/field-(object|array)/);

    if (!isGroupField) return null;

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
            description={displayHint ? rawDescription : undefined}
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
    const templateConfig = useContext(TemplateConfigContext);
    const { classNames, children } = props;
    const rootClassName = [cn(), classNames].join(' ');
    const header = mapFieldTemplateHeader(props, templateConfig)

    return (
        <div className={rootClassName}>
            {header}
            {children}
        </div>
    )
}
