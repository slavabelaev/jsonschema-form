import React from 'react';

export type TemplateConfig = {
    displayLabel: boolean;
    displayHint: boolean;
}

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: true,
    displayHint: true
}

export const TemplateConfigContext = React.createContext(defaultTemplateConfig);

export const {
    Provider: TemplateConfigProvider,
    Consumer: TemplateConfigConsumer
} = TemplateConfigContext;
