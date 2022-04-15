import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import MyLayout from '../pages/layout'
import Login from '../pages/login'
import News from '../pages/news'
import Message from '../pages/message'
import NotFound from '../pages/404'

export default [
  {
    path: '/MyLayout',
    element: <MyLayout />,
    children: [
      {
        path: 'news',
        title: '新闻',
        isLayout: true,
        element: <News />,
        children: []
      },
      {
        path: 'message',
        title: '消息',
        isLayout: true,
        element: <Message />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Navigate to="/MyLayout" />
  },
  {
    path: '*',
    element: <NotFound />
  },
]