import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';
import './index.css';
import { App } from './App.tsx';

const router = createBrowserRouter([
    {
        element: <App />, children: [
            { path: '/', element: <HomePage /> },
            { path: '/experience', element: <ExperiencePage /> },
            { path: '/contact', element: <ContactPage /> },
        ],
    },
]);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

