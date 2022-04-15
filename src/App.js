import React from 'react'
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'
import routes from './router'
import './App.less'

const AA = () => {
  //根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  return element
}

function App () {
  return (
    <AA />
  )
}

export default App
