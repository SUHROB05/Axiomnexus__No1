import React, { useState } from 'react'
import './com-12.scss'

import Plus from '../../assets/icons/Plus.svg'
import Minus from '../../assets/icons/Minus.svg'

import YulduzliText from '../../Add/YulduzText';



const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-item">
            <div className="item-text">
                <h3>{question}</h3>
                {isOpen && <p>{answer}</p>}
            </div>
            <div className="button-hover">
                <button className="puls-btn" onClick={() => setIsOpen(true)} style={{ display: isOpen ? "none" : "block" }}>
                    <img src={Plus} alt="Show" />
                </button>
                <button className="minus-btn" onClick={() => setIsOpen(false)} style={{ display: isOpen ? "block" : "none" }}>
                    <img src={Minus} alt="Hide" />
                </button>
            </div>
        </div>
    );
};



function Components12() {

    const faqData = [
        {
            question: "HOW INVOLVED CAN I BE IN THE DESIGN PROCESS?",
            answer: "We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback."
        },
        {
            question: "WHAT SERVICES DO YOU OFFER?",
            answer: "We start by understanding your needs and then work on designs iteratively based on your feedback."
        },
        {
            question: "WHAT IS YOUR DESIGN PROCESS?",
            answer: "We start by understanding your needs and then work on designs iteratively based on your feedback."
        },
        {
            question: "HOW DO YOU ESTABLISH YOUR DESIGN FEES?",
            answer: "We start by understanding your needs and then work on designs iteratively based on your feedback."
        },
        {
            question: "HOW LONG DOES A TYPICAL PROJECT TAKE?",
            answer: "We start by understanding your needs and then work on designs iteratively based on your feedback."
        }
    ];

    return (
        <section className='section12'>
            <div className="section12-item">
                <YulduzliText>FAQS</YulduzliText>
                <h2>some questions for honorable clients. Still Have A Question?</h2>
            </div>
            <div className="section12-text">

                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}

            </div>
        </section>
    )
}

export default Components12;