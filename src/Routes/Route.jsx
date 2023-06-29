import { createBrowserRouter } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ChefRecipe from "../components/Recipe/ChefRecipe";
import Chef from "../components/Home/ChefCard/Chef";



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
            },
            {
                path:'/chefRecipe/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path:'/chefs',
                element: <Chef></Chef>
            }
            
        ]
        
    }

])

export default router;