import React from 'react'
import CartItem from './CartItem'
import { Divider } from '@mui/material'

export const Cart = () => {
    return (
        <div>
            <div className='lg:grid grid-cols-4 lg:px-16 relative'>
                <div className='col-span-2'>
                    <CartItem />
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                        <hr/>

                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>iphone 15 pro max 512gb </span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
