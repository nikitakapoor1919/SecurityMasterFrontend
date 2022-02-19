import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class DividentHistory extends Component {
    render() {
        if (this.props.currentStep !== 8) {
            return null
        } 
        const {classes,equity}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Divident History</Typography>
                        <List sx={{ width: '100%', margin:'0 auto',background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Declared Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.DividentDeclaredDate ? equity.DividentDeclaredDate:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Ex Date</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.DividentExDate ? equity.DividentExDate:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Record Date</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.DividentRecordDate ? equity.DividentRecordDate:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Pay Date </ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.DividentPayDate ? equity.DividentPayDate:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Amount</ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.DividentAmount ? equity.DividentAmount:'---'}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Frequency</ListItemText>
                                <ListItemText className={classes.listSecond}>{equity.Frequency ? equity.Frequency:'---' }</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Dividend Type </ListItemText>
                                <ListItemText  className={classes.listSecond}>{equity.DividentType ? equity.DividentType:'---'}</ListItemText>
                            </ListItem>
                            
                        </List>
      
            </div>
        )
    }
}

export default withStyles(styles) (DividentHistory)

