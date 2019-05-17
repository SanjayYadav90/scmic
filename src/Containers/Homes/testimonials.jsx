import React from 'react'

function Testimonials() {
  return (
    <div className="testimonials py-lg-5">
        <div className="container py-5">
            <div className="title-section pb-sm-5 pb-3">
                <h3 className="heading-agileinfo text-center pb-4">What Our <span> People Says</span></h3>
            </div>
            <div className="mis-stage">
                <div className="row mis-slider">
                    <div className="col-lg-2 col-4 mis-slide mb-4">
                        <img src="assets/images/te1.jpg" alt=" " className="img-fluid" />
                        <h6>Carl Lii</h6>
                    </div>
                        <div className="col-lg-2 col-4 mis-slide mb-4">
                        <img src="assets/images/te2.jpg" alt=" " className="img-fluid" />
                        <h6>Michael Paul</h6>
                    </div>
                        <div className="col-lg-2 col-4 mis-slide mb-4">
                        <img src="assets/images/te3.jpg" alt=" " className="img-fluid" />
                        <h6>Henry Doe</h6>
                    </div>
                        <div className="col-lg-2 col-4 mis-slide mb-4">
                        <img src="assets/images/te4.jpg" alt=" " className="img-fluid" />
                        <h6>Laura James</h6>
                    </div>
                    <div className="col-lg-2 col-4 mis-slide mb-4">
                        <img src="assets/images/te5.jpg" alt=" " className="img-fluid" />
                        <h6>Thomas Carl</h6>
                    </div>
                    <div className="col-lg-2 col-4 mis-slide mb-4">
                        <img src="assets/images/te6.jpg" alt=" " className="img-fluid" />
                        <h6>Rosy Crisp</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
