import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';
import DescriptionCard from './DescriptionCard';
import FeatureCard from './FeatureCard';

function Home(props) {
    const {classes} = props;  
    return (
      <div>
        <DescriptionCard/>
        <FeatureCard/>
      </div>
    );
}

export default withStyles(styles) (Home)
