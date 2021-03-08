import {ReactMarkdownProps} from "react-markdown";
import {Paragraph} from "./paragraph";
import {Code} from "./code";
import {Heading} from "./heading";
import {List} from "./list";
import {ListItem} from "./list-item";
import {Link} from "./link";
import {Blockquote} from "./blockquote";

export const renderers: ReactMarkdownProps['renderers'] = {
    paragraph: Paragraph,
    code: Code,
    heading: Heading,
    list: List,
    listItem: ListItem,
    link: Link,
    blockquote: Blockquote,
}
