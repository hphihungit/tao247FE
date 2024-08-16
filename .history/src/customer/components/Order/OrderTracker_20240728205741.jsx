import { Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Đã đặt"
    "Xác nhận đặt hàng"
]

const OrderTracker = (activeStep) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>

        </Stepper>
    </div>
  )
}

export default OrderTracker