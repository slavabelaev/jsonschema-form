import React from 'react';

export function withErrorBoundary<T>(WrappedComponent: React.ComponentType<T>) {
    return class extends React.Component<T> {
        state = { error: null, errorInfo: null }

        componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
            this.setState({ error, errorInfo });
        }

        render() {
            if (this.state.error) return 'Error';
            return <WrappedComponent {...this.props} />;
        }
    }
}
