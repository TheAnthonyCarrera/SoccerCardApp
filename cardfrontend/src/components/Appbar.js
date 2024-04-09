import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Appbar() {
  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleMenuOpen = (event) => {
    
    setAnchorE1(event.currentTarget);
  }
  
  const handleMenuClose = () => {
    setAnchorE1(null);
  };
  
  const handleOption3Click = (url) => {
    window.location.href = "https://www.ebay.ca/";
    (handleMenuClose());
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMenuOpen}
                >
                  <MoreVertIcon />
                </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Cards
                  </Typography>
                
            </Toolbar>
        </AppBar>
      <Menu
        anchorEl={anchorE1}
        open={Boolean(anchorE1)}
        onClose={handleMenuClose} // Call handleMenuClose when Menu is closed
      >
        <MenuItem onClick={handleMenuClose}>Add Card</MenuItem>
        <MenuItem onClick={handleMenuClose}>Card Database</MenuItem>
        <MenuItem onClick={handleOption3Click}>Ebay</MenuItem>
      </Menu>
      
    
    
    </Box>
  );
}
