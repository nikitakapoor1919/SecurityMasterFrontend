import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class CallSchedule extends Component {
    render() {
        if (this.props.currentStep !== 9) {
            return null
        } 
        const {classes}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading} style={{fontWeight:700}}>Call Schedule</Typography>
                {this.props.bonds.map(bond=>
                        bond.BondId == this.props.bid ?
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Call Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{bond.CallDate}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Call Price</ListItemText>
                                <ListItemText className={classes.listSecond}>{bond.CallPrice}</ListItemText>
                            </ListItem>
                        </List>
                         : null)
                        
                 }
            </div>
        )
    }
}

export default withStyles(styles) (CallSchedule)

