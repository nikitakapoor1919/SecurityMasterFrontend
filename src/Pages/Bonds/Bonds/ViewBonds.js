import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../styles/styles.css'
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SecurityAndSummary from '../Tabs/SecuritySummary';
import SecurityIdentifier from '../Tabs/SecurityIdentifier';
import SecurityDetails from '../Tabs/SecurityDetails';
import Risk from '../Tabs/Risk';
import RegulatoryDetails from '../Tabs/RegulatoryDetails';
import ReferenceData from '../Tabs/ReferenceData';
import PricingAndAnalytics from '../Tabs/PricingAndAnalytics';
import CallSchedule from '../Tabs/CallSchedule';
import PutSchedule from '../Tabs/PutSchedule';

class ViewBonds extends React.Component {

    
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:  '',
        myStep:this.props.step,
        bonds:[],
        showBond:[],
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    refreshList(show){
      fetch('http://localhost:14011/api/bond')
      .then(response=>response.json())
      .then(data=>{
          this.setState({bonds:data});
          // show()
      });
  }
  show(){
    this.setState({showBond:this.state.bonds.filter((item) => item.BondId === this.props.bid )})  
  }

    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 8? 9: currentStep + 1
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
    if(currentStep <9){
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
    this.refreshList();
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
          <SecurityAndSummary currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <SecurityIdentifier currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <SecurityDetails currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <Risk currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <RegulatoryDetails currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <ReferenceData currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <PutSchedule currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <PricingAndAnalytics currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/>
          <CallSchedule currentStep={this.state.currentStep} bonds={this.state.bonds} bid={this.props.bid}/> 
          <div style={this.state.currentStep != 1 ? {display:"flex",justifyContent: "space-between"}: {display:"flex",justifyContent: "flex-end"}}>
            {this.previousButton()}
            {this.nextButton()}
          </div>
        
        </React.Fragment>
      );
    }
  }
export default ViewBonds;
  