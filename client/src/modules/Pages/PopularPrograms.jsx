import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    category: "MEDICAL",
    title: "MBBS Abroad",
    highlight: "Kyrgyzstan • Georgia",
    description: "Fee Range: ₹12L – ₹25L total. Intakes: Feb / Sep.",
    image:
      "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=2070&auto=format&fit=crop",
    theme: "red",
  },
  {
    id: 2,
    category: "INTERNATIONAL",
    title: "Study in France (UG & PG)",
    // Added all specific courses listed in your text
    highlight:
      "Business • Law • Engineering • Arts & Science • Hospitality • Fashion",
    description: "Fee Range: Low to moderate, scholarship options available.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    theme: "white",
  },
  {
    id: 3,
    category: "DOMESTIC",
    title: "Local College Admissions",
    highlight: "Pondicherry / Tamil Nadu",
    // Detailed list of streams from your text
    description: "Arts • Science • Nursing • Engineering • Allied Health.",
    image: "https://www.iconsofindianbusiness.com/private/files/Pondy_dor.jpg",
    theme: "red",
  },
];

const PopularPrograms = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm border-b-2 border-red-600 pb-1">
             Admissions Open
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Popular Programs (2026)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-500"
          >
            Explore diverse opportunities for your future, from medical degrees
            abroad to premier local institutions.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ program, index }) => {
  const isRed = program.theme === "red";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative h-[500px] w-full overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      {/* Content Box */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <div
          className={`
            relative p-6 md:p-8 shadow-xl transition-all duration-300
            ${isRed ? "bg-[#C21B1B] text-white" : "bg-white text-gray-900"}
            translate-y-4 group-hover:translate-y-0
          `}
        >
          {/* Top Border for White Cards */}
          {!isRed && (
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          )}

          <div className="flex flex-col gap-3">
            <span
              className={`text-xs font-bold tracking-wider uppercase ${
                isRed ? "text-red-200" : "text-red-600"
              }`}
            >
              {program.category}
            </span>

            <h3 className="text-xl font-bold leading-tight">{program.title}</h3>

            <div
              className={`h-px w-12 my-1 ${
                isRed ? "bg-white/30" : "bg-gray-200"
              }`}
            />

            {/* Main Highlight */}
            <p
              className={`font-medium leading-snug ${
                isRed ? "text-white" : "text-gray-900"
              }`}
            >
              {program.highlight}
            </p>

            {/* Description/Secondary Info */}
            <p
              className={`text-sm leading-relaxed ${
                isRed ? "text-white/80" : "text-gray-500"
              }`}
            >
              {program.description}
            </p>

            {/* Hover Action */}
            <div className="pt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularPrograms;
