import React from 'react'
import './home.scss'

import CommentBir from '../../components/com-1'
import CommentIkki from '../../components/com-2'
import CommentUch from '../../components/com-3'
import CommentTort from '../../components/com-4'
import CommentBesh from '../../components/com-5'
import CommentOlti from '../../components/com-6'
import CommentYetti from '../../components/com-7'
import CommentSakkiz from '../../components/com-8'
import CommentToqqiz from '../../components/com-9'
import CommentOn from '../../components/com-10'

import sectionrasmi1 from '../../assets/imgs/section__1-img1.png'
import sectionrasmi2 from '../../assets/imgs/section__1-img2.png'



function Home() {
  return (
    <div className='home'>
      <CommentBir>
        <div className='section__1-rasim'>
          <div className="section__1-img1">
            <img src={sectionrasmi1} alt="rasim" />
          </div>
          <div className="section__1-img2">
            <img src={sectionrasmi2} alt="" />
          </div>
        </div>
      </CommentBir>
      <CommentIkki />
      <CommentUch />
      <CommentTort />
      <CommentBesh />
      <CommentOlti />
      <CommentYetti />
      <CommentSakkiz />
      <CommentToqqiz />
      <CommentOn/>

    </div>
  )
}

export default Home