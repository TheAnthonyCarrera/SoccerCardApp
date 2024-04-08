import * as React from 'react';
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
    
    const handleClick=(e)=>{
        e.preventDefault()
        const card={first_name,last_name,club,nationality}
        console.log(card)
        fetch("http://localhost:8081/card/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(card)
        }).then(()=>{
        console.log("New Card Added")
        })
    }

    function search(e) {
        e.preventDefault();
        let fnln = searchValue.split(" ");
        fetch("http://localhost:8081/card/search?first_name=" + fnln[0] + "&last_name=" + fnln[1] ,{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log(response.status);
                throw new Error('Something went wrong');
            }
        })
        .then(data => {
            console.log("---", data);
        });
        console.log("benchod ", fnln[0], fnln[1])
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
                
                <Button variant="contained"onClick={handleClick}>
                    Submit
                </Button>

                <h2>Search</h2>
                <TextField id="searchField" label="player name" type="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                {/* <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                /> */}
                <Button variant="contained" onClick={(e) => search(e)}>Search</Button>
            </Box>
        </Paper>
    </Container>
  );
}