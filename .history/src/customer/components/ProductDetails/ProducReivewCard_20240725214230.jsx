import { Avatar, Box, Grid } from '@mui/material'
import React from 'react'

const ProducReivewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>

            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{}}></Avatar>
                </Box>
            </Grid>

        </Grid>
    </div>
  )
}

export default ProducReivewCard