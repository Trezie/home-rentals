import './Navbar.css';
import logo from '../../Assets/logo.svg';




const Navbar = () => {


  return (
    <nav className='nav-container'>
        <ul>
            <li id='logo'>
                <img src={logo} alt="logo"  />
            </li>
        </ul>
        <ul>
            <li id='home'>Home</li>
            <li>Landlord</li>
            <li>Tenants</li>
            <li>Contact Us</li>
        </ul>
        <ul>
            <li>Login/Signup</li>
        </ul>
    </nav>
  )
}

export default Navbar