import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from '../layout/AppLayout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import AuthLayout from '../layout/AuthLayout'
import Register from '../components/Register'
import Login from '../components/Login'

const AppRoute = () => {

    let router = createBrowserRouter([
        {
            path :"/",
            element : <AppLayout />,
            children : [
                {
                    path : "",
                    element : <Home />
                },
                {
                    path : "/shop",
                    element : <Shop />
                },
                {
                    path : "/about",
                    element : <About />
                }
            ]
        },
        {
            path : "/auth",
            element : <AuthLayout />,
            children:[
                {
                    path : "",
                    element : <Login />
                },
                {
                    path : "register",
                    element : <Register /> 
                }
            ]
        }
    ])
  return (

    <RouterProvider router={router} />

  )
}

export default AppRoute
