import React from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from 'app/providers/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
