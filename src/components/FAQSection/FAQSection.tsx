import { useState } from "react";
import FAQQuestion from "../FAQQuestion/FAQQuestion";

function FAQSection() {
  const [questions, setQuestions] = useState<
    {
      question: string;
      answer: string;
    }[]
  >([]);

  useState(() => {
    import("../../do-not-open/temp").then((module) => {
      setQuestions(module.faqs);
    });
  });

  return (
    <section className="faq-section">
      <div className="faq-section-left">
        <h3 className="faq-section-left-title">FAQs</h3>
        <button className="faq-section-left-button primary-button">
          See more FAQs
        </button>
      </div>
      <div className="faq-section-question">
        {questions.map((question, index) => (
          <FAQQuestion
            key={index}
            question={question.question}
            answer={question.answer}
            className="faq-section-question-card"
          />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
