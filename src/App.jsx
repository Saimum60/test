import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Card from './components/product/productcard/Card'
import ProductItem from './components/product/productItem/ProductItem'

const App = () => {

  let router= createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/',
        element:<Home/>
      },{
        path:'/card',
        element:<Card/>,
      },{
        path:'/productitem',
        element:<ProductItem/>,
      }]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App