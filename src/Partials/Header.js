import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar" style={{background: "#17185E" ,padding: "20px 0" }}>
        <div className="container header-nav">
          <div className="logo">
            <Link to="/" className="navbar-brand"><img src="/images/Home/IBClogo.svg" alt='' /></Link>
          </div>
          {/* <div className="contact-btn">
            <a href='#reachtous'><button type='button'>Contact us</button></a>
          </div>  */}
        </div>

      </nav>
    </>
  )
}
