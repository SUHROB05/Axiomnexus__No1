import React from 'react'
import './com-5.scss'
import YulduzliText from '../../Add/YulduzText';

import Coma from '../../assets/icons/Coma.svg'
import Arrow from '../../assets/icons/Arrow.svg'
import Imgs1 from '../../assets/imgs/section5-img1.svg'


function ComponentsBesh() {
    return (
        <section className='section5'>
            <YulduzliText>OUR CLIENTS</YulduzliText>
            <div className="section5-text">
                <div className="section5-img">
                    <img src={Coma} alt="" />
                </div>
                <div className="section5-contayner">
                    <p>We bring visions to life with our precision-crafted architecture and interior design. Discover our portfolio of innovative best projects that redefine creativity and functionality.</p>
                    <div className="section5-item">
                        <div className="section5-item-img">
                            <img src={Imgs1} alt="" />
                        </div>
                        <div className="section5-item-text">
                            <h3>ROBERT THOMPSON</h3>
                            <p>Managing Director</p>
                        </div>
                        <div className="section5-item-btn">
                            <div className="item-btn1">
                                <img src={Arrow} alt="" />
                            </div>
                            <div className="item-btn2">
                                <img src={Arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComponentsBesh;