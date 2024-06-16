import { useState } from "react";
import Arrow from "../../assets/icons/arrow-head.svg?react";

interface FAQQuestionProps {
  question: string;
  answer: string;
  className?: string;
  style?: React.CSSProperties;
}

function FAQQuestion({ question, answer, className, style }: FAQQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={"faq-question" + (className ? " " + className : "")}
      style={style}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={
          "faq-question-button" + (isOpen ? " faq-question-button--open" : "")
        }
      >
        <h5 className="faq-question-button-question">{question}</h5>
        <Arrow />
      </button>
      {isOpen && <p className="faq-question-answer">{answer}</p>}
    </div>
  );
}

export default FAQQuestion;
