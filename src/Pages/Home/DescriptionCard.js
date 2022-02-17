import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';

function DescriptionCard(props) {
    const {classes} = props;  
  return (
    <div>
        <div  className={classes.cardDescription}>
          <div>
            <p className={classes.headingCard}>
                IVP SECURITY MASTER
            </p>
            <h1>
            Automate data collection, consolidation, cleansing, coordination, 
            and distribution for security, reference, and entity data.
            </h1>
            <div className={classes.boxDescription}>
                <div className={classes.boxSubDescription}>
                        <div className={classes.boxSubSubDescription}>
                            <div className={classes.contextBox}>
                                <div className={classes.imgDesp}><img src='\images\Eliminate-redundant-steps-1.svg'></img></div>
                                <div className={classes.contentDesp}>
                                    <h4><strong>Eliminate Redundant Steps</strong></h4>
                                    <div><p>Make trusted data available to all teams.</p></div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className={classes.boxSubDescription}>
                        <div className={classes.boxSubSubDescription}>
                            <div className={classes.contextBox}>
                                <div className={classes.imgDesp}><img src='\images\Improve-speed-1.svg'></img></div>
                                <div className={classes.contentDesp}>
                                    <h4><strong>Improve Speed</strong></h4>
                                    <div><p>Rapid setup and onboarding for new asset classes, entities, and counterparties.</p></div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className={classes.boxSubDescription}>
                        <div className={classes.boxSubSubDescription}>
                            <div className={classes.contextBox}>
                                <div className={classes.imgDesp}><img src='\images\Heighten-ac-curacy-1.svg'></img></div>
                                <div className={classes.contentDesp}>
                                    <h4><strong>Heighten Accuracy</strong></h4>
                                    <div><p>Avoiding manual processes that can lead to errors and inconsistencies.</p></div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className={classes.boxSubDescription}>
                        <div className={classes.boxSubSubDescription}>
                            <div className={classes.contextBox}>
                                <div className={classes.imgDesp}><img src='\images\Get-notified-sooner-1.svg'></img></div>
                                <div className={classes.contentDesp}>
                                    <h4><strong>Get Notified Sooner</strong></h4>
                                    <div><p>Before missing data or new securities affect downstream systems.</p></div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className={classes.boxSubDescription}>
                        <div className={classes.boxSubSubDescription}>
                            <div className={classes.contextBox}>
                                <div className={classes.imgDesp}><img src='\images\Strengthen-security-1.svg'></img></div>
                                <div className={classes.contentDesp}>
                                    <h4><strong>Strengthen Security</strong></h4>
                                    <div><p>With built-in, configurable permissions that control which users can access which data sets.</p></div>
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