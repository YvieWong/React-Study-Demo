import React from 'react'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'

export default function Login () {
  const navigate = useNavigate()
  const toHome = () => {
    console.log(111)
    navigate('/MyLayout')
  }
  return (
    <div>
      <Button type="primary" onClick={toHome}>Primary Button</Button>
    </div>
  )
}
