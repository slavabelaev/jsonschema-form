import React, {useEffect, useState} from 'react';
import {EditIconLink} from "../edit-icon-link";
import {PropsEditorForm} from "../../components/props-editor-form";
import {useRoute} from "../../router/route-provider";
import {useThemeToggle} from "../theme-toggle";
import {FormProps} from "../../../package";
import {Loading} from "../loading";

type State = {
    loading: boolean;
    formProps?: FormProps;
}

export function PropsEditor() {
    const { theme = 'alfa-on-white' } = useThemeToggle();
    const { fetchFormProps, editPropsURL } = useRoute();
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
