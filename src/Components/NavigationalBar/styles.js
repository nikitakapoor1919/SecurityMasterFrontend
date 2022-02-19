const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button:{
        float:'right',
        color: 'white'
    },
    navbar: {
        position:"fixed",    
        backgroundColor: "rgb(47, 49, 58)",
        display:'flex',
    },
    list: {
        width: 250,
    },
    toolbar:{
        justifyContent:'flex-end'
    },
    fullList: {
        width: 'auto',
    },
    link:{
        textDecoration:'none',
        color: 'rgb(47, 46, 65)'
    },
    menuIcon:{
        position: 'absolute',
        left: 10,
        display:'none',
        '@media screen and (max-width: 500px)': {
            display:'block',
         } 
    }
});
  
export default styles; 