import {samples} from './samples';
import {uiSchema} from "./ui-schema";
import {jsonSchema} from "./json-schema";
import {getStarted} from "./get-started";
import {resources} from "./recources";

export type RouteItem = {
    title?: string;
    description?: string;
    fetchFormProps?: () => Promise<any>;
    docsURL?: string;
    editDocsPath?: string;
    editFormPropsPath?: string;
    url?: string;
    hash?: string;
    routes?: Routes;
}

export type Routes = {
    [pathSegment: string]: RouteItem;
}

export const routes: Routes = {
    'get-started': {
        title: 'Как начать',
        routes: getStarted
    },
    'json-schema': {
        title: "JSON Schema",
        routes: jsonSchema
    },
    'ui-schema': {
        title: "UI Schema",
        routes: uiSchema
    },
    'examples': {
        title: "Примеры",
        routes: samples
    },
    'resources': {
        title: "Ссылки",
        routes: resources
    }
};
