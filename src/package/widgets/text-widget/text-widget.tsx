import {createCn} from "bem-react-classname";
import {WidgetProps} from "../../types/widget-props";
import {InputWidget} from "../input-widget";
import {EditorWidget, mapEditorLanguage} from "../editor-widget";
import "./text-widget.scss";

const cn = createCn('text-widget');

export function TextWidget(props: WidgetProps) {
    const isEditor = mapEditorLanguage(props);
    if (isEditor) return EditorWidget(props);
    return InputWidget(props);
}
