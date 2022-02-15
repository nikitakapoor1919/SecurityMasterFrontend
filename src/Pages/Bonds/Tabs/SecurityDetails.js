import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'
import '../styles/styles.css'

export class SecurityDetails extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Security Details</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>First Coupon Date  </th>
                            <th>Coupon Cap </th>
                            <th>Coupon Floor</th>
                            <th>Coupon Frequencyr</th>
                            <th>Coupon Rate </th>
                            <th>Coupon Type</th>
                            <th>Float Spread </th>
                            <th>Is Callable</th>
                            <th>Is Fix to Float</th>
                            <th>Is Putable </th>
                            <th>Issue Date</th>
                            <th>Last Reset Date </th>
                            <th>Maturity Date</th>
                            <th>Maximum Call Notice Days </th>
                            <th>Maximum Put Notice Days</th>
                            <th>Penultimate Coupon Date</th>
                            <th>Reset Frequency</th>
                            <th>Has Position </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.FirstCouponDate}</td>
                                <td>{bond.CouponCap}</td>
                                <td>{bond.CouponFloor}</td>
                                <td>{bond.CouponFrequency}</td>
                                <td>{bond.CouponRate}</td>
                                <td>{bond.CouponType}</td>   
                                <td>{bond.Spread}</td>
                                <td>{bond.CallableFlag}</td>
                                <td>{bond.FixToFloatFlag}</td>
                                <td>{bond.PutableFlag}</td>
                                <td>{bond.IssueDate}</td>
                                <td>{bond.LastResetDate}</td>   
                                <td>{bond.Maturity}</td>
                                <td>{bond.CallNotificationMaxDays}</td>
                                <td>{bond.PutNotificationMaxDays}</td>
                                <td>{bond.PenultimateCouponDate}</td>
                                <td>{bond.ResestFrequency}</td>
                                <td>{bond.HasPosition}</td>   
                            </tr>:null)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles)(SecurityDetails)

