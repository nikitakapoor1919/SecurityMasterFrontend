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
        color: 'rgb(47, 46, 65)'
    },
    navbar: {
        position:"fixed",    
        backgroundColor: "#F8F6F6",
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
    }
});
  
export default styles; 