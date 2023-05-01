import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";


const router =createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
    }
])