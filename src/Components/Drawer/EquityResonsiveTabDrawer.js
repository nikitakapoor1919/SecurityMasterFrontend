import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import { Link} from "react-router-dom";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigationBar from '../NavigationalBar/NavigationBar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ViewEquity from '../../Pages/Equities/Equities/ViewEquity';

const drawerWidth = 240;
const options = [
  {},
  {id: 1, text: 'Security Summary'},
  {id: 2, text: 'Security Identifier'},
  {id: 3, text: 'Security Details'},
  {id: 4, text: 'Risk'},
  {id: 5, text: 'Regulatory Details'},
  {id: 6, text: 'Reference Data'},
  {id: 7, text: 'Pricing Details'},
  {id: 8, text: 'Divident History'},
];


const uploadExcel = [
  {id: 1, text: 'Upload',subTopics:[
    {id:1, text: 'Upload Data', route: '/equity-upload'},
  ]},
];

function ResponsiveDrawer(props) {
  const { window} = props;
  const {classes} = props;  
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [Id,setId] = React.useState(1);

  const [open, setOpen] = React.useState(true);
  const [openUpload, setOpenUpload] = React.useState(true);
  const handleClickAudit = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const onChange=(id)=> { setId(id)}
  
  const drawer = (
    <div>
      <div className={classes.toolbar} >
      </div>
      <List style={{textAlign: "left"}}>
        {options.map((option, index) => (
          <ListItem button key={option.text}>
            <ListItemText classes={{primary:classes.listItemText}}   primary={option.text} onClick={()=>setId(option.id)}/>
          </ListItem>
        ))}
      </List>
      <Divider /> 
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <NavigationBar show={true} handleDrawerToggle={handleDrawerToggle}/>
      <nav className={classes.drawer} aria-label="mailbox folders" >
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         <ViewEquity step={Id} onStepChange={onChange} eid={props.match.params.id}/>
      </main>
    </div>
    </>
  
  );
}
export default withStyles(styles)(ResponsiveDrawer);
