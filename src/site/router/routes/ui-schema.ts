import {Routes} from "./index";

export const uiSchema: Routes = {
    introduction: {
        hash: 'description',
        title: 'Введение',
        docsURL: require( '../../../docs/ui-schema/introduction.md' ).default,
        editDocsPath: 'src/docs/ui-schema/introduction.md'
    },
    widget: {
        title: 'Виджеты',
        routes: {
            'attach': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/attach.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/attach.json',
                docsURL: require( '../../../docs/ui-schema/widgets/attach.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/attach.md',
            },
            'calendar': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/calendar.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/calendar.json',
                docsURL: require( '../../../docs/ui-schema/widgets/calendar.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/calendar.md'
            },
            'card-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/card-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/card-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/card-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/card-input.md'
            },
            'checkbox-group': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/checkbox-group.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/checkbox-group.json',
                docsURL: require( '../../../docs/ui-schema/widgets/checkbox-group.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/checkbox-group.md'
            },
            'checkbox': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/checkbox.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/checkbox.json',
                docsURL: require( '../../../docs/ui-schema/widgets/checkbox.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/checkbox.md'
            },
            'color-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/color-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/color-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/color-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/color-input.md'
            },
            'date-time-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/date-time-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/date-time-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/date-time-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/date-time-input.md'
            },
            'calendar-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/calendar-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/calendar-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/calendar-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/calendar-input.md'
            },
            'email-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/email-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/email-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/email-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/email-input.md'
            },
            'input-autocomplete': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/input-autocomplete.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/input-autocomplete.json',
                docsURL: require( '../../../docs/ui-schema/widgets/input-autocomplete.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/input-autocomplete.md'
            },
            'input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/input.md'
            },
            // 'intl-phone-input': {
            //     fetchFormProps: async () => import('../../samples/ui-schema/widgets/intl-phone-input.json'),
            //     formPropsEditPath: 'src/samples/ui-schema/widgets/intl-phone-input.json',
            //     docsURL: require( '../../docs/ui-schema/widgets/intl-phone-input.md' ).default,
            //     docsEditPath: 'src/docs/ui-schema/widgets/intl-phone-input.md'
            // },
            'money-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/money-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/money-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/money-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/money-input.md'
            },
            'password-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/password-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/password-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/password-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/password-input.md'
            },
            'phone-input': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/phone-input.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/phone-input.json',
                docsURL: require( '../../../docs/ui-schema/widgets/phone-input.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/phone-input.md'
            },
            'radio-group': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/radio-group.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/radio-group.json',
                docsURL: require( '../../../docs/ui-schema/widgets/radio-group.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/radio-group.md'
            },
            'select': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/select.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/select.json',
                docsURL: require( '../../../docs/ui-schema/widgets/select.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/select.md'
            },
            'textarea': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/textarea.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/textarea.json',
                docsURL: require( '../../../docs/ui-schema/widgets/textarea.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/textarea.md'
            },
            'toggle': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/toggle.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/toggle.json',
                docsURL: require( '../../../docs/ui-schema/widgets/toggle.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/toggle.md'
            },
            'editor': {
                fetchFormProps: async () => import('../../../samples/ui-schema/widgets/editor.json'),
                editFormPropsPath: 'src/samples/ui-schema/widgets/editor.json',
                docsURL: require( '../../../docs/ui-schema/widgets/editor.md' ).default,
                editDocsPath: 'src/docs/ui-schema/widgets/editor.md'
            },
        }
    },
    template: {
        title: "Шаблоны",
        routes: {
            'stepper': {
                fetchFormProps: async () => import('../../../samples/ui-schema/templates/stepper.json'),
                editFormPropsPath: 'src/samples/ui-schema/templates/stepper.json',
            },
            'progress-stepper': {
                fetchFormProps: async () => import('../../../samples/ui-schema/templates/progress-stepper.json'),
                editFormPropsPath: 'src/samples/ui-schema/templates/progress.json',
            },
            'collapse-list': {
                fetchFormProps: async () => import('../../../samples/ui-schema/templates/collapse-list.json'),
                editFormPropsPath: 'src/samples/ui-schema/templates/collapse-list.json',
            },
            'tabs': {
                fetchFormProps: async () => import('../../../samples/ui-schema/templates/tabs.json'),
                editFormPropsPath: 'src/samples/ui-schema/templates/tabs.json',
            }
        }
    },
    keywords: {
        title: 'Ключевые слова',
        routes: {
            rootFieldId: {
                docsURL: require( '../../../docs/ui-schema/rootFieldId.md' ).default,
                editDocsPath: 'src/docs/ui-schema/rootFieldId.md'
            },
            classNames: {
                docsURL: require( '../../../docs/ui-schema/classNames.md' ).default,
                editDocsPath: 'src/docs/ui-schema/classNames.md'
            },
            title: {
                docsURL: require( '../../../docs/ui-schema/title.md' ).default,
                editDocsPath: 'src/docs/ui-schema/title.md'
            },
            description: {
                docsURL: require( '../../../docs/ui-schema/description.md' ).default,
                editDocsPath: 'src/docs/ui-schema/description.md'
            },
            autofocus: {
                fetchFormProps: async () => import('../../../samples/ui-schema/autofocus.json'),
                editFormPropsPath: 'src/samples/ui-schema/autofocus.json',
                docsURL: require( '../../../docs/ui-schema/autofocus.md' ).default,
                editDocsPath: 'src/docs/ui-schema/autofocus.md'
            },
            disabled: {
                docsURL: require( '../../../docs/ui-schema/disabled.md' ).default,
                editDocsPath: 'src/docs/ui-schema/disabled.md'
            },
            enumDisabled: {
                docsURL: require( '../../../docs/ui-schema/enumDisabled.md' ).default,
                editDocsPath: 'src/docs/ui-schema/enumDisabled.md'
            },
            order: {
                fetchFormProps: async () => import('../../../samples/ui-schema/order.json'),
                editFormPropsPath: 'src/samples/ui-schema/order.json',
                docsURL: require( '../../../docs/ui-schema/order.md' ).default,
                editDocsPath: 'src/docs/ui-schema/order.md'
            },
            label: {
                docsURL: require( '../../../docs/ui-schema/label.md' ).default,
                editDocsPath: 'src/docs/ui-schema/label.md'
            },
            gridColumn: {
                fetchFormProps: async () => import('../../../samples/ui-schema/grid-column.json'),
                editFormPropsPath: 'src/samples/ui-schema/grid-column.json',
                docsURL: require( '../../../docs/ui-schema/gridColumn.md' ).default,
                editDocsPath: 'src/docs/ui-schema/gridColumn.md'
            }
        }
    }
};
