import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import  Button  from  '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    // Clear error message when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(credentials);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: credentials,
      });
      if (response.data.length > 0) {
        console.log('Login successful!');
        // Redirect or handle successful login
      } else {
        console.log('Login failed! Invalid credentials.');
        // Handle invalid login
      }
    } catch (error) {
      console.error('Login failed!', error);
      // Handle error scenarios
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.username) {
      errors.username = 'Username is required';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    
        
        <form className="form" onSubmit={handleSubmit}>

          <div style={{
              marginLeft: '500px',
              marginTop: '200px',
              backgroundColor: '#f0f0f785',
              color: 'black',
              padding: '40px',
              width: '420px',
              borderRadius: '30px'}}>
          <h3>Login</h3>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Username or Email"
              className="form-control"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          
            <br/>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="form-control"
            />
            {errors.password && <span className="error">{errors.password}</span>}
         

          
            <p>Don't have an account <Link to='/register' className='link'>Signup</Link></p>
          

          <button className="glow-on-hover" type='submit'>Login</button>
      </div>
        </form>
    
  );
};

export default Login;
// import '../assets/styles/navbar.css'
// function Login()
// {
//     return(
//         <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       > 
//         <div style={{
//             marginLeft: '600px',
//             marginTop: '100px',
//             backgroundColor: '#f0f0f785',
//             color: 'black',
//             padding: '90px',
//             width: '400px',
//             borderRadius: '30px'
//         }}>
            
//             <h1>Login</h1>
//             <form>
//             <TextField className='textfield'
//           required
//           id="outlined-required"
//           label="UserName"
//           defaultValue=""
//         />
//                 <br></br>
//                 <TextField 
//           required
//           id ="outlined-required"
//           label="Password"
//           defaultValue=""
//         />
//             </form>
            // <p className='account'>Don't have account? <Link to='/register' className='signup'>Sign up</Link></p>
           
            //     <Button variant="contained" className='logincolor'>
            //         <Link to='/' className='colors' style={{textDecoration:"none"}}>Login</Link>
            //         </Button>
                  
//         </div>
//         </Box>
//     )
// }
// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// // import { TextField } from '@mui/material';

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:3001/users', {
//         params: credentials,
//       });
//       if (response.data.length > 0) {
//         console.log('Login successful!');
//         // Redirect or handle successful login
//       } else {
//         console.log('Login failed! Invalid credentials.');
//         // Handle invalid login
//       }
//     } catch (error) {
//       console.error('Login failed!', error);
//       // Handle error scenarios
//     }
//   };

//   return (
//     <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       > 
//     <div style={{
//                   marginLeft: '600px',
//                   marginTop: '100px',
//                   backgroundColor: '#f0f0f785',
//                   color: 'black',
//                   padding: '90px',
//                   width: '400px',
//                   borderRadius: '30px'
//               }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField required input type="text" name="username" placeholder="Username" onChange={handleChange} />
//         <TextField required input type="password" name="password" placeholder="Password" onChange={handleChange} />
//         {/* <button type="submit">Login</button> */}
//         <p className='account'>Don't have account? <Link to='/register' className='signup'>Sign up</Link></p>
//              <Button variant="contained" className='logincolor'>
//                      <Link to='/Home' className='colors' style={{textDecoration:"none"}}>Login</Link>
//                     </Button>
//       </form>
//     </div>
//     </Box>
//   );
// };

// export default Login;
// import { Link } from 'react-router-dom';
// import photo from '../assets/images/registration-form-1.jpg';
// import '../assets/styles/style.css';
