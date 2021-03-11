import React, {ReactNode} from "react";
import {createCn} from "bem-react-classname";
import {Plate, PlateProps} from "arui-feather/plate";
import {List, ListProps} from "arui-feather/list";
import './error-list.scss';

const cn = createCn('error-list');

export type ErrorListProps = Omit<PlateProps, 'type'> & {
    errors?: ReactNode[];
}

export function ErrorList(props: ErrorListProps) {
    const { errors, className, theme, ...otherProps } = props;
    const rootClassName = [cn(), className].join(' ');
    const errorMessages = errors?.filter(Boolean) || [];

    if (!errorMessages?.length) return null;

    const renderChildren = () => {
        const items: ListProps['items'] = errorMessages.map((error, index) => ({
            key: String(index),
            value: error
        }));

        return (
            <List
                className={cn('list')}
                items={items}
                theme={theme}
            />
        );
    }

    return (
        <Plate
            className={rootClassName}
            type='error'
            theme={theme}
            {...otherProps}
        >
            {renderChildren()}
        </Plate>
    );
}
