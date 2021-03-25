import React, {useContext} from 'react';

export type TemplateConfig = {
    displayLabel: boolean;
    displayHint: boolean;
}

const TemplateConfigContext = React.createContext<TemplateConfig>({
    displayLabel: true,
    displayHint: true
});

export const useThemeConfig = () => useContext(TemplateConfigContext);

export const { Provider: TemplateConfigProvider } = TemplateConfigContext;
