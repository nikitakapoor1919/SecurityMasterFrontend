const drawerWidth = 240;
const styles = theme => ({
      root: {
        display: 'flex',
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
        zIndex:0,
      },
      drawerProp: {
        backgroundColor: "#fafafa",
        zIndex:0,
      },
      drawerPropDark: {
        zIndex:0,
        backgroundColor: "#121212" ,
        color:'white'
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#146EB4"
      },
      menuButton: {
        width: 48,
        height: 48,
        marginRight: theme.spacing(2),
        display:"flex",
        justifyContent: "left",
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      link:{
        textDecoration: "none",
        color:"black",
        fontSize:"0.875rem"
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width:"100%",
        '@media screen and (max-width: 1024px)': {
          maxWidth:"100%",
        }
    
      },
      listItem:{
        fontSize:"0.875rem",
      },
      listItemText:{
        fontSize:"0.875rem",
        fontWeight:700
      }
});
  
export default styles; 