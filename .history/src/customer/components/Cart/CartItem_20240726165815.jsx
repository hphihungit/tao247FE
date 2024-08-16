import React from 'react'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[8rem] h-[8rem]'>
                    <img className='w-full h-full object-cover object-top' src="./images/sp_iphone15pm.jpg" alt="" />
                </div>

                <div className='ml-5 h-[8rem] flex flex-col justify-between'>
                    <div>
                        <p className='font-bold text-lg'>iPhone 15 Pro Max</p>
                        <p className="opacity-70">Màu: Vàng</p>
                        <p className="opacity-70">Dung lượng: 512GB</p>
                    </div>
                    <div className=''>
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