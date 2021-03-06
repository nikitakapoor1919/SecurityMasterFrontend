import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import '../../../styles/styles.css'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class SecurityAndSummary extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        const {classes,bond}=this.props
        return (
            <div className="botton-margin">
                    <Typography variant="h4" className={classes.topHeading} style={{fontWeight:700}}>Security Summary</Typography>
                                <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Security Name</ListItemText>
                                        <ListItemText  className={classes.listSecond}>{!bond.SecurityName? '---':bond.SecurityName}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Security Description</ListItemText>
                                        <ListItemText className={classes.listSecond}>{!bond.SecurityDescription? '---':bond.SecurityDescription}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Asset Type</ListItemText>
                                        <ListItemText className={classes.listSecond}>{!bond.AssetType? '---':bond.AssetType}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Investment Type</ListItemText>
                                        <ListItemText className={classes.listSecond}>{!bond.InvestmentType? '---':bond.InvestmentType}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Trading Factor</ListItemText>
                                        <ListItemText className={classes.listSecond}>{!bond.TradingFactor? '---':bond.TradingFactor}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Pricing Factor</ListItemText>
                                        <ListItemText className={classes.listSecond}>{!bond.PricingFactor? '---' :bond.PricingFactor}</ListItemText>
                                    </ListItem>
                                </List>               
            </div>
        )
    }
}

export default withStyles(styles)(SecurityAndSummary)
