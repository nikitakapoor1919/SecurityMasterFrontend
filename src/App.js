import './App.css';

import Home from './Pages/Home/Home.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationalBar from './Components/NavigationalBar/NavigationBar';
import Equity from './Pages/Equities/Equity'
import Bond from './Pages/Bonds/Bonds'
import BondUpload from './Pages/Bonds/UploadBond'
import BondResponsiveDrawer from './Components/Drawer/BondsResponsiveTabDrawer'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import CreateBond from './Pages/Bonds/CreateBond'
import SignIn from './Pages/SignIn/SignIn.js'

function App() {
  return (
    <Provider store={store}>
    <ToastProvider autoDismiss={true}>
    <NavigationalBar/>
      <div className="container">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={SignIn}/>
          
          <Route path='/bonds' component={Bond}/>
          <Route path='/create-bond' component={CreateBond}/>
          <Route path='/bonds-upload' component={BondUpload}/>
          <Route path='/bond/:id' component={BondResponsiveDrawer}/>
          
          <Route path='/equities' component={Equity}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      </div>
    </ToastProvider>
    </Provider>
  );
}

export default App;