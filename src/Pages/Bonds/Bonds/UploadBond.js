import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';
import UploadCSV from '../../../Components/UploadFile/UploadBondsCSV'
import Alert from '@material-ui/lab/Alert';
import React, { Component } from 'react'
import {CircularProgress} from '@material-ui/core';

export class UploadBond extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
          progress:false,success:false,errorNotCSV:false,file:null,successUpload:false
        }
      }
    onChange=(val)=> { this.setState({progress:val})}
    onChangeSuccess=(val)=> { this.setState({success:val})}
    onChangeError=(val)=> { this.setState({errorNotCSV:val})}
    onUploadFile=(val)=> { this.setState({file:val})}
    onUploadError=(val)=>{ this.setState({error:val})}
    onSuccessfullyUpload=(val)=>{this.setState({successUpload:val})}
  render() {
    const {classes} = this.props;  
    return (
      <div className={classes.root}>
       <div>
       <div className={classes.progress}>
            {this.state.progress ? <div style={{textAlign:"center"}}> <CircularProgress/></div> :''}
            {this.state.success ? <Alert severity="success">Please Click on Upload</Alert> :''}
            {this.state.error ? <Alert severity="warning">File Format not Supported</Alert> :''}
            {this.state.errorNotCSV ? <Alert severity="error">Only CSV Files Can Be Uploaded</Alert> :''}
            {this.state.successUpload ? <Alert severity="success">Successfully Uploaded</Alert>:''}
          </div>
            <Typography className={classes.heading}>
                 <UploadCSV onProgressChange={this.onChange} onSuccessChange={this.onChangeSuccess} onSuccessfullyUpload={this.onSuccessfullyUpload}
                 onErrorChange={this.onChangeError} onUploadFile={this.onUploadFile} onUploadError={this.onUploadError}/>
            </Typography>
       </div>
      <div><img src='/images/researching.svg' className={classes.responsive}></img></div>
      </div>
    )
  }
}

export default withStyles(styles) (UploadBond)
