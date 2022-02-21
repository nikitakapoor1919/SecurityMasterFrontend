import './styles/styles.css';
import React,{useState} from 'react'
import Home from './Pages/Home/Home.js'
import NavigationalBar from './Components/NavigationalBar/NavigationBar';
import Equity from './Pages/Equities/Equities/Equities'
import Bond from './Pages/Bonds/Bonds/Bonds'
import BondResponsiveDrawer from './Components/Drawer/BondsResponsiveTabDrawer'
import NotFoundPage from './Pages/ErrorPages/NotFoundPage'
import EditBond from './Pages/Bonds/Bonds/EditBond'
import SignIn from './Pages/SignIn/SignIn.js'
import SignUp from './Pages/SignUp/SignUp.js'
import EditEquity from './Pages/Equities/Equities/EditEquity';
import EquityResonsiveTabDrawer from './Components/Drawer/EquityResonsiveTabDrawer';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter, Switch, useHistory  } from 'react-router-dom'

function App(props) {
  let history = useHistory();
  const [show, setShow] = React.useState(true);
  const handleLogout = () => {
    setShow(false)
    localStorage.removeItem('isLoggedIn');
    window.location.href = "/signin";
  }
  
  return (
    <>
    <div>
   { localStorage.getItem('isLoggedIn')? <NavigationalBar logOut={show} handleLogout={handleLogout}/> : <NavigationalBar/>}
      <div className="container">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          
          <Route path='/bonds' component={Bond}/>
          <Route path='/bond/:id' component={BondResponsiveDrawer}/>
          <Route path='/bond-edit/:id' component={EditBond}/>
          
          <Route path='/equities' component={Equity}/>
          <Route path='/equity/:id' component={EquityResonsiveTabDrawer}/>
          <Route path='/equity-edit/:id' component={EditEquity}/>
         
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      </div>
    </div>
    </>
  );
}
export default App;
