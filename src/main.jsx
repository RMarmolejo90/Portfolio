import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root'
import Hvac from './pages/hvac'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/hvac",
        element: <Hvac />
      }
    ] 
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
