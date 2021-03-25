import React from "react";
import {createCn} from "bem-react-classname";
import isEmpty from "lodash.isempty";
import {ArrayFieldTemplateProps} from "@rjsf/core";
import {Button} from "arui-feather/button";
import {Paragraph} from "arui-feather/paragraph";
import Add from "arui-feather/icon/action/add";
import {
    TemplateConfig,
    TemplateConfigProvider, useThemeConfig
} from "../../providers/template-config-provider";
import {Grid, GridCell} from "../../components/grid";
import {toType} from "../../utils/to-type";
import {isGroup} from "../../utils/json-schema";
import {Card} from "../../components/card";
import {ControlItem} from "../../components/control-item";
import {SymbolIcon} from "../../components/symbol-icon";
import {fromMarkdown} from "../../utils/from-markdown";
import './array-field-template.scss';
import {Header} from "../../components/header";
import {ErrorList} from "../../components/error-list";

const cn = createCn('array-field-template');

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: true,
    displayHint: true
}

export function mapArrayFieldFooter(props: ArrayFieldTemplateProps) {
    const { canAdd, onAddClick, formContext } = props;
    const { theme, size } = formContext || {};

    const addButton = canAdd ? (
        <Button
            className={cn('add-button')}
            onClick={onAddClick}
            icon={<Add theme={theme} size={size} />}
            theme={theme}
            size={size}
        >
            Добавить
        </Button>
    ) : null;

    return addButton ? (
        <footer className={cn('footer')}>
            {addButton}
        </footer>
    ) : null;
}

function mapItems(props: ArrayFieldTemplateProps) {
    const { items, formContext } = props || {};
    const { theme, size } = formContext || {};
    const hasItems = items.length > 0;

    return hasItems ? (
        <Grid className={cn('items')}>
            {items.map(item => {
                const { index, children, className } = item;
                const orderNumber = index + 1;
                const { uiSchema, schema, formData } = children?.props || {};
                const isEmptySchema = isEmpty(schema);
                const isGroupSchema = isGroup(schema);
                const classNames = [cn('item'), className].join(' ');
                const onRemove = item.hasRemove
                    ? item.onDropIndexClick(index)
                    : undefined;
                const reorderProps = (item.hasMoveDown || item.hasMoveUp) ? {
                    onClickUp: item.onReorderClick(index, index - 1),
                    onClickDown: item.onReorderClick(index, index + 1),
                    disabledUp: !item.hasMoveUp,
                    disabledDown: !item.hasMoveDown
                } : undefined;

                const emptyContent = isEmptySchema && (
                    <Paragraph
                        className={cn('empty-content')}
                        children={toType(formData, 'string')}
                        theme={theme}
                    />
                )

                const content = emptyContent || children;

                const card = isGroupSchema && (
                    <Card
                        icon={(
                            <SymbolIcon
                                symbol={orderNumber}
                                theme={theme}
                                size={size}
                            />
                        )}
                        title={schema?.title}
                        hint={fromMarkdown(schema?.description)}
                        onRemove={onRemove}
                        reorderProps={reorderProps}
                        theme={theme}
                        size={size}
                    >
                        <TemplateConfigProvider value={{
                            displayLabel: false,
                            displayHint: false
                        }}>
                            {content}
                        </TemplateConfigProvider>
                    </Card>
                )

                const field = card || (
                    <ControlItem
                        onRemove={onRemove}
                        reorderProps={reorderProps}
                        theme={theme}
                        size={size}
                    >
                        {content}
                    </ControlItem>
                )

                return (
                    <GridCell
                        key={item.key}
                        className={classNames}
                        column={uiSchema?.['ui:gridColumn']}
                        row={uiSchema?.['ui:gridRow']}
                    >
                        {field}
                    </GridCell>
                )
            })}
        </Grid>
    ) : null;
}

export function mapArrayFieldTemplateHeader(props: ArrayFieldTemplateProps, templateConfig: TemplateConfig) {
    const { displayLabel, displayHint } = templateConfig || {};
    const { title, formContext, schema } = props;
    const { description } = schema || {};
    // @ts-ignore
    const { rawErrors } = props;
    const { theme, size } = formContext || {};

    const errorList = (
        <ErrorList
            errors={rawErrors?.map(fromMarkdown)}
            theme={theme}
        />
    );

    const header = (
        <Header
            className={cn('header')}
            title={displayLabel ? title : undefined}
            description={displayHint ? fromMarkdown(description) : undefined}
            theme={theme}
            size={size}
        />
    )

    return (
        <React.Fragment>
            {header}
            {errorList}
        </React.Fragment>
    )
}

export function ArrayFieldTemplate(props: ArrayFieldTemplateProps) {
    const templateConfig = useThemeConfig();
    const { theme = 'alfa-on-white' } = props.formContext || {};
    const { className } = props;
    const classNames = [cn({ theme }), className].join(' ');
    const header = mapArrayFieldTemplateHeader(props, templateConfig);
    const items = mapItems(props);
    const footer = mapArrayFieldFooter(props);

    return items || footer ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={classNames}>
                {header}
                {items}
                {footer}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
