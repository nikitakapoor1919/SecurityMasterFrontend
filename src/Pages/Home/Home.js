import React from 'react'
import {Typography,Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function Home(props) {
    const {classes} = props;  
    return (
      <div className={classes.root}>
      <div className={classes.content}>
      <Typography className={classes.heading} variant="h2" >
          SECURITY MASTER
        </Typography>
        <Typography className={classes.heading3} align="center" variant="h6">
          What Security Type You want to explore?
        </Typography>
        <div className={classes.btnGroup}>
            <Typography variant="h6" component="div">
            <a href='\equities' className={classes.link}><Button color="inherit">Equities</Button></a>
            </Typography>
            <Typography Typography variant="h6" component="div">
              <a href='\bonds' className={classes.link}><Button color="inherit">Bonds</Button></a>
            </Typography>
        </div>
      </div>
      <div><img src='/images/home.svg' className={classes.responsive}></img></div>
      </div>
    );
}

export default withStyles(styles) (Home)
