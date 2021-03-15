import {OBJECT_FIELD_TEMPLATE} from "../fields/object-field-template";
import {UiSchema} from "../form";

export type TemplateOptions = {
    showHeader: boolean;
}

export function getTemplateOptions(uiSchema: UiSchema):TemplateOptions {
    const template = uiSchema?.['ui:template'] as OBJECT_FIELD_TEMPLATE;
    const showHeader = ![
        OBJECT_FIELD_TEMPLATE.STEPPER,
        OBJECT_FIELD_TEMPLATE.COLLAPSE_LIST,
        OBJECT_FIELD_TEMPLATE.TABS,
    ].includes(template);

    return {
        showHeader,
    }
}
