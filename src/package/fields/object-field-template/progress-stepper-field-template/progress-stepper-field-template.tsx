import React from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {mapObjectFieldButtons, mapObjectFieldHeader} from "../object-field-template";
import {fromMarkdown} from "../../../utils/from-markdown";
import {TemplateConfig, TemplateConfigProvider} from "../template-config-provider";
import {ProgressStepper, ProgressStepProps} from "../../../components/progress-stepper";
import './progress-stepper-field-template.scss';

const cn = createCn('progress-stepper-field-template');

export const templateConfig: TemplateConfig = {
    displayHeader: true
}

export function ProgressStepperFieldTemplate(props: ObjectFieldTemplateProps) {
    const { properties, formContext } = props;
    const { theme, size } = formContext || {};
    const header = mapObjectFieldHeader(props);
    const buttons = mapObjectFieldButtons(props);

    const mapStepItem = (property: any): ProgressStepProps => {
        const { name, content, readonly, disabled } = property || {};
        const { props } = content || {};
        const { schema, errorSchema } = props || {};
        const { title, description } = schema || {};
        const label = typeof title === 'string' ? title : name;
        const errorSchemaKeys = Object.keys(errorSchema);
        const hasError = errorSchemaKeys.length > 0;

        return ({
            label,
            hint: fromMarkdown(description),
            children: content,
            canNext: !hasError && !disabled && !readonly,
            errorsNumber: errorSchemaKeys?.filter( key => key !== '__errors').length
        });
    }

    const items = properties?.map(mapStepItem);
    const stepper = items && (
        <ProgressStepper
            className={cn('field')}
            items={items}
            theme={theme}
            size={size}
        />
    );

    return header || stepper || buttons ? (
        <TemplateConfigProvider value={templateConfig}>
            <div className={cn()}>
                {header}
                {stepper}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
