"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-4 text-red-500">Oops!</h1>
            <p className="text-xl mb-4 text-neutral-400">Something went wrong.</p>
            <details className="text-left bg-neutral-900 p-4 rounded-lg mb-4">
              <summary className="cursor-pointer font-bold mb-2">Error Details</summary>
              <pre className="text-sm text-red-400 whitespace-pre-wrap break-words">
                {this.state.error?.toString()}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
