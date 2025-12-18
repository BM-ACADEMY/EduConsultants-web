import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ChooseUsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden" id='whychoose'>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left Side: Content & Features */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
              <span className="h-px w-12 bg-red-600"></span>
              <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Why Students Choose <br/>
              <span className="text-blue-900">EduConsultants</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8 leading-relaxed">
              We provide 100% personalized guidance with a focus on "One Consultant = One Student". 
              Experience transparent processing with no hidden charges.
            </motion.p>

            {/* Feature List */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Low Budget Options & Scholarships",
                "Transparent Fees – No Hidden Charges",
                "Visa Support + Documents Checklist",
                "Fast Response on WhatsApp"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
  href="https://docs.google.com/forms/d/1_IfXhH2B5eA0NyE4MNl1hbsme-hyZS7NnGkwiWNr_Vc/viewform"
  target="_blank"
  rel="noopener noreferrer"
  variants={itemVariants}
  whileTap={{ scale: 0.95 }}
  className="bg-[#D32F2F] text-white font-bold py-4 px-8 shadow-lg hover:bg-[#a51515] transition-colors w-fit inline-block"
>
  LEARN MORE
</motion.a>

          </motion.div>

          {/* Right Side: Staggered Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 relative mt-8 lg:mt-0">
            
            {/* Card 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#0B2545] p-8 text-white  shadow-xl flex flex-col gap-4 relative ml-0 lg:ml-12"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">MBBS Abroad</h3>
                <ArrowRight className="w-6 h-6 text-white/80" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Secure your medical seat in top universities in Kyrgyzstan and Georgia. 
                Affordable fees and English medium instruction.
              </p>
            </motion.div>

            {/* Card 2 (Blue accent) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{...cardVariants, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }}}
              className="bg-[#0277BD] p-8 text-white  shadow-xl flex flex-col gap-4 relative mr-0 lg:mr-12"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">Study in France</h3>
                <ArrowRight className="w-6 h-6 text-white/80" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Explore UG & PG Programmes in France. High quality education with 
                excellent post-study work opportunities.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{...cardVariants, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }}}
              className="bg-[#0B2545] p-8 text-white  shadow-xl flex flex-col gap-4 relative ml-0 lg:ml-12"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">Local College Admissions</h3>
                <ArrowRight className="w-6 h-6 text-white/80" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Direct admissions guidance for top colleges in Pondicherry and Tamil Nadu. 
                Engineering, Arts, and Science streams.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;