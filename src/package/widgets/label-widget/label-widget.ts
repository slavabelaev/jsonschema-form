import {LabelProps} from "arui-feather/label";
import {createCn} from "bem-react-classname";
import {WidgetProps} from "../../types/widget-props";
import './label-widget.scss';

const cn = createCn('label-widget');

export function mapLabelProps(props: WidgetProps): LabelProps {
    const { schema, formContext } = props;
    const { size, theme } = formContext || {};
    const className = [cn(), props.className].join(' ');
    return {
        className,
        children: schema.title,
        size,
        theme
    };
}
