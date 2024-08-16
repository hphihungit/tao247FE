import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const LoginForm = () => {   
    const navigate = us

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);
        const userData = {
            fullName:data.get("fullName"),
            email:data.get("email"),
            password:data.get("password")
        }

        console.log("userData", userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1 className="uppercase text-center text-2xl font-bold mb-4">Đăng nhập</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label="Email"
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label="Mật khẩu"
                            type='password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className='bg-[#288ad6] w-full'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{
                                padding: ".8rem 0",
                                bgcolor: "#288ad6"
                            }}
                        >
                            Đăng nhập
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="text-center mt-4">
                        <p>
                            Bạn chưa có tài khoản?{' '}
                            <Button onClick={() => navigate("/register")} className="text-blue-500 hover:underline">
                                Đăng ký
                            </Button>
                        </p>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default LoginForm