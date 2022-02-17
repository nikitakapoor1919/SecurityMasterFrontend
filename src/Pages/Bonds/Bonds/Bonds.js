import React, { Component } from 'react'
import {Button, Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,Container, IconButton} from '@material-ui/core';
import '../../../styles/styles.css'
import SecurityInfo from './SecurityInfo'
import { withStyles } from '@material-ui/core/styles'
import styles from '../../../styles/styles'
import Alert from '@material-ui/lab/Alert'
import AppBar from '@mui/material/AppBar'
import UploadBond from './UploadBond'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BondsAudit from '../../BondsAudit/BondsAudit'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";

export class Bonds extends Component {

  constructor(props) {
    super(props)
    this.state = {
        bonds:[], success:false,open:false,bid:'',view:'one',
        value:'one',len:0
      }
    }
  refreshList(){
      fetch('http://localhost:14011/api/bond')
      .then(response=>response.json())
      .then(data=>{
          this.setState({bonds:data});
      });
  }
  handleChange = (event, newValue) => {
    this.setState({value:newValue,margin:'0 auto'})
  };
  componentDidMount(){
      this.refreshList();
  }
  
  componentDidUpdate(){
     this.refreshList();
  }
  handleOpen = (bid) => this.setState({open:true,bid:bid})
  handleClose = () => this.setState({open:false})
  
  deleteBond=(bondId)=>{
    fetch('http://localhost:14011/api/bond/'+bondId,{
          method:'DELETE',
          header:{'Accept':'application/json',
      'Content-Type':'application/json'}
    })
    .then((response) => { 
        this.setState({success:true,bid:'',open:false})
        setTimeout(()=>this.setState({success:false}),4000)
    })
    .catch((error) => { 
        console.log(error)
    })
  }
  handleChange = (event, newValue) => {
    this.setState({value:event})
  };
  render() {
    const {classes} = this.props;
    const {bonds,open}=this.state;
            return(
                <Container>
                {/* <SecurityInfo len={this.state.len}/> */}
                <AppBar position="static" className={classes.appbar} style={{background:'#f5f4f4',color:'black'}}>
                  <div className={classes.tabContainer}>
                    <Button color="inherit" onClick={()=>this.setState({view:'one'})}>View</Button>
                    <Button color="inherit" onClick={()=>this.setState({view:'two'})}>Upload</Button>
                    <Button color="inherit" onClick={()=>this.setState({view:'three'})} >Audit</Button>
                  </div>
                </AppBar>
                
                {this.state.success ? <Alert severity="success" style={{marginTop:70}}>Deleted Successfully</Alert> :''}
                    {this.state.view==='one'?<div style={{overflowX:'auto'}}><table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Asset</th>
                                <th>First Coupon Date</th>
                                <th>Issue Date</th>
                                <th>Investment Type</th>
                                <th>Country Of Issurance</th>
                                <th>Issue Currency</th>
                                <th>Tranding Factor</th>
                                <th>Credit Rating</th>
                                <th>Coupon Type</th>
                                <th>Coupon Frequency</th>
                                <th>View More</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bonds.map(bond=>
                                <tr key={bond.BondId}>
                                    <td data-column="Name">{bond.SecurityName}</td>
                                    <td data-column="Description">{bond.SecurityDescription}</td>
                                    <td data-column="Asset">{bond.AssetType}</td>
                                    <td data-column="First Coupan Date">{bond.FirstCouponDate}</td>
                                    <td data-column="Issue Date">{bond.IssueDate!=null ?bond.IssueDate.substring(0,10): ''}</td>
                                    <td data-column="Investment Type">{bond.InvestmentType}</td>
                                    <td data-column="Country Of Issurance">{bond.CountryOfIssurance}</td>
                                    <td data-column="Issuer Currency">{bond.IssueCurrency}</td>
                                    <td data-column="Trading Factor">{bond.TradingFactor}</td>
                                    <td data-column="Rating">{bond.PFCreditRating}</td>
                                    <td data-column="Coupon Type">{bond.CouponType}</td>
                                    <td data-column="Coupon Frequency">{bond.CouponFrequency}</td>
                                    <td data-column="View More"><Link to={`bond/${bond.BondId}`} className={classes.link}><MoreHorizIcon/></Link></td>
                                    <td data-column="Actions"><IconButton href={`bond-edit/${bond.BondId}`}><EditIcon/></IconButton><IconButton onClick={()=>this.handleOpen(bond.BondId)}><DeleteIcon /></IconButton></td>
                                </tr>)
                            }
                        </tbody>
                    </table></div>:this.state.view==='two' ?<UploadBond/>:this.state.view==='three' ?<BondsAudit/>:''}
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
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
                          <Button onClick={this.handleClose}>NO</Button>
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