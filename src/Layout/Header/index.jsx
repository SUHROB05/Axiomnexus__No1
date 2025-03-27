import React from 'react'
import './header.scss'
import { Link } from "react-router-dom"
import AylanuvchiStiker from '../../Add/__aylanuvchi-stik'

import Alogo from "../../assets/icons/Branding.svg"
import Arrow from "../../assets/icons/Arrow.svg"


import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        label: (
            <Link to="/project">Project </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link to="/">HOME</Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link to="/">HOME</Link>
        ),
        key: '3',

    },
];

function Header({ title, title2, bgImage }) {

    // (function bolimnitekshirish(title2) {
    //     const bolim = document.getElementById("bolim");
    //     if (title2 == "") {
    //         bolim.style.display = "none"
    //     }
    // })();


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
                            <Link to="/blog">BLOG</Link>
                        </li>
                        <li>
                            <Dropdown menu={{ items }}>
                                <a onClick={e => e.preventDefault()}>
                                    <Space>
                                        ALL PAGES
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
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
                    {title2 && <h4 id='bolim'> HOME <span></span> {title2}</h4>}
                    <h1>{title}</h1>
                </div>
                <AylanuvchiStiker />
            </div>
        </header>
    )
}

export default Header