import React from "react";
import {createCn} from "bem-react-classname";
import {useHistory, NavLink} from "react-router-dom";
import isEmpty from "lodash.isempty";
import {Input} from "arui-feather/input";
import {Link} from "arui-feather/link";
import SearchIcon from "arui-feather/icon/action/search";
import {RouteItem, Routes} from "../../routes";
import {CollapseItem} from "../../../package/components/collapse-item";
import {CollapseNav} from "../collapse-nav";
import './navigation.scss';

const cn = createCn('navigation');

export type NavigationProps = {
    routes: Routes;
    onChange?: (path: string) => void;
}

type RouteEntry = [string, RouteItem];

const hasSuggestion = (text: string = '', query: string = '') => text.toLowerCase().match(query.toLowerCase());

const filterRoutes = (routes: Routes = {}, query: string = '') => {
    Object.entries(routes).forEach(([id, item]) => {
        const hasMatch = hasSuggestion(item.title || id, query);
        if (item.routes) {
            filterRoutes(item.routes, query);
        } else if (!hasMatch) {
            delete routes[id];
        }
    });
}

const cloneRoutesThenFilter = (routes: Routes = {}, query: string = ''): Routes => {
    if (!query) return routes;
    const nestedClonedRoutes = JSON.parse(JSON.stringify(routes));
    filterRoutes(nestedClonedRoutes, query);
    return nestedClonedRoutes;
}

export function Navigation({ routes, onChange }: NavigationProps) {
    const history = useHistory();
    const { hash, search } = history.location || {};
    const query = new URLSearchParams(history.location.search).get('q') || '';
    const filteredRoutes = cloneRoutesThenFilter(routes, query);

    const renderLink = (item: RouteItem, id: string, pathTo?: string) => {
        const { url } = item || {};
        const urlHash = item.hash ? `#${item.hash}` : hash;
        const to = `${pathTo}/${id}${search}${urlHash}`;

        if (url) {
            return (
                <Link
                    key={id}
                    className={cn('nav-link')}
                    url={url}
                    target={'_blank'}
                >
                    {item.title || id}
                </Link>
            )
        }

        return (
            <NavLink
                key={id}
                className={cn('nav-link')}
                activeClassName={cn('nav-link_active')}
                to={to}
                onClick={() => onChange?.(to)}
            >
                {item.title || id}
            </NavLink>
        );
    }

    const renderNav = (route: RouteItem, id: string, parentPath = '') => {
        const pathTo = `${parentPath}/${id}`;
        const mapItem = ([id, item]: [string, RouteItem]) => {
            const renderItem = item.routes ? renderNav : renderLink;
            return renderItem(item, id, pathTo);
        };
        const routes = route.routes ? Object.entries(route.routes).map(mapItem) : null;
        const isExpanded = history.location.pathname.includes(pathTo);
        const hasRoutes = !isEmpty(route.routes);

        return (parentPath && hasRoutes) ? (
            <CollapseNav
                key={id}
                className={cn('collapse-nav')}
                headerText={route.title || id}
                isExpanded={isExpanded}
            >
                {routes}
            </CollapseNav>
        ) : routes;
    };

    const header = (
        <header className={cn('header')}>
            <Input
                className={cn('search-input')}
                placeholder='Поиск'
                size='l'
                clear={true}
                width='available'
                value={query}
                leftAddons={<SearchIcon size='s' />}
                onChange={(value) => history.push({
                    search: `?q=${value}`
                })}
            />
        </header>
    );

    const mapCollapseItem = ([id, route]: RouteEntry) => {
        const hasRoutes = !isEmpty(route.routes);
        return hasRoutes ? (
            <CollapseItem
                key={id}
                label={route?.title}
                hint={route?.description}
                children={renderNav(route, id)}
                isExpanded={history.location.pathname.startsWith(`/${id}`)}
                disablePadding={true}
                size={"s"}
            />
        ) : null;
    };

    const collapseList = Object.entries(filteredRoutes).map(mapCollapseItem);

    return (
        <div className={cn()}>
            {header}
            {collapseList}
        </div>
    );
}
