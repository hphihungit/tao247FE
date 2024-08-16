import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProducReivewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>

            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#3ddb83"}}>A</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p>Phi Hung</p>
                        <p>Ngày 25 tháng 7 năm 2024</p>
                    </div>
                </div>

                <Rating/>
            </Grid>

        </Grid>
    </div>
  )
}

export default ProducReivewCard