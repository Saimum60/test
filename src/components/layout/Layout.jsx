import React from 'react'
import Manu from '../navbar/Manu'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Manu/>
        <Outlet/>
    </div>
  )
}

export default Layout