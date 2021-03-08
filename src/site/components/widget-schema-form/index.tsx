import React from "react";
import {WidgetSchemaFormProps} from "./widget-schema-form";
import {Spin} from "arui-feather/spin";

const LazyWidgetSchemaForm = React.lazy(() => import('./widget-schema-form'));

export function WidgetSchemaForm(props: WidgetSchemaFormProps) {
    return (
        <React.Suspense fallback={<Spin />}>
            <LazyWidgetSchemaForm {...props} />
        </React.Suspense>
    )
}
