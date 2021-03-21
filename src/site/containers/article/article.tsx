import React, {useContext, useEffect, useState} from "react";
import {createCn} from "bem-react-classname";
import {Markdown} from "../../../package/components/markdown";
import {ThemeToggleContext} from "../theme-toggle";
import {RouteContext} from "../../router/route-provider";
import {EditIconLink} from "../edit-icon-link";
import {Loading} from "../loading";
import './article.scss';

const cn = createCn('article');

type State = {
    loading: boolean;
    markdownText?: string
}

export function Article() {
    const { theme } = useContext(ThemeToggleContext);
    const { docsURL, editDocsURL } = useContext(RouteContext);
    const [state, setState] = useState<State>({
        loading: false,
        markdownText: undefined
    });
    const { loading, markdownText } = state;

    useEffect(() => {
        if (!docsURL) return;

        setState({
            loading: true,
            markdownText: undefined
        });

        fetch(docsURL)
            .then(response => response.text())
            .then(text => {
                setState({
                    loading: false,
                    markdownText: text
                })
            });
    }, [docsURL]);

    if (loading || !markdownText) {
        return <Loading />
    }

    const editIconLink = editDocsURL && (
        <EditIconLink
            className={cn('edit-icon-link')}
            url={editDocsURL}
            hint={'Редактировать на GitHub'}
            theme={theme}
        />
    )

    const content = (
        <div className={cn('content')}>
            <Markdown
                source={markdownText}
            />
        </div>
    )

    return (
        <article className={cn()}>
            {editIconLink}
            {content}
        </article>
    )
}
