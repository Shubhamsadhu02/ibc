import React from "react";

import Header from "../Partials/Header";
import AboutUsCards from "./AboutUsCards";
import CellDesigned from "./CellDesigned";
import CoreValues from "./CoreValues";
import ReachToUs from "./ReachToUs";

export default function Home() {
  return (
    <>
      <Header />
      <section className="home-top__bg">
        <div className="container">
          <div className="home-top">
            <div className="row">
              <div className="home-top--content col-sm-12 col-md-7 col-lg-7">
                <div className="home-head">
                  <h1>High-Performance Lithium-Ion Cells for Mobility</h1>
                </div>
                <div className="head-contact_btn mt-5">
                  <a href="#reachtous">
                    <button type="button">Contact us</button>
                  </a>
                </div>
              </div>
              <div className="homeimgbg col-sm-12 col-md-5 col-lg-5">
                <img
                  src="images/Home/home1.png"
                  alt=""
                  className="img-responsive w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutUs mt-15 mb-15">
        <div className="container d-flex flex-column justofy-content-center align-items-center">
          <div className="topic text-center">
            <h2>About us</h2>
          </div>
          <div
            className="about-paragraph text-center mt-10 d-flex justify-content-center align-items-center"
            style={{ width: "870px" }}>
            <p>
              International Battery Company (IBC) plans to build proprietary
              I-NMC Prismatic cells in India & US at the planned non-captive
              Gigafactory sites. IBC cells will reduce battery complexity due to
              the large form factor, have 40% higher energy density than LFP
              cells, and are recyclable. These cells will be especially suited
              for mobility applications (EVs). The supply chain will be
              localized and secured to enable energy independence.
              <br />
              <br />
              The R&D is being done in the US, a pilot plant is being built in
              South Korea, and High-Volume-Manufacturing is planned to be done
              in India & US in a copy exactly format.
            </p>
          </div>

          <AboutUsCards />
        </div>
      </section>

      <CoreValues />

      <section className="value_proposition mt-15 mb-15">
        <div className="container">
          <div className="row" style={{ rowGap: "25px" }}>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="proposition-table">
                <div className="proposition">
                  <div className="proposition-img">
                    <img src="/images/Home/high-performance.png" alt="" />
                  </div>
                  <div className="proposition-paragraph mt-4">
                    <p>High Performance Prismatic Cells with &gt;180Wh/cell</p>
                  </div>
                </div>

                <div className="proposition">
                  <div className="proposition-img">
                    <img src="/images/Home/battery.png" alt="" />
                  </div>
                  <div className="proposition-paragraph mt-4">
                    <p>40% Higher Energy Density at &gt;210KWh/Kg</p>
                  </div>
                </div>

                <div className="proposition">
                  <div className="proposition-img">
                    <img src="/images/Home/protect.png" alt="" />
                  </div>
                  <div className="proposition-paragraph mt-4">
                    <p>
                      Safe, well tested NMC chemistry with added thermal
                      protections and with high cycle life
                    </p>
                  </div>
                </div>

                <div className="proposition">
                  <div className="proposition-img">
                    <img src="/images/Home/recycle.png" alt="" />
                  </div>
                  <div className="proposition-paragraph mt-4">
                    <p>Recyclable NMC Chemistry. Li, Ni, Mn, Cobe reused</p>
                  </div>
                </div>

                <div className="proposition">
                  <div className="proposition-img">
                    <img src="/images/Home/aatmanirbhar-bharat.png" alt="" />
                  </div>
                  <div className="proposition-paragraph mt-4">
                    <p>
                      Secured Supply Chain with suppliers co-locating with IBC
                    </p>
                  </div>
                </div>

                <div className="proposition">
                  <div className="proposition-img">
                    <img src="/images/Home/AmericanMade.png" alt="" />
                  </div>
                  <div className="proposition-paragraph mt-4">
                    <p>Make in US and India and customized for local needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-sm-12 col-md-5 col-lg-5 d-flex align-items-center">
              <div className="reach-contact">
                <div className="topic topic1">
                  <h2>Value proposition of the Product</h2>
                </div>
                <div className="value-list">
                  <ul>
                    <li>
                      <div className="value-content d-flex">
                        <img src="/images/Home/tick.png" alt="" />
                        <h5>40% higher energy density</h5>
                      </div>
                    </li>
                    <li>
                      <div className="value-content d-flex">
                        <img src="/images/Home/tick.png" alt="" />
                        <h5> 15 years cycle life</h5>
                      </div>
                    </li>
                    <li>
                      <div className="value-content d-flex">
                        <img src="/images/Home/tick.png" alt="" />
                        <h5>Proprietary technology</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cell-chart mt-15 mb-15">
        <div className="container cell-chartbg p-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="cell-paragraph">
                <p style={{ width: "194px" }}>
                  Proprietary (I-NMC) chemistry to increase cycle life with high
                  energy density and increased safety
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <img src="/images/Home/cellchart.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <CellDesigned />

      <ReachToUs />
    </>
  );
}
