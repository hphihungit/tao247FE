import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Địa chỉ giao hàng</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3}/>
            </div>

            <Grid className='space-x-5' container>
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>

                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[7rem] h-[7rem] object-cover object-top' src="./images/sp_iphone15pm.jpg" alt="" />

                            <div className='space-y-2 ml-5 h-[7rem] flex flex-col'>
                                <p className='font-semibold'>
                                    iPhone 15 Pro Max
                                </p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                    <span>Màu: Vàng</span>
                                </p>
                                <p>12300000</p>
                            </div>
                        </div>


                    </Grid>

                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                            <span>Đánh giá & nhận xét sản phẩm</span>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetails