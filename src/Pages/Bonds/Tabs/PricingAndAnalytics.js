import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'

export class PricingAndAnalytics extends Component {
    render() {
        if (this.props.currentStep !== 8) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Pricing And Analytics</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Ask Price </th>
                            <th>High Price</th>
                            <th>Low Price </th>
                            <th>Open Price</th>
                            <th>Volume</th>
                            <th>Bid Price </th>
                            <th>Last Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.AskPrice}</td>
                                <td>{bond.HighPrice}</td>
                                <td>{bond.LowPrice}</td>
                                <td>{bond.OpenPrice}</td>
                                <td>{bond.Volume}</td>
                                <td>{bond.BidPrice}</td>  
                                <td>{bond.LastPrice}</td>  
                            </tr>:null)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles) (PricingAndAnalytics)

