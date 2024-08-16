import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            fullName:data.get("fullName"),
            phoneNumber:data.get("phoneNumber"),
            city:data.get("city"),
            district:data.get("district"),
            wards:data.get("wards"),
            address:data.get("address")
        }

        console.log("address", address)
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "#3ddb83" }} size='large' variant='contained'>Đặt hàng</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='fullName'
                                        name='fullName'
                                        label='Họ và Tên'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label='Số điện thoại'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label='Tỉnh / Thành phố'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='district'
                                        name='district'
                                        label='Quận / Huyện'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='wards'
                                        name='wards'
                                        label='Phường / Xã'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label='Số nhà, tên đường'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button
                                        sx={{py:2, mt: 2, bgcolor: "#3ddb83" }}
                                        size='large'
                                        variant='contained'
                                        type='submit'
                                    >
                                        Xác nhận
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm