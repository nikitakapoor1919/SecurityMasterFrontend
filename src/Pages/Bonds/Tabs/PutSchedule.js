import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';


export class PutSchedule extends Component {
    render() {
        if (this.props.currentStep !== 7) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Put Schedule</Typography>
                {this.props.bonds.map(bond=>
                bond.BondId == this.props.bid ?
                <List sx={{ width: '100%', margin:'0 auto', background:'#e6e6e6' }} className={classes.listTable}>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Put Date</ListItemText>
                        <ListItemText  className={classes.listSecond}>{bond.PutDate}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Put Price</ListItemText>
                        <ListItemText className={classes.listSecond}>{bond.PutPrice}</ListItemText>
                    </ListItem>
                </List>
                 : null)
                }
            </div>
        )
    }
}
export default withStyles(styles) (PutSchedule)

