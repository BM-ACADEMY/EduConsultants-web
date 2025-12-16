import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy Data
const testimonials = [
  {
    id: 1,
    name: "Student A",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 2,
    name: "Student B",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    id: 3,
    name: "Student C",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  }
];

// Star Icon Component
const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-6 h-6 text-yellow-400"
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
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // 2. Logic to get 2 items safely (wrapping around array)
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
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-3">
              <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm">
                Testimonial
              </h4>
              <div className="h-[1px] w-12 bg-red-500"></div>
            </div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Stories of Student Achievement
            </h2>
          </div>
          
          <div className="lg:w-1/3">
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode='wait'>
            {visibleItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`} 
                // RESTORED: Added X values to create the "Slide" effect
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#eff4fa] p-10 md:p-12 text-center rounded-sm flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-800 font-bold text-lg leading-snug">
                  “{item.text}”
                </blockquote>
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
                className="relative h-2 flex items-center justify-center p-1" 
             >
                {index === activeIndex ? (
                    // Active Dot
                    <motion.div 
                        layoutId="activeDot"
                        className="h-2 w-10 bg-blue-600 rounded-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                ) : (
                    // Inactive Dot
                    <div className="h-2 w-2 bg-gray-300 rounded-sm hover:bg-gray-400 transition-colors" />
                )}
             </button>
           ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;