import React, { Component } from 'react'
import {Button, Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,Container} from '@material-ui/core';
import './styles/styles.css'
import EditBond from './EditBond'
import SecurityInfo from './SecurityInfo'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styles';
import Alert from '@material-ui/lab/Alert';
import {Tabs,Tab} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import UploadBond from './UploadBond'
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
        bonds:[], addModalShow:false, editModalShow:false,success:false,open:false,bid:'',view:'one',
        value:'one',
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
                <AppBar position="static" className={classes.appbar} style={{background:'rgb(47, 46, 65)'}}>
                  <div className={classes.tabContainer}>
                    <Button color="inherit" onClick={()=>this.setState({view:'one'})}>View</Button>
                    <Button color="inherit" onClick={()=>this.setState({view:'two'})}>Upload</Button>
                    <Button color="inherit" onClick={()=>this.setState({view:'three'})}>Create</Button>
                  </div>
                </AppBar>
                {this.state.success ? <Alert severity="success" style={{marginTop:70}}>Deleted Successfully</Alert> :''}
                    {this.state.view==='one'?<table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Security Name</th>
                                <th>Issue Date</th>
                                <th>View More</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bonds.map(bond=>
                                <tr key={bond.BondId}>
                                    <td data-column="Security Name">{bond.SecurityName}</td>
                                    <td data-column="Issue Date">{bond.IssueDate!=null ?bond.IssueDate.substring(0,10): ''}</td>
                                    <td data-column="View More"><Link to={`bond/${bond.BondId}`} className={classes.link}><Button color="inherit">View</Button></Link></td>
                                    <td data-column="Actions"><Button color="inherit" onClick={()=>this.handleEdit(bond.BondId)}>Edit</Button><Button color="inherit" onClick={()=>this.handleOpen(bond.BondId)}>Delete</Button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>:this.state.view==='two' ?<UploadBond/>:''}
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
                    <EditBond bonds={bonds} display={this.state.editModalShow}/>
                </Container>
            )
  }
}

export default withStyles(styles) (Bonds)