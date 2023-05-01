import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
