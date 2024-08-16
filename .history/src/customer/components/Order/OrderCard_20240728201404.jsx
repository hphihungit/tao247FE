import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img src="./images/sp_iphone15pm.jpg" alt="" />

                    <div className='ml-5'>
                        <p>iPhone 15 Pro Max</p>
                        <p>Màu: Vàng</p>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard