import React from 'react'
import Header from "./Header"
import SkrolButton from './Button_skrol'
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom";

import HomeBg from "../assets/imgs/home-bg.svg"
import AboutBg from "../assets/imgs/about-bg.svg"




const pageData = {
    "/": { title: "YOUR architecture firm is based in USA", bgImage: HomeBg },
    "/about": { title: "About Us", bgImage: AboutBg },
    "/contact": { title: "Get in Touch", bgImage: "/images/contact-bg.jpg" },
};


function Layout({ child }) {
    const location = useLocation();
    const { title, bgImage } = pageData[location.pathname] || pageData["/"];

    return (
        <>
            <Header title={title} bgImage={bgImage} />
            <SkrolButton />
            <main>
                <Outlet /> {/* Bu joyda sahifa kontenti ko‘rinadi */}
                {child}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout