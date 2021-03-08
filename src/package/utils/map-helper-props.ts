import {WidgetProps} from "../types/widget-props";
import {HelperProps} from "../components/helper";

export function mapHelperProps(props: WidgetProps): HelperProps {
    const { schema, rawErrors } = props;
    const hasErrors = Boolean(rawErrors);
    const { size } = props.formContext || {};
    return {
        size,
        text: rawErrors?.[0] || schema.description,
        isError: hasErrors,
    }
}
