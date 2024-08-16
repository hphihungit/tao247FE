import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({ item }) => {
    const formattedPrice = item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedBeforeDiscount = item.beforeDiscount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    const dispatch = useDispatch();

    // const handleUpdateCartItem = (num) => {
    //     const data = {data:{quantity:item.quantity + num}, cartItemId: item?.id}
    //     dispatch(updateCartItem(data))
    // }

    const handleUpdateCartItem = (num) => {
        const data = {
            data: {
                color: item.color
            },
            cartItemId: item?.id, // Đảm bảo ID có giá trị
        };

        console.log('Updating cart item:', data);

        dispatch(updateCartItem(data));
    };

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item.id))
    }

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[8rem] h-[8rem]'>
                    <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="" />
                </div>

                <div className='ml-5 h-[8rem] flex flex-col justify-between'>
                    <div>
                        <p className='font-bold text-lg'>{item.product.brand}</p>
                        <p className="opacity-70">Màu: {item.color}</p>
                    </div>
                    <div className=''>
                        <div className='flex'>
                            <p className='opacity-50 line-through'>
                                {formattedBeforeDiscount}
                            </p>
                            <p className='opacity-50 ml-2'>
                                -{item.product.percentsDiscount}%
                            </p>
                        </div>
                        <div>
                            <p className='text-red-500 font-semibold text-lg'>
                                {formattedPrice}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity <= 1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                    <IconButton onClick={() => handleUpdateCartItem(1)} sx={{ color: "#288ad6" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>

                <div>
                    <Button onClick={handleRemoveCartItem} sx={{ color: "#288ad6" }}>Xóa</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem