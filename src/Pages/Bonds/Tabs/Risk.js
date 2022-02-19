import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import '../../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles.js'
import {List,ListItem,ListItemIcon,ListItemText,ListSubheader} from '@mui/material';

export class Risk extends Component {
    render() {
        if (this.props.currentStep !== 4) {
            return null
        } 
        const {classes,bond}=this.props
        return (
            <div className="botton-margin">
                <Typography variant="h4" className={classes.topHeading}  style={{fontWeight:700}}>Risk</Typography>
                <List sx={{ width: '100%', margin:'0 auto', background:'#f5f4f4' }} className={classes.listTable}>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Duration</ListItemText>
                        <ListItemText  className={classes.listSecond}>{!bond.MaculayDuration ? '---':bond.MaculayDuration}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Volatility 30D </ListItemText>
                        <ListItemText className={classes.listSecond}>{!bond.Volatility30D ? '---':bond.Volatility30D}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Volatility 90D</ListItemText>
                        <ListItemText className={classes.listSecond}>{!bond.Volatility90D ? '---':bond.Volatility90D}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Convexity</ListItemText>
                        <ListItemText className={classes.listSecond}>{!bond.Convexity ? '---':bond.Convexity}</ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText className={classes.listFirst}>Average Volume 30D</ListItemText>
                        <ListItemText className={classes.listSecond}>{!bond.AverageVolume30D ? '---':bond.AverageVolume30D}</ListItemText>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(Risk)

