import React from 'react'
import { Link } from 'react-router-dom';

import Header from '../Partials/Header';

export default function Home() {
    return (
        <>
            <section className="home-top__bg" >
                <Header />

                <div className="container">
                    <div className="home-top mt-15">
                        <div className="row">
                            <div className="col-sm-12 col-md-7 col-lg-8 order-md-1 order-2">
                                <div className="home-head">
                                    <h1>Building High-Performance Lithium-Ion Cells for Mobility</h1>
                                </div>
                                <div className="head-contact_btn mt-5">
                                    <Link to={'#'}><button type='button'>Contact us</button></Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-4 order-md-2 order-1">
                                <img src='images/Home/home1.png' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='aboutUs mt-15 mb-15'>
                <div className="container d-flex flex-column justofy-content-center align-items-center">
                    <div className="topic text-center">
                        <h2>About us</h2>
                    </div>
                    <div className="about-paragraph text-center mt-10 d-flex justify-content-center align-items-center" style={{width: "870px"}}>
                        <p>International Battery Company (IBC) is building proprietary I-NMC Prismatic cells in India at the planned non-captive Gigafactory. IBC cells will reduce battery complexity due to the large form factor, have 40% higher energy density than LFP cells, and are recyclable. These cells will be especially suited for mobility applications (EVs). The supply chain will be localized and secured to enable energy independence.
                            <br/>
                            <br/>
                        While the R&D is being done in the US, a pilot plan is being built in South Korea, and High-Volume-Manufacturing is planned to be done in India at the non-captive Gigafactory.</p>
                    </div>
                </div>
            </section>

        </>
    )
}
