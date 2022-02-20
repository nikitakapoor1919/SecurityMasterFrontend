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
        const {classes,bond}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Security Details</Typography>
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>First Coupon Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.FirstCouponDate? '---':bond.FirstCouponDate.substring(0,10)}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Cap</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.CouponCap? '---':bond.CouponCap}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Floor</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.CouponFloor? '---':bond.CouponFloor}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Frequency</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.CouponFrequency? '---':bond.CouponFrequency}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Rate</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.CouponRate? '---':bond.CouponRate}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Coupon Type</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.CouponType? '---':bond.CouponType}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Float Spread </ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PFMaturity? '---':bond.PFMaturity}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Is Callable</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.CallableFlag ? 'False':'True'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Is Fix to Float</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.FixToFloatFlag? 'False':'True'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Is Putable</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PutableFlag? '---':bond.PutableFlag}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Issue Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.IssueDate? '---':bond.IssueDate.substring(0,10)}</ListItemText>
                            </ListItem>         
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Last Reset Date</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.LastResetDate? '---':bond.LastResetDate.substring(0,10)}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Maturity Date</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.Maturity? '---':bond.Maturity.substring(0,10)}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Maximum Call Notice Days</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.CallNotificationMaxDays? '---':bond.CallNotificationMaxDays}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Maximum Put Notice Days</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.PutNotificationMaxDays? '---':bond.PutNotificationMaxDays}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Penultimate Coupon Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.PenultimateCouponDate? '---':bond.PenultimateCouponDate.substring(0,10)}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Reset Frequency</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.ResestFrequency? '---':bond.ResestFrequency}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Has Position</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.HasPosition? 'False':'True'}</ListItemText>
                            </ListItem>
                        </List>
            </div>
        )
    }
}

export default withStyles(styles)(SecurityDetails)

