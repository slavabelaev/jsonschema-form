import React, {ReactNode} from 'react';
import {useHistory} from "react-router-dom";
import {createCn} from "bem-react-classname";
import {Tabs} from "arui-feather/tabs";
import {TabItem} from "arui-feather/tab-item";
import {WidgetSchemaForm} from "../../components/widget-schema-form";
import {EditIconLink} from "../edit-icon-link";
import {fromMarkdown} from "../../../package/utils/from-markdown";
import {FormProps} from "../../../package";
import {FormPropsEditor} from "../form-props-editor";
import {ThemeToggle} from "../theme-toggle";
import './navigation-tabs.scss';

enum TabId {
    EDITOR = 'editor',
    DESCRIPTION = 'description',
    OPTIONS = 'options'
}

type Tab = {
    id: TabId;
    title: ReactNode;
    renderContent: () => ReactNode;
}

export type NavigationTabsProps = {
    initialFormProps?: FormProps;
    docs?: ReactNode;
    editDocsURL?: string;
    editPropsURL?: string;
    theme?: FormProps['theme'];
}

const cn = createCn('navigation-tabs');

const EDIT_ICON_LINK_TEXT = 'Редактировать на GitHub';

export function NavigationTabs({
    docs,
    initialFormProps,
    editPropsURL,
    editDocsURL,
    theme = 'alfa-on-white'
}: NavigationTabsProps) {
    const history = useHistory();
    const { location } = history || {};
    const { pathname } = location || {};
    const widgetName = pathname.match(/widget\/(.*?)($|\/)/)?.[1];
    const activeTabId = location?.hash?.substr(1) || TabId.EDITOR;
    const tabList: Tab[] = [];

    const renderSampleEditor = () => {
        const editIconLink = editPropsURL && (
            <EditIconLink
                url={editPropsURL}
                hint={EDIT_ICON_LINK_TEXT}
                theme={theme}
            />
        )

        return (
            <FormPropsEditor
                id={pathname}
                className={cn('sample-editor')}
                initialProps={initialFormProps}
                toolbarActions={editIconLink}
            />
        );
    }

    const renderDocs = () => {
        const editIconLink = editDocsURL && (
            <EditIconLink
                className={cn('edit-icon-link')}
                url={editDocsURL}
                hint={EDIT_ICON_LINK_TEXT}
                theme={theme}
            />
        )

        return docs && (
            <div className={cn('docs')}>
                <section className={cn('description')}>
                    {editIconLink}
                    {fromMarkdown(docs)}
                </section>
            </div>
        )
    }

    const renderUiOptions = () => {
        return widgetName && <WidgetSchemaForm widgetName={widgetName} />
    }

    if (initialFormProps) tabList.push({
        id: TabId.EDITOR,
        title: 'Код и примеры',
        renderContent: renderSampleEditor
    });

    if (docs) tabList.push({
        id: TabId.DESCRIPTION,
        title: 'Описание',
        renderContent: renderDocs
    });

    if (widgetName) tabList.push({
        id: TabId.OPTIONS,
        title: 'Опции',
        renderContent: renderUiOptions
    });

    const renderTabItem = (item: Tab) => (
        <TabItem
            key={item.id}
            className={cn('tab-item')}
            size='m'
            theme={theme}
            view={'blue'}
            id={item.id}
            checked={activeTabId === item.id}
            onClick={() => history.push({ hash: item.id })}
        >
            {item.title}
        </TabItem>
    );

    const actions = (
        <div className={cn('actions')}>
            <ThemeToggle
                className={cn('theme-switch')}
            />
        </div>
    )

    const tabs = (
        <Tabs
            className={cn('tabs')}
            theme={theme}
        >
            {tabList.map(renderTabItem)}
            {actions}
        </Tabs>
    );

    const tabContent = tabList.find(item => item.id === activeTabId)?.renderContent();

    return (
        <div className={cn({ theme })}>
            {tabs}
            {tabContent}
        </div>
    )
}
