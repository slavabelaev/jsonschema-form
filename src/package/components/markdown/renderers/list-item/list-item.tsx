import React, {PropsWithChildren} from "react";
import {createCn} from "bem-react-classname";
import './list-item.scss';

const cn = createCn('md-list-item');

export function ListItem(props: PropsWithChildren<any>) {
    return (
        <li className={cn()}>
            {props.children}
        </li>
    );
}
