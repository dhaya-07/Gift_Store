import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'
import Login from './login';
function  Register()
{
    return(
        <div style={{
            marginLeft: '500px',
            marginTop: '45px',
            backgroundColor: '#406ecb',
            color: 'white',
            padding: '90px',
            width: '320px',
            borderRadius: '30px'}}>
             <h1>Sign Up</h1>
            <form>
                <label>FirstName:
                    <input type="text" />
                </label><br></br><br></br>
                <label>LastName:
                    <input type="text" />
                </label>
                <br></br><br></br>
                <label>Date Of Birth:
                    <input type="date" />
                </label>
                <br></br><br></br>
                <label>Mobile No:
                    <input type="text" />
                </label><br></br><br></br>
                <label>Email address:
                    <input type="text" />
                </label>
            </form>
            <p>Already have account? <Link to='/Login' className='loginc'>Login</Link></p>
            <button>
                <Link to='/login'>Sign Up</Link></button>
        </div>
    )
}
export default Register;