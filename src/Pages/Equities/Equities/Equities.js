import React, { Component } from 'react'
import {Button, Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,Container, IconButton,Typography} from '@material-ui/core';
import '../../../styles/styles.css'
import styles from '../../../styles/styles'
import AppBar from '@mui/material/AppBar'
import UploadEquity from './UploadEquity'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CreateEquity from './CreateEquity';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export class Equities extends Component {

  constructor(props) {
    super(props)
    this.state = {
        Equities:[], success:false,open:false,bid:'',view:'one',
        value:'one',len:0,perPage:10,currentPage:1,pages:0,time:null,rowALert:false
      }
    }
  refreshList(){
      fetch('http://localhost:14011/api/equity?per_page='+this.state.perPage+'+&current_page='+this.state.currentPage)
      .then(response=>response.json())
      .then(data=>{
          this.setState({Equities:data,len:data.length});
      });
  }
  handleChange = (event, newValue) => {
    this.setState({value:newValue,margin:'0 auto'})
  };
  componentDidMount(){
      this.refreshList();
      this.getCount();
  }
  
  componentDidUpdate(){
     this.refreshList();
  }
  handleOpen = (bid) => this.setState({open:true,bid:bid})
  handleCloseDialog = () => this.setState({open:false})
  
  deleteEquity=(equityId)=>{
    fetch('http://localhost:14011/api/equity/'+equityId,{
          method:'DELETE',
          header:{'Accept':'application/json',
      'Content-Type':'application/json'}
    })
    .then((response) => { 
        this.setState({success:true,bid:'',open:false})
    })
    .catch((error) => { 
        console.log(error)
    })
  }
  getCount=()=>{
    fetch('http://localhost:14011/api/equity/count',{
          method:'GET',
          header:{'Accept':'application/json',
      'Content-Type':'application/json'}
    })
    .then(response=>response.json())
    .then(data=>{
        this.setState({len:parseInt(data[0].Count),pages:Math.ceil(parseInt(data[0].Count)/this.state.perPage)});
    });
  }
  handleChange = (event, newValue) => {
    this.setState({value:event})
  };
  handleClose=()=>{
    this.setState({success:false})
  }
  handleRowAlertClose=()=>{
    this.setState({rowAlert:false})
  }
  previousButton() {
    let currentPage = this.state.currentPage;
    if(currentPage !==1){
      return (
        <Typography variant="h6"  onClick={this._prev} style={{cursor: "pointer"}}>
          <Button><KeyboardArrowLeft /> Previous</Button>
        </Typography>
      )
    }
    return null;
  }
  
  nextButton(){
    if(this.state.currentPage <this.state.pages){
      return (
        <Typography variant="h6"  style={{cursor: "pointer"}}>
        <Button onClick={this._next}>Next <KeyboardArrowRight /></Button>
        </Typography>      
      )
    }
    return null;
  }
  _next = () => {
    let currentPage = this.state.currentPage
    currentPage = currentPage >= this.state.pages? this.state.pages+1: currentPage + 1
    this.setState({
      currentPage: currentPage
    })
  }
      
  _prev = () => {
    let currentPage = this.state.currentPage
    currentPage = currentPage <= 1? 1: currentPage - 1
    this.setState({
      currentPage: currentPage
    })
  }
  onRowChange=(e)=>{
    if(e.target.value > 0){
      this.getCount()
      this.setState({perPage:e.target.value})
    }
    else{
      this.setState({rowAlert:true})
    }
  }
  render() {
    const {classes} = this.props;
    const {Equities,open}=this.state;
            return(
                <Container>
                <AppBar position="static" className={classes.appbar} style={{background:'#e0e0e0',color:'black'}}>
                  <div className={classes.tabContainer}>
                    <Button color="inherit" onClick={()=>this.setState({view:'one'})}>View</Button>
                    <Button color="inherit" onClick={()=>this.setState({view:'two'})}>Upload</Button>
                    <Button color="inherit" onClick={()=>this.setState({view:'three'})} >Create</Button>
                  </div>
                </AppBar>
                <Snackbar open={this.state.success} autoHideDuration={6000} onClose={this.handleClose}>
                  <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
                    Deleted Successfully!!
                  </Alert>
                </Snackbar>
                <Snackbar open={this.state.rowAlert} autoHideDuration={6000} onClose={this.handleRowAlertClose}>
                      <Alert onClose={this.handleRowAlertClose} severity="error" sx={{ width: '100%' }}>
                        Rows Per Page can't be less than one !!
                      </Alert>
                </Snackbar>
                    {this.state.view==='one'?<div style={{overflowX:'auto'}}>
                    <div className={classes.rowField}>
                      <div><TextField label="Current Page Number" value={this.state.currentPage} type='number' variant="outlined" disabled/></div>
                      <div className={classes.rowHeading}><Typography variant='h4' style={{fontWeight:'bold'}}>EQUITIES LIST</Typography></div>
                      <div><TextField label="Rows Per Page" value={this.state.perPage} type='number' variant="outlined" onChange={(e)=>this.onRowChange(e)}/></div>
                    </div>
                    <div style={{overflowX:'auto'}}>
                    <table className="mt-4" striped bordered hover size="sm">
                    <thead>
                            <tr>
                                <th>SNo.</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Country Of Issurance</th>
                                <th>Divident Type</th>
                                <th>CUSIP</th>
                                <th>ISIN</th>
                                <th>SEDOL</th>
                                <th>Bloomberg Ticker</th>
                                <th>Trading Currency</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Equities.map((Equity,index) =>
                                <tr key={Equity.EquityId}>
                                    <td data-column="SNo.">{index+1}</td>
                                    <td data-column="Name">{Equity.SecurityName ? Equity.SecurityName :'---' }</td>
                                    <td data-column="Description">{Equity.SecurityDescription ? Equity.SecurityDescription:'---'}</td>
                                    <td data-column="Country">{Equity.CountryOfIssurance ? Equity.CountryOfIssurance:'---'}</td>
                                    <td data-column="DividentType">{Equity.DividentType ? Equity.DividentType:'---'}</td>
                                    <td data-column="CUSIP">{Equity.CUSIP ? Equity.CUSIP:'---'}</td>
                                    <td data-column="ISIN">{Equity.ISIN ? Equity.ISIN: '---'}</td>
                                    <td data-column="SEDOL">{Equity.SEDOL ? Equity.SEDOL:'---'}</td>
                                    <td data-column="Bloomberg Ticker">{Equity.BloombergTicket ? Equity.BloombergTicket:'---'}</td>
                                    <td data-column="Trading Currency">{Equity.TradingCurrency ? Equity.TradingCurrency:'---'}</td>
                                    <td data-column="Actions">
                                        <div className={classes.actionButton}>
                                            <IconButton href={`equity/${Equity.EquityId}`}><MoreHorizIcon /></IconButton><IconButton href={`Equity-edit/${Equity.EquityId}`}><EditIcon /></IconButton><IconButton onClick={() => this.handleOpen(Equity.EquityId)}><DeleteIcon /></IconButton>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    </div>
                    <div style={this.state.currentPage != 1 ? {display:"flex",justifyContent: "space-between"}: {display:"flex",justifyContent: "flex-end"}}>
                        {this.previousButton()}
                        {this.nextButton()}
                    </div>
                    </div>:this.state.view==='two' ?<UploadEquity/>:this.state.view==='three' ?<CreateEquity/>:''}
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleCloseDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Are You Sure?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Once Deleted Security can't be recovered. We are not responsible 
                            for any loss of information.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleCloseDialog}>NO</Button>
                          <Button onClick={()=>this.deleteEquity(this.state.bid)} autoFocus>
                            YES
                          </Button>
                        </DialogActions>
                      </Dialog>
                </Container>
            )
  }
}

export default withStyles(styles) (Equities)