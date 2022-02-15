import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'

export class ReferenceData extends Component {
    render() {
        if (this.props.currentStep !== 6) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Reference Data</Typography>
                <table>
                    <thead>
                        <tr>
                            <th>Bloomberg Industry Group</th>
                            <th>Bloomberg Industry Sub Group</th>
                            <th>Bloomberg Sector</th>
                            <th>Issue Country</th>
                            <th>Issue Currency</th>
                            <th>Issuer</th>
                            <th>Risk Currency </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bonds.map(bond=>
                            bond.BondId == this.props.bid ?
                            <tr key={bond.BondId}>
                                <td>{bond.BloombergIndustryGroup}</td>
                                <td>{bond.BloombergIndustrySubGroup}</td>
                                <td>{bond.BloombergIndustrySector}</td>
                                <td>{bond.CountryOfIssurance}</td>
                                <td>{bond.IssueCurrency}</td>
                                <td>{bond.RiskCurrency}</td>   
                            </tr>:null)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withStyles(styles)(ReferenceData)

