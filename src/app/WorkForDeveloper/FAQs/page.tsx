"use client";
import React, { useState } from "react";
import AntiCheatingRules from "../AntiCheatingRules/page";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border rounded-full bg-[#7FBFB0] border-none mx-6 md:mx-8 lg:mx-16 xl:mx-32">
    <button
      className="px-6 py-3 text-left hover:no-underline w-full flex justify-between items-center text-black"
      onClick={onClick}
    >
      <span>{question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
        ▼
      </span>
    </button>
    <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
      <div className="bg-white px-4 py-3 rounded-b-lg text-black">
        {answer}
      </div>
    </div>
  </div>
);

const FAQs: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is LumioAI?",
      answer: "LumioAI is a multifaceted platform powered by AI that offers AI tools, solutions, and remote talent."
    },
    {
      question: "What does LumioAI do?",
      answer: "We help companies adopt AI in their systems by providing custom tools and solutions."
    },
    {
      question: "How does LumioAI remote talent hiring work?",
      answer: "We connect AI and software engineers to companies looking for top-tier talent. We ensure that each candidate is an expert in their field through a rigorous vetting process. Once vetted, we match them with companies based on specific requirements."
    },
    {
      question: "How do you vet your candidates?",
      answer: "We have a comprehensive vetting system to evaluate each candidate's skills and expertise. This process includes technical assessments, interviews, and background checks to ensure that they meet our high standards of excellence."
    },
    {
      question: "How does the process work for companies seeking talent?",
      answer: "Companies provide us with detailed information about their talent needs. Our team then gathers the information and suggests the best candidates based on those requirements. This ensures a perfect match for both the company and candidates."
    },
    {
      question: "What services do you provide beyond connecting talent?",
      answer: "In addition to connecting companies with top talent, we also take care of payroll, benefits, and compliance with international laws. This allows companies to focus on their core business while we handle the administrative aspects."
    },
    {
      question: "Can you help with hiring remote talent internationally?",
      answer: "Yes, we specialize in connecting companies with remote AI and software engineers from around the world. Our partnership with Deel allows us to handle the complexities of international hiring, including payroll and legal compliance."
    },
    {
      question: "What types of companies do you work with?",
      answer: "We work with a wide range of companies, from startups to large enterprises, across various industries. Our clients are typically looking for AI tools and solutions to innovate their businesses. Another demand is for highly skilled AI and software engineers to support their projects."
    }
  ];

  const handleClick = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <>
      <div className="w-full mx-auto px-4 py-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      <AntiCheatingRules />
    </>
  );
};

export default FAQs;