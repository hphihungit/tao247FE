import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../../../State/Cart/Action'
import { useDispatch, useSelector } from 'react-redux'

export const Cart = () => {
    const navigate = useNavigate();
    const {cart} = useSelector(store=> store);

    const dispatch = useDispatch();

    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }

    useEffect(() => {
        dispatch(getCart())    
    }, [cart.updateCartItem, cart.d])

    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {cart.cart?.cartItems.map((item) => <CartItem item = {item} />)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Hóa đơn</p>
                        <hr />

                        <div className='space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3'>
                                <span>Giá trước khuyến mãi</span>
                                <span className='text-red-500'>{cart.cart?.totalBeforeDiscount}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Khuyến mãi</span>
                                <span className='text-red-500'>-{cart.cart?.discount}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Phí vận chuyển</span>
                                <span className='text-red-500'>Miễn phí</span>
                            </div>
                            <div className='flex justify-between pt-3 font-bold'>
                                <span>Tổng tiền</span>
                                <span className='text-red-500'>{cart.cart?.totalPrice}</span>
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
