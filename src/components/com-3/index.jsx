import React from 'react'
import './com-3.scss'
import YulduzText from '../../Add/YulduzText'

import Section3Imgs1 from '../../assets/imgs/section3-img1.svg'
import Section3Imgs2 from '../../assets/imgs/section3-img2.svg'
import Section3Imgs3 from '../../assets/imgs/section3-img3.svg'
import Section3Imgs4 from '../../assets/imgs/section3-img4.svg'
import Yulduzcha from '../../assets/icons/footer-1.svg'

function ComponentsServices() {
    return (
        <section className='section3'>
            <div className="section3-text">
                <YulduzText>OUR SERVICES</YulduzText>
                <h3>Transforming Space with Cutting- Edge Architectural Solutions</h3>
            </div>
            <div className="section3-blok">
                <div className="section3-card">
                    <div className="card-text">
                        <h3>ARCHITECTURAL DESIGN</h3>
                        <span><img src={Yulduzcha} alt="" /></span>
                        <p>Our interior architecture services are designed enhance the functionality & flow of your space, while also ensuring it is visually stunning. We meticulously consider spatial dynamics to craft interiors that are not only beautiful but also highly practical.</p>
                    </div>
                    <div className="card-img">
                        <img src={Section3Imgs1} alt="" />
                    </div>
                </div>
                <div className="section3-card">
                    <div className="card-text">
                        <h3>URBAN DESIGN</h3>
                        <span><img src={Yulduzcha} alt="" /></span>
                        <p>Our interior architecture services are designed enhance the functionality & flow of your space, while also ensuring it is visually stunning. We meticulously consider spatial dynamics to craft interiors that are not only beautiful but also highly practical.</p>
                    </div>
                    <div className="card-img">
                        <img src={Section3Imgs2} alt="" />
                    </div>
                </div>
                <div className="section3-card">
                    <div className="card-text">
                        <h3>INTERIOR DESIGN</h3>
                        <span><img src={Yulduzcha} alt="" /></span>
                        <p>Our interior architecture services are designed enhance the functionality & flow of your space, while also ensuring it is visually stunning. We meticulously consider spatial dynamics to craft interiors that are not only beautiful but also highly practical.</p>
                    </div>
                    <div className="card-img">
                        <img src={Section3Imgs3} alt="" />
                    </div>
                </div>
                <div className="section3-card">
                    <div className="card-text">
                        <h3>LANDSCAPE DESIGN</h3>
                        <span><img src={Yulduzcha} alt="" /></span>
                        <p>Our interior architecture services are designed enhance the functionality & flow of your space, while also ensuring it is visually stunning. We meticulously consider spatial dynamics to craft interiors that are not only beautiful but also highly practical.</p>
                    </div>
                    <div className="card-img">
                        <img src={Section3Imgs4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComponentsServices;