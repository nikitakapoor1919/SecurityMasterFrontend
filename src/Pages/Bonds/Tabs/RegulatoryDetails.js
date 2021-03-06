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
        const {classes,bond}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Regulatory Details</Typography>
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4'}} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Asset Class</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.PFAssetClass ? '---':bond.PFAssetClass}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Country</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PFCountry ? '---':bond.PFCountry}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Credit Rating</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.PFCreditRating ? '---':bond.PFCreditRating}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PFCurrency ? '---':bond.PFCurrency}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Instrument</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PFInstrument ? '---':bond.PFInstrument}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Liquidity Profile</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.PFLiquidityProfile ? '---':bond.PFLiquidityProfile}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Maturity </ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PFMaturity ? '---':bond.PFMaturity}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF NAICS Code</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.PFNAICSCode ? '---':bond.PFNAICSCode}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Region</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PFRegion ? '---':bond.PFRegion}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Sector</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PFSector ? '---':bond.PFSector}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Form PF Sub Asset Class</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.PFSubAssetClass ? '---':bond.PFSubAssetClass}</ListItemText>
                            </ListItem>                            
                        </List>
            </div>
        )
    }
}

export default withStyles(styles)(RegulatoryDetails)

