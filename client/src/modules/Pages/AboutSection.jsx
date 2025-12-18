import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  CalendarCheck, 
  Stethoscope,   // For Doctor/Medical
  Cpu,           // For Engineering
  Palette,       // For Arts
  BookOpen,      // For Education
  Microscope,    // For Science/Research
  DraftingCompass // For Architecture/Engineering
} from "lucide-react";
import Banner2 from "@/assets/Banner/banner2.png"; // Ensure this path is correct

// --- 1. Reusable Counter Component ---
const Counter = ({ value, direction = "up", suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [isInView, motionValue, direction, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return <span ref={ref} />;
};

const AboutSection = () => {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- Data for Logos (Updated for Doctor, Engineering, Arts, Education) ---
  const logos = [
    { icon: <Stethoscope className="w-8 h-8 text-white" />, text: "Medical" },
    { icon: <Cpu className="w-8 h-8 text-white" />, text: "Engineering" },
    { icon: <Palette className="w-8 h-8 text-white" />, text: "Creative Arts" },
    { icon: <BookOpen className="w-8 h-8 text-white" />, text: "Education" },
    { icon: <Microscope className="w-8 h-8 text-white" />, text: "Science" },
    { icon: <DraftingCompass className="w-8 h-8 text-white" />, text: "Architecture" },
  ];

  // Duplicate the logos array to create a seamless loop effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative w-full bg-white pt-20 pb-0 overflow-hidden" id="about">
      {/* --- Part 1: Main Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Top Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-red-600"></span>
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm">
                About EduConsultants
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-red-600">EduConsultants</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6 leading-relaxed">
              EduConsultants is a student-focused career & admissions support
              system helping students choose the right program with full
              clarity.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
              From <span className="font-semibold text-gray-900">counselling → application → admission → visa</span>, 
              we guide you end-to-end to ensure your journey to global education is seamless.
            </motion.p>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {/* Stat Card 1 - Red */}
            <motion.div 
              variants={itemVariants}
              className="flex items-start p-8 bg-gray-50 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mr-6">
                <GraduationCap className="w-10 h-10 text-red-600" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-1">
                  <Counter value={98} suffix="%" />
                </h3>
                <p className="font-semibold text-gray-800 mb-2">Admission Success Rate</p>
              </div>
            </motion.div>

            {/* Stat Card 2 - Blue */}
            <motion.div 
              variants={itemVariants}
              className="flex items-start p-8 bg-blue-50 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow"
            >
               <div className="mr-6">
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-1">
                  <Counter value={1.2} suffix="k" decimals={1} />
                </h3>
                <p className="font-semibold text-gray-800 mb-2">Students Guided</p>
              </div>
            </motion.div>

            {/* Stat Card 3 - Navy */}
            <motion.div 
              variants={itemVariants}
              className="flex items-start p-8 bg-slate-100 border-l-4 border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
               <div className="mr-6">
                <CalendarCheck className="w-10 h-10 text-slate-800" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-1">
                  <Counter value={13} suffix=" Years" />
                </h3>
                <p className="font-semibold text-gray-800 mb-2">Education Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* --- Part 2: Banner Image --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-full relative overflow-hidden" 
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
        <img 
          src={Banner2} 
          alt="University Campus Building" 
          className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-1000"
        />
      </motion.div>

      {/* --- Part 3: Trusted By Section (Dark Blue Bottom) --- */}
      <div
        className="bg-[#0B1C3E] py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Text Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-gray-700/50 pb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-lg leading-tight">
              Trusted by <Counter value={100} suffix="+" /> <br className="hidden md:block"/>
              Top Institutions
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              We partner with prestigious universities in Medical, Engineering, and Arts fields to ensure you get the best guidance.
            </p>
          </div>

          {/* Logos Row - Moving Slide Animation */}
          {/* Mask container to fade edges */}
          <div className="flex relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div 
              className="flex gap-16 items-center flex-nowrap min-w-max"
              animate={{ x: "-50%" }}
              transition={{
                duration: 20, 
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 group cursor-pointer hover:opacity-100 transition-opacity opacity-70"
                >
                  {React.cloneElement(logo.icon, { className: "w-10 h-10 text-white" })}
                  <span className="text-white font-bold text-xl tracking-tight uppercase">
                    {logo.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default AboutSection;