import React from 'react'
import Register from '../components/Register'
import { Outlet } from 'react-router'
import Login from '../components/Login'

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
