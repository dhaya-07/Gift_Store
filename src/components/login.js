 import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'
function Login()
{
    return(
        <div style={{
            marginLeft: '600px',
            marginTop: '100px',
            backgroundColor: '#406ecb',
            color: 'white',
            padding: '100px',
            width: '220px',
            
            borderRadius: '30px'
        }}>
            <h1>Login</h1>
            <form>
                <label>Username:
                    <input type="text" />
                </label><br></br>
                <label>Password:
                    <input type="password" />
                </label>
            </form>
            <p className='account'>Don't have account? <Link to='/register' className='signup'>Sign up</Link></p>
            <button>
                <Link to='/home'>Login</Link></button>
        </div>
    )
}
export default Login;