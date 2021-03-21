import {Routes} from "./index";

export const getStarted: Routes = {
    "installation": {
        title: "1. Установка",
        docsURL: require('../../../docs/get-started/installation.md').default,
        editDocsPath: 'src/docs/get-started/installation.md'
    },
    "set-up-an-editor": {
        title: "2. Настройка IDE",
        docsURL: require('../../../docs/get-started/set-up-an-editor.md').default,
        editDocsPath: 'src/docs/get-started/set-up-an-editor.md'
    },
    "white-first-schema": {
        title: "3. Создание первой схемы",
        docsURL: require('../../../docs/get-started/white-first-schema.md').default,
        editDocsPath: 'src/docs/get-started/white-first-schema.md'
    }
};
