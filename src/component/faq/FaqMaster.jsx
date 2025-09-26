"use client";

import Wrapper from "@/ui/Wrapper";
import { useState } from "react";

const faqData = [
  {
    question: "What if I don't know anything about drones?",
    answer:
      "Perfect! Our course is designed for complete beginners. We start from the absolute basics and take you through everything step by step. No technical background required.",
  },
  {
    question: "Is the certification valid across India?",
    answer:
      "Yes, this is an official DGCA (Directorate General of Civil Aviation) certification that is recognized and valid throughout India for commercial drone operations.",
  },
  {
    question: "What happens after I complete the course?",
    answer:
      "You'll receive your DGCA drone pilot license and we provide placement assistance. Many of our graduates work in agriculture, surveying, photography, and delivery services.",
  },
  {
    question: "Do I need to bring my own drone?",
    answer:
      "No, we provide all training drones and equipment. You don't need to invest in any hardware until after you're certified and ready to start working.",
  },
  {
    question: "What are the job opportunities?",
    answer:
      "Huge! Agriculture monitoring, real estate photography, survey mapping, delivery services, security surveillance, and more. The drone industry is growing rapidly in India.",
  },
];

export default function FaqMaster() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white">
      <Wrapper>
        <h2 className="font-bold text-center mb-heading text-primary">
          FAQ<span className="text-outline-primary">s</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 hover:bg-gray-50 rounded-primary"
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
              >
                <p className="font-medium text-accent-green-text">
                  {faq.question}
                </p>
                <img
                  src={"/svg/arrow_down.svg"}
                  className={`md:w-5 w-4 ml-2 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer with smooth transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
