import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import Login from './pages/Login.jsx'
import NavBar from './components/NavBar.jsx'
import Register from './pages/Register.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Routing tutorial: https://reactrouter.com/en/main/start/tutorial#setup

// Declare routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

// Set routes to root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>,
)
