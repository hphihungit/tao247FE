import { Grid, Typography, Button, Link } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 3,
                }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        Mua sắm
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPhone </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPad </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Mac </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Watch </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> AirPod </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Phụ kiện </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        Mua sắm
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPhone </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPad </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Mac </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Watch </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> AirPod </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Phụ kiện </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        Mua sắm
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPhone </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPad </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Mac </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Watch </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> AirPod </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Phụ kiện </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>
                        Mua sắm
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPhone </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> iPad </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Mac </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Watch </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> AirPod </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom> Phụ kiện </Button>
                    </div>
                </Grid>

                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>
                        Số điện thoại: (+84) 369555247
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Địa chỉ: 39 Hàm Nghi, Vĩnh Trung, Thanh Khê, Đà Nẵng
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Email: tao247store@gmail.com
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Fanpage: {' '}
                        <Link 
                            href="https://www.facebook.com/profile.php?id=100038119668306&locale=vi_VN"
                            color="inherit"
                            underline='none'
                        >
                            Táo 247
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer