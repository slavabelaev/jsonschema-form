import {InputAutocomplete} from "arui-feather/input-autocomplete";
// @ts-ignore
const syncKeyboardNavigationWithScroll = InputAutocomplete.prototype.syncKeyboardNavigationWithScroll;
// @ts-ignore исправление ошибки при навигации по опциям на клавиатуре
InputAutocomplete.prototype.syncKeyboardNavigationWithScroll = (highlightedItem: any) => highlightedItem && syncKeyboardNavigationWithScroll(highlightedItem);
