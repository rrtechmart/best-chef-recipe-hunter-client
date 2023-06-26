import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route.jsx';








ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-20 mt-2'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
