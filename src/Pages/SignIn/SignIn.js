import React,{ useState}  from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { createTheme,} from '@mui/material/styles';;

const login = (email, password) => fetch('http://localhost:3005/api/login',
{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
        email,
        password
    })
}).then(res => res.json())

const theme = createTheme();

function SignIn(props) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');  
  
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  return (
    <div >
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: "rgb(47, 49, 58)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <Typography  variant="h1">
              SECURITY MASTER
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop:20
            }}
          >
            <Typography component="h1" variant="h4" style={{lineHeight:' 1.37'}}>
              Sign in
            </Typography>
            {props.loginForm.error && 
              <Typography component='h5' variant='h6'>{props.loginForm.error}</Typography>
            }
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                type='email'
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange} 
              />  
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // className={classes.loginButton}
                style={{backgroundColor:'rgb(242, 206, 114)',color:'black'}}
                onClick={() => props.handleLogin(email,password)}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
      loginForm: state.loginForm 
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
      handleLogin: (username, password) => {
          dispatch({ type: 'LOGIN_STARTED' });
          login(username, password)
              .then(res => {
                  if (res.status === 'success') {
                      dispatch({ type: 'LOGIN_COMPLETED' })
                  } else
                      dispatch({ type: 'LOGIN_FAILED' })
              })
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
