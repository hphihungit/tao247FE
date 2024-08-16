import { Grid } from '@mui/material'
import React from 'react'

const orderStatus = [
    {label:"Đang giao", value:"on_the_way"},
    {label:"Đã giao", value:"delivered"},
    {label:"Bị hủy", value:"cancelled"},
    {label:"Hoàn trả", value:"returned"},
]

const Order = () => {
  return (
    <div>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Bộ lọc</h1>

                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>Trạng thái đơn hàng</h1>
                        

                    </div>
                </div>
            </Grid>

            <Grid item>

            </Grid>
        </Grid>
    </div>
  )
}

export default Order