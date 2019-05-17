import React from 'react';
import {Link} from 'react-router-dom';

function QuickLinks() {
  return (
    <footer>
        <div className="container py-md-4 mt-md-3">
            <div className="row footer-top-w3layouts-agile py-5">
                <div className="col-md-4 footer-grid">
                    <div className="footer-title">
                        <h3>About Us</h3>
                    </div>
                    <div className="footer-text">
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. lacinia eget consectetur sed, convallis at tellus.tempus convallis quis ac lectus sit amet nisl tempus convallis quis ac lectus</p>
                    </div>
                </div>
                <div className="col-md-4 footer-grid">
                    <div className="footer-title">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="contact-info">
                        <h4>Location :</h4>
                        <p>0926k 4th block building, king Avenue, New York City.</p>
                    <div className="phone">
                        <h4>Phone :</h4>
                        <p>Phone : +121 098 8907 9987</p>
                        <p>Email : <Link to="mailto:info@example.com">info@example.com</Link></p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 footer-grid">
                    <div className="footer-title">
                        <h3>Recent Posts</h3>
                    </div>
                    <div className="footer-list">
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g1.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g2.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g3.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g4.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g5.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g6.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                        <img src="assets/images/g7.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g9.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="flickr-grid">
                        <Link to="services.html">
                            <img src="assets/images/g8.jpg" className="img-fluid" alt=" " />
                        </Link>
                    </div>
                    <div className="clearfix" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default QuickLinks
