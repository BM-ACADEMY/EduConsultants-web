import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data ---
const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    location: "MBBS Student (Kyrgyzstan)",
    rating: 5,
    text: "I was completely confused about MBBS options abroad. Their free counselling cleared all my doubts regarding budget and safety. They guided me from A to Z, and now I'm happily studying in Kyrgyzstan."
  },
  {
    id: 2,
    name: "Priya S.",
    location: "Masters in France",
    rating: 5,
    text: "My dream of studying in France came true thanks to their visa support. The paperwork seemed impossible, but the team handled the application and Campus France process perfectly."
  },
  {
    id: 3,
    name: "Karthik R.",
    location: "Local Admission (Pondy)",
    rating: 5,
    text: "I needed help with local college admissions in Pondicherry. Their process was fast and transparent. They helped me choose the right engineering course that matched my cutoff."
  },
  {
    id: 4,
    name: "Sneha M.",
    location: "MBBS Student (Georgia)",
    rating: 5,
    text: "The best part was the clear guidance on fees and documents. No hidden costs. From the initial inquiry to my flight, they provided complete support for my MBBS admission in Georgia."
  }
];

// Star Icon Component
const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5 text-yellow-400"
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Auto-Scroll Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  // 2. Logic to get 2 items safely
  const getVisibleTestimonials = () => {
    const firstIndex = activeIndex;
    const secondIndex = (activeIndex + 1) % testimonials.length;
    return [testimonials[firstIndex], testimonials[secondIndex]];
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <section className="py-20 bg-white overflow-hidden" id='testimonial'>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-3">
              <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm">
                Success Stories
              </h4>
              <div className="h-[1px] w-12 bg-red-600"></div>
            </div>
            <h2 className="text-4xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Your Gateway to <br className="hidden md:block"/> 
              <span className="text-blue-900">Global Education</span>
            </h2>
            <p className="text-slate-600 text-lg">
              See how we helped students navigate from confusion to admission in MBBS Abroad, France, and Local Colleges.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <AnimatePresence initial={false} mode="popLayout"> 
            {visibleItems.map((item) => (
              <motion.div
                layout 
                key={item.id}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeOut" }} // Smoother easeOut transition
                // ADDED: min-h-[340px], h-full, and justify-between for uniform size
                className="bg-[#f8fafc] border border-slate-100 p-8 md:p-10 rounded-2xl flex flex-col justify-between items-start hover:shadow-xl hover:shadow-blue-900/5 transition-shadow duration-300 h-full min-h-[340px]"
              >
                {/* Top Content Group (Avatar + Info + Quote) */}
                <div className="w-full">
                  {/* Header: Avatar + Info */}
                  <div className="flex items-center gap-4 mb-6 w-full">
                    {/* --- LETTER AVATAR --- */}
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0
                      ${item.id % 2 !== 0 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}
                    `}>
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h5 className="font-bold text-lg text-slate-900">{item.name}</h5>
                      <span className="text-sm font-medium text-slate-500 block">{item.location}</span>
                      <div className="flex gap-1 mt-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 text-lg leading-relaxed relative">
                    <span className="text-4xl text-red-200 absolute -top-4 -left-2 font-serif">“</span>
                    <span className="relative z-10 pl-2">
                      {item.text}
                    </span>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-12 gap-2">
           {testimonials.map((_, index) => (
             <button
               key={index}
               onClick={() => setActiveIndex(index)}
               className="relative h-4 flex items-center justify-center p-1 cursor-pointer" 
             >
               {index === activeIndex ? (
                   <motion.div 
                       layoutId="activeDot"
                       className="h-2 w-10 bg-red-600 rounded-full"
                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
               ) : (
                   <div className="h-2 w-2 bg-slate-300 rounded-full hover:bg-slate-400 transition-colors" />
               )}
             </button>
           ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;