import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import '../../../styles/styles.css'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';


export class SecurityDetails extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Security Details</Typography>
                {this.props.bonds.map(bond=>
                        bond.BondId == this.props.bid ?
                        <List sx={{ width: '100%', margin:'0 auto', background:'#e6e6e6' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>First Coupon Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.FirstCouponDate}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Cap</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.CouponCap}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Floor</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.CouponFloor}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Frequency</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.CouponFrequency}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Rate</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.CouponRate}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Type</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.CouponType}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Float Spread </ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PFMaturity}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Is Callable</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.CallableFlag}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Is Fix to Float</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.FixToFloatFlag}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Is Putable</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PutableFlag}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issue Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.IssueDate}</ListItemText>
                            </ListItem>         
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Last Reset Date</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.LastResetDate}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Maturity Date</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.Maturity}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Maximum Call Notice Days</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.CallNotificationMaxDays}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Maximum Put Notice Days</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.PutNotificationMaxDays}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Penultimate Coupon Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.PenultimateCouponDate}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Reset Frequency</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.ResestFrequency}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Has Position</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.HasPosition}</ListItemText>
                            </ListItem>
                        </List>
                         : null)                    
                 }
            </div>
        )
    }
}

export default withStyles(styles)(SecurityDetails)

