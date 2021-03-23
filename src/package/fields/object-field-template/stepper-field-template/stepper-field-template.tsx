import React from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {Stepper, StepperItemProps} from "../../../components/stepper";
import {mapObjectFieldButtons} from "../object-field-template";
import {fromMarkdown} from "../../../utils/from-markdown";
import {
    TemplateConfig,
    TemplateConfigProvider
} from "../../../providers/template-config-provider";
import './stepper-field-template.scss';

const cn = createCn('stepper-field-template');

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: false,
    displayHint: false
}

export function StepperFieldTemplate(props: ObjectFieldTemplateProps) {
    const { properties, formContext } = props;
    const { theme, size } = formContext || {};
    const hasProperties = properties.length > 0;
    const buttons = mapObjectFieldButtons(props);

    const mapStepItem = (property: any): StepperItemProps => {
        const { name, content, readonly, disabled } = property || {};
        const { props } = content || {};
        const { schema, errorSchema } = props || {};
        const { title, description } = schema || {};
        const label = typeof title === 'string' ? title : name;
        const hasError = Object.keys(errorSchema).length > 0;
        const error = fromMarkdown(errorSchema?.__errors?.[0]);

        return ({
            label,
            hint: fromMarkdown(description),
            children: content,
            nextButtonProps: {
              disabled: hasError || disabled || readonly
            },
            error
        });
    }

    const items = properties?.map(mapStepItem);
    const stepper = items && (
        <Stepper
            className={cn('field')}
            items={items}
            theme={theme}
            size={size}
        />
    );

    return hasProperties || buttons ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={cn()}>
                {stepper}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
