import React from 'react';
import { ErrorPage } from '../../pages/ErrorPage';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  render() {
    return this.props.children ? this.state.hasError ? <ErrorPage /> : this.props.children : null;
  }
}
