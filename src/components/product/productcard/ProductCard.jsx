import React from 'react'

const ProductCard = ({product}) => {
    const{name,id,image, price,categery}=product||{}
  return (
   
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-black ">
    <h2 className="card-title text-2xl font-semibold">{name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions flex justify-between ">
        <p className='text-2xl font-semibold'>{price}</p>
      <button className="btn btn-primary border bg-indigo-500 px-5 py-3 rounded-2xl text-white cursor-pointer">Add to Card</button>
    </div>
  </div>
</div>

  )
}

export default ProductCard