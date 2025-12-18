import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Users,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Banner1 from "@/assets/Banner/banner1.jpg";
import Avatar1 from "@/assets/avatar/img1.png";
import Avatar2 from "@/assets/avatar/img2.png";
import Avatar3 from "@/assets/avatar/img3.png";
import Avatar4 from "@/assets/avatar/img4.png";

// --- AI Generated Indian Avatar Data URIs (Embedded directly to avoid external links) ---
const generatedIndianAvatars = [
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4
];

const Homepage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Pencil underline animation - UPDATED FOR LOOPING
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2, // Slightly longer duration for smoother loop
          ease: "easeInOut",
          repeatType: "reverse", // Draws back and forth endlessly
          repeatDelay: 0.5, // Brief pause before reversing
        },
        opacity: { duration: 0.5 }, // Fade in initially
      },
    },
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col font-sans bg-gray-50"
      id="home"
    >
      {/* --- HERO SECTION --- */}
      <div className="relative flex-grow min-h-[650px] lg:min-h-[850px] flex items-center pt-16 md:pt-28 pb-20 md:pb-32">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={Banner1}
            alt="Study Abroad France"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 lg:px-12 z-10 relative w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Top Tagline */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-gray-300 text-sm font-medium tracking-wide">
                One-on-One Counselling | Clear Guidance | Fast Process
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Study <span className="relative inline-block z-10">
                Abroad
                {/* --- ANIMATED PENCIL MARK (Now Looping) --- */}
                <svg
                  className="absolute w-[110%] h-4 -bottom-2 -left-1 text-red-600 -z-10"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    variants={pathVariants}
                    d="M1 15C40 5 150 5 198 12"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                </svg>
                {/* --------------------------- */}
              </span>{" "} | MBBS | France | Local College Admissions    
             
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed"
            >
              <span className="text-white font-semibold">
                Confused about MBBS | France | Local Admissions?
              </span>{" "} 
              <br/>
              We guide you from{" "}
              <span className="text-yellow-400 font-bold">A → Z</span>
            </motion.p>

            {/* Feature Checklist */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-y-2 gap-x-6 mb-8 text-gray-300 text-sm md:text-base"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Free Registration (2 mins)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>WhatsApp Support 24×7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Monthly Webinars</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
             <a
  href="https://docs.google.com/forms/d/1_IfXhH2B5eA0NyE4MNl1hbsme-hyZS7NnGkwiWNr_Vc/viewform"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#D32F2F] hover:bg-red-700 text-white px-8 py-4 font-bold transition-all transform shadow-lg flex items-center gap-2 group">
    REGISTER NOW
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</a>


              <a
                href="https://wa.me/918015359971?text=Hi%2C%20I%20am%20interested%20in%20MBBS%20in%20France%20and%20Local%20College%20Admissions.%20Please%20guide%20me%20about%20course%20selection%2C%20fees%2C%20documents%2C%20application%20and%20visa%20support."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-green-50 text-black px-8 py-4 font-bold transition-all transform shadow-lg flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  WHATSAPP US
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- INFO CARDS SECTION --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full items-end relative z-20 -mt-10 md:-mt-32">
        {/* Card 1: Smallest Height */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-[#0A2647] p-10 md:p-14 text-white flex flex-col justify-center min-h-[250px]"
        >
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-10 h-10 text-white" />
            <h3 className="text-2xl font-bold">One-on-One Counselling</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            Personalized mentorship to help you choose the right college and
            country based on your budget and career goals.
          </p>
        </motion.div>

        {/* Card 2: Medium Height */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-[#0F5699] p-10 md:p-14 text-white flex flex-col justify-center min-h-[250px] md:min-h-[300px]"
        >
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-10 h-10 text-white" />
            <h3 className="text-2xl font-bold">Clear Guidance</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            Complete transparency on Fees, Documents, and Eligibility. No hidden
            costs or confusing jargon.
          </p>
        </motion.div>

        {/* Card 3: Tallest Height + Person Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#C62828] p-10 md:p-14 text-white flex flex-col justify-center min-h-[250px] md:min-h-[350px] relative overflow-hidden"
        >
          <Trophy className="absolute -right-6 -bottom-6 w-40 h-40 text-white opacity-10" />

          <div className="flex flex-col gap-4 relative z-10">
            {/* --- Person Image Badge (UPDATED WITH AI INDIAN AVATARS) --- */}
            <div className="flex items-center -space-x-3 mb-1">
              {generatedIndianAvatars.map((imgSrc, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                >
                  <img
                    src={imgSrc}
                    alt={`Student ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-xs font-bold">
                100+
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Trophy className="w-10 h-10 text-white" />
              <h3 className="text-2xl font-bold">Fast Process</h3>
            </div>
          </div>

          <p className="text-gray-100 leading-relaxed text-sm mt-4 relative z-10">
            From Application to Visa approval, we streamline the workflow to get
            you to your campus as quickly as possible.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;