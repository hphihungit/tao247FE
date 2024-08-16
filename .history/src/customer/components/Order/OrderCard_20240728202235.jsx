import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[7rem] h-[7rem] object-cover object-top' src="./images/sp_iphone15pm.jpg" alt="" />

                    <div className='ml-5 space-y-2'>
                        <p className='text-lg'>iPhone 15 Pro Max</p>
                        <p className='opacity-50 text-sm font-semibold'>Màu: Vàng</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>12300000</p>
            </Grid>

            <Grid item xs={4}>
                <p>
                    <span>
                        Đã giao vào ngày 28 tháng 7
                    </span>
                </p>
                <p>
                    <span>
                        
                    </span>
                </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard