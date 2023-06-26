import { createBrowserRouter } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";
import ChefCard from "../components/Home/ChefCard/ChefCard";
import Main from "../layout/Main";
import Home from "../components/Home/Home";



const router =createBrowserRouter([
    
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
              },            
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }

        ]
        
    }

])

export default router;