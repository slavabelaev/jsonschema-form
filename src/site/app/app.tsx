import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createCn} from 'bem-react-classname';
import SearchIcon from 'arui-feather/icon/action/search';
import DraftIcon from 'arui-feather/icon/entity/draft';
import FavoriteIcon from 'arui-feather/icon/ui/favorite';
import Form, {FormProps} from '../../package';
import {RouteItem, routes, Routes} from "../routes";
import {Navigation} from "../components/navigation";
import {NavigationTabs} from "./navigation-tabs";
import packageJSON from "../../../package.json";
import {parseJSON, toJSON} from "../utils/json";
import {BottomBar} from "../components/bottom-bar";
import './app.scss';

const toText = (response: any) => response.text();

const getRoute = (routes: Routes = {}, ids: string[] = []): RouteItem | undefined => {
    const id = ids.shift() as string;
    const route = routes[id];

    return ids.length ? getRoute(route?.routes, ids) : route;
}

const scrollIntoView = (element?: HTMLDivElement | null) => {
    element?.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
}

const cn = createCn('app');

function App() {
    const history = useHistory();
    const menuRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const asideRef = useRef<HTMLDivElement>(null);
    const { location } = history || {};
    const { pathname } = location || {};
    const ids = pathname.split('/').filter(Boolean);
    const route = getRoute(routes, ids);
    const { fetchFormProps, docsUrl, docsEditPath, formPropsEditPath } = route || {};
    const editBaseURL = packageJSON.repository.url + '/edit/main/';
    const editDocsUrl = editBaseURL + docsEditPath;
    const editPropsUrl = editBaseURL + formPropsEditPath;
    const [docs, setDocs] = useState<string | null>(null);
    const [initialFormProps, setInitialFormProps] = useState<FormProps | null>(null);
    const { theme = 'alfa-on-white' } = initialFormProps || {};

    const handleNavigationChange = () => {
        setTimeout(() => scrollIntoView(mainRef?.current), 1);
    }

    useEffect(() => {
        if (docsUrl) {
            fetch(docsUrl).then(toText).then(setDocs);
        } else {
            setDocs(null);
        }

        if (fetchFormProps) {
            fetchFormProps().then(({ default: formProps }) => setInitialFormProps(formProps));
        } else {
            setInitialFormProps(null);
        }
    }, [pathname]);

    const navigationTabs = (
        <NavigationTabs
            initialFormProps={initialFormProps || undefined}
            docs={docs}
            editDocsURL={editDocsUrl}
            editPropsURL={editPropsUrl}
        />
    );

    const bottomBar = (
        <BottomBar
            className={cn('bottom-bar')}
            items={[
                { text: 'Навигация', icon: <SearchIcon size='s' /> },
                { text: 'Результат', icon: <FavoriteIcon /> },
                { text: 'Редактор', icon: <DraftIcon size='s' /> },
            ]}
            onChange={(index) => {
                switch (index) {
                    case 0:
                        scrollIntoView(menuRef?.current)
                        break;
                    case 1:
                        scrollIntoView(mainRef?.current)
                        break;
                    case 2:
                        scrollIntoView(asideRef?.current)
                        break;
                }
            }}
        />
    );

    return (
        <div className={cn({ theme: theme || false })}>
            <aside ref={menuRef} className={cn('aside', { left: true })}>
                <Navigation
                    routes={routes}
                    onChange={handleNavigationChange}
                    theme={theme}
                />
            </aside>
            <main ref={mainRef} className={cn('main')}>
                {navigationTabs}
            </main>
            {bottomBar}
        </div>
    );
}

export default App;
