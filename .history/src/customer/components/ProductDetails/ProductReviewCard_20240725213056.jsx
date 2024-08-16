import { Avatar, Grid } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width}}></Avatar>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard