import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Đã đặt",
    "Xác nhận đặt hàng",
    "Đã vận chuyển",
    "Đang vận chuyển",
    "Đã giao hàng"
]

const OrderTracker = (activeStep) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => <Step>
                <StepLabel sx={color:"#3ddb83"}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker