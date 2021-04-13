import React, {useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { RiFingerprint2Fill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);

      window.addEventListener('resize', showButton);

   return(
       <>
        <IconContext.Provider value={{ color: '#1c2237' }}>
    <div className="navbar">
        <div className="navbar-container container">
            <Link to='/' className="navbar-logo"  onClick={closeMobileMenu} >
            < RiFingerprint2Fill className='navbar-icon' />
                Dew
            </Link>
            <div className="menu-icon" onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars />}
            </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links'  onClick={closeMobileMenu} >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links'  onClick={closeMobileMenu} >
                  Services
                </Link>
              </li>
              <li className='nav-item' onClick={closeMobileMenu} >
                <Link to='/login' className='nav-links'>
                  Login
                </Link>
              </li>
              <li className='nav-btn' onClick={closeMobileMenu}>
                {button ? (
                  <Link to='/register' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP
                    </Button>
                  </Link>
                ) : (
                  <Link to='/register' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
              </ul>
            </div>
       </div>
       </IconContext.Provider>       
   </>
    );
}

export default Navbar;