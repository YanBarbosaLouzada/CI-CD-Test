// Import de biblioteca necessaria
import { createBrowserRouter } from "react-router-dom";

// import de paginas
import Home from "./pages/Home/Home";
import Info from "./pages/infoPage/Info";
import Layout from "./pages/Layout";
import NotePage from "./pages/notes/NotePage";
import LoginPage from "./pages/login/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/info",
                element:<Info></Info>
            },
            {
                path: "/notes",
                element:<NotePage></NotePage>
            },
            {
                path: "/login",
                element:<LoginPage></LoginPage>
            }
        ]
    }
])