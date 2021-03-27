import React, {ReactNode} from 'react';
import {useHistory} from "react-router-dom";
import {createCn} from "bem-react-classname";
import {Tabs} from "arui-feather/tabs";
import {TabItem} from "arui-feather/tab-item";
import {WidgetSchemaForm} from "../../components/widget-schema-form";
import {ThemeToggle, useThemeToggle} from "../theme-toggle";
import {Article} from "../article";
import {useRoute} from "../../router/route-provider";
import {PropsEditor} from "../props-editor";
import './navigation-tabs.scss';

enum TabId {
    EDITOR = '#editor',
    DESCRIPTION = '#description',
    OPTIONS = '#options'
}

type Tab = {
    id: TabId;
    title: ReactNode;
    renderContent: () => ReactNode;
}

const cn = createCn('navigation-tabs');

export function NavigationTabs() {
    const { theme = 'alfa-on-white' } = useThemeToggle();
    const { docsURL, fetchFormProps } = useRoute();
    const history = useHistory();
    const { location } = history || {};
    const { pathname, hash } = location || {};
    const widgetName = pathname.match(/widget\/(.*?)($|\/)/)?.[1];
    const hasFormProps = Boolean(fetchFormProps);
    const hasDocs = Boolean(docsURL);
    const hasOptions = Boolean(widgetName);
    const tabList: Tab[] = [];

    if (hasFormProps) tabList.push({
        id: TabId.EDITOR,
        title: 'Примеры',
        renderContent: () => <PropsEditor />
    });

    if (hasDocs) tabList.push({
        id: TabId.DESCRIPTION,
        title: 'Описание',
        renderContent: () => <Article />
    });

    if (hasOptions) tabList.push({
        id: TabId.OPTIONS,
        title: 'Опции',
        renderContent: () => widgetName && <WidgetSchemaForm widgetName={widgetName} />
    });

    const activeTabId = tabList.find(item => item.id === hash)
        ? hash
        : (
            hasFormProps ? TabId.EDITOR :
            hasDocs ? TabId.DESCRIPTION :
            hasOptions ? TabId.OPTIONS : undefined
        );

    console.log('activeTabId', activeTabId, tabList);

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
