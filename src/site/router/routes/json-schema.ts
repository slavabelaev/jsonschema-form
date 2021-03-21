import {Routes} from "./index";

export const jsonSchema: Routes = {
    'introduction': {
        title: "Введение",
        docsURL: require( '../../../docs/json-schema/introduction.md' ).default,
        editDocsPath: 'src/docs/json-schema/introduction.md',
    },
    'any-type': {
        title: 'Общие',
        routes: {
            'type': {
                fetchFormProps: async () => import('../../../samples/json-schema/type.json'),
                editFormPropsPath: 'src/samples/json-schema/type.json',
                docsURL: require( '../../../docs/json-schema/type.md' ).default,
                editDocsPath: 'src/docs/json-schema/type.md',
            },
            'enum': {
                fetchFormProps: async () => import('../../../samples/json-schema/enum.json'),
                editFormPropsPath: 'src/samples/json-schema/enum.json',
                docsURL: require( '../../../docs/json-schema/enum.md' ).default,
                editDocsPath: 'src/docs/json-schema/enum.md',
            },
            'const': {
                fetchFormProps: async () => import('../../../samples/json-schema/const.json'),
                editFormPropsPath: 'src/samples/json-schema/const.json',
                docsURL: require( '../../../docs/json-schema/const.md' ).default,
                editDocsPath: 'src/docs/json-schema/const.md',
            },
        }
    },
    'number': {
        title: 'number / integer',
        routes: {
            'multipleOf': {
                fetchFormProps: async () => import('../../../samples/json-schema/multipleOf.json'),
                editFormPropsPath: 'src/samples/json-schema/multipleOf.json',
                docsURL: require( '../../../docs/json-schema/multipleOf.md' ).default,
                editDocsPath: 'src/docs/json-schema/multipleOf.md',
            },
            'maximum': {
                fetchFormProps: async () => import('../../../samples/json-schema/maximum.json'),
                editFormPropsPath: 'src/samples/json-schema/maximum.json',
                docsURL: require( '../../../docs/json-schema/maximum.md' ).default,
                editDocsPath: 'src/docs/json-schema/maximum.md',
            },
            'exclusiveMaximum': {
                fetchFormProps: async () => import('../../../samples/json-schema/exclusiveMaximum.json'),
                editFormPropsPath: 'src/samples/json-schema/exclusiveMaximum.json',
                docsURL: require( '../../../docs/json-schema/exclusiveMaximum.md' ).default,
                editDocsPath: 'src/docs/json-schema/exclusiveMaximum.md',
            },
            'minimum': {
                fetchFormProps: async () => import('../../../samples/json-schema/minimum.json'),
                editFormPropsPath: 'src/samples/json-schema/minimum.json',
                docsURL: require( '../../../docs/json-schema/minimum.md' ).default,
                editDocsPath: 'src/docs/json-schema/minimum.md',
            },
            'exclusiveMinimum': {
                fetchFormProps: async () => import('../../../samples/json-schema/exclusiveMinimum.json'),
                editFormPropsPath: 'src/samples/json-schema/exclusiveMinimum.json',
                docsURL: require( '../../../docs/json-schema/exclusiveMinimum.md' ).default,
                editDocsPath: 'src/docs/json-schema/exclusiveMinimum.md',
            }
        }
    },
    'string': {
        title: 'string',
        routes: {
            'maxLength': {
                fetchFormProps: async () => import('../../../samples/json-schema/maxLength.json'),
                editFormPropsPath: 'src/samples/json-schema/maxLength.json',
                docsURL: require( '../../../docs/json-schema/maxLength.md' ).default,
                editDocsPath: 'src/docs/json-schema/maxLength.md',
            },
            'minLength': {
                fetchFormProps: async () => import('../../../samples/json-schema/minLength.json'),
                editFormPropsPath: 'src/samples/json-schema/minLength.json',
                docsURL: require( '../../../docs/json-schema/minLength.md' ).default,
                editDocsPath: 'src/docs/json-schema/minLength.md',
            },
            'pattern': {
                fetchFormProps: async () => import('../../../samples/json-schema/pattern.json'),
                editFormPropsPath: 'src/samples/json-schema/pattern.json',
                docsURL: require( '../../../docs/json-schema/pattern.md' ).default,
                editDocsPath: 'src/docs/json-schema/pattern.md',
            },
            'format': {
                fetchFormProps: async () => import('../../../samples/json-schema/format.json'),
                editFormPropsPath: 'src/samples/json-schema/format.json',
                docsURL: require( '../../../docs/json-schema/format.md' ).default,
                editDocsPath: 'src/docs/json-schema/format.md',
            },
            'contentMediaType': {
                fetchFormProps: async () => import('../../../samples/json-schema/contentMediaType.json'),
                editFormPropsPath: 'src/samples/json-schema/contentMediaType.json',
                docsURL: require( '../../../docs/json-schema/contentMediaType.md' ).default,
                editDocsPath: 'src/docs/json-schema/contentMediaType.md',
            },
            'contentEncoding': {
                fetchFormProps: async () => import('../../../samples/json-schema/contentEncoding.json'),
                editFormPropsPath: 'src/samples/json-schema/contentEncoding.json',
                docsURL: require( '../../../docs/json-schema/contentEncoding.md' ).default,
                editDocsPath: 'src/docs/json-schema/contentEncoding.md',
            }
        }
    },
    'array': {
        title: 'array',
        routes: {
            'items': {
                fetchFormProps: async () => import('../../../samples/json-schema/items.json'),
                editFormPropsPath: 'src/samples/json-schema/items.json',
                docsURL: require( '../../../docs/json-schema/items.md' ).default,
                editDocsPath: 'src/docs/json-schema/items.md',
            },
            'additionalItems': {
                fetchFormProps: async () => import('../../../samples/json-schema/additionalItems.json'),
                editFormPropsPath: 'src/samples/json-schema/additionalItems.json',
                docsURL: require( '../../../docs/json-schema/additionalItems.md' ).default,
                editDocsPath: 'src/docs/json-schema/additionalItems.md',
            },
            'maxItems': {
                fetchFormProps: async () => import('../../../samples/json-schema/maxItems.json'),
                editFormPropsPath: 'src/samples/json-schema/maxItems.json',
                docsURL: require( '../../../docs/json-schema/maxItems.md' ).default,
                editDocsPath: 'src/docs/json-schema/maxItems.md',
            },
            'minItems': {
                fetchFormProps: async () => import('../../../samples/json-schema/minItems.json'),
                editFormPropsPath: 'src/samples/json-schema/minItems.json',
                docsURL: require( '../../../docs/json-schema/minItems.md' ).default,
                editDocsPath: 'src/docs/json-schema/minItems.md',
            },
            'uniqueItems': {
                fetchFormProps: async () => import('../../../samples/json-schema/uniqueItems.json'),
                editFormPropsPath: 'src/samples/json-schema/uniqueItems.json',
                docsURL: require( '../../../docs/json-schema/uniqueItems.md' ).default,
                editDocsPath: 'src/docs/json-schema/uniqueItems.md',
            },
            'contains': {
                fetchFormProps: async () => import('../../../samples/json-schema/contains.json'),
                editFormPropsPath: 'src/samples/json-schema/contains.json',
                docsURL: require( '../../../docs/json-schema/contains.md' ).default,
                editDocsPath: 'src/docs/json-schema/contains.md',
            }
        }
    },
    'object': {
        title: 'object',
        routes: {
            'maxProperties': {
                fetchFormProps: async () => import('../../../samples/json-schema/maxProperties.json'),
                editFormPropsPath: 'src/samples/json-schema/maxProperties.json',
                docsURL: require( '../../../docs/json-schema/maxProperties.md' ).default,
                editDocsPath: 'src/docs/json-schema/maxProperties.md',
            },
            'minProperties': {
                fetchFormProps: async () => import('../../../samples/json-schema/minProperties.json'),
                editFormPropsPath: 'src/samples/json-schema/minProperties.json',
                docsURL: require( '../../../docs/json-schema/minProperties.md' ).default,
                editDocsPath: 'src/docs/json-schema/minProperties.md',
            },
            'required': {
                fetchFormProps: async () => import('../../../samples/json-schema/required.json'),
                editFormPropsPath: 'src/samples/json-schema/required.json',
                docsURL: require( '../../../docs/json-schema/required.md' ).default,
                editDocsPath: 'src/docs/json-schema/required.md',
            },
            'properties': {
                fetchFormProps: async () => import('../../../samples/json-schema/properties.json'),
                editFormPropsPath: 'src/samples/json-schema/properties.json',
                docsURL: require( '../../../docs/json-schema/properties.md' ).default,
                editDocsPath: 'src/docs/json-schema/properties.md',
            },
            'patternProperties': {
                fetchFormProps: async () => import('../../../samples/json-schema/patternProperties.json'),
                editFormPropsPath: 'src/samples/json-schema/patternProperties.json',
                docsURL: require( '../../../docs/json-schema/patternProperties.md' ).default,
                editDocsPath: 'src/docs/json-schema/patternProperties.md',
            },
            'additionalProperties': {
                fetchFormProps: async () => import('../../../samples/json-schema/additionalProperties.json'),
                editFormPropsPath: 'src/samples/json-schema/additionalProperties.json',
                docsURL: require( '../../../docs/json-schema/additionalProperties.md' ).default,
                editDocsPath: 'src/docs/json-schema/additionalProperties.md',
            },
            'dependencies': {
                fetchFormProps: async () => import('../../../samples/json-schema/dependencies.json'),
                editFormPropsPath: 'src/samples/json-schema/dependencies.json',
                docsURL: require( '../../../docs/json-schema/dependencies.md' ).default,
                editDocsPath: 'src/docs/json-schema/dependencies.md',
            },
            'propertyNames': {
                fetchFormProps: async () => import('../../../samples/json-schema/propertyNames.json'),
                editFormPropsPath: 'src/samples/json-schema/propertyNames.json',
                docsURL: require( '../../../docs/json-schema/propertyNames.md' ).default,
                editDocsPath: 'src/docs/json-schema/propertyNames.md',
            }
        }
    },
    'sub-schema': {
        title: "Подсхемы",
        routes: {
            'allOf': {
                fetchFormProps: async () => import('../../../samples/json-schema/allOf.json'),
                editFormPropsPath: 'src/samples/json-schema/allOf.json',
                docsURL: require( '../../../docs/json-schema/allOf.md' ).default,
                editDocsPath: 'src/docs/json-schema/allOf.md',
            },
            'anyOf': {
                fetchFormProps: async () => import('../../../samples/json-schema/anyOf.json'),
                editFormPropsPath: 'src/samples/json-schema/anyOf.json',
                docsURL: require( '../../../docs/json-schema/anyOf.md' ).default,
                editDocsPath: 'src/docs/json-schema/anyOf.md',
            },
            'oneOf': {
                fetchFormProps: async () => import('../../../samples/json-schema/oneOf.json'),
                editFormPropsPath: 'src/samples/json-schema/oneOf.json',
                docsURL: require( '../../../docs/json-schema/oneOf.md' ).default,
                editDocsPath: 'src/docs/json-schema/oneOf.md',
            },
            'not': {
                fetchFormProps: async () => import('../../../samples/json-schema/not.json'),
                editFormPropsPath: 'src/samples/json-schema/not.json',
                docsURL: require( '../../../docs/json-schema/not.md' ).default,
                editDocsPath: 'src/docs/json-schema/not.md',
            },
            'if-then-else': {
                title: "if / then / else",
                fetchFormProps: async () => import('../../../samples/json-schema/if-then-else.json'),
                editFormPropsPath: 'src/samples/json-schema/if-then-else.json',
                docsURL: require( '../../../docs/json-schema/if-then-else.md' ).default,
                editDocsPath: 'src/docs/json-schema/if-then-else.md',
            },
        },
    },
    'annotations': {
        title: "Аннотации",
        routes: {
            'title': {
                fetchFormProps: async () => import('../../../samples/json-schema/title.json'),
                editFormPropsPath: 'src/samples/json-schema/title.json',
                docsURL: require( '../../../docs/json-schema/title.md' ).default,
                editDocsPath: 'src/docs/json-schema/title.md',
            },
            'description': {
                fetchFormProps: async () => import('../../../samples/json-schema/description.json'),
                editFormPropsPath: 'src/samples/json-schema/description.json',
                docsURL: require( '../../../docs/json-schema/description.md' ).default,
                editDocsPath: 'src/docs/json-schema/description.md',
            },
            'default': {
                fetchFormProps: async () => import('../../../samples/json-schema/default.json'),
                editFormPropsPath: 'src/samples/json-schema/default.json',
                docsURL: require( '../../../docs/json-schema/default.md' ).default,
                editDocsPath: 'src/docs/json-schema/default.md',
            },
            'readOnly': {
                fetchFormProps: async () => import('../../../samples/json-schema/readOnly.json'),
                editFormPropsPath: 'src/samples/json-schema/readOnly.json',
                docsURL: require( '../../../docs/json-schema/readOnly.md' ).default,
                editDocsPath: 'src/docs/json-schema/readOnly.md',
            },
            'writeOnly': {
                fetchFormProps: async () => import('../../../samples/json-schema/writeOnly.json'),
                editFormPropsPath: 'src/samples/json-schema/writeOnly.json',
                docsURL: require( '../../../docs/json-schema/writeOnly.md' ).default,
                editDocsPath: 'src/docs/json-schema/writeOnly.md',
            },
            'examples': {
                fetchFormProps: async () => import('../../../samples/json-schema/examples.json'),
                editFormPropsPath: 'src/samples/json-schema/examples.json',
                docsURL: require( '../../../docs/json-schema/examples.md' ).default,
                editDocsPath: 'src/docs/json-schema/examples.md',
            },
            'x-errorMessages': {
                fetchFormProps: async () => import('../../../samples/json-schema/x-errorMessages.json'),
                editFormPropsPath: 'src/samples/json-schema/x-errorMessages.json',
                docsURL: require( '../../../docs/json-schema/x-errorMessages.md' ).default,
                editDocsPath: 'src/docs/json-schema/x-errorMessages.md',
            }
        }
    },
    'core': {
        title: 'Другие',
        routes: {
            '$id': {
                fetchFormProps: async () => import('../../../samples/json-schema/$id.json'),
                editFormPropsPath: 'src/samples/json-schema/$id.json',
                docsURL: require( '../../../docs/json-schema/$id.md' ).default,
                editDocsPath: 'src/docs/json-schema/$id.md',
            },
            '$comment': {
                fetchFormProps: async () => import('../../../samples/json-schema/$comment.json'),
                editFormPropsPath: 'src/samples/json-schema/$comment.json',
                docsURL: require( '../../../docs/json-schema/$comment.md' ).default,
                editDocsPath: 'src/docs/json-schema/$comment.md',
            },
            '$ref': {
                fetchFormProps: async () => import('../../../samples/json-schema/$ref.json'),
                editFormPropsPath: 'src/samples/json-schema/$ref.json',
                docsURL: require( '../../../docs/json-schema/$ref.md' ).default,
                editDocsPath: 'src/docs/json-schema/$ref.md',
            },
            'definitions': {
                fetchFormProps: async () => import('../../../samples/json-schema/definitions.json'),
                editFormPropsPath: 'src/samples/json-schema/definitions.json',
                docsURL: require( '../../../docs/json-schema/definitions.md' ).default,
                editDocsPath: 'src/docs/json-schema/definitions.md',
            },
        }
    }
};
