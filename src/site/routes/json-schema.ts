import {Routes} from "./index";

export const jsonSchema: Routes = {
    'introduction': {
        title: "Введение",
        docsUrl: require( '../../docs/json-schema/introduction.md' ),
        docsEditPath: 'src/docs/json-schema/introduction.md',
    },
    'any-type': {
        title: 'Общие',
        routes: {
            'type': {
                fetchFormProps: async () => import('../../samples/json-schema/type.json'),
                formPropsEditPath: 'src/samples/json-schema/type.json',
                docsUrl: require( '../../docs/json-schema/type.md' ),
                docsEditPath: 'src/docs/json-schema/type.md',
            },
            'enum': {
                fetchFormProps: async () => import('../../samples/json-schema/enum.json'),
                formPropsEditPath: 'src/samples/json-schema/enum.json',
                docsUrl: require( '../../docs/json-schema/enum.md' ),
                docsEditPath: 'src/docs/json-schema/enum.md',
            },
            'const': {
                fetchFormProps: async () => import('../../samples/json-schema/const.json'),
                formPropsEditPath: 'src/samples/json-schema/const.json',
                docsUrl: require( '../../docs/json-schema/const.md' ),
                docsEditPath: 'src/docs/json-schema/const.md',
            },
        }
    },
    'number': {
        title: 'number / integer',
        routes: {
            'multipleOf': {
                fetchFormProps: async () => import('../../samples/json-schema/multipleOf.json'),
                formPropsEditPath: 'src/samples/json-schema/multipleOf.json',
                docsUrl: require( '../../docs/json-schema/multipleOf.md' ),
                docsEditPath: 'src/docs/json-schema/multipleOf.md',
            },
            'maximum': {
                fetchFormProps: async () => import('../../samples/json-schema/maximum.json'),
                formPropsEditPath: 'src/samples/json-schema/maximum.json',
                docsUrl: require( '../../docs/json-schema/maximum.md' ),
                docsEditPath: 'src/docs/json-schema/maximum.md',
            },
            'exclusiveMaximum': {
                fetchFormProps: async () => import('../../samples/json-schema/exclusiveMaximum.json'),
                formPropsEditPath: 'src/samples/json-schema/exclusiveMaximum.json',
                docsUrl: require( '../../docs/json-schema/exclusiveMaximum.md' ),
                docsEditPath: 'src/docs/json-schema/exclusiveMaximum.md',
            },
            'minimum': {
                fetchFormProps: async () => import('../../samples/json-schema/minimum.json'),
                formPropsEditPath: 'src/samples/json-schema/minimum.json',
                docsUrl: require( '../../docs/json-schema/minimum.md' ),
                docsEditPath: 'src/docs/json-schema/minimum.md',
            },
            'exclusiveMinimum': {
                fetchFormProps: async () => import('../../samples/json-schema/exclusiveMinimum.json'),
                formPropsEditPath: 'src/samples/json-schema/exclusiveMinimum.json',
                docsUrl: require( '../../docs/json-schema/exclusiveMinimum.md' ),
                docsEditPath: 'src/docs/json-schema/exclusiveMinimum.md',
            }
        }
    },
    'string': {
        title: 'string',
        routes: {
            'maxLength': {
                fetchFormProps: async () => import('../../samples/json-schema/maxLength.json'),
                formPropsEditPath: 'src/samples/json-schema/maxLength.json',
                docsUrl: require( '../../docs/json-schema/maxLength.md' ),
                docsEditPath: 'src/docs/json-schema/maxLength.md',
            },
            'minLength': {
                fetchFormProps: async () => import('../../samples/json-schema/minLength.json'),
                formPropsEditPath: 'src/samples/json-schema/minLength.json',
                docsUrl: require( '../../docs/json-schema/minLength.md' ),
                docsEditPath: 'src/docs/json-schema/minLength.md',
            },
            'pattern': {
                fetchFormProps: async () => import('../../samples/json-schema/pattern.json'),
                formPropsEditPath: 'src/samples/json-schema/pattern.json',
                docsUrl: require( '../../docs/json-schema/pattern.md' ),
                docsEditPath: 'src/docs/json-schema/pattern.md',
            },
            'format': {
                fetchFormProps: async () => import('../../samples/json-schema/format.json'),
                formPropsEditPath: 'src/samples/json-schema/format.json',
                docsUrl: require( '../../docs/json-schema/format.md' ),
                docsEditPath: 'src/docs/json-schema/format.md',
            },
            'contentMediaType': {
                fetchFormProps: async () => import('../../samples/json-schema/contentMediaType.json'),
                formPropsEditPath: 'src/samples/json-schema/contentMediaType.json',
                docsUrl: require( '../../docs/json-schema/contentMediaType.md' ),
                docsEditPath: 'src/docs/json-schema/contentMediaType.md',
            },
            'contentEncoding': {
                fetchFormProps: async () => import('../../samples/json-schema/contentEncoding.json'),
                formPropsEditPath: 'src/samples/json-schema/contentEncoding.json',
                docsUrl: require( '../../docs/json-schema/contentEncoding.md' ),
                docsEditPath: 'src/docs/json-schema/contentEncoding.md',
            }
        }
    },
    'array': {
        title: 'array',
        routes: {
            'items': {
                fetchFormProps: async () => import('../../samples/json-schema/items.json'),
                formPropsEditPath: 'src/samples/json-schema/items.json',
                docsUrl: require( '../../docs/json-schema/items.md' ),
                docsEditPath: 'src/docs/json-schema/items.md',
            },
            'additionalItems': {
                fetchFormProps: async () => import('../../samples/json-schema/additionalItems.json'),
                formPropsEditPath: 'src/samples/json-schema/additionalItems.json',
                docsUrl: require( '../../docs/json-schema/additionalItems.md' ),
                docsEditPath: 'src/docs/json-schema/additionalItems.md',
            },
            'maxItems': {
                fetchFormProps: async () => import('../../samples/json-schema/maxItems.json'),
                formPropsEditPath: 'src/samples/json-schema/maxItems.json',
                docsUrl: require( '../../docs/json-schema/maxItems.md' ),
                docsEditPath: 'src/docs/json-schema/maxItems.md',
            },
            'minItems': {
                fetchFormProps: async () => import('../../samples/json-schema/minItems.json'),
                formPropsEditPath: 'src/samples/json-schema/minItems.json',
                docsUrl: require( '../../docs/json-schema/minItems.md' ),
                docsEditPath: 'src/docs/json-schema/minItems.md',
            },
            'uniqueItems': {
                fetchFormProps: async () => import('../../samples/json-schema/uniqueItems.json'),
                formPropsEditPath: 'src/samples/json-schema/uniqueItems.json',
                docsUrl: require( '../../docs/json-schema/uniqueItems.md' ),
                docsEditPath: 'src/docs/json-schema/uniqueItems.md',
            },
            'contains': {
                fetchFormProps: async () => import('../../samples/json-schema/contains.json'),
                formPropsEditPath: 'src/samples/json-schema/contains.json',
                docsUrl: require( '../../docs/json-schema/contains.md' ),
                docsEditPath: 'src/docs/json-schema/contains.md',
            }
        }
    },
    'object': {
        title: 'object',
        routes: {
            'maxProperties': {
                fetchFormProps: async () => import('../../samples/json-schema/maxProperties.json'),
                formPropsEditPath: 'src/samples/json-schema/maxProperties.json',
                docsUrl: require( '../../docs/json-schema/maxProperties.md' ),
                docsEditPath: 'src/docs/json-schema/maxProperties.md',
            },
            'minProperties': {
                fetchFormProps: async () => import('../../samples/json-schema/minProperties.json'),
                formPropsEditPath: 'src/samples/json-schema/minProperties.json',
                docsUrl: require( '../../docs/json-schema/minProperties.md' ),
                docsEditPath: 'src/docs/json-schema/minProperties.md',
            },
            'required': {
                fetchFormProps: async () => import('../../samples/json-schema/required.json'),
                formPropsEditPath: 'src/samples/json-schema/required.json',
                docsUrl: require( '../../docs/json-schema/required.md' ),
                docsEditPath: 'src/docs/json-schema/required.md',
            },
            'properties': {
                fetchFormProps: async () => import('../../samples/json-schema/properties.json'),
                formPropsEditPath: 'src/samples/json-schema/properties.json',
                docsUrl: require( '../../docs/json-schema/properties.md' ),
                docsEditPath: 'src/docs/json-schema/properties.md',
            },
            'patternProperties': {
                fetchFormProps: async () => import('../../samples/json-schema/patternProperties.json'),
                formPropsEditPath: 'src/samples/json-schema/patternProperties.json',
                docsUrl: require( '../../docs/json-schema/patternProperties.md' ),
                docsEditPath: 'src/docs/json-schema/patternProperties.md',
            },
            'additionalProperties': {
                fetchFormProps: async () => import('../../samples/json-schema/additionalProperties.json'),
                formPropsEditPath: 'src/samples/json-schema/additionalProperties.json',
                docsUrl: require( '../../docs/json-schema/additionalProperties.md' ),
                docsEditPath: 'src/docs/json-schema/additionalProperties.md',
            },
            'dependencies': {
                fetchFormProps: async () => import('../../samples/json-schema/dependencies.json'),
                formPropsEditPath: 'src/samples/json-schema/dependencies.json',
                docsUrl: require( '../../docs/json-schema/dependencies.md' ),
                docsEditPath: 'src/docs/json-schema/dependencies.md',
            },
            'propertyNames': {
                fetchFormProps: async () => import('../../samples/json-schema/propertyNames.json'),
                formPropsEditPath: 'src/samples/json-schema/propertyNames.json',
                docsUrl: require( '../../docs/json-schema/propertyNames.md' ),
                docsEditPath: 'src/docs/json-schema/propertyNames.md',
            }
        }
    },
    'sub-schema': {
        title: "Подсхемы",
        routes: {
            'allOf': {
                fetchFormProps: async () => import('../../samples/json-schema/allOf.json'),
                formPropsEditPath: 'src/samples/json-schema/allOf.json',
                docsUrl: require( '../../docs/json-schema/allOf.md' ),
                docsEditPath: 'src/docs/json-schema/allOf.md',
            },
            'anyOf': {
                fetchFormProps: async () => import('../../samples/json-schema/anyOf.json'),
                formPropsEditPath: 'src/samples/json-schema/anyOf.json',
                docsUrl: require( '../../docs/json-schema/anyOf.md' ),
                docsEditPath: 'src/docs/json-schema/anyOf.md',
            },
            'oneOf': {
                fetchFormProps: async () => import('../../samples/json-schema/oneOf.json'),
                formPropsEditPath: 'src/samples/json-schema/oneOf.json',
                docsUrl: require( '../../docs/json-schema/oneOf.md' ),
                docsEditPath: 'src/docs/json-schema/oneOf.md',
            },
            'not': {
                fetchFormProps: async () => import('../../samples/json-schema/not.json'),
                formPropsEditPath: 'src/samples/json-schema/not.json',
                docsUrl: require( '../../docs/json-schema/not.md' ),
                docsEditPath: 'src/docs/json-schema/not.md',
            },
            'if-then-else': {
                title: "if / then / else",
                fetchFormProps: async () => import('../../samples/json-schema/if-then-else.json'),
                formPropsEditPath: 'src/samples/json-schema/if-then-else.json',
                docsUrl: require( '../../docs/json-schema/if-then-else.md' ),
                docsEditPath: 'src/docs/json-schema/if-then-else.md',
            },
        },
    },
    'annotations': {
        title: "Аннотации",
        routes: {
            'title': {
                fetchFormProps: async () => import('../../samples/json-schema/title.json'),
                formPropsEditPath: 'src/samples/json-schema/title.json',
                docsUrl: require( '../../docs/json-schema/title.md' ),
                docsEditPath: 'src/docs/json-schema/title.md',
            },
            'description': {
                fetchFormProps: async () => import('../../samples/json-schema/description.json'),
                formPropsEditPath: 'src/samples/json-schema/description.json',
                docsUrl: require( '../../docs/json-schema/description.md' ),
                docsEditPath: 'src/docs/json-schema/description.md',
            },
            'default': {
                fetchFormProps: async () => import('../../samples/json-schema/default.json'),
                formPropsEditPath: 'src/samples/json-schema/default.json',
                docsUrl: require( '../../docs/json-schema/default.md' ),
                docsEditPath: 'src/docs/json-schema/default.md',
            },
            'readOnly': {
                fetchFormProps: async () => import('../../samples/json-schema/readOnly.json'),
                formPropsEditPath: 'src/samples/json-schema/readOnly.json',
                docsUrl: require( '../../docs/json-schema/readOnly.md' ),
                docsEditPath: 'src/docs/json-schema/readOnly.md',
            },
            'writeOnly': {
                fetchFormProps: async () => import('../../samples/json-schema/writeOnly.json'),
                formPropsEditPath: 'src/samples/json-schema/writeOnly.json',
                docsUrl: require( '../../docs/json-schema/writeOnly.md' ),
                docsEditPath: 'src/docs/json-schema/writeOnly.md',
            },
            'examples': {
                fetchFormProps: async () => import('../../samples/json-schema/examples.json'),
                formPropsEditPath: 'src/samples/json-schema/examples.json',
                docsUrl: require( '../../docs/json-schema/examples.md' ),
                docsEditPath: 'src/docs/json-schema/examples.md',
            },
            'x-errorMessages': {
                fetchFormProps: async () => import('../../samples/json-schema/x-errorMessages.json'),
                formPropsEditPath: 'src/samples/json-schema/x-errorMessages.json',
                docsUrl: require( '../../docs/json-schema/x-errorMessages.md' ),
                docsEditPath: 'src/docs/json-schema/x-errorMessages.md',
            }
        }
    },
    'core': {
        title: 'Другие',
        routes: {
            '$id': {
                fetchFormProps: async () => import('../../samples/json-schema/$id.json'),
                formPropsEditPath: 'src/samples/json-schema/$id.json',
                docsUrl: require( '../../docs/json-schema/$id.md' ),
                docsEditPath: 'src/docs/json-schema/$id.md',
            },
            '$comment': {
                fetchFormProps: async () => import('../../samples/json-schema/$comment.json'),
                formPropsEditPath: 'src/samples/json-schema/$comment.json',
                docsUrl: require( '../../docs/json-schema/$comment.md' ),
                docsEditPath: 'src/docs/json-schema/$comment.md',
            },
            '$ref': {
                fetchFormProps: async () => import('../../samples/json-schema/$ref.json'),
                formPropsEditPath: 'src/samples/json-schema/$ref.json',
                docsUrl: require( '../../docs/json-schema/$ref.md' ),
                docsEditPath: 'src/docs/json-schema/$ref.md',
            },
            'definitions': {
                fetchFormProps: async () => import('../../samples/json-schema/definitions.json'),
                formPropsEditPath: 'src/samples/json-schema/definitions.json',
                docsUrl: require( '../../docs/json-schema/definitions.md' ),
                docsEditPath: 'src/docs/json-schema/definitions.md',
            },
        }
    }
};
