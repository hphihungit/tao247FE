import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
// import axios from 'axios';
// import { FormControl, InputLabel, MenuItem, Select, TextField, Button, Grid } from '@mui/material';


const DeliveryAddressForm = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');

    useEffect(() => {
        // Fetch provinces
        axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
            .then(response => {
                setProvinces(response.data.data.data);
            })
            .catch(error => {
                console.error('Error fetching provinces:', error);
            });
    }, []);

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setSelectedDistrict('');
        setSelectedWard('');
        // Fetch districts based on selected city
        axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${event.target.value}`)
            .then(response => {
                setDistricts(response.data.data.data);
                setWards([]);
            })
            .catch(error => {
                console.error('Error fetching districts:', error);
            });
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
        setSelectedWard('');
        // Fetch wards based on selected district
        axios.get(`://httpsvn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${event.target.value}`)
            .then(response => {
                setWards(response.data.data.data);
            })
            .catch(error => {
                console.error('Error fetching wards:', error);
            });
    };

    const handleWardChange = (event) => {
        setSelectedWard(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const address = {
            fullName: data.get("fullName"),
            city: selectedCity,
            district: selectedDistrict,
            ward: selectedWard
        };
        console.log("address", address);
    };

    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "#3ddb83" }} size='large' variant='contained'>Xác nhận</Button>
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