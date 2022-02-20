import React, { Component } from 'react'
import {Button, Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,Container, IconButton,Typography} from '@material-ui/core';
import '../../../styles/styles.css'
import styles from '../../../styles/styles'
import AppBar from '@mui/material/AppBar'
import UploadBond from './UploadBond'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CreateBond from './CreateBond';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export class Bonds extends Component {

  constructor(props) {
    super(props)
    this.state = {
        bonds:[], success:false,open:false,bid:'',view:'one',
        value:'one',len:0,perPage:10,currentPage:1,pages:0,time:null,rowAlert:false
      }
    }
  refreshList(){
      fetch('http://localhost:14011/api/bond?per_page='+this.state.perPage+'+&current_page='+this.state.currentPage)
      .then(response=>response.json())
      .then(data=>{
          this.setState({bonds:data,len:data.length});
      });
  }
  handleChange = (event, newValue) => {
    this.setState({value:newValue,margin:'0 auto'})
  };
  componentDidMount(){
      this.refreshList();
      this.getCount();
      // setInterval(() => this.setState({ time: Date.now()}), 2000)
  }
  
  componentDidUpdate(){
     this.refreshList();
  }
  handleOpen = (bid) => this.setState({open:true,bid:bid})
  handleCloseDialog = () => this.setState({open:false})
  
  deleteBond=(bondId)=>{
    fetch('http://localhost:14011/api/bond/'+bondId,{
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
    fetch('http://localhost:14011/api/bond/count',{
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
  
  nextButton=()=>{
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
  handleRowAlertClose=()=>{
    this.setState({rowAlert:false})
  }
  render() {
    const {classes} = this.props;
    const {bonds,open}=this.state;
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
                    {this.state.view==='one'?
                    <div >
                    <div className={classes.rowField}>
                      <div><TextField label="Current Page Number" value={this.state.currentPage} type='number' variant="outlined" disabled/></div>
                      <div className={classes.rowHeading}><Typography variant='h4' style={{fontWeight:'bold'}}>BONDS LIST</Typography></div>
                      <div><TextField label="Rows Per Page" value={this.state.perPage} type='number' variant="outlined" onChange={(e)=>this.onRowChange(e)}/></div>
                    </div>
                    <div style={{overflowX:'auto'}}>
                    <table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th >SNo</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Asset</th>
                                <th className='colDate1'>First Coupon Date</th>
                                <th className='colDate2'>Issue Date</th>
                                <th>Investment Type</th>
                                <th>Country Of Issurance</th>
                                <th>Issue Currency</th>
                                <th>Credit Rating</th>
                                <th>Coupon Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bonds.map((bond,index)=>
                                <tr key={bond.BondId}>
                                     <td data-column="SNo.">{index+1}</td>
                                    <td data-column="Name">{bond.SecurityName ? bond.SecurityName : '...'}</td>
                                    <td data-column="Description">{bond.SecurityDescription ? bond.SecurityDescription:  '...'}</td>
                                    <td data-column="Asset">{bond.AssetType ? bond.AssetType : '...'}</td>
                                    <td data-column="First Coupan Date">{bond.FirstCouponDate ? bond.FirstCouponDate.substring(0,10) : '...'}</td>
                                    <td data-column="Issue Date">{bond.IssueDate ?bond.IssueDate.substring(0,10): '...'}</td>
                                    <td data-column="Investment Type">{bond.InvestmentType? bond.InvestmentType : '...'}</td>
                                    <td data-column="Country Of Issurance">{bond.CountryOfIssurance? bond.CountryOfIssurance : '...'}</td>
                                    <td data-column="Issuer Currency">{bond.IssueCurrency? bond.IssueCurrency : '...'}</td>   
                                    <td data-column="Rating">{bond.PFCreditRating? bond.PFCreditRating : '...'}</td>
                                    <td data-column="Coupon Type">{bond.CouponType? bond.CouponType : '...'}</td> 
                                    <td data-column="Actions">
                                        <div className={classes.actionButton}>
                                        <IconButton href={`bond/${bond.BondId}`}><MoreHorizIcon/></IconButton><IconButton href={`bond-edit/${bond.BondId}`}><EditIcon/></IconButton><IconButton onClick={()=>this.handleOpen(bond.BondId)}><DeleteIcon /></IconButton>
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
                    </div>:this.state.view==='two' ?<UploadBond/>:this.state.view==='three' ?<CreateBond/>:''}
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
                          <Button onClick={()=>this.deleteBond(this.state.bid)} autoFocus>
                            YES
                          </Button>
                        </DialogActions>
                      </Dialog>
                </Container>
            )
  }
}

export default withStyles(styles) (Bonds)