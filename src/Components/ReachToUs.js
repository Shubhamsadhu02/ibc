import React from 'react'
import { Link } from 'react-router-dom'

export default function ReachToUs() {
    return (
        <>
            <section className='reachtous' style={{ padding: "110px 120px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="reach-box">
                                <div className="reach-img">
                                    <img src='/images/Home/reachtous.png' alt='' />
                                </div>
                                <div className="reach-content">
                                    <div className="reach-icon mb-4">
                                        <img src='/images/Home/reachicon.png' alt='' />
                                    </div>
                                    <div className="reach-paragraph">
                                        <p style={{ width: "388px" }}>World-class leadership team with deep experience in hi-tech manufacturing and scaling successful startups</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="reach-contact">
                                <div className="topic topic1">
                                    <h2>Reach us at</h2>
                                </div>
                                <div className="reach-email mt-5">
                                    <Link to={"#"}>contact@ibcbatt.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
