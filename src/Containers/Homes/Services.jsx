import React from 'react'

function Services() {
  return (
    <section className="agile_stats py-sm-5">
        <div className="container">
            <div className="py-lg-5 w3-abbottom">
            <div className="row py-5">
                <div className="counter col-lg-3 col-6">
                  <span className="fa fa-smile-o" />
                  <h4 className="timer mt-2">5,100</h4>
                  <p className="count-text text-capitalize">HAPPY STUDENTS</p>
                </div>
                <div className="counter col-lg-3 col-6">
                  <span className="fa fa-fighter-jet" />
                  <h4 className="timer mt-2">971</h4>
                  <p className="count-text text-capitalize">BRANCHES</p>
                </div>
                <div className="counter col-lg-3 col-6 mt-lg-0 mt-4">
                  <span className="fa fa-users" />
                  <h4 className="timer mt-2">21</h4>
                  <p className="count-text text-capitalize">TEACHERS</p>
                </div>
                <div className="counter col-lg-3 col-6 mt-lg-0 mt-4">
                  <span className="fa fa-comments" />
                  <h4 className="timer mt-2">27</h4>
                  <p className="count-text text-capitalize">QUESTIONS ANSWERED </p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Services
