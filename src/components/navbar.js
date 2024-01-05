import '../assets/styles/navbar.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Login from './login'
import Register from './register'
import Contact from './Contact'
import birthday from '../assets/image/birthday-1670415_1280.png';
import Home from './home'
import Bards from '../bard'
function Navbar()
{
    return (
        <header>
        <Router>

            <nav className='navbar'>
                <h2 className='logo'> <img src={birthday} className="logo" />  Gift</h2>
                <ul>
                    <li ><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>
                    <li ><Link to='/Contact' className='link'>CONTACT US</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/Contact' element={<Contact/>} />
                <Route exact path='/bards' element={<Bards/>} />
            </Routes>
        </Router>
        </header>
    )
}
export default Navbar;