import React from 'react'
import { Navigate } from 'react-router-dom'
import MyLayout from '../pages/layout'
import Login from '../pages/login'
import News from '../pages/news'
import Message from '../pages/message'
import NotFound from '../pages/404'



export const dynamicRoutingArray = [
  {
    path: 'news',
    title: '新闻',
    isLayout: true,
    // element: <MyLayout />,
    children: [
      {
        path: 'message1',
        title: '消息',
        isLayout: true,
        // element: <Message />,
        children: [
          {
            path: 'message11',
            title: '消息',
            isLayout: true,
            element: <News />,
          }
        ]
      }
    ]
  },
  {
    path: 'newss',
    title: '新闻',
    isLayout: true,
    // element: <MyLayout />,
    children: [
      {
        path: 'message22',
        title: '消息',
        isLayout: true,
        element: <Message />
      }
    ]
  },
  {
    path: 'message',
    title: '消息',
    isLayout: true,
    element: <Message />
  }
]
export const staticRoutingArray = [
  {
    path: '/MyLayout/*',
    element: <MyLayout />
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

export const AllRoutingArray = [...staticRoutingArray, ...dynamicRoutingArray]
