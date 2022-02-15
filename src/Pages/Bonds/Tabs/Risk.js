import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'

export class Risk extends Component {
    render() {
        if (this.props.currentStep !== 4) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Risk</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Duration   </th>
                            <th>Volatility 30D </th>
                            <th>Volatility 90D</th>
                            <th>Convexity</th>
                            <th>Average Volume 30D </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.MaculayDuration}</td>
                                <td>{bond.Volatility30D}</td>
                                <td>{bond.Volatility90D}</td>
                                <td>{bond.Convexity}</td>
                                <td>{bond.AverageVolume30D}</td>
                            </tr>:null)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles)(Risk)

