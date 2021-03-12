import React, {ReactNode} from 'react';
import {useHistory} from "react-router-dom";
import {createCn} from "bem-react-classname";
import {Tabs} from "arui-feather/tabs";
import {TabItem} from "arui-feather/tab-item";
import {WidgetSchemaForm} from "../../components/widget-schema-form";
import {EditIconLink} from "../edit-icon-link";
import {fromMarkdown} from "../../../package/utils/from-markdown";
import {FormProps} from "../../../package";
import {SampleEditor} from "../sample-editor";
import './navigation-tabs.scss';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

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
        return (
            <SampleEditor
                className={cn('sample-editor')}
                initialFormProps={initialFormProps}
            />
        );
    }

    const renderDocs = () => {
        const editIconLink = editDocsURL && (
            <EditIconLink
                className={cn('edit-icon-link')}
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

    if (initialFormProps) tabList.push({
        id: TabId.EDITOR,
        title: 'Код и примеры',
        renderContent: renderSampleEditor
    });

    if (docs) tabList.push({
        id: TabId.DESCRIPTION,
        title: 'Свойства и методы',
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

    const tabs = (
        <Tabs
            className={cn('tabs')}
            theme={theme}
        >
            {tabList.map(renderTabItem)}
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
