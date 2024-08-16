import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

const RegisterForm = () => {
    const handleSubmit = () => {

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id = 'fullName'
                        name = 'fullName'
                        label = "Full Name"
                        fullWidth
                        autoComplete= 'given-name'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id = 'email'
                        name = 'email'
                        label = "Email"
                        fullWidth
                        autoComplete= 'email'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id = 'password'
                        name = 'password'
                        label = "Password"
                        fullWidth
                        autoComplete= 'password'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                    className='bg-[#288ad6] w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx = {{
                        padding: ""
                    }}
                    >
                        Đăng ký
                    </Button>
                </Grid>
            </Grid>
        </form>
    </div>
  )
}

export default RegisterForm