import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllAppsPage from "../pages/AllAppsPage/AllAppsPage";
import Installed from "../pages/Installed/Installed";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch("/Data.json"),
                path: "/",
                Component: Home
            },
            {
                index: true,
                loader: () => fetch("/Data.json"),
                path: "/appDetails/:id",
                Component: AppDetails
            },
            {
                path: "/installation",
                loader: () => fetch("/Data.json"),
                Component: Installed

            },
            {
                loader: () => fetch("/Data.json"),
                path: "/allAppsPage",
                Component: AllAppsPage
            }

        ]
    },
]);