import React from 'react'

function TopHeader() {
  return (
    <header>	
      <nav classname="mnu navbar-light">
        <div classname="logo" id="logo">
          <h1><a href="index.html">Indoctrination</a></h1>
        </div>
        <label htmlfor="drop" classname="toggle"><span classname="fa fa-bars" /></label>
        <input type="checkbox" id="drop" />
        <ul classname="menu">
          <li classname="mr-lg-4 mr-3 active"><a href="index.html">Home</a></li>
          <li classname="mr-lg-4 mr-3"><a href="about.html">About</a></li>
          <li classname="mr-lg-4 mr-3"><a href="services.html">Services</a></li>
          <li classname="mr-lg-4 mr-3">
            <label htmlfor="drop-2" classname="toggle">Drop Down <span classname="fa fa-angle-down" aria-hidden="true"> </span></label>
            <a href="#">Dropdown <span classname="fa fa-angle-down" aria-hidden="true" /></a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li><a href="typo.html">Typography</a>
              </li>
              <li><a href="gallery.html">Gallery</a>
              </li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default TopHeader
