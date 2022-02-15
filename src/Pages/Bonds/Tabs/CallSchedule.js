import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import '../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'

export class CallSchedule extends Component {
    render() {
        if (this.props.currentStep !== 9) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading} style={{fontWeight:700}}>Call Schedule</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Call Date </th>
                            <th>Call Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.CallDate}</td>
                                <td>{bond.CallPrice}</td>
                            </tr>:null)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles) (CallSchedule)

