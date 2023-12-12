import { RouteObject, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

const router: RouteObject[] = [
    {
        path: "/",
        id: "home",
        element: <Home />
    },
    {
        path: "/about",
        id: "about",
        element: <About />
    },
];

const Router = router.map((route: RouteObject) => {
    const id = route.id || "";
    if ([""].indexOf(id) === -1) {
        route.element = <>
            <Navbar />
            {route.element}
            <Footer />
        </>;
    }
    return route;
});

export default createBrowserRouter(Router);