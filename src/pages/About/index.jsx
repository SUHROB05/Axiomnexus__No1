import React from 'react'
import './about.scss'

import CommentBir from '../../components/com-1'
import CommentIkki from '../../components/com-2'
import CommentOnBir from '../../components/com-11'
import CommentBesh from '../../components/com-5'
import CommentYetti from '../../components/com-7'
import CommentOlti from '../../components/com-6'
import CommentToqqiz from '../../components/com-9'
import Comment12 from '../../components/com-12'


import sectionrasmi3 from '../../assets/imgs/section1-img3.png'
import sectionrasmi4 from '../../assets/imgs/section1-img4.png'


function About() {
  return (
    <div className='about'>
      <CommentBir>
        <div className='section__1-rasim'>
          <div className="section__1-img1">
            <img src={sectionrasmi3} alt="rasim" />
          </div>
          <div className="section__1-img2">
            <img src={sectionrasmi4} alt="" />
          </div>
        </div>
      </CommentBir>
      <CommentIkki />
      <CommentOnBir />
      <CommentBesh />
      <CommentYetti />
      <Comment12 />


      <CommentOlti />
      <CommentToqqiz />
    </div>
  )
}

export default About