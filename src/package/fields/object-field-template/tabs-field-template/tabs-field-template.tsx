import React, {useState} from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {TabItem} from "arui-feather/tab-item";
import {Tabs} from "arui-feather/tabs";
import {mapObjectFieldButtons} from "../object-field-template";
import {
    TemplateConfig,
    TemplateConfigProvider
} from "../../../providers/template-config-provider";
import {fromMarkdown} from "../../../utils/from-markdown";
import {Tooltip} from "../../../components/tooltip";
import './tabs-field-template.scss';

const cn = createCn('tabs-field-template');

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: false,
    displayHint: false
}

export function TabsFieldTemplate(props: ObjectFieldTemplateProps) {
    const { properties, formContext } = props;
    const { theme, size } = formContext || {};
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTab = properties?.[activeIndex];
    const buttons = mapObjectFieldButtons(props);

    const renderTabItem = (property: any, index: number) => {
        const { name, content } = property || {};
        const { props } = content || {};
        const { schema } = props || {};
        const { title, description } = schema || {};
        const label = typeof title === 'string' ? title : name;
        const checked = activeIndex === index;
        const hint = fromMarkdown(description);
        const handleClick = () => setActiveIndex(index);

        const hintIcon = hint && (
            <Tooltip
                className={cn('hint-icon')}
                popupContent={hint}
                size={size}
                theme={theme}
                popupProps={{
                    directions: ["bottom-center"]
                }}
            />
        );

        return (
            <TabItem
                className={cn('tab-item')}
                checked={checked}
                onClick={handleClick}
                size={size}
                theme={theme}
            >
                {label}
                {hintIcon}
            </TabItem>
        )
    }

    const items = properties?.map(renderTabItem);
    const tabs = items && (
        <Tabs scrollable={true} theme={theme}>
            {items}
        </Tabs>
    )

    const tabContent = activeTab?.content && (
        <div className={cn('tab-content')}>
            {activeTab?.content}
        </div>
    )

    return tabs || buttons ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={cn()}>
                {tabs}
                {tabContent}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
