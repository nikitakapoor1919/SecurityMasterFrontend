import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Divider, Button, CardActions } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styles';

function EditBond(props) {
  const {classes,display} = props;
  return (
    <Container>
        {
        display ?
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                <strong>EDIT SECURITY FORM</strong>
                </Typography>
                <Divider/>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" className={classes.saveButton} style={{backgroundColor:"#6C63FF",margin:'0 auto',width:250}}>SAVE</Button>
            </CardActions>
        </Card>
        :''}
    </Container>
  );
}

export default withStyles(styles) (EditBond)