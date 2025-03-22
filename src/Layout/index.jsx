import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

function Layout({ child }) {
    return (
        <>
            <Header></Header>
            <main>{child}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout