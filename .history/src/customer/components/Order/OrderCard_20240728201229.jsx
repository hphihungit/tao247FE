import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div>
                    <img src="./images/sp_iphone15pm" alt="" />
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard