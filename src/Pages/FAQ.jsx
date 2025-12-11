import { useState } from "react";
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span>{open ? "<" : ">"}</span>
      </div>
      
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "Why should I own my website?",
      answer: "Having ownership over your website means that its content, design, and functionality rest solely in your hands. It will ensure you long-term security along with flexibility in making updates and save you from third-party dependence."
    },
    {
      question: "What is development in web development?",
      answer: "Web development is basically the process of building and maintaining a website, referred to as coding, designing, and ensuring it has optimal performance. Its elements include front-end (user interface) and back-end development (server-side)."
    },
    {
      question: "What is E-commerce?",
      answer: "Electronic commerce is what E-commerce stands for. It is the process of purchasing as well as selling goods or services over the Internet. Through an E-commerce website or mobile application, businesses are able to carry out their transactions over the Internet."
    },
    {
      question: "What is E-Business development?",
      answer: "E-business development implies the setting of digital strategies required to support business operations carried out on the Internet. It encompasses the processes of creating an ecommerce platform, integrating digital tools, and optimising customer interactions through web and mobile technologies."
    },
    {
      question: "I don't have a complete idea about my app, can you help me?",
      answer: "Yes, we guide you from concept to final product—UI/UX, features, and development."
    },
    {
      question: "Do you only build Native Apps?",
      answer: "No, our developers are also capable of developing hybrid/cross-platform apps. We will observe your requirements and will also suggest to you which platform and what type of app development method will be the most beneficial to you."
    }
  ];

  return (
    <>
    <h1 className="frequently">Frequently Asked Questions</h1>
    <div className="faq-container">
      {faqs.map((item, i) => (
        <FAQItem key={i} {...item} />
      ))}
    </div>
    </>
  );
}
