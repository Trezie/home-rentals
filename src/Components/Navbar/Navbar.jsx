import './Navbar.css';
import { useState } from 'react';
import logo from '../../Assets/logo.svg';





const Navbar = () => {

    // Usestate for Hamburger display
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      return setToggle(prevToggle =>!prevToggle)
    }

  return (
    <nav className='nav-container'>
        <div id='logo'>
            <img src={logo} alt="logo"  />
        </div>
        
        <ul className={toggle ? 'showDropDown' : 'noDropDown'}>
            <li id='home'>Home</li>
            <li>Landlord</li>
            <li>Tenants</li>
            <li>Contact Us</li>
        </ul>
        <ul className={toggle ? 'showDropDown' : 'noDropDown'}>
            <li className='login'>Login/Signup</li>
        </ul>

        <div id='hamburger' onClick={handleToggle}>
              {toggle ? <div>&times;</div> :  <div>&#9776;</div>}
        </div>
    </nav>
  )
}

export default Navbar