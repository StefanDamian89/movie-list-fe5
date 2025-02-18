import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">movie list 🎥</Typography>
        
      </Toolbar>
    </AppBar>
  )
}

export default Header
