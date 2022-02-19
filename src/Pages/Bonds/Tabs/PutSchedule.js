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
        const {classes,bond}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Put Schedule</Typography>
                <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Put Date</ListItemText>
                        <ListItemText  className={classes.listSecond}>{!bond.PutDate ? '---':bond.PutDate.substring(0,10) }</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Put Price</ListItemText>
                        <ListItemText className={classes.listSecond}>{!bond.PutPrice ? '---':bond.PutPrice}</ListItemText>
                    </ListItem>
                </List>
            </div>
        )
    }
}
export default withStyles(styles) (PutSchedule)

