import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import AuthLayout from "../layout/AuthLayout";
import Register from "../components/Register";
import Login from "../components/Login";
import Protected from "./Protected";

const AppRoute = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Protected />,   
            children: [
                {
                    path: "",
                    element: <AppLayout />,
                    children: [
                        { path: "", element: <Home /> },
                        { path: "shop", element: <Shop /> },
                        { path: "about", element: <About /> },
                        { path: "products/:id", element: <ProductDetails /> }
                    ]
                }
            ]
        },

        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                { path: "", element: <Login /> },
                { path: "register", element: <Register /> }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoute;