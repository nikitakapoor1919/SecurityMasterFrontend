import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js'
import '../styles/styles.css'

export class SecurityAndSummary extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        const {classes}=this.props
        return (
            <div className="botton-margin">
                    <Typography variant="h4" className={classes.topHeading} style={{fontWeight:700}}>Security Summary</Typography>
                    <table>
                        <thead>
                            <tr>
                                <th>Security Name</th>
                                <th>Security Description</th>
                                <th>Asset Type</th>
                                <th>Investment Type</th>
                                <th>Trading Factor</th>
                                <th>Pricing Factor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.bonds.map(bond=>
                                    bond.BondId == this.props.bid ?
                                    <tr key={bond.BondId}>
                                        <td data-column="Name">{bond.SecurityName}</td>
                                        <td data-column="Description">{bond.SecurityDescription}</td>
                                        <td data-column="Asset Type">{bond.AssetType}</td>
                                        <td data-column="Investment Type">{bond.InvestmentType}</td>
                                        <td data-column="Trading Factor">{bond.TradingFactor}</td>
                                        <td data-column="Pricing Factor">{bond.PricingFactor}</td>   
                                    </tr> : null)
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default withStyles(styles)(SecurityAndSummary)

// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import Switch from '@mui/material/Switch';
// import WifiIcon from '@mui/icons-material/Wifi';
// import BluetoothIcon from '@mui/icons-material/Bluetooth';

// export default function SwitchListSecondary() {
//   const [checked, setChecked] = React.useState(['wifi']);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };
//         if (this.props.currentStep !== 1) {
//             return null
//         } 
//   return (
//     <List
//       sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//       subheader={<ListSubheader>Settings</ListSubheader>}
//     >
//       <ListItem>
//           <ListItemText>Security Name</ListItemText>
//           <ListItemText>this.props.bond.SecurityName</ListItemText>
//       </ListItem>
//       <ListItem>
//             <ListItemText>Security Description</ListItemText>
//             <ListItemText>this.props.bond.SecurityDescription</ListItemText>
//       </ListItem>
//       <ListItem>
//             <ListItemText>Security Name</ListItemText>
//             <ListItemText>Security Name</ListItemText>
//           </ListItem>
//     </List>
//   );
// }


