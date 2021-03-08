import React from "react";
import {createCn} from "bem-react-classname";
import AFHeading, {HeadingProps} from "arui-feather/heading";
import './heading.scss';

const cn = createCn('md-heading');

export function Heading(props: any) {
    const { level, children } = props;
    const size = [, 'xl', 'l', 'm', 's', 'xs']?.[level] as HeadingProps['size'];

    return (
        <AFHeading
            className={cn()}
            size={size}
            hasDefaultMargins={false}
        >
            {children}
        </AFHeading>
    );
}
