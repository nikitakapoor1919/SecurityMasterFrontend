import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Divider, Button, CardActions } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles'

function EditBond(props) {
  const {classes} = props;
  return (
    <Container >
        <div className={classes.security}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div" align="center" className={classes.count}>
                        <strong>{this.props.len}</strong>
                    </Typography>
                    <Divider/>
                    <Typography variant="body2" color="text.secondary">
                        ACTIVE SECURITIES
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </Container>
  );
}

export default withStyles(styles) (EditBond)