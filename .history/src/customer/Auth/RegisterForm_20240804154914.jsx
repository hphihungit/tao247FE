import { Grid, TextField } from '@mui/material'
import React from 'react'

const RegisterForm = () => {
    const handleSubmit = () => {

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id = 'fullName'
                        name = 'fullName'
                        label = "Full Name"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </form>
    </div>
  )
}

export default RegisterForm