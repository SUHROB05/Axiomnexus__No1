import React from 'react'
import './com-6.scss'
import YulduzliText from '../../Add/YulduzText';
import YuritishBtn from '../../Add/yuritish-btn';

import Section6Imgs1 from '../../assets/imgs/section6-img1.png';
import Section6Imgs2 from '../../assets/imgs/section6-img2.png';
import Section6Imgs3 from '../../assets/imgs/section6-img3.png';


function ComponetOlti() {
    return (
        <section className='section6'>
            <div className="section6-text">
                <YulduzliText>OUR TEAM</YulduzliText>
                <div className="section6-text-matni">
                    <h3>our team of dedication Meet the Talent Behind  the Axiom Nexus</h3>
                    <YuritishBtn>BOOK AN APPOINTMENT</YuritishBtn>
                </div>
            </div>
            <div className="section6-img">
                <div className="section6-img-item">
                    <div className="section6-item">
                        <img src={Section6Imgs1} alt="" />
                    </div>
                    {/* <div className="section6-item-text">
                        <h4>Ethan Harrison<span className='span-yashil'></span><p>Project Manager</p></h4>
                    </div> */}
                </div>
                <div className="section6-img-item s6-img-item2">
                    <div className="section6-item">
                        <img src={Section6Imgs3} alt="" />
                    </div>
                    {/* <div className="section6-item-text">
                        <h4>Ethan Harrison<span className='span-yashil'></span><p>Project Manager</p></h4>
                    </div> */}
                </div>
                <div className="section6-img-item">
                    <div className="section6-item">
                        <img src={Section6Imgs2} alt="" />
                    </div>
                    {/* <div className="section6-item-text">
                        <h4>Ethan Harrison<span className='span-yashil'></span><p>Project Manager</p></h4>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default ComponetOlti;