import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,  Button } from '@mui/material';


export default function Card() {
    
    // values
    const PaperStyle = { padding: "50px 20px", width: 600, margin: "20px auto", backgroundColor: '#616161' }; // <-- Added backgroundColor property
    //const PaperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const [searchValue, setSearchValue] = React.useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [cards,setCards]=React.useState([])

    function search() {

        const fnln = searchValue.split(" ");

        fetch("http://localhost:8081/card/search?first_name=" + fnln[0] + "&last_name=" + fnln[1] ,{
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
                
            <h2>Search</h2>
                <TextField id="searchField" label="Player Name" type="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                {/* <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                /> */}
                <Button variant="contained" onClick={(e) => search(e)} style={{left : '10px' , top : '7.5px' , backgroundColor : 'black'}}>Search</Button>
                {errorMessage && <p>{errorMessage}</p>}

                <h1>Cards</h1>
                
                {cards.map(card=>(
                    <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left", PaperStyle}} key={card.id}>
                        ID: {card.id} <br/>
                        Name: {card.first_name} {card.last_name} <br/>
                        Club: {card.club} <br/>
                        Nationality: {card.nationality} <br/>
                    </Paper>
                ))}
            </Paper>
        </Container>
    )
}