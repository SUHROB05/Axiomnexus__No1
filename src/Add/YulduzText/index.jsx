import React from 'react'
import "./yulduz.scss"
import yulduz from "../../assets/icons/footer-1.svg"

function YulduzliText({ children }) {
    return (
        <div className='yulduz-btn'>
            <button><img src={yulduz} alt="" />{children}</button>
        </div>
    )
}

export default YulduzliText;