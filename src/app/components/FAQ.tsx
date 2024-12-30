export default function FAQ() {
    const faqs = [
      { question: "How do I cancel my subscription?", answer: "You can cancel anytime from your dashboard." },
      { question: "Do you offer refunds?", answer: "Yes, we offer a 14-day money-back guarantee." },
      { question: "Can I upgrade my plan?", answer: "Yes, upgrading is possible anytime." },
    ];
  
    return (
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Pricing FAQs</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-md">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  