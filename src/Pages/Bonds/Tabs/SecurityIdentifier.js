import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'
import '../styles/styles.css'

export class SecurityIdentifier extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Security Identifier</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>ISIN </th>
                            <th>Bloomberg Ticker</th>
                            <th>Bloomberg Unique ID</th>
                            <th>CUSIP</th>
                            <th>SEDOL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.ISIN}</td>
                                <td>{bond.BBGTicker}</td>
                                <td>{bond.BBGUniqueID}</td>
                                <td>{bond.CUSIP}</td>
                                <td>{bond.SEDOL}</td>
                            </tr>:null)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles)(SecurityIdentifier)

