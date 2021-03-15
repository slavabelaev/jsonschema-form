import {ObjectFieldTemplateProps} from "@rjsf/core";
import {CollapseListFieldTemplate} from "./collapse-list-field-template";
import {StepperFieldTemplate} from "./stepper-field-template";
import {TabsFieldTemplate} from "./tabs-field-template";
import {ProgressStepperFieldTemplate} from "./progress-stepper-field-template";
import {ObjectFieldTemplate as DefaultObjectFieldTemplate} from "./object-field-template";

export enum OBJECT_FIELD_TEMPLATE {
    DEFAULT = 'default',
    COLLAPSE_LIST = 'collapse-list',
    TABS = 'tabs',
    STEPPER = 'stepper',
    PROGRESS_STEPPER = 'progress-stepper'
}

export function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
    const { uiSchema } = props;
    const template = uiSchema['ui:template'];

    switch (template) {
        case OBJECT_FIELD_TEMPLATE.STEPPER: return StepperFieldTemplate(props);
        case OBJECT_FIELD_TEMPLATE.TABS: return TabsFieldTemplate(props);
        case OBJECT_FIELD_TEMPLATE.COLLAPSE_LIST: return CollapseListFieldTemplate(props);
        case OBJECT_FIELD_TEMPLATE.PROGRESS_STEPPER: return ProgressStepperFieldTemplate(props);
        case OBJECT_FIELD_TEMPLATE.DEFAULT:
        default: return DefaultObjectFieldTemplate(props);
    }
}
