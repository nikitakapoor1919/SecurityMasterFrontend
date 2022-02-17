const styles = theme => ({
    root: {
        display:"flex",
        paddingLeft:40,
        justifyContent:'space-around',
        '@media screen and (max-width: 1024px)': {
          paddingLeft:15,
          paddingRight:15,
          display:"block"
       } ,
       overflow:"hidden"
      },
      content:{
        marginTop:40,
        '@media screen and (max-width: 1024px)': {
          marginBottom:100
       } ,
      },
      heading: {
          fontWeight: "bold",
          textAlign: "justify",
          letterSpacing:" 0.05em",
          color: 'rgb(47, 46, 65)',
          marginTop:100,
          marginBottom:40,
          textAlign:'center',
          '@media screen and (max-width: 1024px)': {
            fontSize: "2rem",
            marginTop:70,
        } 
      },
      heading3: {
        marginTop:10,
        marginBottom:10,
        fontWeight:"normal",
        // fontSize: 14,
        marginBottom:40,
        letterSpacing: "0.05em",
        color: "#114433",
      },
      btn:{
        backgroundColor:"#6C63FF",
        color:"white",
        fontWeight: "bold",
        letterSpacing:"0.1em",
        "&:hover": {
          backgroundColor:"#5b52ea",
        }
      },
      responsive: {
        float:"right",
        height:"550px",
        marginTop:100,
        '@media screen and (max-width: 1024px)': {
          width: "100%",
          height: "auto",
          marginTop:0,
          marginBottom:50,
       }
      },
      link:{
        textDecoration:'none',
        color: 'rgb(47, 46, 65)'
    },
    btnGroup:{
      display :'flex',
      justifyContent:'space-around'
    }
});
  
export default styles; 