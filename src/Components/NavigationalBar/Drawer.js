import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function SwipeableTemporaryDrawer(props) {
  const {classes} = props;  
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{width:250}}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><a href='\equities' className={classes.link}>Equities</a></ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><a href='\bonds' className={classes.link}>Bonds</a></ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><a href='\bonds' className={classes.link}>Audit</a></ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}></MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default withStyles(styles) (SwipeableTemporaryDrawer)