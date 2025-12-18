import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  // State to track which FAQ is currently open (defaulting to the first one, index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Is NEET compulsory for MBBS abroad?",
      answer: "Yes, NEET is required (appeared/qualified).",
    },
    {
      question: "Do you help with visa?",
      answer: "Yes — full documentation + interview guidance.",
    },
    {
      question: "Are scholarships available for France?",
      answer: "Yes — we guide for Campus France + university scholarships.",
    },
    {
      question: "I am confused. Which program suits me best?",
      answer: "Register using the form → We’ll call you and explain based on budget, marks & goals.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white font-sans" id='faq'>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#D32F2F] font-bold text-sm tracking-wider uppercase">
                Frequently Asked Questions
              </span>
              <div className="h-[2px] w-12 bg-[#D32F2F]"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Admissions & Application <br className="hidden md:block" />
              Process FAQs
            </h2>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => toggleFAQ(index)}
                className={`cursor-pointer rounded-sm overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-[#D32F2F]' : 'bg-[#EFF5F9]'
                }`}
              >
                {/* Question Header */}
                <div className="p-8 flex justify-between items-start gap-4">
                  <h3
                    className={`font-bold text-lg leading-snug select-none ${
                      isOpen ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`mt-1 transition-transform duration-300 ${
                      isOpen ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </span>
                </div>

                {/* Answer Content (Animated) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8">
                        <p className="text-white/90 text-sm leading-relaxed border-t border-white/20 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;