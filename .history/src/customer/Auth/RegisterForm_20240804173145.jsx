import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { register } from '../../State/Auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);
        const userData = {
            fullName:data.get("fullName"),
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(register(userData))

        console.log("userData", userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1 className="uppercase text-center text-2xl font-bold mb-4">Đăng ký</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='fullName'
                            name='fullName'
                            label="Họ và Tên"
                            fullWidth
                            autoComplete='given-name'
                        />
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
                            Đăng ký
                        </Button>
                    </Grid>
                    <Grid item xs={12} className="text-center mt-4">
                        <p>
                            Bạn đã có tài khoản?{' '}
                            <Button onClick={() => navigate("/login")} className="text-blue-500 hover:underline">
                                Đăng nhập
                            </Button>
                        </p>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default RegisterForm