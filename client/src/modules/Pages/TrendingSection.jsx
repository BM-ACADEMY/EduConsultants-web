import React from "react";
import { motion } from "framer-motion";
import { Flame, Globe, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import Banner3 from "@/assets/Banner/man.jpg";

const TrendingSection = () => {
  const content = [
    {
      id: 1,
      title: "Top 5 MBBS Colleges in Kyrgyzstan",
      desc: "Comprehensive breakdown of Fees, Pros & Cons for 2026.",
      icon: <Flame className="w-8 h-8 text-red-500" />,
      bgColor: "bg-[#ecf0f9]",
    },
    {
      id: 2,
      title: "France 2026 Intake: Scholarships",
      desc: "A complete guide to scholarships you must apply for now.",
      icon: <GraduationCap className="w-8 h-8 text-red-500" />,
      bgColor: "bg-white",
    },
    {
      id: 3,
      title: "MBBS Abroad vs Local BSc",
      desc: "Tamil Nadu Students: Which path is better for your career?",
      icon: <Globe className="w-8 h-8 text-red-500" />,
      bgColor: "bg-white",
    },
    {
      id: 4,
      title: "Georgia Direct Admissions",
      desc: "Low NEET scores accepted. Secure your medical seat today.",
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      bgColor: "bg-[#ecf0f9]",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="text-red-600 font-bold tracking-widest text-sm uppercase">
                Trending Content
              </span>
              <div className="h-[2px] w-12 bg-red-600"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Trending for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                February–March 2026
              </span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md leading-relaxed text-sm md:text-base"
          >
            Stay ahead with the latest updates on international admissions, scholarship opportunities, and local college placements tailored for students in Tamil Nadu and Pondicherry.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            {/* Blue Decorative Box 
                FIX: Removed negative z-index. Used z-0 here and z-10 on the image below to ensure correct stacking.
            */}
            <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-[#005f99] z-0"></div>
            
            {/* Main Image Container
                FIX: Added z-10 to force this container to sit ON TOP of the blue box.
            */}
            <div className="relative z-10 h-full min-h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src={Banner3}
                alt="Student looking at future" 
                className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Bottom Right Shade & Content */}
              <div className="absolute bottom-0 right-0  bg-gradient-to-tl from-black/90 via-black/60 to-transparent p-6 pt-12 text-right rounded-tl-[3rem]">
                <p className="text-white/90 text-sm uppercase tracking-wider mb-1 font-medium">
                  Local Focus
                </p>
                <h3 className="text-white font-bold text-xl leading-snug">
                  Local Colleges with High Placement in Pondicherry (2026)
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Info Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2"
          >
            {content.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`p-8 flex flex-col justify-start ${item.bgColor} hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
              >
                <div className="mb-6 p-3 w-fit transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="mt-auto flex items-center text-red-600 font-medium text-sm uppercase tracking-wide opacity-0 group-hover:opacity-90 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrendingSection;