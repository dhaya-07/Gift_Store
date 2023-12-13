import '../assets/styles/navbar.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Login from './login'
import Register from './register'
import gift from '../assets/image/gift-7.jpg'
import Home from './home'
function Navbar()
{
    return (
        <header>
        <Router>

            <nav>
                <h2><img src={gift} className='logo' />  GIFT</h2>
                <ul>
                    <li ><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>
        </Router>
        </header>
    )
}
export default Navbar;