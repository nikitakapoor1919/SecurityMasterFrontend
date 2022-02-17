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
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Reference Data</Typography>
                {this.props.bonds.map(bond=>
                        bond.BondId == this.props.bid ?
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Industry Group</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.BloombergIndustryGroup}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Industry Sub Group</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.BloombergIndustrySubGroup}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Sector</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.BloombergIndustrySector}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issue Country</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.CountryOfIssurance}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issue Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.IssueCurrency}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issuer</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.Issuer}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Risk Currency</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.RiskCurrency}</ListItemText>
                            </ListItem>
                            
                        </List>
                         : null)                    
                 }
            </div>
        )
    }
}

export default withStyles(styles)(ReferenceData)

