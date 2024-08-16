import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src="./images/iphone1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Product