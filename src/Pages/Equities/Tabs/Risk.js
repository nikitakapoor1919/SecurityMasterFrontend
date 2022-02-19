import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemText} from '@mui/material';

export class Risk extends Component {
    render() {
        if (this.props.currentStep !== 4) {
            return null
        } 
        const {classes,equity}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Risk</Typography>
                <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>20 Day Average Volume</ListItemText>
                        <ListItemText  className={classes.listSecond}>{equity.AverageVolume20D? equity.AverageVolume20D:'---'}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Beta</ListItemText>
                        <ListItemText className={classes.listSecond}>{equity.Beta ? equity.Beta:'---'}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Short Interest</ListItemText>
                        <ListItemText className={classes.listSecond}>{equity.ShortInterest ? equity.ShortInterest:'---'}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>YTD Return</ListItemText>
                        <ListItemText className={classes.listSecond}>{equity.ReturnYTD ? equity.ReturnYTD:'---'}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>90 Day Price Volatility</ListItemText>
                        <ListItemText className={classes.listSecond}>{equity.Volatility90D ? equity.Volatility90D:'---'}</ListItemText>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(Risk)

