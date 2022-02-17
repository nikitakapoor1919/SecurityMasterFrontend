const styles = theme => ({
    root: {
        display:"flex",
        justifyContent:'space-around',
        '@media screen and (max-width: 1024px)': {
          paddingLeft:15,
          paddingRight:15,
          display:"block"
       } ,
       overflow:"hidden"
      },
    card:{
        margin:'0 auto',
        marginTop:'100px',
        padding:'20px',
        background:'#e6e6e6'
    },
    saveButton:{
        backgroundColor:"#6C63FF",
        margin:'0 auto'
    },
    security:{
        display:'flex',
        color:'rgb(47, 46, 65)',
        '@media screen and (max-width: 1024px)': {
            display:'block',
            marginTop:100,
            marginBottom:30
         } 
    },
    count:{
        marginBottom:100,
        color:'rgb(47, 46, 65)',
    },
    progress:{
        marginTop:150
    },
    responsive: {
        float:"right",
        height:"550px",
        marginTop:100,
        transition: "transform .2s", /* Animation */
        '@media screen and (max-width: 1024px)': {
          width: "100%",
          height: "auto",
          marginTop:0,
          marginBottom:50,
       }
      },
      heading: {
        fontWeight: "bold",
        fontSize: "1.4rem",
        textAlign: "justify",
        letterSpacing:" 0.05em",
        color: "#6C63FF",
        marginTop:100,
        '@media screen and (max-width: 1024px)': {
          fontSize: "1.1rem",
          marginTop:20,
      } 
    },
    link:{
        textDecoration:'none',
        color:"black"
    },
    topHeading:{
        textAlign:'center',
        textTransform:'uppercase',
        marginBottom:'30px'
    },
    tabContainer:{
        overflowX:'auto'
    },
    appbar:{
        marginTop:150,background:'rgb(47, 46, 65)',
        padding:'10px'
    },
    tabContainer:{
        display:'flex'
    },
    tab:{
        textTransform:'uppercase',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:'20px'
    },
    saveButton:{
        backgroundColor:"rgb(47, 46, 65)",margin:'0 auto',width:250
    },
    tabHeading:{
        marginTop:'20px'
    },
    listTable:{
        margin:'0 auto',
        padding:'20px',
        background:'#e6e6e6',
        boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%),0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
    },
    listFirst:{
        width:'40%',
    },
    listSecond:{
        width:'60%',
        marginLeft:'15px'
    },
    load:{
        marginTop:100
    },
    input: {
        "&:invalid": {
          border: "red solid 2px"
        }
      },
    textField:{
        marginBottom:20
    }

});
  
export default styles; 