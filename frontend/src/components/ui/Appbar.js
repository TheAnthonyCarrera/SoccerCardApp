// Appbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

export default function Appbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleOption3Click = () => {
    window.location.href = "https://www.ebay.ca/";
    handleMenuClose(); // Close the menu after clicking the option
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
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose} // Call handleMenuClose when Menu is closed
      >
        

        <MenuItem onClick={handleMenuClose}>add Card</MenuItem>
        <MenuItem onClick={handleMenuClose}>Card Database</MenuItem>
        <MenuItem onClick={handleOption3Click}>Ebay</MenuItem>
      </Menu>
    </Box>
  );
}
