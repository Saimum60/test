import React from 'react'

const AddProduct = () => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-4 text-black'>Add new product</h2>

        <form>
            <div>
                <label htmlFor="">Category</label>
                <input type="text" placeholder='product 1' />
            </div>
        </form>
    </div>
  )
}

export default AddProduct