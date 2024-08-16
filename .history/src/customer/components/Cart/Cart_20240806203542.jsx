import React from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }
    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {[1,1,1,1].map((item, index) => <CartItem key={index} />)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Hóa đơn</p>
                        <hr />

                        <div className='space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3'>
                                <span>iPhone 15 Pro Max 512GB</span>
                                <span className='text-red-500'>12300000</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>iPhone 14 Pro Max 512GB</span>
                                <span className='text-red-500'>12300000</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>iPhone 13 Pro Max 512GB</span>
                                <span className='text-red-500'>12300000</span>
                            </div>
                            <div className='flex justify-between pt-3 font-bold'>
                                <span>Tổng tiền</span>
                                <span className='text-red-500'>12300000</span>
                            </div>
                        </div>

                        <Button onClick={handleCheckout} variant='contained' className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#3ddb83" }}>
                            Thanh toán
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
