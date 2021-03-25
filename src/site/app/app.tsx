import React, {useRef} from 'react';
import {createCn} from 'bem-react-classname';
import SearchIcon from 'arui-feather/icon/action/search';
import DraftIcon from 'arui-feather/icon/entity/draft';
import FavoriteIcon from 'arui-feather/icon/ui/favorite';
import {Navigation} from "../components/navigation";
import {NavigationTabs} from "../containers/navigation-tabs";
import {BottomBar} from "../components/bottom-bar";
import {useThemeToggle} from "../containers/theme-toggle";
import {routes} from "../router/routes";
import './app.scss';

const scrollIntoView = (element?: HTMLDivElement | null) => {
    element?.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
}

const cn = createCn('app');

function App() {
    const { theme } = useThemeToggle();
    const menuRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const asideRef = useRef<HTMLDivElement>(null);

    const handleNavigationChange = () => {
        setTimeout(() => scrollIntoView(mainRef?.current), 1);
    }

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

    const navigation = (
        <Navigation
            routes={routes}
            onChange={handleNavigationChange}
            theme={theme}
        />
    );

    return (
        <div className={cn({ theme: theme || false })}>
            <aside ref={menuRef} className={cn('aside', { left: true })}>
                {navigation}
            </aside>
            <main ref={mainRef} className={cn('main')}>
                <NavigationTabs />
            </main>
            {bottomBar}
        </div>
    );
}

export default App;
