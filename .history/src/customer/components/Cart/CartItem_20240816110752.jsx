import { Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({ initialQuantity, onDelete }) => {
    const formattedPrice = item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedBeforeDiscount = item.beforeDiscount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    const dispatch = useDispatch();

    // const handleUpdateCartItem = (num) => {
    //     const data = {data:{quantity:item.quantity + num}, cartItemId: item?.id}
    //     dispatch(updateCartItem(data))
    // }

    // const handleUpdateCartItem = (num) => {
    //     // Cập nhật số lượng của sản phẩm dựa trên hành động của người dùng
    //     const updatedQuantity = item.quantity + num;

    //     if (updatedQuantity < 1) return; // Đảm bảo số lượng không giảm xuống dưới 1

    //     const data = {
    //         data: {
    //             color: item.color
    //         },
    //         cartItemId: item?.id, // Đảm bảo ID có giá trị
    //     };

    //     console.log('Updating cart item:', data);

    //     dispatch(updateCartItem(data));
    // };

    // const handleRemoveCartItem = () => {
    //     dispatch(removeCartItem(item.id))
    // }

    const [quantity, setQuantity] = useState(initialQuantity);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[8rem] h-[8rem]'>
                    {/* <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="" /> */}
                    <img className='w-full h-full object-cover object-top' src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg" alt="" />

                </div>

                <div className='ml-5 h-[8rem] flex flex-col justify-between'>
                    <div>
                        {/* <p className='font-bold text-lg'>{item.product.brand}</p>
                        <p className="opacity-70">Màu: {item.color}</p> */}
                        <p className='font-bold text-lg'>iPhone 15</p>
                        <p className="opacity-70">Màu: Cam</p>
                    </div>
                    <div className=''>
                        <div className='flex'>
                            <p className='opacity-50 line-through'>
                                {/* {formattedBeforeDiscount} */}
                                123123123
                            </p>
                            <p className='opacity-50 ml-2'>
                                {/* -{item.product.percentsDiscount}% */}
                                -10%
                            </p>
                        </div>
                        <div>
                            <p className='text-red-500 font-semibold text-lg'>
                                {/* {formattedPrice} */}
                                123123123
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton disabled={item.quantity <= 1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                    <IconButton sx={{ color: "#288ad6" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>

                <div>
                    <Button sx={{ color: "#288ad6" }}>Xóa</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem