import React from "react";

export default function CoreValues() {
  return (
    <>
      <section
        className="core-values mt-15"
        style={{ background: "#17185E", padding: "110px 120px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="topic topic1">
                <h2 style={{ color: "#FFFFFF" }}>Core Values of the Company</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="core-table">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="core d-flex align-items-center">
                      <div className="core-img">
                        <img src="/images/Home/saftey.png" alt="" />
                      </div>
                      <div
                        className="core-name"
                        style={{ paddingLeft: "25px" }}>
                        <h5 style={{ color: "#FFFFFF" }}>Safety</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="core d-flex align-items-center">
                      <div className="core-img">
                        <img src="/images/Home/Sustainability.png" alt="" />
                      </div>
                      <div
                        className="core-name"
                        style={{ paddingLeft: "19px" }}>
                        <h5 style={{ color: "#FFFFFF" }}>Sustainability</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="core d-flex align-items-center">
                      <div className="core-img">
                        <img src="/images/Home/quality.png" alt="" />
                      </div>
                      <div
                        className="core-name"
                        style={{ paddingLeft: "25px" }}>
                        <h5 style={{ color: "#FFFFFF" }}>Quality</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="core d-flex align-items-center">
                      <div className="core-img">
                        <img src="/images/Home/Performance.png" alt="" />
                      </div>
                      <div
                        className="core-name"
                        style={{ paddingLeft: "25px" }}>
                        <h5 style={{ color: "#FFFFFF" }}>Performance</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
