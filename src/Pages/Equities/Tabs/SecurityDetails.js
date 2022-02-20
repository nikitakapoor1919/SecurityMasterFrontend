import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import '../../../styles/styles.css'
import {List,ListItem,ListItemText} from '@mui/material';

export class SecurityDetails extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        const {classes,equity}=this.props
        return (
            <div className="botton-margin">
                    <Typography variant="h4" className={classes.topHeading} style={{fontWeight:700}}>Security Details </Typography>
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Is ADR</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.IsADR ? 'True':'False'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>ADR Underlying Ticker</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.ADRUnderlyingTicker ? equity.ADRUnderlyingTicker :'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>ADR Underlying Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.ADRUnderlyingCurrency ? equity.ADRUnderlyingCurrency:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Shares Per ADR </ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.SharesPerADR ? equity.SharesPerADR:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>IPO Date</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.IPODate ? equity.IPODate:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Price Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.PricingCurrency ? equity.PricingCurrency:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Settle Days</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.SettleDays ? equity.SettleDays:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Shares Outstanding</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.TotalSharesOutstanding ? equity.TotalSharesOutstanding:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Voting Rights Per Share</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.VotingRightsPerShare ? equity.VotingRightsPerShare: '---'}</ListItemText>
                            </ListItem>  
                        </List>               
                </div>
        )
    }
}

export default withStyles(styles)(SecurityDetails)
