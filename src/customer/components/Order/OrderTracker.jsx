import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Đã đặt",
    "Xác nhận đặt hàng",
    "Đã vận chuyển",
    "Nhận hàng",
    "Đã giao hàng"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => <Step>
                <StepLabel sx={{color:"#288ad6", fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker