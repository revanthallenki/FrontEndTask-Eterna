// src/components/ErrorBoundary.tsx
"use client";
import React from "react";

type S = { hasError: boolean };

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, S> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error("Caught by ErrorBoundary:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h2 style={{ color: "#ff7a7a" }}>Something went wrong</h2>
          <p>Try refreshing the page. If the issue persists, check the console.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
