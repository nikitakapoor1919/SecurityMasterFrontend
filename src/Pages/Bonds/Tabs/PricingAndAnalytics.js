import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class PricingAndAnalytics extends Component {
    render() {
        if (this.props.currentStep !== 8) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Pricing And Analytics</Typography>
                {this.props.bonds.map(bond=>
                        bond.BondId == this.props.bid ?
                        <List sx={{ width: '100%', margin:'0 auto',background:'#e6e6e6' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Last Price</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.LastPrice}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Ask Price</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.AskPrice}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>High Price</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.HighPrice}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Low Price</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.LowPrice}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Open Price</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.OpenPrice}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Volume</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.Volume}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bid Price </ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.BidPrice}</ListItemText>
                            </ListItem>
                            
                        </List>
                         : null)                    
                 }
      
            </div>
        )
    }
}

export default withStyles(styles) (PricingAndAnalytics)

