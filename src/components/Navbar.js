import React from 'react';
import { Link  } from 'react-router-dom';
import "../components/navbar.css";
function Navbar() {
  
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                   <i  id='mo' class="fas fa-motorcycle"></i>
                    
                    <div className='menu-icon' >
                        <i  className='fas fa-bars'/>
                    
                    <ul className= 'list'>
                        <li className='nav-items'>
                            <Link TO='/' className='NAV-LINKS'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link TO='/sercives' className='NAV-LINKS'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link TO='/work' className='NAV-LINKS'>
                                Work
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link TO='/about' className='NAV-LINKS'>
                                About
                            </Link>
                        </li>
                    </ul>
 </div>
                </div>
                <div className="hello">
                    <h1>WEB DESIGNING</h1>
                    <p>
Our UX experts, visual designers, and frontend gurus create a functional, smooth, and beautiful design for your most unconventional creative needs.

UI\UX Design

Custom Illustrations

Stationery and Presentation Design

Corporate Websites Design</p>

<h2>LANGUAGE WHICH ARE USE FOR WEB DESIGIN</h2>

<label><i class="fab fa-html5"></i>
HTML</label>

<label><i class="fab fa-js-square"></i>
JAVASCRIPT</label>

<label><i class="fab fa-css3-alt"></i>
CSS</label>

<label><i class="fab fa-node-js"></i>
Nodejs</label>


<label><i class="fab fa-react"></i>
reactjs</label>
                </div>
            
            <section class="footer">
    <div class="cointainer tex-center">
        <div class="row">
            <div class="col-md-3">
                <h1>Useful Links</h1>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Return Policy</p>
                <p>Discount Coupons</p>
            </div>
            <div class="col-md-3">
                <h1>Company</h1>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Career</p>
                <p>Affiliate</p>
            </div>
            <div class="col-md-3">
                        <h1>Follow Us On</h1>
                        <p><i class="fab fa-facebook-f"></i>Facebook</p>
                        <p><i class="fab fa-instagram"></i>Instagram</p>
                        <p><i class="fab fa-youtube"></i>YouTube</p>
                    </div>
                    </div>
    </div>
</section>
</nav>
        </>
    )
};

export default Navbar;
