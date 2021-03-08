import React, {PropsWithChildren} from 'react';
import {createCn} from "bem-react-classname";
import AFlink from 'arui-feather/link';
import './link.scss';

const cn = createCn('md-link');

export function Link(props: PropsWithChildren<any>) {
    const { href, target } = props;
    return (
        <AFlink
            className={cn()}
            url={href}
            target={target}
            text={props.children}
        />
    )
}
