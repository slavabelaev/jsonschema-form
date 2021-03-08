import {InputUiOptions, InputWidget} from "./input-widget";
import {AttachUiOptions, AttachWidget} from "./attach-widget";
import {CalendarInputUiOptions, CalendarInputWidget} from "./calendar-input-widget";
import {CheckboxUiOptions, CheckboxWidget} from "./checkbox-widget";
import {CheckBoxGroupUiOptions, CheckBoxGroupWidget} from "./checkbox-group-widget";
import {RadioGroupUiOptions, RadioGroupWidget} from "./radio-group-widget";
import {SelectUiOptions, SelectWidget} from "./select-widget";
import {TextareaUiOptions, TextareaWidget} from "./textarea-widget";
import {PasswordInputWidget, PasswordUiOptions} from "./password-input-widget";
import {EmailInputUiOptions, EmailInputWidget} from "./email-input-widget";
import {ColorInputUiOptions, ColorInputWidget} from "./color-input-widget";
import {DateTimeInputUiOptions, DateTimeInputWidget} from "./date-time-input-widget";
import {InputAutocompleteUiOptions, InputAutocompleteWidget} from "./input-autocomplete-widget";
import {CalendarUiOptions, CalendarWidget} from "./calendar-widget";
import {IntlPhoneInputUiOptions, IntlPhoneInputWidget} from "./intl-phone-input-widget";
import {MoneyInputUiOptions, MoneyInputWidget} from "./money-input-widget/money-input-widget";
import {PhoneInputUiOptions, PhoneInputWidget} from "./phone-input-widget";
import {ToggleUiOptions, ToggleWidget} from "./toggle-widget";
import {CardInputUiOptions, CardInputWidget} from "./card-input-widget";
import {EditorUiOptions, EditorWidget} from "./editor-widget";
import {TextWidget} from "./text-widget";

const defaultWidgets = {
    BaseInput: InputWidget,
    TextWidget,
    FileWidget: AttachWidget,
    DateWidget: CalendarInputWidget,
    CheckboxWidget,
    CheckboxesWidget: CheckBoxGroupWidget,
    RadioWidget: RadioGroupWidget,
    RangeWidget: InputWidget,
    EmailWidget: EmailInputWidget,
    DateTimeWidget: DateTimeInputWidget,
    AltDateTimeWidget: DateTimeInputWidget,
    AltDateWidget: CalendarInputWidget,
    SelectWidget,
    TextareaWidget,
    PasswordWidget: PasswordInputWidget,
    ColorWidget: ColorInputWidget,
    URLWidget: InputWidget,
    // UpDownWidget,
    // HiddenWidget
}

const namedWidgets = {
    'checkbox': CheckboxWidget,
    'select': SelectWidget,
    'textarea': TextareaWidget,
    'attach': AttachWidget,
    'calendar': CalendarWidget,
    'checkbox-group': CheckBoxGroupWidget,
    'radio-group': RadioGroupWidget,
    'toggle': ToggleWidget,
    'input': InputWidget,
    'input-autocomplete': InputAutocompleteWidget,
    'intl-phone-input': IntlPhoneInputWidget,
    'phone-input': PhoneInputWidget,
    'money-input': MoneyInputWidget,
    'password-input': PasswordInputWidget,
    'calendar-input': CalendarInputWidget,
    'card-input': CardInputWidget,
    'color-input': ColorInputWidget,
    'email-input': EmailInputWidget,
    'date-time-input': DateTimeInputWidget,
    'editor': EditorWidget
};

export const widgets = {
    ...defaultWidgets,
    ...namedWidgets
}

export type Widgets = typeof widgets;
export type UiWidget = keyof typeof namedWidgets;
export type UiOptions =
    AttachUiOptions |
    CalendarInputUiOptions |
    CalendarUiOptions |
    CardInputUiOptions |
    CheckBoxGroupUiOptions |
    CheckboxUiOptions |
    ColorInputUiOptions |
    DateTimeInputUiOptions |
    EmailInputUiOptions |
    InputAutocompleteUiOptions |
    InputUiOptions |
    IntlPhoneInputUiOptions |
    MoneyInputUiOptions |
    PasswordUiOptions |
    PhoneInputUiOptions |
    RadioGroupUiOptions |
    SelectUiOptions |
    TextareaUiOptions |
    ToggleUiOptions |
    EditorUiOptions;
