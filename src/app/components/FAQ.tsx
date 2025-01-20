"use client";

import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "the quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Pricing FAQs
      </h1>
      <p className="text-gray-500 text-lg md:text-xl mb-12 text-center max-w-2xl">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics
      </p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-b pb-4 border-gray-300"
          >
            <span className="text-blue-500 text-xl">&gt;</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 text-center mt-12">
        Haven't got your answer?{" "}
        <a href="#" className="text-blue-500 underline hover:text-blue-600">
          Contact our support
        </a>
      </p>
    </div>
  );
};

export default FAQSection;
