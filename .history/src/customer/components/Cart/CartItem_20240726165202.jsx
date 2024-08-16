import React from 'react'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[10rem] h-[10rem]'>
                    <img className='w-full h-full object-cover object-top' src="./images/sp_iphone15pm.jpg" alt="" />
                </div>

                <div className='ml-5 h-[10rem] flex flexcol'>
                    <div>
                        <p className='font-bold text-lg'>iPhone 15 Pro Max</p>
                        <p className="opacity-70">Màu: Vàng</p>
                    </div>
                    <div className='mt-3 pt-6'>
                        <p className='text-red-500 font-semibold text-lg'>
                            123123123
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem