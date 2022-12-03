import React from 'react'

export default function CellDesigned() {
    return (
        <>
            <section className='cell-designed mt-15' style={{ background: "#17185E", padding: "110px 120px 0px" }}>
                <div className="container d-flex flex-column justofy-content-center align-items-center">
                    <div className="topic text-center">
                        <h2 style={{ color: "#FFFFFF", width: "522px" }}>Li-ion cell designed for mobility applications</h2>
                    </div>
                    <div className="cell-container position-relative" style={{marginTop: "8rem"}}>
                        <div className="cell-image">
                            <img src='/images/Home/cell.png' alt=''/>
                        </div>
                        <div className="cell-box cell-box1">
                            <div className="cell-header">
                                <p style={{color: "#FFFFFF"}}>Proprietary I-NMC chemistry</p>
                            </div>
                            <div className="cell-list">
                                <ul>
                                    <li>Higher energy density. Lighter battery pack, higher range</li>
                                    <li>Recyclable oxide chemistry. Reusable Li and no toxic phosphate pollution</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cell-box cell-box2">
                            <div className="cell-header">
                                <p style={{color: "#FFFFFF"}}>Custom can and lid design to increase safety and quality of the cells</p>
                            </div>
                            <div className="cell-list">
                                <ul>
                                    <li>Safety mechanisms to avoid explosion /fires</li>
                                    <li>High quality manufacturing to reduce quality issues</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cell-box cell-box3">
                            <div className="cell-header">
                                <p style={{color: "#FFFFFF"}}>Large form factor Prismatic cells, &gt; 180 Wh per cell</p>
                            </div>
                            <div className="cell-list">
                                <ul>
                                    <li>Less cells required per battery pack, reduced BMS complexity</li>
                                    <li>Size, voltage and power well suited for application in battery packs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cell-box cell-box4">
                            <div className="cell-header">
                                <p style={{color: "#FFFFFF"}}>Proprietary thermal layer, powder coating and safety first design philosophy</p>
                            </div>
                            <div className="cell-list">
                                <ul>
                                    <li>Increased cycle life and increased thermal stability (Safer)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
