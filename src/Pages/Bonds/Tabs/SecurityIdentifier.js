import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import '../../../styles/styles.css'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class SecurityIdentifier extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        } 
        const {classes,bond}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Security Identifier</Typography>
                        <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>ISIN</ListItemText>
                                <ListItemText  className={classes.listSecond}>{!bond.ISIN ? '---':bond.ISIN}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Ticker</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.BBGTicker ? '---':bond.BBGTicker}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>Bloomberg Unique ID</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.BBGUniqueID ? '---':bond.BBGUniqueID}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>CUSIP</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.CUSIP ? '---':bond.CUSIP}</ListItemText>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemText className={classes.listFirst}>SEDOL</ListItemText>
                                <ListItemText className={classes.listSecond}>{!bond.SEDOL ? '---':bond.SEDOL}</ListItemText>
                            </ListItem>
                        </List>
            </div>
        )
    }
}

export default withStyles(styles)(SecurityIdentifier)

