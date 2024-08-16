import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[10rem] h-[10rem]'>
                <img className='w-full h-full object-cover object-top' src="./images/sp_iphone15pm.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default CartItem