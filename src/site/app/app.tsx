import React, {useRef} from 'react';
import {createCn} from 'bem-react-classname';
import {Navigation} from "../components/navigation";
import {NavigationTabs} from "../containers/navigation-tabs";
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
    const { theme = 'alfa-on-white' } = useThemeToggle();
    const menuRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);

    const handleNavigationChange = () => {
        setTimeout(() => scrollIntoView(mainRef?.current), 1);
    }

    const navigation = (
        <Navigation
            routes={routes}
            onChange={handleNavigationChange}
            theme={theme}
        />
    );

    return (
        <div className={cn({ theme })}>
            <aside ref={menuRef} className={cn('aside', { left: true })}>
                {navigation}
            </aside>
            <main ref={mainRef} className={cn('main')}>
                <NavigationTabs />
            </main>
        </div>
    );
}

export default App;
