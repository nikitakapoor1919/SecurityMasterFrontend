import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'

export class PutSchedule extends Component {
    render() {
        if (this.props.currentStep !== 7) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Put Schedule</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Put Date </th>
                            <th>Put Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.PutDate}</td>
                                <td>{bond.PutPrice}</td>  
                            </tr>:null)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default withStyles(styles) (PutSchedule)

