import React from 'react'
import CartItem from './CartItem'
import { Divider } from '@mui/material'

export const Cart = () => {
    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    <CartItem />
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Hóa đơn</p>
                        <hr/>

                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3'>
                                <span>iPhone 15 Pro Max 512GB</span>
                                <span className='text-red-500'>12300000</span>
                            </div>
                            <div className='flex justify-between pt-3 text-red-500'>
                                <span>iPhone 14 Pro Max 512GB</span>
                                <span>12300000</span>
                            </div>
                            <div className='flex justify-between pt-3 text-red-500'>
                                <span>iPhone 13 Pro Max 512GB</span>
                                <span>12300000</span>
                            </div>
                            <div className='flex justify-between pt-3 text-red-500'>
                                <span>Tổng tiền</span>
                                <span>12300000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
