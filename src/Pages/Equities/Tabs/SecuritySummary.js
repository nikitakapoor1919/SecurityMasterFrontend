import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import '../../../styles/styles.css'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class SecuritySummary extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        const {classes,equity}=this.props
        return (
            <div className="botton-margin">
                    <Typography variant="h4" className={classes.topHeading} style={{fontWeight:700}}>Security Summary</Typography>
                                <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Security Name</ListItemText>
                                        <ListItemText  className={classes.listSecond}>{equity.SecurityName? equity.SecurityName:'---'}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Security Description</ListItemText>
                                        <ListItemText  className={classes.listSecond}>{equity.SecurityDescription ? equity.SecurityDescription:'---'}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Has Position</ListItemText>
                                        <ListItemText className={classes.listSecond}>{equity.HasPosition ? 'True':'False'}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Is Active </ListItemText>
                                        <ListItemText className={classes.listSecond}>{equity.IsActive ? 'True':'False'}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Round Lot Size</ListItemText>
                                        <ListItemText className={classes.listSecond}>{equity.LotSize ? equity.LotSize:'---'}</ListItemText>
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText className={classes.listFirst}>Bloomberg Unique Name</ListItemText>
                                        <ListItemText className={classes.listSecond}>{equity.BBGUniqueName ? equity.BBGUniqueName:'---'}</ListItemText>
                                    </ListItem>
                                </List>               
            </div>
        )
    }
}

export default withStyles(styles)(SecuritySummary)
