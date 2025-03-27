import React from 'react'
import './com-4.scss'
import YulduzliText from '../../Add/YulduzText';
import YuritishBtn from '../../Add/yuritish-btn'

import Section4Img1 from '../../assets/imgs/section4-img1.svg'
import Section4Img2 from '../../assets/imgs/section4-img2.svg'
import Section4Img3 from '../../assets/imgs/section4-img3.svg'
import Section4Img4 from '../../assets/imgs/section4-img4.svg'

import Section4Icon1 from '../../assets/icons/section4-icon1.svg'

const Hover = () => {
    let S = 2;
    const card = document.getSelection(".section4-card")
    const cardimg = document.getSelection(".section4-card-img")
    const cardotput = document.getSelection(".section4-card-otput")
    if (S % 2 == 0) {
        cardimg.style.display = ""
    }
}

function componentsTort() {
    return (
        <section className='section4'>
            <div className="section4-text">
                <YulduzliText>PROJECT PORTFOLIO</YulduzliText>
                <h3>Discover our portfolio completed architectural projects.</h3>
            </div>
            <div className="section4-img">
                <div className="section4-card">
                    <div className="section4-card-img">
                        <img src={Section4Img1} alt="" />
                    </div>
                    <div className="section4__card-otput">
                        <button><img src={Section4Icon1} alt="" /></button>
                        <h3>NEWPORT HOUSE</h3>
                    </div>
                </div>
                <div className="section4-card-bosh">

                </div>
                <div className="section4-card">
                    <div className="section4-card-img">
                        <img src={Section4Img2} alt="" />
                    </div>
                    <div className="section4__card-otput">
                        <button><img src={Section4Icon1} alt="" /></button>
                        <h3>NEWPORT HOUSE</h3>
                    </div>
                </div>
                <div className="section4-card">
                    <div className="section4-card-img">
                        <img src={Section4Img3} alt="" />
                    </div>
                    <div className="section4__card-otput">
                        <button><img src={Section4Icon1} alt="" /></button>
                        <h3>NEWPORT HOUSE</h3>
                    </div>
                </div>
                <div className="section4-card">
                    <div className="section4-card-img">
                        <img src={Section4Img4} alt="" />
                    </div>
                    <div className="section4__card-otput">
                        <button><img src={Section4Icon1} alt="" /></button>
                        <h3>NEWPORT HOUSE</h3>
                    </div>
                </div>
            </div>
            <div className="section4-btn">
                <YuritishBtn>BOOK AN APPOINTMENT</YuritishBtn>
            </div>
        </section>
    )
}

export default componentsTort;