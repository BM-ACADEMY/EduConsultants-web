import React from "react";
import { motion } from "framer-motion";

const WhatWeHelpWith = () => {
  const stepsData = [
    {
      id: 1,
      title: "University Options Matching Your Budget",
      description: (
        <>
          <p className="font-medium mb-2 text-slate-700">
            Tamil Nadu students most preferred countries:
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Kyrgyzstan</li>
            <li>Georgia</li>
            <li>France</li>
            <li>India (Local Colleges)</li>
          </ol>
        </>
      ),
    },
    {
      id: 2,
      title: "Budget Planning (₹10L – ₹30L+)",
      description: "We explain fees clearly (tuition + hostel + food + misc).",
    },
    {
      id: 3,
      title: "Documents Checklist",
      description: "Includes NEET-related docs, France Campus France SOP, etc.",
    },
    {
      id: 4,
      title: "Application & Visa Guidance",
      description: "A to Z support — filling forms to interview preparation.",
    },
    {
      id: 5,
      title: "1-to-1 Counselling Call",
      description: "We explain which course fits you best.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-[#EFF2F9] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm border-b-2 border-red-600 pb-1">
              WHAT WE HELP YOU WITH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Your Journey Starts Here, Steps to Your Educational Success
          </motion.h2>

        </div>

       

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Central Vertical Dotted Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-transparent border-l-2 border-dotted border-red-300 transform -translate-x-1/2 z-0"></div>

          {/* Step Items */}
          {stepsData.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative z-10 flex flex-col md:flex-row items-start md:items-start mb-12 md:mb-20 last:mb-0"
            >
              {/* LEFT SIDE: Number Box & Title */}
              <div className="md:w-1/2 md:pr-16 flex justify-start md:justify-end relative">
                {/* FIX: Wrapped content in a div with 'md:w-[450px]' and 'md:ml-auto'.
                    This ensures the container pushes to the right (near the line), 
                    but the content inside (Number + Title) stays left-aligned 
                    relative to each other, creating a straight vertical line of boxes.
                 */}
                <div className="flex items-center md:w-[450px]">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#ca141d] text-white text-2xl font-bold flex items-center justify-center shadow-md mr-6 relative z-20">
                    {step.id}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* CENTER DOT (Desktop Only) */}
              <div className="hidden md:flex absolute left-1/2 top-7 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                <div className="w-5 h-5 bg-[#ca141d] rounded-full ring-4 ring-[#EFF2F9]"></div>
              </div>

              {/* RIGHT SIDE: Description */}
              <div className="mt-6 md:mt-0 md:w-1/2 md:pl-16 ml-20 md:ml-0">
                {/* Added wrapper to match the alignment width of the left side for symmetry */}
                <div className="md:w-[450px] text-slate-600 text-lg leading-relaxed">
                  {step.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeHelpWith;
