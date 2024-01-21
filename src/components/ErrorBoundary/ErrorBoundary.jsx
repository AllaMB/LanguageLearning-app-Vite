    import React from 'react';

    class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to a service like Sentry
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        return (
            <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
            <h2>Something went wrong. Please try again later.</h2>
            </div>
        );
        }

        return this.props.children;
    }
    }

    export default ErrorBoundary;
