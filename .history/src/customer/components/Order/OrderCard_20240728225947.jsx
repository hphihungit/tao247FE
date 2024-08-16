import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={} className='p-5 shadow-md hover:shadow-xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[7rem] h-[7rem] object-cover object-top' src="/images/sp_iphone15pm.jpg" alt="" />

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
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                                <span>
                                    Đã giao vào ngày 28 tháng 7
                                </span>
                            </p>
                            <p className='text-xs'>
                                Đơn hàng của bạn đã được giao
                            </p>
                        </div>
                    }
                    {false && <p>
                        <span>

                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard