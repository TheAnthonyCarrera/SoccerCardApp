import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Card() {
    const PaperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" }
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [club, setClub] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [nationality, setNationality] = useState("");
    const [cards, setCards] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleClick = (e) => {
        e.preventDefault()
        const card = { first_name, last_name, club, nationality }
        console.log(card)
        fetch("http://localhost:8081/card/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(card)
        }).then(() => {
            console.log("New Card Added")
        })
    }

    function search() {
        const fnln = searchValue.split(" ");

        fetch("http://localhost:8081/card/search?first_name=" + fnln[0] + "&last_name=" + fnln[1], {
            method: "GET",
            headers: { "Content-Type": "application/json" }
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
                <h1 style={{ color: "blue" }}>Add Card</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="first_name" label="First Name" variant="outlined" fullWidth
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField id="last_name" label="Last Name" variant="outlined" fullWidth
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField id="club" label="Club" variant="outlined" fullWidth
                        value={club}
                        onChange={(e) => setClub(e.target.value)}
                    />
                    <TextField id="nationality" label="Nationality" variant="outlined" fullWidth
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleClick}>
                        Submit
                    </Button>
                    <h2>Search</h2>
                    <TextField id="searchField" label="Player Name" type="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                    <Button variant="contained" onClick={(e) => search(e)}>Search</Button>
                    {errorMessage && <p>{errorMessage}</p>}
                </Box>
            </Paper>
            <h1>Cards</h1>
            <Paper elevation={3} style={PaperStyle}>
                {cards.map(card => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={card.id}>
                        ID: {card.id} <br />
                        Name: {card.first_name} {card.last_name} <br />
                        Club: {card.club} <br />
                        Nationality: {card.nationality} <br />
                    </Paper>
                ))}
            </Paper>
        </Container>   
    )         
}
