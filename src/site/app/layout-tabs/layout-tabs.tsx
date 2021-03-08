import React, {ReactNode} from 'react';
import {useHistory} from "react-router-dom";
import {createCn} from "bem-react-classname";
import {Tabs} from "arui-feather/tabs";
import {TabItem} from "arui-feather/tab-item";
import {EditorForm, EditorFormProps} from "../editor-form";
import {WidgetSchemaForm} from "../../components/widget-schema-form";
import {EditIconLink} from "../edit-icon-link";
import {fromMarkdown} from "../../../package/utils/from-markdown";
import './layout-tabs.scss';

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

export type LayoutTabsProps = {
    editorProps: EditorFormProps;
    docs?: ReactNode;
    editDocsURL?: string;
    editPropsURL?: string;
}

const cn = createCn('layout-tabs');

export function LayoutTabs({
    docs,
    editorProps,
    editPropsURL,
    editDocsURL
}: LayoutTabsProps) {
    const history = useHistory();
    const { location } = history || {};
    const { pathname } = location || {};
    const widgetName = pathname.match(/widget\/(.*?)($|\/)/)?.[1];
    const activeTabId = location?.hash?.substr(1) || TabId.EDITOR;
    const tabList: Tab[] = [];

    const renderEditor = () => {
        return (
            <EditorForm
                className={cn('editor-form')}
                size={'s'}
                editURL={editPropsURL}
                {...editorProps}
            />
        );
    }

    const renderDocs = () => {
        const editIconLink = editDocsURL && (
            <EditIconLink
                className={cn('docs-edit-link')}
                url={editDocsURL}
                hint={'Редактировать на GitHub'}
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

    if (editorProps) tabList.push({
        id: TabId.EDITOR,
        title: 'Редактор',
        renderContent: renderEditor
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
            theme={'alfa-on-white'}
            view={'blue'}
            id={item.id}
            checked={activeTabId === item.id}
            onClick={() => history.push({ hash: item.id })}
        >
            {item.title}
        </TabItem>
    );

    const tabs = (
        <Tabs className={cn('tabs')}>
            {tabList.map(renderTabItem)}
        </Tabs>
    );

    const tabContent = tabList.find(item => item.id === activeTabId)?.renderContent();

    return (
        <div className={cn()}>
            {tabs}
            {tabContent}
        </div>
    )
}
