import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = ({item}) => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[8rem] h-[8rem]'>
                    <img className='w-full h-full object-cover object-top' src="./images/sp_iphone15pm.jpg" alt="" />
                </div>

                <div className='ml-5 h-[8rem] flex flex-col justify-between'>
                    <div>
                        <p className='font-bold text-lg'>{item.brand}</p>
                        <p className="opacity-70">Màu: Vàng</p>
                        <p className="opacity-70">Dung lượng: </p>
                    </div>
                    <div className=''>
                        <p className='text-red-500 font-semibold text-lg'>
                            123123123
                        </p>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:"#288ad6"}}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                </div>

                <div>
                    <Button sx={{color:"#288ad6"}}>Xóa</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem