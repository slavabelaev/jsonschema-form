import React from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {mapObjectFieldButtons} from "../object-field-template";
import {fromMarkdown} from "../../../utils/from-markdown";
import {
    TemplateConfig,
    TemplateConfigProvider
} from "../../../providers/template-config-provider";
import {ProgressStepper, ProgressStepProps} from "../../../components/progress-stepper";
import './progress-stepper-field-template.scss';

const cn = createCn('progress-stepper-field-template');

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: false,
    displayHint: false
}

export function ProgressStepperFieldTemplate(props: ObjectFieldTemplateProps) {
    const { properties, formContext } = props;
    const { theme, size } = formContext || {};
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

    return stepper || buttons ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={cn()}>
                {stepper}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
