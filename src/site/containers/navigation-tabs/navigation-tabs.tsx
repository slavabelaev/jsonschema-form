import React, {ReactNode, useContext} from 'react';
import {useHistory} from "react-router-dom";
import {createCn} from "bem-react-classname";
import {Tabs} from "arui-feather/tabs";
import {TabItem} from "arui-feather/tab-item";
import {WidgetSchemaForm} from "../../components/widget-schema-form";
import {ThemeToggle, ThemeToggleContext} from "../theme-toggle";
import {Article} from "../article";
import {RouteContext} from "../../router/route-provider";
import {PropsEditor} from "../props-editor";
import './navigation-tabs.scss';

enum TabId {
    EDITOR = 'editor',
    DESCRIPTION = 'description',
    OPTIONS = 'options',
    COPY_CODE = 'copy-code',
}

type Tab = {
    id: TabId;
    title: ReactNode;
    renderContent: () => ReactNode;
}

const cn = createCn('navigation-tabs');

export function NavigationTabs() {
    const { theme = 'alfa-on-white' } = useContext(ThemeToggleContext);
    const { docsURL, fetchFormProps } = useContext(RouteContext);
    const history = useHistory();
    const { location } = history || {};
    const { pathname } = location || {};
    const widgetName = pathname.match(/widget\/(.*?)($|\/)/)?.[1];
    const activeTabId = location?.hash?.substr(1) || TabId.EDITOR;
    const tabList: Tab[] = [];

    const renderSampleEditor = () => <PropsEditor />

    const renderUiOptions = () => {
        return widgetName && <WidgetSchemaForm widgetName={widgetName} />
    }

    if (fetchFormProps) tabList.push({
        id: TabId.EDITOR,
        title: 'Примеры',
        renderContent: renderSampleEditor
    });

    if (docsURL) tabList.push({
        id: TabId.DESCRIPTION,
        title: 'Описание',
        renderContent: () => <Article />
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
