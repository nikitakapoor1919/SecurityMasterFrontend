import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'
import '../styles/styles.css'

export class RegulatoryDetails extends Component {
    render() {
        if (this.props.currentStep !== 5) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Regulatory Details</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Form PF Asset Class</th>
                            <th>Form PF Country</th>
                            <th>Form PF Credit Rating</th>
                            <th>Form PF Currency</th>
                            <th>Form PF Instrument  </th>
                            <th>Form PF Liquidity Profile</th>
                            <th>Form PF Maturity </th>
                            <th>Form PF NAICS Code </th>
                            <th>Form PF Region</th>
                            <th>Form PF Sector</th>
                            <th>Form PF Sub Asset Class </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.PFCountry}</td>
                                <td>{bond.PFCreditRating}</td>
                                <td>{bond.PFCurrency}</td>
                                <td>{bond.PFInstrument}</td>
                                <td>{bond.PFLiquidityProfile}</td>
                                <td>{bond.PFMaturity}</td> 
                                <td>{bond.PFNAICSCode}</td>
                                <td>{bond.PFRegion}</td>
                                <td>{bond.PFSector}</td>
                                <td>{bond.PFSubAssetClass}</td>   
                            </tr>:null)
                        }
                    </tbody>
                </table>
            
            </div>
        )
    }
}

export default withStyles(styles)(RegulatoryDetails)

