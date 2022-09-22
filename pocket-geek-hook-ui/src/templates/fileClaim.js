import React from 'react';
import {
    Typography, Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
    Select, InputLabel, MenuItem, TextField, Grid
} from '@mui/material';
import { Container } from '@mui/system';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function FileClaim() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(null);

    return (<div>
        <Typography>File a Claim</Typography>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>

            <Typography>Claim Pre-Qualification</Typography>
            <Divider />
            <Typography>To get Started with the claim process, please answer the following questions</Typography>
            <Grid item xs={12}>
                <FormControl>
                    <FormLabel id="Do you still have possession of the device">Do you still have possession of the device?</FormLabel>
                    <RadioGroup
                        aria-labelledby="Do you still have possession of the device"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Yes, I have the device" />
                        <FormControlLabel value="male" control={<Radio />} label="No, I do not have the device" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Divider />
            <Grid item xs={12}>

                <FormControl>
                    <FormLabel id="Is your device damaged in some way">Is your device damaged in some way?</FormLabel>
                    <RadioGroup
                        aria-labelledby="Is your device damaged in some way"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Yes, I have the device" />
                        <FormControlLabel value="male" control={<Radio />} label="No, I do not have the device" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Divider />
            <Typography>Confirm the device category, Brand and Modal or select this information below.</Typography>


            <Grid item xs={12}>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                    <InputLabel id="demo-select-small">Device Type</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Laptop</MenuItem>
                        <MenuItem value={20}>Mobile</MenuItem>
                        <MenuItem value={30}>Tablet</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField id="brand" label="Brand" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField id="apple" label="Apple" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField id="device-nickname" label="Device NickName" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField id="serial-number" label="Serial-Number" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField id="price" label="Purchase Price $" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>


        </Container>
    </div >)
}