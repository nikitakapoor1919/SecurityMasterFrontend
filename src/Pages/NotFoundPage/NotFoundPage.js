import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import './style.css'

const NotFoundPage = () => (
    <Paper style={{padding:40,margin:"0 auto"}} >
    <div class="fof">
            <h1>Error 404</h1>
            <p>Maybe the page you are looking for has been removed, or you typed in the wrong URL</p>
             <div>
             <Link to="/" className='link'>
              Go Home
             </Link>
             </div>
    </div>
  </Paper>
);

export default NotFoundPage;