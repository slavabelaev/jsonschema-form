import React, {PropsWithChildren} from "react";
import {createCn} from "bem-react-classname";
import {Paragraph as AFParagraph} from "arui-feather/paragraph";
import './paragraph.scss';

const cn = createCn('md-paragraph');

export function Paragraph(props: PropsWithChildren<any>) {
    return (
        <AFParagraph className={cn()}>
            {props.children}
        </AFParagraph>
    )
}
