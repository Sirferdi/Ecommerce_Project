import React, { useState } from "react";
import "./Supportpage.scss";

function Supportpage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "How can i order from you?",
      answer: "Just add to cart",
    },
    {
      question: "How long does it take to get my order?",
      answer: "Maxmimum of 2-3 days",
    },

    {
      question: "Do you only sell mens stuff ?",
      answer: "No we have variety of stuff you can buy",
    },
    {
      question: "Can i be able sell on your platform ? ",
      answer:
        "sadly, not at the moment but it's something we want to introduce",
    },
  ];

  return (
    <section className="Support-Container">
      <div className="Support-text" id="FAQs">
        <h1>
          Frequently Ask<span>Question </span>
        </h1>
        <p className="text1">
          We got answers to the questions that you might want to ask about
          Cruise Carts
        </p>

        {faqs.length &&
          faqs.map((item, index) => (
            <div key={index} className="Support-quest">
              <div>
                <p className="Support-question">{item.question}</p>
                {index === openIndex && (
                  <p
                    className={`Support-Ans  ${
                      index === openIndex ? "show" : "hide"
                    }`}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
              <span className="Support-button">
                <button
                  onClick={() => handleItemClick(index)}
                  className="faq-button"
                >
                  {index === openIndex ? "-" : "+"}
                </button>
              </span>
            </div>
          ))}
      </div>

      <div className="Support-image">
        <img src="./image/gif1.gif" alt="" />
      </div>
    </section>
  );
}

export default Supportpage;
