import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

import {
    createBrowserRouter, RouterProvider
} from "react-router-dom";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./index.css"
import ErrorPage404 from "./page/errorPages/404.tsx";
import ProductsPage from "./page/products";
import {MainContent} from "./components/MainContent.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage404/>,
        children: [
            {path: "/", element: <MainContent/>},
            {
                path: "/products", element: <ProductsPage/>
            }]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
