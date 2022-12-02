import React from 'react'

export default function AboutUsCards() {
  return (
    <>
    <div className="about-container mt-15">
                        <div className="row" style={{rowGap: "15px"}}>
                            <div className="col-lg-4">
                                <div className="about-box">
                                    <div className="about-img">
                                        <img src='/images/Home/about1.png' alt=''/>
                                    </div>
                                    <div className="about-content">
                                        <div className="about-flag mb-4">
                                            <img src='/images/Home/Usflag.png' alt=''/>
                                        </div>
                                        <div className="about-list">
                                            <ul>
                                                <li>Develop cutting edge capabilities</li>
                                                <li>Learn from mature high-tech industry ecosystem</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="about-box">
                                    <div className="about-img">
                                        <img src='/images/Home/about2.png' alt=''/>
                                    </div>
                                    <div className="about-content">
                                        <div className="about-flag mb-4">
                                            <img src='/images/Home/KRflag.png' alt=''/>
                                        </div>
                                        <div className="about-list">
                                            <ul>
                                                <li>Pilot plant in Korea</li>
                                                <li>Closer to the supply chain</li>
                                                <li>Work closely with supply chain partners</li>
                                                <li>Pilot cells to be used for validation and supply chain service platform</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="about-box">
                                    <div className="about-img">
                                        <img src='/images/Home/about3.png' alt=''/>
                                    </div>
                                    <div className="about-content">
                                        <div className="about-flag mb-4">
                                            <img src='/images/Home/INflag.png' alt=''/>
                                        </div>
                                        <div className="about-list">
                                            <ul>
                                                <li>Gigascale manufacturing in India</li>
                                                <li>Leverage world’s largest affordable engineering & manufacturing talent</li>
                                                <li>Support domestic manufacturing and Li-Ion Cell manufacturing leadership</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}
