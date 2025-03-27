import React from 'react'
import './com-8.scss'
import YuritishBtn from '../../Add/yuritish-btn'
import YashilBtn from '../../Add/yuritish-btn-yashil'
import YulduzliText from '../../Add/YulduzText'

function CommentSakkiz() {
    return (
        <section className='section8'>
            <div className="section8-text">
                <YulduzliText>CONTACT US</YulduzliText>
                <h3>Let's make More something incredible together!</h3>
            </div>
            <div className="section8-contayner">
                <YashilBtn>SCHEDULE A CALL</YashilBtn>
                <div className="section8-item">
                    <h3>PLEASE SUBMIT YOUR INFO</h3>
                    <form action="">
                        <label htmlFor="">
                            <input type="text" placeholder='  FULL NAME' />
                        </label>
                        <label htmlFor="">
                            <input type="text" placeholder=' EMAIL ADDRESS' />
                        </label>
                        <label htmlFor="">
                            <input type="text" placeholder=' EMAIL ADDRESS' />
                        </label>
                        <textarea name="" id="" placeholder=' MESSAGE'>
                        </textarea>
                    </form>
                    <YuritishBtn>SUBMIT NOW</YuritishBtn>
                </div>
            </div>
        </section>
    )
}

export default CommentSakkiz;