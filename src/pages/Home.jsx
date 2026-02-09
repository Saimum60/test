import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/product/productcard/ProductCard'
import AddProduct from '../components/product/productItem/AddProduct'

const Home = () => {
    const products=useSelector ((state)=>state.products)
    
  return (
    <div className='py-15 px-5'>
        <div className='container mx-auto '>
            <div className="grid grid-cols-3 ">
                <div className='col-span-2'>
                    <div className='grid lg:grid-cols-2 gap-y-8'>
                        {
                            products.length ?products.map((product, index)=>
                            ( <ProductCard key={index} product={product}/>

                            )) :<p>no product add</p>
                        }
                    </div>
                </div>
                <div><AddProduct/></div>
            </div>

        </div>
    </div>
  )
}

export default Home