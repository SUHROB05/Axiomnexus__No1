import React from 'react'
import Header from "./Header"
import SkrolButton from './Button_skrol'
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom";

import HomeBg from "../assets/imgs/home-bg.svg"
import AboutBg from "../assets/imgs/about-bg.svg"
import BlogBg from "../assets/imgs/blog-bg.png"
import ServicesBg from "../assets/imgs/Services-bg.png"
import ProjectBg from "../assets/imgs/project-bg.png"




const pageData = {
    "/": { title: "YOUR architecture firm is based in USA", bgImage: HomeBg },
    "/about": { title: "About Us", title2: "ABOUT", bgImage: AboutBg },
    "/services": { title: "OUR services", title2: "SERVICES", bgImage: ServicesBg },
    "/blog": { title: "news & articles", title2: "BLOG", bgImage: BlogBg },
    "/project ": { title: "PROJECT PORTFOLIO", title2: "Project ", bgImage: ProjectBg },
};


function Layout({ child }) {
    const location = useLocation();
    const { title, title2 = "", bgImage } = pageData[location.pathname] || pageData["/"];

    return (
        <>
            <Header title={title} title2={title2} bgImage={bgImage} />
            <SkrolButton />
            <main>
                {child}
                <Outlet /> {/* Bu joyda sahifa kontenti ko‘rinadi */}

            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;