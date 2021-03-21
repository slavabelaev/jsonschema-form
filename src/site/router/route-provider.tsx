import React, {PropsWithChildren} from 'react';
import {useHistory} from "react-router-dom";
import {RouteItem, Routes, routes} from "./routes";
import packageJSON from "../../../package.json";

export type RouteContextProps = {
    fetchFormProps?: () => Promise<{ default: any }>,
    docsURL?: string;
    editDocsURL?: string;
    editPropsURL?: string;
}

export const RouteContext = React.createContext<RouteContextProps>({});

const { Provider } = RouteContext;

export type RouteProviderProps = PropsWithChildren<{}>;

const getRoute = (routes: Routes = {}, ids: string[] = []): RouteItem | undefined => {
    const id = ids.shift() as string;
    const route = routes[id];

    return ids.length ? getRoute(route?.routes, ids) : route;
}

export function RouteProvider({ children }: RouteProviderProps) {
    const history = useHistory();
    const { location } = history || {};
    const { pathname } = location || {};
    const ids = pathname.split('/').filter(Boolean);
    const route = getRoute(routes, ids) || {};
    const { editDocsPath, editFormPropsPath, ...routeProps } = route || {};
    const editBaseURL = packageJSON.repository.url + '/edit/master/';
    const editDocsUrl = editBaseURL + editDocsPath;
    const editPropsUrl = editBaseURL + editFormPropsPath;

    return (
        <Provider value={{
            editDocsURL: editDocsUrl,
            editPropsURL: editPropsUrl,
            ...routeProps
        }}>
            {children}
        </Provider>
    )
}
