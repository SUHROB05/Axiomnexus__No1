import React from 'react'
import './header.scss'
import { Link } from "react-router-dom"
import AylanuvchiStiker from '../../Add/__aylanuvchi-stik'

import Alogo from "../../assets/icons/Branding.svg"
import Arrow from "../../assets/icons/Arrow.svg"


function Header({ title, bgImage }) {
    return (

        <header style={{ backgroundImage: `url(${bgImage})` }} id='header'>
            <div className="navigeshin">
                <div className="sayit__logo">
                    <img src={Alogo} alt="" />
                    <h3>Axiomnexus</h3>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/services">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-item">
                    <h3>GET THIS TEMPLATE</h3>
                    <button><img src={Arrow} alt="" /></button>
                </div>
            </div>
            <div className="sarlavha">
                <div className="sarlavha-text">
                    <h1>{title}</h1>
                </div>
                <AylanuvchiStiker />
            </div>
        </header>
    )
}

export default Header