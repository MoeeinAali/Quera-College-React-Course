import {createBrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    }, {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    }
]);

export default router;