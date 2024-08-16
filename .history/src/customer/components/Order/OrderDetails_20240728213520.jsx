import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'

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
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems}}>

                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetails