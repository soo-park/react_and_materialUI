import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './TopBar.css';

const TopBar = (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
      AYASDI
      </Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;
