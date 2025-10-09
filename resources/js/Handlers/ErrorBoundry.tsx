import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error occurred:", error);
        console.error("Error details:", errorInfo.componentStack);

        this.setState({ errorInfo });
    }

    render() {
        const { hasError, error, errorInfo } = this.state;

        if (hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-gray-800">
                    <h1 className="mb-4 text-2xl font-bold">
                        Something went wrong!
                    </h1>
                    <p className="mb-2">
                        {error
                            ? `Error: ${error.message}`
                            : "An unknown error occurred."}
                    </p>
                    {errorInfo?.componentStack && (
                        <pre className="overflow-x-auto rounded bg-gray-200 p-4 text-sm">
                            {errorInfo.componentStack}
                        </pre>
                    )}
                    <button
                        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        onClick={() => window.location.reload()}
                    >
                        Reload Application
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
