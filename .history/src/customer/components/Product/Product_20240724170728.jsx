import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[15rem]'>
            <img className='h-full w-full object-cover object-left-top' src="./images/sp_iphone15pm.jpg" alt=""/>
        </div>

        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>
                    iPhone 15 Pro Max
                </p>
                <p className='text-red-600'>
                    25.800.000 ₫
                </p>
            </div>

            
        </div>
    </div>
  )
}

export default Product