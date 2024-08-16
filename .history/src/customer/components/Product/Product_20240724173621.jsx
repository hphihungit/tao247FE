import React from 'react'
import "./ProductCard.css"

const Product = () => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='imgPart h-[15rem]'>
                <img className='h-full w-full object-cover object-left-top' src="./images/sp_iphone15pm.jpg" alt="" />
            </div>

            <div className='bg-white p-3'>
                <div>
                    <p className='text-bl font-bold opacity-60'>
                        iPhone 15 Pro Max 256GB
                    </p>
                </div>

                <div className='flex items-center space-x-2'>
                    <p className='text-gray-500 line-through opacity-50'>
                        34.990.000 ₫
                    </p>
                    <p className='text-green-600 font-semibold text-xs'>
                        -12%
                    </p>
                </div>

                <div>
                    <p className='text-blue-500 font-semibold'>
                        25.800.000 ₫
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product