import React from 'react'

const HomeSectionCard = ({ product }) => {
  const formattedPrice = product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3 mt-5 border  hover:shadow-2xl'>

      <div className='h-[12rem] w-[12rem] translate-y-2'>
        <img
          className='object-cover object-top w-full h-full' 
          src={product.imageUrl} 
          alt="" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{formattedPrice}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard