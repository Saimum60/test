import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Manu = () => {
  return (
    <nav className='py-8 px-4 bg-amber-800'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='text-white'>
                <Link to={'/'} className='text-3xl font-semibold '>Shopping</Link>

            </div>
            <div className="text-white">
               
            </div>
            <div className="text-white flex gap-x-5 items-center">
                <Link to={'/'} className='text-2xl font-semibold'>Home</Link>
                 <Link to={'/productitem'} className='text-2xl font-semibold'>Product</Link>
                <Link to={'/Card'} className='text-2xl font-semibold'><FaShoppingCart/></Link>
            </div>
        </div>
    </nav>
  )
}

export default Manu