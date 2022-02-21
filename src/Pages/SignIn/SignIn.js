import React,{ useState}  from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme,} from '@mui/material/styles';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';
import { BrowserRouter as Redirect,useHistory  } from 'react-router-dom'
const theme = createTheme();

function SignIn(props) {
  const {classes} = props;
  let history = useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');  
  const [error,setError]=useState('');
  
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    let em = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let pattern = '^([a-z0-9.])+@+([a-z])+\\.+([a-z]{2,3})+$';
    let arr = em.split("@");
    let n = arr[0];
    let validem = false;
    let validpas = false;
    let passpat = '(?=[0-9])';
    let pat1 = '(?=[a-z])';
    let pat2 = '(?=[A-Z])';
    let pat3 = '(?=[!@#$%&^*()_|{}\[\\]\\.\\~\\`\\|\<>,:;?\/\+=-])';
    if(em.charAt(0)==='.' || n.charAt(n.length-1)==='.')
    {
      validem = false;
      alert("Invalid Email Format");
    } 
    else if(em.match(pattern))
    {
      validem = true;
    }
    else{
      validem = false;
      alert("Invalid Email Format");
    }
    if(pass.match(passpat) && pass.match(pat1) && pass.match(pat2) && pass.match(pat3) && pass.length>7)
    {
      validpas=true;
    }
    else{
      validpas=false;
      alert("Invalid Password Format");
    }
    if(validpas==true && validem==true)
    {
      axios.post("http://localhost:14011/api/user/login",{
        email:em,
        password:pass
      }).then(res=>{
        if(res.data=="EmailNotExist")
        {
          alert("Email not exist in our database, Please SignUp");
        }
        else if(res.data=="InvalidPassword")
        {
          alert("Invalid Password for this Email");	
        }
        else if(res.data=="ConnectionFailed")
        {
          alert("Connection Failed");
        }
        else{
        localStorage.setItem('isLoggedIn', true);
        window.location.href = "/";

        }
      }).catch(error=>alert(error));
    }
  };
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
          <div className={classes.loginHeading}>
            <Typography  variant="h3">
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
            {error && 
              <Typography component='h5' variant='h6'>{error}</Typography>
            }
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
export default withStyles(styles)(SignIn)
