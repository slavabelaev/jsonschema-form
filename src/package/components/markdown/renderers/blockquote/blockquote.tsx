import React, {PropsWithChildren} from 'react';
import {createCn} from "bem-react-classname";
import {Plate} from "arui-feather/plate";
import './blockquote.scss';

const cn = createCn('md-blockquote');

export function Blockquote(props: PropsWithChildren<any>) {
    return (
        <Plate
            className={cn()}
            type='common'
        >
            {props.children}
        </Plate>
    );
}
