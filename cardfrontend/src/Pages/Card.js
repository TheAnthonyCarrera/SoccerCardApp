import React, { useState } from 'react';
import { FormControl, Container, Paper, TextField, Button, Grid, Select, MenuItem, Box, InputLabel} from '@mui/material';

export default function Card() {
 
    const PaperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const [first_name,setFirstName]=React.useState("")
    const [last_name,setLastName]=React.useState("")
    const [club,setClub]=React.useState("")
    const [nationality,setNationality]=React.useState("")
    const [year,setYear]=React.useState("")
    const [series,setSeries]=React.useState("")
    const [card_number,setCardNumber]=React.useState("")
    const [rookie, setRookie] = useState(false);
    const [variant,setVariant]=React.useState("")
    const [manufacturer,setManufacturer]=React.useState("")
    const [image_url,setImageURL]=React.useState("")
    const [description,setDescription]=React.useState("")

    const [errorMessage, setErrorMessage] = useState(null);
    
    const handleClick=(e)=>{
        e.preventDefault()
        const card={first_name,last_name,club,nationality, year, series, card_number, rookie, variant, manufacturer, image_url, description}
        console.log(card)
        console.log(rookie)
        fetch("http://localhost:8081/card/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(card)
        }).then((data)=>{
            if (data.ok) {
                console.log("New Card Added")
                setErrorMessage(null)
                setErrorMessage("Successfully added Card")
            } else {
                console.log("Error adding card")
                console.log(data.status)
                setErrorMessage("Error adding card")
            }
        })
    }
    
    return (
    
    <Container>
        <Paper elevation={3} style={PaperStyle}>
            <h1 style={{color:"blue"}}>Add Card</h1>
            <Box
                
                component="form"
                sx={{
                    '& > :not(style)': { m: 1},
                }}
                noValidate
                autoComplete="off"
            >
                
            <Grid container spacing={0.5}>
                <Grid item xs={5.9}>
                <TextField
                    label="First Name"
                    variant="outlined"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    fullWidth
                />
                </Grid>
                <Grid item xs={5.9}>
                <TextField
                    label="Last Name"
                    variant="outlined"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    fullWidth
                />
                </Grid>
                <Grid item xs={5.9}>
                <TextField id="club" label="Club" variant="outlined" fullWidth
                    value={club}
                    onChange={(e)=>setClub(e.target.value)}
                />
                </Grid>
                <Grid item xs={5.9}>
                <TextField id="nationality" label="Nationality" variant="outlined" fullWidth
                    value={nationality}
                    onChange={(e)=>setNationality(e.target.value)}
                />
                </Grid>
                <Grid item xs={5.9}>
                    <FormControl fullWidth variant="outlined">
                    <InputLabel id="year-label">Year</InputLabel>
                    <Select
                    id="year"
                    label="Year"
                    variant="outlined"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    fullWidth
                    inputProps={{ style: { color: 'black', height: '56px', padding: '10px 0', paddingBottom: '10px' } }}
                    >
                    {Array.from({ length: 2025 - 1960 }, (_, i) => 1960 + i).map((year) => (
                    <MenuItem key={year} value={year}>
                    {year}
                    </MenuItem>
                    ))}
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={5.9}>
                <TextField id="series" label="Series" variant="outlined" fullWidth
                    value={series}
                    onChange={(e)=>setSeries(e.target.value)}
                />
                </Grid>
                <Grid item xs={5.9}>
                <TextField id="card_number" label="Card number" variant="outlined" fullWidth
                    value={card_number}
                    onChange={(e)=>setCardNumber(e.target.value)}
                />
                </Grid>
                <Grid item xs={5.9}>
                <TextField id="variant" label="Variant" variant="outlined" fullWidth
                    value={variant}
                    onChange={(e)=>setVariant(e.target.value)}
                />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={11}>
                <TextField id="manufacturer" label="Manufacturer" variant="outlined" width="100%"
                    value={manufacturer}
                    onChange={(e)=>setManufacturer(e.target.value)}
                    style={{ width: '50%' }}
                />
                </Grid>
            </Grid>
            <br/>
            <h2 color='grey'>Optional</h2>

            <Grid container spacing={0.5}>
                <Grid item xs={5.9}>
                <TextField id="image_url" label="Image URL" variant="outlined" fullWidth
                    value={image_url}
                    onChange={(e)=>setImageURL(e.target.value)}
                />
                </Grid>
                <Grid item xs={5.9}>
                <TextField id="description" label="Description" variant="outlined" fullWidth
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={11}>
                    <Button
                    variant='contained'
                    style={{ backgroundColor: rookie ? 'green' : 'red', height: '54px', width: '75%' }}
                    onClick={() => setRookie(!rookie)}
                    >
                    Rookie
                    </Button>
                </Grid>
            </Grid>
            
            <Button variant="contained"onClick={handleClick}>
                Submit
            </Button>
            {errorMessage && <p>{errorMessage}</p>}
            </Box>
        </Paper>
    </Container>

  );
}