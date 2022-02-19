import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../../../styles/styles.css'
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import PricingDetails from '../Tabs/PricingDetails';
import DividentHistory from '../Tabs/DividentHistory';
import SecuritySummary from '../Tabs/SecuritySummary';
import SecurityIdentifier from '../Tabs/SecurityIdentifier';
import SecurityDetails from '../Tabs/SecurityDetails';
import Risk from '../Tabs/Risk';
import RegulatoryDetails from '../Tabs/RegulatoryDetails';
import ReferenceData from '../Tabs/ReferenceData';

class ViewEquity extends React.Component {

    
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:  '',
        myStep:this.props.step,
        equity:{},
      }
    }

    refreshList(){
      fetch('http://localhost:14011/api/equity/'+this.props.eid)
      .then(response=>response.json())
      .then(data=>{
          this.setState({equity:data});
          console.log(data)
      });
  }

    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 7? 8: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
      this.props.onStepChange(currentStep)
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
      this.props.onStepChange(currentStep)
    }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <Typography variant="h6"  onClick={this._prev} style={{cursor: "pointer"}}>
          <Button><KeyboardArrowLeft /> Previous</Button>
        </Typography>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <8){
      return (
        <Typography variant="h6"  style={{cursor: "pointer"}}>
        <Button onClick={this._next}>Next <KeyboardArrowRight /></Button>
        </Typography>      
      )
    }
    return null;
  }
  componentDidMount(){
    this.refreshList();   
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentStep !==this.props.step) {
      this.setState({currentStep:this.props.step  });
    }
  }
    
    render() {  
      return (
        <React.Fragment>
          <div style={this.state.currentStep != 1 ? {display:"flex",justifyContent: "space-between"}: {display:"flex",justifyContent: "flex-end"}}>
            {this.previousButton()}
            {this.nextButton()}
          </div>
          <div style={{marginBottom:40}}/>
          <SecuritySummary currentStep={this.state.currentStep} equity={this.state.equity}/>
          <SecurityIdentifier currentStep={this.state.currentStep} equity={this.state.equity}/>
          <SecurityDetails currentStep={this.state.currentStep} equity={this.state.equity}/>
          <Risk currentStep={this.state.currentStep} equity={this.state.equity}/>
          <RegulatoryDetails currentStep={this.state.currentStep} equity={this.state.equity}/>
          <ReferenceData currentStep={this.state.currentStep} equity={this.state.equity}/>
          <PricingDetails currentStep={this.state.currentStep} equity={this.state.equity}/>
          <DividentHistory currentStep={this.state.currentStep} equity={this.state.equity}/>
          <div style={this.state.currentStep != 1 ? {display:"flex",justifyContent: "space-between"}: {display:"flex",justifyContent: "flex-end"}}>
            {this.previousButton()}
            {this.nextButton()}
          </div>
        
        </React.Fragment>
      );
    }
  }
export default ViewEquity;
  