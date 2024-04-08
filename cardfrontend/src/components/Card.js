import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,  Button } from '@mui/material';
export default function Card() {
 
    const PaperStyle={padding:"50px 20px", width:600,margin:"20px auto"}
    const [first_name,setFirstName]=React.useState("")
    
    const [last_name,setLastName]=React.useState("")

    const [club,setClub]=React.useState("")

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
            </Box>
        </Paper>
    </Container>
  );
}