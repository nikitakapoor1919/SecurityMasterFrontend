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
        margin:'0 auto'
    },
    saveButton:{
        backgroundColor:"#6C63FF",
        margin:'0 auto'
    },
    security:{
        display:'flex',
        marginTop:150,
        '@media screen and (max-width: 1024px)': {
            display:'block',
            marginTop:100,
            marginBottom:30
         } 
    },
    count:{
        marginBottom:100,
        color:"#6C63FF"
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
    },
    tabContainer:{
        overflowX:'auto'
    },
    appbar:{
        marginTop:150,background:'rgb(47, 46, 65)'
    },
    tabContainer:{
        display:'flex'
    }
    

});
  
export default styles; 