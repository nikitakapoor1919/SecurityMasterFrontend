import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'
import '../styles/styles.css'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';


export class RegulatoryDetails extends Component {
    render() {
        if (this.props.currentStep !== 5) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Regulatory Details</Typography>
                {this.props.bonds.map(bond=>
                        bond.BondId == this.props.bid ?
                        <List sx={{ width: '100%', margin:'0 auto', bgcolor: 'background.paper' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Asset Class</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.PFAssetClass}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Country</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PFCountry}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Credit Rating</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.PFCreditRating}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PFCurrency}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Instrument</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PFInstrument}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Liquidity Profile</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.PFLiquidityProfile}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Maturity </ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PFMaturity}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF NAICS Code</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.PFNAICSCode}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Region</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PFRegion}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Sector</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PFSector}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Sub Asset Class</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.PFSubAssetClass}</ListItemText>
                            </ListItem>                            
                        </List>
                         : null)                    
                 }
            </div>
        )
    }
}

export default withStyles(styles)(RegulatoryDetails)

