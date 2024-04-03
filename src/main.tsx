import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './pages/Catalog/Catalog.tsx';
import { store } from './store/store.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Catalog />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
