import {ReactNode} from "react";
import {WidgetProps} from "../types/widget-props";
import {fromMarkdown} from "./from-markdown";

export function mapError({ rawErrors = [] }: WidgetProps): ReactNode {
    const errorMessage = rawErrors?.[0];
    return errorMessage
        ? fromMarkdown(errorMessage)
        : errorMessage;
}
