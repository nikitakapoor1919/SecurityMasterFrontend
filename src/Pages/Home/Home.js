import React from 'react'
import {Typography,Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function Home(props) {
    const {classes} = props;  
    return (
      <div className={classes.root}>
      <div>
      <Typography className={classes.heading} variant="h3" >
          SECURITY MASTER
        </Typography>
        <Typography className={classes.heading3} align="justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap 
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release 
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
      <div><img src='/images/reading.svg' className={classes.responsive}></img></div>
      </div>
    );
}

export default withStyles(styles) (Home)
