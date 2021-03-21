import React, {useContext, useEffect, useState} from 'react';
import {EditIconLink} from "../edit-icon-link";
import {PropsEditorForm} from "../../components/props-editor-form";
import {RouteContext} from "../../router/route-provider";
import {ThemeToggleContext} from "../theme-toggle";
import {FormProps} from "../../../package";
import {Loading} from "../loading";

type State = {
    loading: boolean;
    formProps?: FormProps;
}

export function PropsEditor() {
    const { theme = 'alfa-on-white' } = useContext(ThemeToggleContext);
    const { fetchFormProps, editPropsURL } = useContext(RouteContext);
    const [state, setState] = useState<State>({
        loading: false,
        formProps: undefined
    });
    const { loading, formProps } = state || {};

    useEffect(() => {
        fetchFormProps?.().then(({ default: formProps }) => {
            setState({
                loading: false,
                formProps
            })
        })
    }, [editPropsURL])

    if (loading || !formProps) {
        return <Loading />
    }

    const editIconLink = editPropsURL && (
        <EditIconLink
            url={editPropsURL}
            hint={'Редактировать на GitHub'}
            theme={theme}
        />
    )

    return (
        <PropsEditorForm
            id={editPropsURL || '-'}
            initialProps={formProps}
            toolbarActions={editIconLink}
        />
    );
}
