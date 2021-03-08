import {Routes} from "./index";

export const uiSchema: Routes = {
    introduction: {
        hash: 'description',
        title: 'Введение',
        docsUrl: require( '../../docs/ui-schema/introduction.md' ).default,
        docsEditPath: 'src/docs/ui-schema/introduction.md'
    },
    widget: {
        title: 'Виджеты',
        routes: {
            'attach': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/attach.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/attach.json',
                docsUrl: require( '../../docs/ui-schema/widgets/attach.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/attach.md',
            },
            'calendar': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/calendar.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/calendar.json',
                docsUrl: require( '../../docs/ui-schema/widgets/calendar.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/calendar.md'
            },
            'card-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/card-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/card-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/card-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/card-input.md'
            },
            'checkbox-group': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/checkbox-group.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/checkbox-group.json',
                docsUrl: require( '../../docs/ui-schema/widgets/checkbox-group.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/checkbox-group.md'
            },
            'checkbox': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/checkbox.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/checkbox.json',
                docsUrl: require( '../../docs/ui-schema/widgets/checkbox.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/checkbox.md'
            },
            'color-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/color-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/color-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/color-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/color-input.md'
            },
            'date-time-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/date-time-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/date-time-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/date-time-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/date-time-input.md'
            },
            'calendar-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/calendar-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/calendar-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/calendar-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/calendar-input.md'
            },
            'email-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/email-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/email-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/email-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/email-input.md'
            },
            'input-autocomplete': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/input-autocomplete.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/input-autocomplete.json',
                docsUrl: require( '../../docs/ui-schema/widgets/input-autocomplete.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/input-autocomplete.md'
            },
            'input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/input.md'
            },
            // 'intl-phone-input': {
            //     fetchFormProps: async () => import('../../samples/ui-schema/widgets/intl-phone-input.json'),
            //     formPropsEditPath: 'src/samples/ui-schema/widgets/intl-phone-input.json',
            //     docsUrl: require( '../../docs/ui-schema/widgets/intl-phone-input.md' ).default,
            //     docsEditPath: 'src/docs/ui-schema/widgets/intl-phone-input.md'
            // },
            'money-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/money-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/money-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/money-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/money-input.md'
            },
            'password-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/password-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/password-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/password-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/password-input.md'
            },
            'phone-input': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/phone-input.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/phone-input.json',
                docsUrl: require( '../../docs/ui-schema/widgets/phone-input.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/phone-input.md'
            },
            'radio-group': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/radio-group.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/radio-group.json',
                docsUrl: require( '../../docs/ui-schema/widgets/radio-group.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/radio-group.md'
            },
            'select': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/select.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/select.json',
                docsUrl: require( '../../docs/ui-schema/widgets/select.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/select.md'
            },
            'textarea': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/textarea.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/textarea.json',
                docsUrl: require( '../../docs/ui-schema/widgets/textarea.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/textarea.md'
            },
            'toggle': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/toggle.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/toggle.json',
                docsUrl: require( '../../docs/ui-schema/widgets/toggle.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/toggle.md'
            },
            'editor': {
                fetchFormProps: async () => import('../../samples/ui-schema/widgets/editor.json'),
                formPropsEditPath: 'src/samples/ui-schema/widgets/editor.json',
                docsUrl: require( '../../docs/ui-schema/widgets/editor.md' ).default,
                docsEditPath: 'src/docs/ui-schema/widgets/editor.md'
            },
        }
    },
    template: {
        title: "Шаблоны",
        routes: {
            'stepper': {
                fetchFormProps: async () => import('../../samples/ui-schema/templates/stepper.json'),
                formPropsEditPath: 'src/samples/ui-schema/templates/stepper.json',
            },
            'progress-stepper': {
                fetchFormProps: async () => import('../../samples/ui-schema/templates/progress-stepper.json'),
                formPropsEditPath: 'src/samples/ui-schema/templates/progress.json',
            },
            'collapse-list': {
                fetchFormProps: async () => import('../../samples/ui-schema/templates/collapse-list.json'),
                formPropsEditPath: 'src/samples/ui-schema/templates/collapse-list.json',
            },
            'tabs': {
                fetchFormProps: async () => import('../../samples/ui-schema/templates/tabs.json'),
                formPropsEditPath: 'src/samples/ui-schema/templates/tabs.json',
            }
        }
    },
    keywords: {
        title: 'Ключевые слова',
        routes: {
            rootFieldId: {
                docsUrl: require( '../../docs/ui-schema/rootFieldId.md' ).default,
                docsEditPath: 'src/docs/ui-schema/rootFieldId.md'
            },
            classNames: {
                docsUrl: require( '../../docs/ui-schema/classNames.md' ).default,
                docsEditPath: 'src/docs/ui-schema/classNames.md'
            },
            title: {
                docsUrl: require( '../../docs/ui-schema/title.md' ).default,
                docsEditPath: 'src/docs/ui-schema/title.md'
            },
            description: {
                docsUrl: require( '../../docs/ui-schema/description.md' ).default,
                docsEditPath: 'src/docs/ui-schema/description.md'
            },
            autofocus: {
                fetchFormProps: async () => import('../../samples/ui-schema/autofocus.json'),
                formPropsEditPath: 'src/samples/ui-schema/autofocus.json',
                docsUrl: require( '../../docs/ui-schema/autofocus.md' ).default,
                docsEditPath: 'src/docs/ui-schema/autofocus.md'
            },
            disabled: {
                docsUrl: require( '../../docs/ui-schema/disabled.md' ).default,
                docsEditPath: 'src/docs/ui-schema/disabled.md'
            },
            enumDisabled: {
                docsUrl: require( '../../docs/ui-schema/enumDisabled.md' ).default,
                docsEditPath: 'src/docs/ui-schema/enumDisabled.md'
            },
            order: {
                fetchFormProps: async () => import('../../samples/ui-schema/order.json'),
                formPropsEditPath: 'src/samples/ui-schema/order.json',
                docsUrl: require( '../../docs/ui-schema/order.md' ).default,
                docsEditPath: 'src/docs/ui-schema/order.md'
            },
            label: {
                docsUrl: require( '../../docs/ui-schema/label.md' ).default,
                docsEditPath: 'src/docs/ui-schema/label.md'
            },
            gridColumn: {
                fetchFormProps: async () => import('../../samples/ui-schema/grid-column.json'),
                formPropsEditPath: 'src/samples/ui-schema/grid-column.json',
                docsUrl: require( '../../docs/ui-schema/gridColumn.md' ).default,
                docsEditPath: 'src/docs/ui-schema/gridColumn.md'
            }
        }
    }
};
