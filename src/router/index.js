import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../pages/dashboard'

export default [
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/',
    element: <Navigate to="/Dashboard" />
  }
]