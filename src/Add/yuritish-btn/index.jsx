import React from 'react'
import './yuritish-btn.scss'
import Arrow from '../../assets/icons/Arrow.svg'

function YuritishBtn({children }) {
    return (
        <div className='yuritish-btn'>
            <button>{children}<img src={Arrow} alt="" /></button>
        </div>
    )
}

export default YuritishBtn;