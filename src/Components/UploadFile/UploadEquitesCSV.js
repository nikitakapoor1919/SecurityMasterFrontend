import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function FormDialog(props) {
  const hiddenFileInput = React.useRef(null);
  const [SelectedFile, setSelectedFile] = React.useState(null);
  const [Show, setShow] = React.useState(false);
  const history=useHistory()
  
  const handleClick = event => {
    props.onUploadError(false)
    props.onSuccessfullyUpload(false)
    props.onErrorChange(false)
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    props.onUploadError(false)
    props.onSuccessChange(false)
    props.onErrorChange(false)
    setSelectedFile(event.target.files[0])
    if(event.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        console.log("Content: "+event.target.files[0])
        setTimeout(() => {
          props.onProgressChange(true)
        }, 1000);  
        setShow(false)
        setTimeout(() => {
          props.onProgressChange(false)
          props.onSuccessChange(true)
          setShow(true)
        }, 2000); 
        
    }
    else{
      setShow(false)
      props.onProgressChange(true) 
      props.onErrorChange(true)  
        setTimeout(() => {
            props.onProgressChange(false)
        }, 2000);
        setSelectedFile(null)
    }
  };
  const handleChangeUpload = event => {
    props.onProgressChange(true)
    props.onSuccessChange(false)
    props.onUploadFile(SelectedFile)
    const formData = new FormData();
    formData.append('file', SelectedFile);
    axios.post("http://localhost:14011/api/equity/", formData, {
    onUploadProgress: progressEvent => {
        props.onProgressChange(true)
      }
    })
    .then((response) => { 
      props.onErrorChange(false) 
      props.onProgressChange(false)
      props.onSuccessfullyUpload(true)
    })
    .catch((error) => {  
      props.onUploadError(true)
      props.onProgressChange(false)
      console.log(error)
    })
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {SelectedFile ? <div className={classes.text}>
          <h5>File Name: {SelectedFile.name}</h5>     
       </div>:""}
      <div style={{textAlign:"center"}}>
      {Show ? 
       <div className={classes.btnBox}>
          <div><Button variant="contained"  className={classes.btn2} onClick={handleChangeUpload} startIcon={<CloudUploadIcon />}>
            UPLOAD
          </Button>
          </div>
          <div>
          <Button variant="contained" className={classes.btn3} onClick={handleClick} startIcon={<CloudUploadIcon />}>
            CHOOSE FILE
          </Button>
          </div>
        </div>
     :SelectedFile ?
       <Button variant="contained" disabled  className={classes.btn} onClick={handleClick} startIcon={<CloudUploadIcon />}>
       Upload
     </Button>
       :
       <Button variant="contained"  className={classes.btn} onClick={handleClick} startIcon={<CloudUploadIcon />}>
         CHOOSE FILE
     </Button>}
      </div>
    <input type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display:'none'}} 
    /> 
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    marginTop:150,
    marginBottom:80,
  },
  text:{
    textAlign:'center'
  },
  btn:{
      backgroundColor:"#6C63FF",
      color:"white",
      fontWeight: 600,
      letterSpacing:"0.1em",
      marginTop:20,
      borderRadius:8,
      width:250,
      "&:hover": {
        backgroundColor:"#5b52ea",
      }
    },
    btn2:{
      backgroundColor:"#6C63FF",
      color:"white",
      fontWeight: 600,
      letterSpacing:"0.1em",
      marginTop:20,
      borderRadius:8,
      width:250,
      "&:hover": {
        backgroundColor:"#5b52ea",
      }
    },
    btn3:{
      fontWeight: 600,
      letterSpacing:"0.1em",
      marginTop:20,
      borderRadius:8,
      width:250,

    },
    heading: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      textAlign: "justify",
      letterSpacing:" 0.05em",
      color: "#6C63FF",
      '@media screen and (max-width: 1024px)': {
        fontSize: "1.1rem",
        marginTop:20
     } 
  },
  btnBox:{
    display:"block",
  }
}));