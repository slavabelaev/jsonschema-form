import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {createCn} from "bem-react-classname";
import './page-contents.scss';

const cn = createCn('page-contents');

export type PageContentsProps = {
    className?: string;
}

type Item = {
    title: string | null;
    url?: string;
}

export function PageContents(props: PageContentsProps) {
    const { pathname } = useLocation();
    const classNames = [cn(), props.className].join(' ');
    const [items, setItems] = useState<Item[]>([
        { title: 'Дополнительные элементы не разрешены', url: '#1' },
        { title: 'Схема дополнительных элементов', url: '#2' },
        { title: 'Ссылки', url: '#3' },
    ]);

    const articleSelector = 'article';
    const selector = ['h2', 'h3', 'h4', 'h5', 'h6']
        .map(item => `${articleSelector} ${item}`).join(',');

    useEffect(() => {
        const items: Item[] = [];

        document.querySelectorAll(selector).forEach((item, index) => {
            items.push({
                title: item.textContent,
                url: `#${index}`
            });
        });

        setItems(items);
    }, [pathname]);

    const renderItem = (item: Item) => (
        <li className={cn('item')}>
            <a className={cn('link')} href={item.url}>
                {item.title}
            </a>
        </li>
    )

    return (
        <ul className={classNames}>
            {items.map(renderItem)}
        </ul>
    );
}
