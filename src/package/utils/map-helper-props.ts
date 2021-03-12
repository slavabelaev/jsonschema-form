import {WidgetProps} from "../types/widget-props";
import {HelperProps} from "../components/helper";

export function mapHelperProps(props: WidgetProps): HelperProps {
    const { schema, rawErrors } = props;
    const hasErrors = Boolean(rawErrors);
    const { size, theme } = props.formContext || {};
    return {
        size,
        theme,
        text: rawErrors?.[0] || schema.description,
        isError: hasErrors,
    }
}
