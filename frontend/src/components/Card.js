import React, { useEffect, useState, useCallback } from 'react';
import FancyCard from './FancyCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,  Button } from '@mui/material';

export default function Card() {
 
    const PaperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const [first_name,setFirstName]=React.useState("")
    const [last_name,setLastName]=React.useState("")
    const [club,setClub]=React.useState("")
    const [searchValue, setSearchValue] = React.useState("");
    const [nationality,setNationality]=React.useState("")
    const [cards,setCards]=React.useState([])
    const [errorMessage, setErrorMessage] = useState(null);
    const [manufacturer, setManufacturer] = useState("");
    const [url, setUrl] = useState("");
    
    const handleClick=(e)=>{
        e.preventDefault()
        const card={first_name,last_name,club,nationality, manufacturer, url}
        console.log(card)
        fetch("http://localhost:8081/card/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(card)
        }).then(data=>{
            if (data.ok) {
                setErrorMessage(null);
                setErrorMessage("Card added");
            }
            else {
                console.log("failed to add card");
                setErrorMessage("failed to add card");
            }
        })
    }

    function search() {

        fetch("http://localhost:8081/card/search?name=" + searchValue ,{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        .then(response => {
            if (!response.ok) {
                console.log(response.status);
                throw new Error('Something went wrong');
            }
            else {
                let value = response.json();
                console.log(value);
                return value;
            }
        })
        .then(data => {
            console.log(data)
            if (data.length > 0) {
                setCards(data)
                setErrorMessage(null);
            }
            else {
                console.log("No data found");
                setErrorMessage("No data found");
            }
        })
        .catch(error => console.error(error));
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
                
                <TextField id="first_name" label="First Name" variant="outlined" fullWidth
                    value={first_name}
                    onChange={(e)=>setFirstName(e.target.value)}
                />
                
                <TextField id="last_name" label="Last Name" variant="outlined" fullWidth
                    value={last_name}
                    onChange={(e)=>setLastName(e.target.value)}
                />

                <TextField id="club" label="Club" variant="outlined" fullWidth
                    value={club}
                    onChange={(e)=>setClub(e.target.value)}
                />

                <TextField id="nationality" label="Nationality" variant="outlined" fullWidth
                    value={nationality}
                    onChange={(e)=>setNationality(e.target.value)}
                />

                <TextField id="manufacturer" label="Manufacturery" variant="outlined" fullWidth
                    value={manufacturer}
                    onChange={(e)=>setManufacturer(e.target.value)}
                />

                <TextField id="url" label="Image URL" variant="outlined" fullWidth
                    value={url}
                    onChange={(e)=>setUrl(e.target.value)}
                />
                
                <Button variant="contained"onClick={handleClick}>
                    Submit
                </Button>

                <h2>Search</h2>
                <TextField id="searchField" label="Player Name" type="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                {/* <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                /> */}
                <Button variant="contained" onClick={(e) => search(e)}>Search</Button>
                {errorMessage && <p>{errorMessage}</p>}
            </Box>
        </Paper>
        <h1>Cards</h1>
        <Paper elevation={3} style={PaperStyle}>
                
                {cards.map(card=>(
                    <FancyCard 
                    id={card.id} 
                    name={card.first_name + " " + card.last_name}
                    manufacturer={card.manufacturer}
                    nationality={card.nationality}
                    imageURL={card.url}
                    club={card.club}
                    />
                ))}

        </Paper>
    </Container>

  );
}