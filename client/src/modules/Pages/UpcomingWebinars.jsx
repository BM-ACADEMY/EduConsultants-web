import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, GraduationCap, MapPin, ArrowRight } from 'lucide-react';

const UpcomingWebinars = () => {
  // Common Google Form URL
  const REGISTRATION_LINK = "https://docs.google.com/forms/d/1_IfXhH2B5eA0NyE4MNl1hbsme-hyZS7NnGkwiWNr_Vc/viewform?edit_requested=true";

  const webinars = [
    {
      id: 1,
      category: "Medical",
      title: "MBBS Abroad – Kyrgyzstan & Georgia",
      date: "Dec 21st, 2025",
      desc: "Program Overview + Budget + Documents + Seat Availability",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      icon: <Mic className="w-5 h-5" />,
      link: REGISTRATION_LINK
    },
    {
      id: 2,
      category: "International",
      title: "Study in France – UG/PG Info Session",
      date: "Updated Monthly",
      desc: "Campus France Process + Fees + Scholarships",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
      icon: <GraduationCap className="w-5 h-5" />,
      link: REGISTRATION_LINK
    },
    {
      id: 3,
      category: "Local Guidance",
      title: "Local College Admission Guidance (Pondy/TN)",
      date: "Every Week",
      desc: "Register through the Universal Google Form. Options match your Q13.",
      image: "https://www.iconsofindianbusiness.com/private/files/Pondy_dor.jpg",
      icon: <MapPin className="w-5 h-5" />,
      link: REGISTRATION_LINK
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-slate-50 font-sans" id='webinars'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm border-b-2 border-red-600 pb-1">
              Webinars
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Upcoming Webinars (2026)
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Join our expert-led sessions to guide your educational journey, from local admissions to international opportunities.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {webinars.map((item) => (
            /* UPDATED: 
               1. Changed from motion.div to motion.a
               2. Added href, target, and rel attributes
               3. Added 'block' to className to ensure the link covers the card area
            */
            <motion.a 
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative h-[450px] block rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Content Positioned at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Category Tag */}
                <div className="flex items-center space-x-2 mb-3 opacity-90">
                  <span className="bg-red-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>

                {/* Date Row */}
                <div className="flex items-center space-x-2 text-blue-100 mb-3 font-medium">
                  <Calendar className="w-5 h-5 text-red-400" />
                  <span>{item.date}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed border-l-2 border-red-500 pl-3">
                  {item.desc}
                </p>

                {/* "Learn More" Link - appears/slides up on hover */}
                <div className="flex items-center text-sm font-bold text-red-400 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;