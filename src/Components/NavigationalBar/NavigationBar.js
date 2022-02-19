import React from 'react';
import {Toolbar, Typography, Button, AppBar,IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import MenuIcon from '@material-ui/icons/Menu';

function NavigationalBar(props) {
  const {classes} = props;  
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
           {
            props.show ?
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              className={classes.menuIcon}
            >
              <MenuIcon/>
            </IconButton>:null
           }
          <Typography variant="h6" component="div">
            <a href='\' className={classes.link}><Button className={classes.button} color="inherit">Home</Button></a>
          </Typography>
          <Typography variant="h6" component="div">
            <a href='\equities' className={classes.link}><Button className={classes.button} color="inherit">Equities</Button></a>
          </Typography>
          <Typography variant="h6" component="div">
            <a href='\bonds' className={classes.link}><Button className={classes.button} color="inherit">Bonds</Button></a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles) (NavigationalBar)