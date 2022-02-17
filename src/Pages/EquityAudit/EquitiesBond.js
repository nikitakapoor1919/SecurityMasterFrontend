import React, { Component } from 'react'
import {Button, Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText,Container, IconButton} from '@material-ui/core';
import '../../styles/styles.css'
import { withStyles } from '@material-ui/core/styles'
import styles from '../../styles/styles'
import Alert from '@material-ui/lab/Alert'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
        bonds:[], success:false,open:false,bid:'',
      }
    }
  refreshList(){
      fetch('http://localhost:14011/api/auditequity')
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

  handleChange = (event, newValue) => {
    this.setState({value:event})
  };
  render() {
    const {classes} = this.props;
    const {bonds,open}=this.state;
            return(
                <Container>               
                {this.state.success ? <Alert severity="success" style={{marginTop:70}}>Deleted Successfully</Alert> :''}
                    <div style={{overflowX:'auto'}}><table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Audit Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Issue Date</th>
                                <th>Investment Type</th>
                                <th>Country Of Issurance</th>
                                <th>Issue Currency</th>
                                <th>Operation</th>
                                <th>UserName</th>
                                <th>SystemName</th>
                                <th>TimeStamp</th>
                                <th>View More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bonds.map(bond=>
                                <tr key={bond.BondId}>
                                    <td data-column="Audit Id">{bond.AuditId}</td>
                                    <td data-column="Name">{bond.SecurityName}</td>
                                    <td data-column="Description">{bond.SecurityDescription}</td>
                                    <td data-column="Issue Date">{bond.IssueDate!=null ?bond.IssueDate.substring(0,10): ''}</td>
                                    <td data-column="Investment Type">{bond.InvestmentType}</td>
                                    <td data-column="Country Of Issurance">{bond.CountryOfIssurance}</td>
                                    <td data-column="Issuer Currency">{bond.IssueCurrency}</td>
                                    <td data-column="Operation">{bond.Operation}</td>
                                    <td data-column="UserName">{bond.UserName}</td>
                                    <td data-column="SystemName">{bond.SystemName}</td>
                                    <td data-column="TimeStamp">{bond.CreatedOn}</td>
                                    <td data-column="View More"><Link to={`bond/${bond.BondId}`} className={classes.link}><MoreHorizIcon/></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    </div>
                </Container>
            )
  }
}

export default withStyles(styles) (Bonds)