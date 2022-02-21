import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import './style.css'

const UnauthorizedPage = () => (
    <Paper style={{padding:40,marginTop:150}} >
    <div class="fof">
            <h1>Error 401</h1>
            <p> Authorization required, SignIn to View This Page</p>
             <div>
             <Link to="/signin" className='link'>
              SignIn
             </Link>
             </div>
    </div>
  </Paper>
);

export default UnauthorizedPage;