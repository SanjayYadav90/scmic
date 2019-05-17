import React from 'react'

function CopyRight() {
  return (
    <div className="copyright py-3">
      <div className="container">
        <div className="copyrighttop">
          <ul>
            <li>
              <h4>Follow us on:</h4>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-pinterest" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyrightbottom">
          <p>©  {getYear()} Indoctrination. All Rights Reserved | Design by
            <a href="http://w3layouts.com/">W3layouts</a>
          </p>
        </div>
        <div className="clearfix" />
      </div>
    </div>

  )
}

function getYear() {
  return new Date().getFullYear();
}

export default CopyRight
