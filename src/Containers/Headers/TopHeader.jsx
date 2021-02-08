import React from 'react';
import {Link} from 'react-router-dom';

function TopHeader() {
  return (
    <header>	
      <nav className="mnu navbar-light">
        <div className="logo" id="logo">
          <h1><Link to="index.html">Indoctrination</Link></h1>
        </div>
        <label htmlfor="drop" className="toggle"><span className="fa fa-bars" /></label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li className="mr-lg-4 mr-3 active"><Link to="index.html">Home</Link></li>
          <li className="mr-lg-4 mr-3"><Link to="about.html">About</Link></li>
          <li className="mr-lg-4 mr-3"><Link to="services.html">Services</Link></li>
          <li className="mr-lg-4 mr-3">
            <label htmlfor="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"> </span></label>
              <Link to="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true" /></Link>
              <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <Link to="typo.html">Typography</Link>
              </li>
              <li>
                <Link to="gallery.html">Gallery</Link>
              </li>
            </ul>
          </li>
          <li><Link to="contact.html">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default TopHeader
