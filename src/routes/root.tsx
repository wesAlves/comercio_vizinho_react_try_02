import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage404 from "../pages/errorPages/404.tsx";
import {Index} from "../pages/home";
import {ProductsPage} from "../pages/products";
import {ProductDetails} from "../pages/products/details.tsx";
import {ServicesPage} from "../pages/services";
import React from "react";
import {ShopCartPage} from "../pages/shopCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage404/>,
        children: [
            {path: "/", element: <Index/>},
            {
                path: "/products", element: <ProductsPage/>,
            },
            {path: "/products/:productId", element: <ProductDetails />},
            {
                path: "/services", element: <ServicesPage/>
            },
            {path: "/shopcart", element: <ShopCartPage/>}
        ]
    },
]);

export {router}