import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio error boundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: '#0c0e12',
            color: '#e8eaef',
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{ marginBottom: '1rem' }}>Something went wrong</h1>
            <p style={{ color: '#9aa3b5', marginBottom: '1.5rem' }}>
              Please reload the page. If the problem continues, try again in a
              few minutes.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.25rem',
                background: '#2dd4bf',
                color: '#0c0e12',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Reload
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
