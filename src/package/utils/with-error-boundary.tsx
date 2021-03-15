import React from 'react';
import {Plate} from "arui-feather/plate";
import ErrorIcon from "arui-feather/icon/ui/error";

export function withErrorBoundary(WrappedComponent: React.ComponentType<any>) {
    return class extends React.Component<any> {
        state = { error: null, errorInfo: null }

        componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
            this.setState({ error, errorInfo });
        }

        render() {
            const { theme = 'alfa-on-white' } = this.props;
            const { error } = this.state;

            const errorIcon = (
                <ErrorIcon
                    colored={true}
                />
            )

            if (error) return (
                <Plate
                    type='error'
                    icon={errorIcon}
                    title={'Ошибка'}
                    theme={theme}
                >
                    {error}
                </Plate>
            );

            return <WrappedComponent {...this.props} />;
        }
    }
}
