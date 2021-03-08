import {TEMPLATE} from "../fields/object-field-template";
import {UiSchema} from "../form";

export type TemplateOptions = {
    showHeader: boolean;
}

export function getTemplateOptions(uiSchema: UiSchema):TemplateOptions {
    const template = uiSchema?.['ui:template'] as TEMPLATE;
    const showHeader = ![
        TEMPLATE.STEPPER,
        TEMPLATE.COLLAPSE_LIST,
        TEMPLATE.TABS,
    ].includes(template);

    return {
        showHeader,
    }
}
