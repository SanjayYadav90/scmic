import React from 'react';

function NavHeader() {
  return (
    <div className="container">
        <div className="banner-text">
            <div className="slider-info">
                <h3>GROW UP FUTURE CHOOSE RIGHT CAREER</h3>
            </div>
        </div>
        <div className="banner-top pb-5">
            <div className="row slider-bottom">
                <div className="col-md-3 slider-bottom-lft">
                    <h4>Subscribe Now</h4>
                    <p className="text-white mt-2">This is a longer card with supporting</p>
                </div>
                <div className="col-md-9 n-right-w3ls">
                    <div className="row">
                        <div className="col-md-4 form-group news-rt">
                            <input className="form-control" type="text" name="Name" placeholder="Name" required />
                        </div>
                        <div className="col-md-4 form-group news-lt">
                            <input className="form-control" type="email" name="Email" placeholder=" Email Address" required />
                        </div>
                        <div className="col-md-4 form-group news-last">
                            <div className="sbm-it">
                                <div className="form-group">
                                    <input className="form-control submit text-uppercase" type="submit" defaultValue="Subscribe" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NavHeader
