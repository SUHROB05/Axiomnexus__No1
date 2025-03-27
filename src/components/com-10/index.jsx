import React from 'react'
import './com-10.scss'
import YulduzliText from '../../Add/YulduzText';
import YuritishBtn from '../../Add/yuritish-btn';

import Section10Img1 from '../../assets/imgs/section10-imgs1.png';
import Section10Img2 from '../../assets/imgs/section10-imgs2.png';
import Section10Img3 from '../../assets/imgs/section10-imgs3.png';
import Section10Img4 from '../../assets/imgs/section10-imgs4.png';

function ComponentsOn() {
    return (
        <section className='section10'>
            <div className="section10-item1">
                <YulduzliText>NEWS & ARTICLES</YulduzliText>
                <div className="section10-text">
                    <h3>Unveiling Architectural Visions Design Articles & News</h3>
                    <YuritishBtn>BOOK AN APPOINTMENT</YuritishBtn>
                </div>
            </div>
            <div className="section10-imgs">
                <div className="img-item1 img-item">
                    <img src={Section10Img1} alt="" />
                    <div className="img-item-text">
                        <div className="item-text">
                            <h3>DESIGN STRATEGIES <span className='span-yashil'></span>2024 - 09 - 11</h3>
                            <h4>MERGING ART AND ARCHITECTURE: SCULPTURAL MASTERPICES FOR MODERN SPACES</h4>
                        </div>
                    </div>
                </div>
                <div className="img-item2 img-item">
                    <img src={Section10Img2} alt="" />
                    <div className="img-item-text">
                        <div className="item-text">
                            <h3>DESIGN STRATEGIES <span className='span-yashil'></span>2024 - 09 - 11</h3>
                            <h4>REDEFININF URBAN SUSTAINABLE HIGH-RISE DESIGN STRATEGIES</h4>
                        </div>
                    </div>
                </div>
                <div className="img-item3 img-item">
                    <img src={Section10Img3} alt="" />
                    <div className="img-item-text">
                        <div className="item-text">
                            <h3>DESIGN STRATEGIES <span className='span-yashil'></span>2024 - 09 - 11</h3>
                            <h4>THE BEAUTY OF LESS IN MODERN ARCHITECTURAL DESIGN</h4>
                        </div>
                    </div>
                </div>
                <div className="img-item4 img-item">
                    <img src={Section10Img4} alt="" />
                    <div className="img-item-text">
                        <div className="item-text">
                            <h3>DESIGN STRATEGIES <span className='span-yashil'></span>2024 - 09 - 11</h3>
                            <h4>THE AESTHETICS AGENDA: REDEFINING BEST ARCHITECTURE & INTERIOR ELEGANCE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComponentsOn;