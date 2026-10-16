import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from './RouterContext';
import { App } from './App';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <RouterProvider>
        <App />
      </RouterProvider>
    </React.StrictMode>
  );
}
