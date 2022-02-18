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
        background:'#e6e6e6',
    
    },
    cardDescription:{
        margin:'0 auto',
        marginTop:'100px',
        padding:'20px',
        background:'#f5f4f4',
        textAlign:'center',
        marginLeft:50,
        marginRight:50,
        marginBottom:30,
        fontWeight: 'bold',
        boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        '@media screen and (max-width: 1024px)': {
            marginLeft:0,
            marginRight:0,
         }
    },
    saveButton:{
        backgroundColor:"rgb(47, 49, 58)",
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
        // color: "#6C63FF",
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
        marginTop:'20px',
        color: 'white',
        background:' rgb(47, 46, 65)',
        padding: '20px',
        marginBottom:10, 
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
    },
    headingCard:{
        fontSize: '0.8125rem',
        lineHeight: '1.23',
        letterSpacing:' 0.25em',
        textTransform: 'uppercase',
        color:'black',
    },
    headingCardBottom:{
        marginTop: '16px'
    },
    boxDescription:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '10px',
        marginTop: '24px',
        '@media screen and (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
            width:'100%',
            margin:'0 auto'
        } 
    },
    boxSubDescription:{
        marginTop:' 32px',
        fontWeight:400,
        display:'flex',
        flexWrap: 'wrap',
        textAlign:'left',
        '@media screen and (max-width: 1024px)': {
            justifyContent:'center'
        } 
    },
    boxSubSubDescription:{
        // flex: '0 0 33.333333%',
    },
    contextBox:{
        display:'flex',
    },
    imgDesp:{
        width: '48px',
        height: '48px'
    },
    contentDesp:{
        marginTop: '-20px',
        marginLeft:10
    },
    featureCard:{
        background:'rgb(47, 49, 58)',
        color: 'rgb(255, 255, 255)',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth:' 0px',
        textAlign:'center',
        padding:120,
        position: 'absolute',
        left: '0px',
        right: '0px',
        '@media screen and (max-width: 1024px)': {
            padding:20,
        } 
    },
    featureGrid:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
        marginTop: '24px',
        '@media screen and (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
            width:'100%',
            margin:'0 auto'
        } 
    },
    headingFeature:{
        fontSize: '0.8125rem',
        lineHeight: '1.23',
        letterSpacing:' 0.25em',
        textTransform: 'uppercase',
        color:'white',
    },
    subHeadingFeature:{
        fontSize: '2.1875rem',
        lineHeight:' 1.37'
    },
    despImg:{
        width:'40px'
    },
    loginButton:{
        backgroundColor:'rgb(242, 206, 114)'
    },
    loginHeading:{
        lineHeight:' 1.37',
        textAlign: 'center',
        color: 'white',
        marginTop: '30%',
        lineHeight:' 1.37',
        marginLeft:30,
        marginRight:30,
        '@media screen and (max-width: 1024px)': {
           display:'none'
        } 
    },
    errorText:{
     color:'red'
    },
    cardInner:{
        padding:50,
        '@media screen and (max-width: 1024px)': {
            padding:0,
         } 
    }
});
  
export default styles; 