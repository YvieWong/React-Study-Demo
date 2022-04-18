import React from 'react'
import { useRoutes } from 'react-router-dom'
import { AllRoutingArray } from './router'
import './App.less'

const RoutingBasics = () => {
  //根据路由表生成对应的路由规则
  const element = useRoutes(AllRoutingArray)
  // console.log(element);
  return element
}

function App () {
  return (
    <div className='App'>
      <RoutingBasics />
    </div>

  )
}

export default App
