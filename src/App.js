import './App.css';

import Home from './Pages/Home/Home.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationalBar from './Components/NavigationalBar/NavigationBar';
import Equity from './Pages/Equities/Equity'
import Bond from './Pages/Bonds/Bonds/Bonds'
import AuditBond from './Pages/BondsAudit/BondsAudit'
import BondUpload from './Pages/Bonds/Bonds/UploadBond'
import EquityUpload from './Pages/Equities/Equities/UploadEquity'
import BondResponsiveDrawer from './Components/Drawer/BondsResponsiveTabDrawer'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import EditBond from './Pages/Bonds/Bonds/EditBond'
import SignIn from './Pages/SignIn/SignIn.js'
import EditEquity from './Pages/Equities/Equities/EditEquity';

function App() {
  return (
    <>
    <div>
    <NavigationalBar/>
      <div className="container">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={SignIn}/>
          
          <Route path='/bonds' component={Bond}/>
          {/* <Route path='/create-bond' component={CreateBond}/> */}
          <Route path='/bonds-upload' component={BondUpload}/>
          <Route path='/bond/:id' component={BondResponsiveDrawer}/>
          <Route path='/bond-edit/:id' component={EditBond}/>
          
          <Route path='/equities' component={Equity}/>
          <Route path='/equity-upload' component={EquityUpload}/>
          <Route path='/equity-edit/:id' component={EditEquity}/>

          {/* <Route path='/audit-bonds' component={AuditBond}/> */}
          
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      </div>
    </div>
    </>
  );
}
export default App

// import React, { useState } from "react";
// import "./App.css";
// import * as XLSX from "xlsx";
// import Eg from './Eg'
// class ExcelToJson extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       file: "",
//       progress:false,success:false,errorNotCSV:false,file:null,successUpload:false
//     };
//   }

//   handleClick(e) {
//     this.refs.fileUploader.click();
//   }

//   filePathset(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     var file = e.target.files[0];
//     console.log(file);
//     this.setState({ file });

//     console.log(this.state.file);
//   }

//   readFile() {
//     var f = this.state.file;
//     var name = f.name;
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: "binary" });
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
//       // console.log("Data>>>" + data);
//       console.log(this.convertToJson(data));
//       // this.convertToJson(data)
//     };
//     reader.readAsBinaryString(f);
//   }

//   convertToJson(csv) {
//     var lines = csv.split("\n");

//     var result = [];

//     var headers = lines[0].split(",");

//     for (var i = 1; i < lines.length; i++) {
//       var obj = {};
//       var currentline = lines[i].split(",");

//       for (var j = 0; j < headers.length; j++) {
//         obj[headers[j]] = currentline[j];
//       }

//       result.push(obj);
//     }
//     console.log(result)
//     return JSON.stringify(result); 
//   }
//   onChange=(val)=> { this.setState({progress:val})}
//   onChangeSuccess=(val)=> { this.setState({success:val})}
//   onChangeError=(val)=> { this.setState({errorNotCSV:val})}
//   onUploadFile=(val)=> { this.setState({file:val})}
//   onUploadError=(val)=>{ this.setState({error:val})}
//   onSuccessfullyUpload=(val)=>{this.setState({successUpload:val})}
//   render() {
//     return (
//       <div>
//       <Eg onProgressChange={this.onChange} onSuccessChange={this.onChangeSuccess} onSuccessfullyUpload={this.onSuccessfullyUpload}
//          onErrorChange={this.onChangeError} onUploadFile={this.onUploadFile} onUploadError={this.onUploadError}/>
//         {/* <input
//           type="file"
//           id="file"
//           ref="fileUploader"
//           onChange={this.filePathset.bind(this)}
//         />
//         <button
//           onClick={() => {
//             this.readFile();
//           }}
//         >
//           Read File
//         </button> */}
//       </div>
//     );
//   }
// }

// export default ExcelToJson;