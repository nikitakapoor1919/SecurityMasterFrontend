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
import { useHistory } from "react-router-dom";

const theme = createTheme();

function SignUp(props) {
  const {classes} = props;
  let history = useHistory();
  const [email,setEmail]=useState('');
  const [first,setFirst]=useState('');
  const [Last,setLast]=useState('');
  const [password,setPassword]=useState(''); 
  const [confirmPassword,setConfirmPassword]=useState(''); 
  const [error,setError]=useState('');
  
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleFirstChange = (e) => setFirst(e.target.value)
  const handleLastChange = (e) => setLast(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)
  
  const handleSubmit = (e) => {
    setError('')
    e.preventDefault();
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;
    let em = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("confirm_password").value;
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
      setError("Invalid Password Format");
    }
    if(pass==cpass && validpas==true && validem==true)
    {
      axios.post("http://localhost:14011/api/user/register",{
        firstname:fname,
        lastname:lname,
        email:em,
        password:pass
      }).then(res=>{
        if(res.data=="Exist")
        {
          alert("Email already exist in our database, Please SignIn");
        }
        else if(res.data=="insertionfailed")
        {
          alert("Sorry, insertion failed");	
        }
        else if(res.data=="ConnectionFailed")
        {
          alert("Connection Failed");
        }
        else{
          history.push("/");
          // alert('SIgnup')
        }
      }).catch(error=>alert(error));
    }
    else{
      alert("Passwords does not match");
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
              Sign Up
            </Typography>
            {error && 
              <p style={{color:'red'}}>{error}</p>
            }
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                type='text'
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoFocus
                onChange={handleFirstChange}
              />
              <TextField
                type='text'
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoFocus
                onChange={handleLastChange}
              />
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                type="password"
                id="confirm_password"
                autoComplete="current-password"
                onChange={handleConfirmPasswordChange} 
              />  
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{backgroundColor:'rgb(242, 206, 114)',color:'black'}}
                onClick={() => props.handleLogin(email,password)}
              >
                Sign Up
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
export default withStyles(styles)(SignUp)






// import '../../bootstrap-4.5.3-dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { Redirect } from 'react-router';
// import Link from '@mui/material/Link';

// function Signup(props)
// {
//   const signin=()=>{
//     document.getElementById("myform").action="/signin";
//   }
//   const fn = (e)=>{
//     e.preventDefault();
//     let fname = document.getElementById("first_name").value;
//     let lname = document.getElementById("last_name").value;
//     let em = document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     let cpass = document.getElementById("confirm_password").value;
//     let pattern = '^([a-z0-9.])+@+([a-z])+\\.+([a-z]{2,3})+$';
//     let arr = em.split("@");
//     let n = arr[0];
//     let validem = false;
//     let validpas = false;
//     let passpat = '(?=[0-9])';
//     let pat1 = '(?=[a-z])';
//     let pat2 = '(?=[A-Z])';
//     let pat3 = '(?=[!@#$%&^*()_|{}\[\\]\\.\\~\\`\\|\<>,:;?\/\+=-])';
//     if(em.charAt(0)==='.' || n.charAt(n.length-1)==='.')
//     {
//       validem = false;
//       alert("Invalid Email Format");
//     } 
//     else if(em.match(pattern))
//     {
//       validem = true;
//     }
//     else{
//       validem = false;
//       alert("Invalid Email Format");
//     }
//     if(pass.match(passpat) && pass.match(pat1) && pass.match(pat2) && pass.match(pat3) && pass.length>7)
//     {
//       validpas=true;
//     }
//     else{
//       validpas=false;
//       alert("Invalid Password Format");
//     }
//     if(pass==cpass && validpas==true && validem==true)
//     {
//       axios.post("http://localhost:14011/api/user/register",{
//         firstname:fname,
//         lastname:lname,
//         email:em,
//         password:pass
//       }).then(res=>{
//         if(res.data=="Exist")
//         {
//           alert("Email already exist in our database, Please SignIn");
//         }
//         else if(res.data=="insertionfailed")
//         {
//           alert("Sorry, insertion failed");	
//         }
//         else if(res.data=="ConnectionFailed")
//         {
//           alert("Connection Failed");
//         }
//         else{
//           props.onLogin();
//           alert('SIgnup')
//         }
//       }).catch(error=>alert(error));
//     }
//     else{
//       alert("Passwords does not match");
//     }
//   }
//   return(
//     <div className="signin">
//       <div className="signup-form">
//     <form id="myform">
//     <h2>Sign Up</h2>
//     <p>Please fill in this form to create an account!</p>
//     <hr/>
//         <div className="form-group">
//       <div className="row">
//         <div className="col"><input type="text" className="form-control" id="first_name" placeholder="First Name"/></div>
//         <div className="col"><input type="text" className="form-control" id="last_name" placeholder="Last Name"/></div>
//       </div>        	
//         </div>
//         <div className="form-group">
//           <input type="email" className="form-control" id="email" placeholder="Email"/>
//         </div>
//     <div className="form-group">
//             <input type="password" className="form-control" id="password" placeholder="Password"/>
//         </div>
//     <div className="form-group">
//             <input type="password" className="form-control" id="confirm_password" placeholder="Confirm Password"/>
//         </div>        
//         <div className="form-group">
//             <button type="submit" className="btn btn-primary btn-lg" onClick={fn}>Sign Up</button>
//             {/* <button type="submit" className="btn btn-primary btn-lg sin" onClick={Signin}>Sign In</button> */}
//         </div>
//         <Link href="/signin" variant="body2">
//         {"Already have an account? Sign In"}
//       </Link>
//     </form>
// </div>

//     </div>
//     );
// }
// export default Signup;

