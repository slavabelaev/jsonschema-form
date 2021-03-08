import React, {PropsWithChildren} from 'react';
import {createCn} from "bem-react-classname";
import './list.scss';

const cn = createCn('md-list');

export function List(props: PropsWithChildren<any>) {
    return (
        <ul className={cn()}>
            {props.children}
        </ul>
    );
}
