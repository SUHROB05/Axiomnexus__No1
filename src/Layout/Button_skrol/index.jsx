import React from 'react'
import './button_skrol.scss'
import footerIcon2 from '../../assets/icons/footer-2.svg'

function Button() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Silliq harakat
        });
    }

    return (
        <div className='skrol-btn'>
            <a href="#header">
                <button onClick={scrollToTop}>
                    <img src={footerIcon2} alt="" />
                </button>
            </a>
        </div>
    )
}

export default Button;