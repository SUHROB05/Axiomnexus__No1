import React from 'react'
import './footer.scss'
import AylanuvchiStiker from '../../Add/__aylanuvchi-stik'
import { Link } from "react-router-dom"

import footerIcon1 from '../../assets/icons/footer-1.svg'
import footerIcon3 from '../../assets/icons/Branding.svg'



function Footer() {


  return (
    <footer>
      <div className="footer__s1">
        <div className="footer-text">
          <button> <img src={footerIcon1} alt="" />CONNECTIONS MAKE US WHO WE ARE</button>
          <h3>Start Collaborating with Us</h3>
        </div>
        <AylanuvchiStiker />
      </div>
      <div className="footer__s2"></div>
      <div className="footer__s3">
        <div className="footer-item1">
          <h3><img src={footerIcon3} alt="" /> Axiomnexus</h3>
          <p>Develops Conceptual Design Ideas,<br /> Refines Them Into Detailed Plans.</p>
        </div>
        <div className="footer-item2">
          <div>
            <ul className="footer-list">
              <li>
                <h3>MENU</h3>
              </li>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer-list">
              <li>
                <h3>SOCIAL LINKS</h3>
              </li>
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>LinkedIn</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer-list">
              <li>
                <h3>PRIVACY POLICY</h3>
              </li>
              <li>
                <a>Privacy Policies</a>
              </li>
              <li>
                <a>Terms & Condition</a>
              </li>
              <li>
                <a>404</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__s4">
        <p>©2025 yilda Amirov Suhrob tomonidan yaratildi...</p>
        
      </div>
    </footer>
  )
}

export default Footer