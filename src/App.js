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
          
          {/* <Route path='/audit-bonds' component={AuditBond}/> */}
          
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      </div>
    </div>
    </>
  );
}

export default App;