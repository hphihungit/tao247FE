import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard className="m"/>

                <div>
                    <div className='lg:grid grid-cols-3 relative'>
                        <div className='col-span-2'>
                            {[1, 1, 1, 1].map((item) => <CartItem />)}
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

                                <Button variant='contained' className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#3ddb83" }}>
                                    Thanh toán
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary