import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state to trigger a re-render with the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service (optional)
    console.error('Error caught by Error Boundary:', error, info);
    
    // Reload the browser upon error
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // You can display a fallback UI here if needed
      return <h1>Something went wrong. Reloading...</h1>;
    }

    // Render children if no error occurs
    return this.props.children;
  }
}

export default ErrorBoundary;
