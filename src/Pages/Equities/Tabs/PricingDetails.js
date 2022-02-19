import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class PricingAndAnalytics extends Component {
    render() {
        if (this.props.currentStep !== 7) {
            return null
        } 
        const {classes,equity}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Pricing Details</Typography>
                        <List sx={{ width: '100%', margin:'0 auto',background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Open Price</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.OpenPrice ? equity.OpenPrice:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Close Price</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.ClosePrice ? equity.ClosePrice:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Volume</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.Volume ? equity.Volume:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Last Price</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.LastPrice ? equity.LastPrice:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Ask Price</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.AskPrice ? equity.AskPrice:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bid Price</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.BidRatio ? equity.BidRatio:'---' }</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>PE Ratio </ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.PERatio ? equity.PERatio:'---'}</ListItemText>
                            </ListItem>
                            
                        </List>
      
            </div>
        )
    }
}

export default withStyles(styles) (PricingAndAnalytics)

