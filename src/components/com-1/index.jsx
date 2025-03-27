import React from 'react'
import './com-1.scss'

import YulduzliText from '../../Add/YulduzText'
import Arrow from "../../assets/icons/Arrow.svg"

function ComponetsBir({ children }) {
  return (
    <section className='section__1'>
      <div className="section__1-blok">
        <div className="section__1-btn">
          <YulduzliText>OUR SOLUTIONS</YulduzliText>
        </div>
        <div className="section__1-text">
          <p>our firm is specializes in turning visions into reality, <span>with portfolio of innovative & precisely crafted architectural & interior designs.</span></p>
          <button>BOOK AN APPOINTMENT <img src={Arrow} alt="" /></button>
        </div>
      </div>
      {children}
    </section>
  )
}

export default ComponetsBir;