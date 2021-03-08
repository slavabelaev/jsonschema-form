import React, {ReactNode} from "react";
import {Markdown} from "../components/markdown";

export function fromMarkdown(content: ReactNode | undefined) {
    switch (typeof content) {
        case "string": return(
            <Markdown
                className={'from-markdown'}
                children={content}
            />
        );
        default: return content;
    }
}
