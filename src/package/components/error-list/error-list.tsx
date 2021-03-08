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
    const { errors, className, ...otherProps } = props;
    const errorMessages = errors?.filter(Boolean) || [];

    if (!errorMessages?.length) return null;

    const renderChildren = () => {
        if (errorMessages.length > 1) {
            const items: ListProps['items'] = errorMessages.map((error, index) => ({
                key: String(index),
                value: error
            }));

            return (
                <List
                    className={cn('list')}
                    items={items}
                />
            );
        }

        return errorMessages?.[0] || null;
    }

    return (
        <Plate
            className={[cn(), className].join(' ')}
            type='error'
            {...otherProps}
        >
            {renderChildren()}
        </Plate>
    );
}
