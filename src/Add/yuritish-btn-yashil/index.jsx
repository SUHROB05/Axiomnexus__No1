import React from 'react'
import './yuritish-btn-yashil.scss'
import Arrow2 from '../../assets/icons/Arrow2.svg'

function YuritishBtnYashil({children}) {
  return (
    <div className="yashil-btn">
        <button>{children} <img src={Arrow2} alt="" /></button>
    </div>
  )
}

export default YuritishBtnYashil;