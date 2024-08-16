import { Stepper } from '@mui/material'
import React from 'react'

const OrderTracker = (activeStep) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} ></Stepper>
    </div>
  )
}

export default OrderTracker