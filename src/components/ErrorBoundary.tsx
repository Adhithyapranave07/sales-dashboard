 
import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: Error | null };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

componentDidCatch(error: unknown) {
  console.error(error);
}

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="m-6 p-6 rounded-lg bg-red-50 text-red-900">
          <h2 className="text-lg font-semibold">Something went wrong</h2>
          <p className="mt-2">
            An unexpected error occurred while rendering this part of the app.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              className="px-3 py-1 bg-red-600 text-white rounded"
              onClick={() => location.reload()}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
