import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Grid, Select, MenuItem, Box, FormControl, InputLabel, Switch } from '@mui/material';
//import './Card.css'

export default function Card() {
    const PaperStyle = { padding: "50px 20px", width: 600, margin: "20px auto", backgroundColor: '#616161' }; // <-- Added backgroundColor property
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [club, setClub] = useState("");
    const [nationality, setNationality] = useState("");
    const [year, setYear] = useState("");
    const [series, setSeries] = useState("");
    const [card_number, setCardNumber] = useState("");
    const [rookie, setRookie] = useState(false);
    const [variant, setVariant] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [image_url, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const years = Array.from({ length: 2025 - 1960 + 1 }, (_, i) => 1960 + i);

    const handleClick = (e) => {
        e.preventDefault();
        const card = { first_name, last_name, club, nationality, year, series, card_number, rookie, variant, manufacturer, image_url, description };
        console.log(card);
        console.log(rookie);
        fetch("http://localhost:8081/card/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(card)
        }).then((data) => {
            if (data.ok) {
                console.log("New Card Added");
                setErrorMessage(null);
                setErrorMessage("Successfully added Card");
            } else {
                console.log("Error adding card");
                console.log(data.status);
                setErrorMessage("Error adding card");
            }
        });
    };



    return (
        <Container>
            <Paper elevation={4} style={PaperStyle}> 
                <h1 style={{ color: "black" }}>Add Card</h1>
                <Box
                    component="form"
                    sx = {{padding : '5px'}}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    className: 'blackInputLabel' // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Club"
                                variant="outlined"
                                value={club}
                                onChange={(e) => setClub(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Nationality"
                                variant="outlined"
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="year-label">Year</InputLabel>
                                <Select
                                    labelId="year-label"
                                    id="year"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    label="Year"
                                    InputLabelProps={{
                                        style: { color: 'black' } // <-- Set the color of the label to black
                                    }}
                                >
                                    {years.map((year) => (
                                        <MenuItem key={year} value={year}>
                                            {year}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Series"
                                variant="outlined"
                                value={series}
                                onChange={(e) => setSeries(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Card Number"
                                variant="outlined"
                                value={card_number}
                                onChange={(e) => setCardNumber(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Variant"
                                variant="outlined"
                                value={variant}
                                onChange={(e) => setVariant(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Manufacturer"
                                variant="outlined"
                                value={manufacturer}
                                onChange={(e) => setManufacturer(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} alignItems="left" sx={{padding : '20px'}}>
                        <Grid item xs={1}>
                        <FormControl component="fieldset">
                            <InputLabel htmlFor="rookie-switch" shrink={true} alignItems = "left" InputLabelProps={{
                                style: { color: 'black' } // <-- Set the color of the label to black
                            }} >Rookie</InputLabel>
                            <Switch
                                id="rookie-switch"
                                checked={rookie}
                                onChange={() => setRookie(!rookie)}
                            /> 
                        </FormControl>
                        </Grid>
                    </Grid>

                    <br />
                    <h2 color='grey'>Optional</h2>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Image URL"
                                variant="outlined"
                                value={image_url}
                                onChange={(e) => setImageURL(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Description"
                                variant="outlined"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                fullWidth
                                InputLabelProps={{
                                    style: { color: 'black' } // <-- Set the color of the label to black
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Button variant="contained" onClick={handleClick} style={{top : '10px', backgroundColor : 'black'}}>
                        Submit
                    </Button>

                    {errorMessage && <p>{errorMessage}</p>}
                </Box>
            </Paper>
        </Container>
    )
}
