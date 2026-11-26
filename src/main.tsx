import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const ClientRouter = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {children}
  </BrowserRouter>
);

const container = document.getElementById('root')!;
const app = <App router={ClientRouter} />;

// Production pages are pre-rendered to static HTML (see vite.config.ts),
// so hydrate them; in dev the root is empty and we render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
