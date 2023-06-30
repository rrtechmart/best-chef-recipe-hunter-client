import { createBrowserRouter } from "react-router-dom";
import Login from "../login/Login";
import Register from "../login/Register";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ChefRecipe from "../components/Recipe/ChefRecipe";
import Chef from "../components/Home/ChefCard/Chef";
import NotFound from "../components/NotFound/NotFound";
import Blog from "../components/Blog/Blog";



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
                path:'/blog',
                element: <Blog></Blog>

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
            },
            {
                path:'*',
                element: <NotFound></NotFound>
            }
            
        ]
        
    }

])

export default router;