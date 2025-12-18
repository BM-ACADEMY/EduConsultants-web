import React from "react";
import { motion } from "framer-motion";
import { FileText, MessageCircle, Rocket, ArrowRight } from "lucide-react";

// Google Form Link from previous request
const REGISTRATION_LINK = "https://docs.google.com/forms/d/1_IfXhH2B5eA0NyE4MNl1hbsme-hyZS7NnGkwiWNr_Vc/viewform?edit_requested=true";

const steps = [
  {
    id: 1,
    title: "Register",
    subtitle: "Universal Lead Form",
    description: "Fill our 2-minute form. Your details are securely sent to our Leads_Master system instantly.",
    icon: FileText,
    color: "blue",
    link: REGISTRATION_LINK, // Linked to form
  },
  {
    id: 2,
    title: "We Contact You",
    subtitle: "WhatsApp Connect",
    description: "Within 24–48 hours, you receive a personalized counselling call and WhatsApp introduction.",
    icon: MessageCircle,
    color: "red",
    link: "#contact", // Placeholder: Scrolling to contact section or WhatsApp link
  },
  {
    id: 3,
    title: "Start Application",
    subtitle: "Track & Launch",
    description: "We generate your unique Application ID. You get real-time status updates via WhatsApp.",
    icon: Rocket,
    color: "blue",
    link: REGISTRATION_LINK, // Usually leads back to portal or form
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative" id="ourprocess">
      {/* ==================== EDUCATION VECTOR BACKGROUND ==================== */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
        <svg className="w-full h-full text-slate-900" width="100%" height="100%">
          <pattern
            id="education-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Graduation Cap */}
            <path
              d="M10 30 L50 10 L90 30 L50 50 L10 30 Z M90 30 V50 M50 50 V70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="scale(0.5) translate(20, 20)"
            />
            {/* Open Book */}
            <path
              d="M120 30 Q140 30 150 50 V90 Q140 70 120 70 V30 Z M120 70 Q100 70 90 90 V50 Q100 30 120 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="scale(0.5) translate(150, 50)"
            />
            {/* Pencil */}
            <path
              d="M10 150 L30 130 L70 170 L50 190 Z M10 150 L5 165 L20 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="scale(0.5) translate(20, 150)"
            />
             {/* Diploma Scroll */}
             <path
              d="M150 150 Q160 140 170 150 T190 150 V190 Q180 200 170 190 T150 190 Z M150 150 Q140 160 150 170"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="scale(0.5) translate(250, 100)"
            />
            {/* Atom/Science */}
            <ellipse cx="250" cy="50" rx="20" ry="5" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 250 50)"/>
            <ellipse cx="250" cy="50" rx="20" ry="5" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-45 250 50)"/>
            <circle cx="250" cy="50" r="3" fill="currentColor"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#education-pattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm border-b-2 border-red-600 pb-1">
              OUR PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            How Our Process Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A Simple 3-Step System designed for speed.
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }) => {
  const isRed = step.color === "red";

  return (
    <motion.a
      href={step.link}
      target={step.link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative h-full group block cursor-pointer"
    >
      {/* CARD STYLE */}
      <div
        className={`
        relative h-full overflow-hidden rounded-2xl p-8 
        shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
        ${
          isRed
            ? "bg-gradient-to-br from-red-600 to-red-900"
            : "bg-gradient-to-br from-blue-600 to-blue-900"
        }
      `}
      >
        {/* Abstract Background Icon */}
        <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out">
          <step.icon size={200} className="text-white" />
        </div>

        {/* Step Number Badge */}
        <div className="mb-6">
          <span
            className={`
                inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                ${
                  isRed
                    ? "bg-red-800 text-red-100"
                    : "bg-blue-800 text-blue-100"
                }
            `}
          >
            Step 0{step.id}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            {step.title}
          </h3>

          <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-6">
            {step.subtitle}
          </p>

          <p className="text-white/90 text-sm leading-relaxed mb-8 font-medium">
            {step.description}
          </p>

          {/* Action Arrow */}
          <div className="flex items-center text-white font-semibold group/arrow">
            <span className="mr-2 border-b border-transparent group-hover/arrow:border-white transition-colors">
              {step.id === 1 ? "Fill Form" : "Learn more"}
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
            >
              <ArrowRight size={16} className="text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProcessSection;