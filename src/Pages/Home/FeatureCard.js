import * as React from 'react';
import {Card, CardActions, CardContent, Button, Typography, Container} from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';

function DescriptionCard(props) {
    const {classes} = props;  
  return (
    <div>
        <div  className={classes.featureCard}>
            <div>
                    <div>
                        <h6 className={classes.headingFeature}>Key features Of</h6>
                        <h2 className={classes.subHeadingFeature}>Security Master</h2>
                    </div>
                    <div className={classes.featureGrid}>
                    <div className={classes.boxSubDescription}>
                                <div className={classes.boxSubSubDescription}>
                                    <div className={classes.contextBox}>
                                        <div className={classes.imgDesp}><img className={classes.despImg} src='\images\Seamless-Integration-1.svg'></img></div>
                                        <div className={classes.contentDesp}>
                                            <h3><strong>Seamless Integration</strong></h3>
                                            <div><p>Integrate with any upstream data provider or downstream accounting, order management, 
                                            or reporting systems using configurable interfaces and standardized adapters.</p></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.boxSubDescription}>
                                <div className={classes.boxSubSubDescription}>
                                    <div className={classes.contextBox}>
                                        <div className={classes.imgDesp}><img className={classes.despImg} src='\images\Complete-Asset-Class-Coverage-2 (1).svg'></img></div>
                                        <div className={classes.contentDesp}>
                                            <h3><strong>Complete Asset Class Coverage</strong></h3>
                                            <div><p>Model any security or entity on the fly with a configurable
                                            data model.</p></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.boxSubDescription}>
                                <div className={classes.boxSubSubDescription}>
                                    <div className={classes.contextBox}>
                                        <div className={classes.imgDesp}><img className={classes.despImg} src='\images\Built-in-Audit-Trail-1.svg'></img></div>
                                        <div className={classes.contentDesp}>
                                            <h3><strong>Built-in Audit Trail</strong></h3>
                                            <div><p>Audit trail and time series data management help keep track of changes, 
                                            including the ability to perform backdated changes.</p></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.boxSubDescription}>
                                <div className={classes.boxSubSubDescription}>
                                    <div className={classes.contextBox}>
                                        <div className={classes.imgDesp}><img className={classes.despImg} src='\images\Data-Governance-Toolbox-2.svg'></img></div>
                                        <div className={classes.contentDesp}>
                                            <h3><strong>Data Governance Toolbox</strong></h3>
                                            <div><p>Advanced workflow management, exception management, and data 
                                            validation rules help ensure exceptional data quality.</p></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.boxSubDescription}>
                                <div className={classes.boxSubSubDescription}>
                                    <div className={classes.contextBox}>
                                        <div className={classes.imgDesp}><img className={classes.despImg} src='\images\Corporate-Actions-Support-1.svg'></img></div>
                                        <div className={classes.contentDesp}>
                                            <h3><strong>Corporate Actions Support</strong></h3>
                                            <div><p>Model any security or entity on the fly with a configurable
                                            data model.Create, update, and store corporate actions data from the provider of your choice.</p></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.boxSubDescription}>
                                <div className={classes.boxSubSubDescription}>
                                    <div className={classes.contextBox}>
                                        <div className={classes.imgDesp}><img className={classes.despImg} src='\images\Real-time-Data-Authoring-1.svg'></img></div>
                                        <div className={classes.contentDesp}>
                                            <h3><strong>Real-Time Data Authoring</strong></h3>
                                            <div><p>Ensure timely processing with real-time security or entity instantiation from a preferred data vendor.</p></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className={classes.boxSubDescription}>
                                <div className={classes.boxSubSubDescription}>
                                    <div className={classes.contextBox}>
                                        <div className={classes.imgDesp}><img src='\images\Entity-Data-ManagementWhite (1).svg' className={classes.despImg}></img></div>
                                        <div className={classes.contentDesp}>
                                            <h3><strong>Entity Data Management</strong></h3>
                                            <div><p>Use our flexible and extendible data model and robust workflow capabilities to master legal entities and counterparty relationships.</p></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}
export default withStyles(styles) (DescriptionCard)