    import React from 'react';
    import style from "./ErrorBoundary.module.scss";
    import "./ErrorBoundary.module.scss";

    class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        return (
                <div className={style['error-container']}>
                <div className={style['error-message']}>
                <iframe src="https://giphy.com/embed/xxHqpovWonBMkSy1cf" width="480" height="215" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/metadigital-meta-web-development-digital-xxHqpovWonBMkSy1cf">via GIPHY</a></p> 
                <h1>Oops! Something went wrong.</h1>
                <p>We're working to fix this issue. Please try again later.</p>
            </div>
            </div>
        );
        }

        return this.props.children;
    }
    }

    export default ErrorBoundary;