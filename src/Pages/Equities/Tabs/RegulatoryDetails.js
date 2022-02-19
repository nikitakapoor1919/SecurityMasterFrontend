import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import '../../../styles/styles.css'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';


export class RegulatoryDetails extends Component {
    render() {
        if (this.props.currentStep !== 5) {
            return null
        } 
        const {classes,equity}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Regulatory Details</Typography>
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4'}} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Asset Class</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.PFAssetClass ? equity.PFAssetClass:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Country</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.PFCountry ? equity.PFCountry:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Credit Rating</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.PFCreditRating ? equity.PFCreditRating:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.PFCurrency ? equity.PFCurrency:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Instrument</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.PFInstrument ? equity.PFInstrument:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Liquidity Profile</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.PFLiquidityProfile ? equity.PFLiquidityProfile:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Maturity </ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.PFMaturity ? equity.PFMaturity:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF NAICS Code</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.PFNAICSCode ? equity.PFNAICSCode:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Region</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.PFRegion ? equity.PFRegion:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Sector</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.PFSector ? equity.PFSector:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Sub Asset Class</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.PFSubAssetClass ? equity.PFSubAssetClass:'---'}</ListItemText>
                            </ListItem>                            
                        </List>
            </div>
        )
    }
}

export default withStyles(styles)(RegulatoryDetails)

