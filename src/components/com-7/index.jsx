import React from 'react'
import "./com-7.scss"

import Section7imgs1 from '../../assets/imgs/section7-img1.png'
import Section7imgs2 from '../../assets/imgs/section7-img2.png'
import Section7imgs3 from '../../assets/imgs/section7-img3.png'
import Section7imgs4 from '../../assets/imgs/section7-img4.png'
import Section7imgs5 from '../../assets/imgs/section7-img5.png'
import Section7imgs6 from '../../assets/imgs/section7-img6.png'
import Section7imgs7 from '../../assets/imgs/section7-img7.png'
import Section7imgs8 from '../../assets/imgs/section7-img8.png'

function ComponentsYetti() {
    return (
        <section className='section7'>
            <div className="section7-text">
                <h3>TRUSTED BY 150+ COMPANIES</h3>
            </div>
            <div className="section7-contayner">
                <div className="section7-card">
                    <img src={Section7imgs1} alt="" />
                </div>
                <div className="section7-card">
                    <img src={Section7imgs2} alt="" />
                </div>
                <div className="section7-card">
                    <img src={Section7imgs3} alt="" />
                </div>
                <div className="section7-card">
                    <img src={Section7imgs4} alt="" />
                </div>
                <div className="section7-card">
                    <img src={Section7imgs5} alt="" />
                </div>
                <div className="section7-card">
                    <img src={Section7imgs6} alt="" />
                </div>
                <div className="section7-card">
                    <img src={Section7imgs7} alt="" />
                </div>
                <div className="section7-card">
                    <img src={Section7imgs8} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ComponentsYetti;