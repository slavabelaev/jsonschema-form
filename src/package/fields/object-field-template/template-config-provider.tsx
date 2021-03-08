import React from 'react';

export type TemplateConfig = {
    displayHeader: boolean;
}

export const defaultTemplateConfig: TemplateConfig = {
    displayHeader: true
}

export const TemplateConfigContext = React.createContext(defaultTemplateConfig);

export const {
    Provider: TemplateConfigProvider,
    Consumer: TemplateConfigConsumer
} = TemplateConfigContext;
