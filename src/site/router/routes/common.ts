import {Routes} from "./index";

export const common: Routes = {
    additionalProperties: {
        fetchFormProps: async () => import('../../../samples/common/additional-properties.json'),
        editFormPropsPath: 'src/samples/common/additional-properties.json'
    },
    allOf: {
        fetchFormProps: async () => import('../../../samples/common/all-of.json'),
        editFormPropsPath: 'src/samples/common/all-of.json'
    },
    alternatives: {
        fetchFormProps: async () => import('../../../samples/common/alternatives.json'),
        editFormPropsPath: 'src/samples/common/alternatives.json'
    },
    anyOf: {
        fetchFormProps: async () => import('../../../samples/common/any-of.json'),
        editFormPropsPath: 'src/samples/common/any-of.json'
    },
    defaultsAndMinItems: {
        fetchFormProps: async () => import('../../../samples/common/defaults-and-min-items.json'),
        editFormPropsPath: 'src/samples/common/defaults-and-min-items.json'
    },
    fixedItemsList: {
        fetchFormProps: async () => import('../../../samples/common/fixed-items-list.json'),
        editFormPropsPath: 'src/samples/common/fixed-items-list.json'
    },
    fixedNoToolbar: {
        fetchFormProps: async () => import('../../../samples/common/fixed-no-toolbar.json'),
        editFormPropsPath: 'src/samples/common/fixed-no-toolbar.json'
    },
    listOfStrings: {
        fetchFormProps: async () => import('../../../samples/common/list-of-strings.json'),
        editFormPropsPath: 'src/samples/common/list-of-strings.json'
    },
    minItemsList: {
        fetchFormProps: async () => import('../../../samples/common/min-items-list.json'),
        editFormPropsPath: 'src/samples/common/min-items-list.json'
    },
    multipleChoice: {
        fetchFormProps: async () => import('../../../samples/common/multiple-choice.json'),
        editFormPropsPath: 'src/samples/common/multiple-choice.json'
    },
    nestedList: {
        fetchFormProps: async () => import('../../../samples/common/nested-list.json'),
        editFormPropsPath: 'src/samples/common/nested-list.json'
    },
    noToolbar: {
        fetchFormProps: async () => import('../../../samples/common/no-toolbar.json'),
        editFormPropsPath: 'src/samples/common/no-toolbar.json'
    },
    unorderableList: {
        fetchFormProps: async () => import('../../../samples/common/unorderable-list.json'),
        editFormPropsPath: 'src/samples/common/unorderable-list.json'
    },
    unremovableList: {
        fetchFormProps: async () => import('../../../samples/common/unremovable-list.json'),
        editFormPropsPath: 'src/samples/common/unremovable-list.json'
    },
    custom: {
        fetchFormProps: async () => import('../../../samples/common/custom.json'),
        editFormPropsPath: 'src/samples/common/custom.json'
    },
    customObject: {
        fetchFormProps: async () => import('../../../samples/common/custom-object.json'),
        editFormPropsPath: 'src/samples/common/custom-object.json'
    },
    customArray: {
        fetchFormProps: async () => import('../../../samples/common/custom-array.json'),
        editFormPropsPath: 'src/samples/common/custom-array.json'
    },
    dateTime: {
        fetchFormProps: async () => import('../../../samples/common/date-time.json'),
        editFormPropsPath: 'src/samples/common/date-time.json'
    },
    defaults: {
        fetchFormProps: async () => import('../../../samples/common/defaults.json'),
        editFormPropsPath: 'src/samples/common/defaults.json'
    },
    errorSchema: {
        fetchFormProps: async () => import('../../../samples/common/error-schema.json'),
        editFormPropsPath: 'src/samples/common/error-schema.json'
    },
    errors: {
        fetchFormProps: async () => import('../../../samples/common/errors.json'),
        editFormPropsPath: 'src/samples/common/errors.json'
    },
    examples: {
        fetchFormProps: async () => import('../../../samples/common/examples.json'),
        editFormPropsPath: 'src/samples/common/examples.json'
    },
    files: {
        fetchFormProps: async () => import('../../../samples/common/files.json'),
        editFormPropsPath: 'src/samples/common/files.json'
    },
    large: {
        fetchFormProps: async () => import('../../../samples/common/large.json'),
        editFormPropsPath: 'src/samples/common/large.json'
    },
    nullFields: {
        fetchFormProps: async () => import('../../../samples/common/null-fields.json'),
        editFormPropsPath: 'src/samples/common/null-fields.json'
    },
    nullable: {
        fetchFormProps: async () => import('../../../samples/common/nullable.json'),
        editFormPropsPath: 'src/samples/common/nullable.json'
    },
    numbers: {
        fetchFormProps: async () => import('../../../samples/common/numbers.json'),
        editFormPropsPath: 'src/samples/common/numbers.json'
    },
    oneOf: {
        fetchFormProps: async () => import('../../../samples/common/one-of.json'),
        editFormPropsPath: 'src/samples/common/one-of.json'
    },
    ordering: {
        fetchFormProps: async () => import('../../../samples/common/ordering.json'),
        editFormPropsPath: 'src/samples/common/ordering.json'
    },
    propertyDependencies: {
        fetchFormProps: async () => import('../../../samples/common/property-dependencies.json'),
        editFormPropsPath: 'src/samples/common/property-dependencies.json'
    },
    references: {
        fetchFormProps: async () => import('../../../samples/common/references.json'),
        editFormPropsPath: 'src/samples/common/references.json'
    },
    schemaDependencies: {
        fetchFormProps: async () => import('../../../samples/common/schema-dependencies.json'),
        editFormPropsPath: 'src/samples/common/schema-dependencies.json'
    },
    simple: {
        fetchFormProps: async () => import('../../../samples/common/simple.json'),
        editFormPropsPath: 'src/samples/common/simple.json'
    },
    single: {
        fetchFormProps: async () => import('../../../samples/common/single.json'),
        editFormPropsPath: 'src/samples/common/single.json'
    },
    validation: {
        fetchFormProps: async () => import('../../../samples/common/validation.json'),
        editFormPropsPath: 'src/samples/common/validation.json'
    }
};
