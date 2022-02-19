import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';


export class ReferenceData extends Component {
    render() {
        if (this.props.currentStep !== 6) {
            return null
        } 
        const {classes,equity}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Reference Data</Typography>
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Industry Group</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.BBloombergIndustryGroup ? equity.BBloombergIndustryGroup:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Exchange</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.Exchange ? equity.Exchange:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Industry Sub Group</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.BBGIndustrySubGroup ? equity.BBGIndustrySubGroup:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Sector</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.BloombergSector ? equity.BloombergSector:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issue Country</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.CountryOfIncorporation ? equity.CountryOfIncorporation:'---' }</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issue Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.IssueCurrency ? equity.IssueCurrency:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issuer</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.Issurer ? equity.Issurer:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Risk Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.RiskCurrency ? equity.RiskCurrency:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Trading Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.TradingCurrency ? equity.TradingCurrency:'---'}</ListItemText>
                            </ListItem>
                            
                        </List>
            </div>
        )
    }
}

export default withStyles(styles)(ReferenceData)

