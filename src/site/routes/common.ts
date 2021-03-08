import {Routes} from "./index";

export const common: Routes = {
    additionalProperties: {
        fetchFormProps: async () => import('../../samples/common/additional-properties.json'),
        formPropsEditPath: 'src/samples/common/additional-properties.json'
    },
    allOf: {
        fetchFormProps: async () => import('../../samples/common/all-of.json'),
        formPropsEditPath: 'src/samples/common/all-of.json'
    },
    alternatives: {
        fetchFormProps: async () => import('../../samples/common/alternatives.json'),
        formPropsEditPath: 'src/samples/common/alternatives.json'
    },
    anyOf: {
        fetchFormProps: async () => import('../../samples/common/any-of.json'),
        formPropsEditPath: 'src/samples/common/any-of.json'
    },
    defaultsAndMinItems: {
        fetchFormProps: async () => import('../../samples/common/defaults-and-min-items.json'),
        formPropsEditPath: 'src/samples/common/defaults-and-min-items.json'
    },
    fixedItemsList: {
        fetchFormProps: async () => import('../../samples/common/fixed-items-list.json'),
        formPropsEditPath: 'src/samples/common/fixed-items-list.json'
    },
    fixedNoToolbar: {
        fetchFormProps: async () => import('../../samples/common/fixed-no-toolbar.json'),
        formPropsEditPath: 'src/samples/common/fixed-no-toolbar.json'
    },
    listOfStrings: {
        fetchFormProps: async () => import('../../samples/common/list-of-strings.json'),
        formPropsEditPath: 'src/samples/common/list-of-strings.json'
    },
    minItemsList: {
        fetchFormProps: async () => import('../../samples/common/min-items-list.json'),
        formPropsEditPath: 'src/samples/common/min-items-list.json'
    },
    multipleChoice: {
        fetchFormProps: async () => import('../../samples/common/multiple-choice.json'),
        formPropsEditPath: 'src/samples/common/multiple-choice.json'
    },
    nestedList: {
        fetchFormProps: async () => import('../../samples/common/nested-list.json'),
        formPropsEditPath: 'src/samples/common/nested-list.json'
    },
    noToolbar: {
        fetchFormProps: async () => import('../../samples/common/no-toolbar.json'),
        formPropsEditPath: 'src/samples/common/no-toolbar.json'
    },
    unorderableList: {
        fetchFormProps: async () => import('../../samples/common/unorderable-list.json'),
        formPropsEditPath: 'src/samples/common/unorderable-list.json'
    },
    unremovableList: {
        fetchFormProps: async () => import('../../samples/common/unremovable-list.json'),
        formPropsEditPath: 'src/samples/common/unremovable-list.json'
    },
    custom: {
        fetchFormProps: async () => import('../../samples/common/custom.json'),
        formPropsEditPath: 'src/samples/common/custom.json'
    },
    customObject: {
        fetchFormProps: async () => import('../../samples/common/custom-object.json'),
        formPropsEditPath: 'src/samples/common/custom-object.json'
    },
    customArray: {
        fetchFormProps: async () => import('../../samples/common/custom-array.json'),
        formPropsEditPath: 'src/samples/common/custom-array.json'
    },
    dateTime: {
        fetchFormProps: async () => import('../../samples/common/date-time.json'),
        formPropsEditPath: 'src/samples/common/date-time.json'
    },
    defaults: {
        fetchFormProps: async () => import('../../samples/common/defaults.json'),
        formPropsEditPath: 'src/samples/common/defaults.json'
    },
    errorSchema: {
        fetchFormProps: async () => import('../../samples/common/error-schema.json'),
        formPropsEditPath: 'src/samples/common/error-schema.json'
    },
    errors: {
        fetchFormProps: async () => import('../../samples/common/errors.json'),
        formPropsEditPath: 'src/samples/common/errors.json'
    },
    examples: {
        fetchFormProps: async () => import('../../samples/common/examples.json'),
        formPropsEditPath: 'src/samples/common/examples.json'
    },
    files: {
        fetchFormProps: async () => import('../../samples/common/files.json'),
        formPropsEditPath: 'src/samples/common/files.json'
    },
    large: {
        fetchFormProps: async () => import('../../samples/common/large.json'),
        formPropsEditPath: 'src/samples/common/large.json'
    },
    nullFields: {
        fetchFormProps: async () => import('../../samples/common/null-fields.json'),
        formPropsEditPath: 'src/samples/common/null-fields.json'
    },
    nullable: {
        fetchFormProps: async () => import('../../samples/common/nullable.json'),
        formPropsEditPath: 'src/samples/common/nullable.json'
    },
    numbers: {
        fetchFormProps: async () => import('../../samples/common/numbers.json'),
        formPropsEditPath: 'src/samples/common/numbers.json'
    },
    oneOf: {
        fetchFormProps: async () => import('../../samples/common/one-of.json'),
        formPropsEditPath: 'src/samples/common/one-of.json'
    },
    ordering: {
        fetchFormProps: async () => import('../../samples/common/ordering.json'),
        formPropsEditPath: 'src/samples/common/ordering.json'
    },
    propertyDependencies: {
        fetchFormProps: async () => import('../../samples/common/property-dependencies.json'),
        formPropsEditPath: 'src/samples/common/property-dependencies.json'
    },
    references: {
        fetchFormProps: async () => import('../../samples/common/references.json'),
        formPropsEditPath: 'src/samples/common/references.json'
    },
    schemaDependencies: {
        fetchFormProps: async () => import('../../samples/common/schema-dependencies.json'),
        formPropsEditPath: 'src/samples/common/schema-dependencies.json'
    },
    simple: {
        fetchFormProps: async () => import('../../samples/common/simple.json'),
        formPropsEditPath: 'src/samples/common/simple.json'
    },
    single: {
        fetchFormProps: async () => import('../../samples/common/single.json'),
        formPropsEditPath: 'src/samples/common/single.json'
    },
    validation: {
        fetchFormProps: async () => import('../../samples/common/validation.json'),
        formPropsEditPath: 'src/samples/common/validation.json'
    }
};
