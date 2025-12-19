import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Twitter,
  ChevronRight,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

// Ensure you have your logo file in the correct path
import logo from "@/assets/logo/edu.png";

const Footer = () => {
  // Get the current year automatically
  const currentYear = new Date().getFullYear();

  // Define your links with '#' to target section IDs
  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "WHY CHOOSE", href: "#whychoose" },
    { name: "WEBINARS", href: "#webinars" },
    { name: "OUR PROCESS", href: "#ourprocess" },
    { name: "TESTIMONIAL", href: "#testimonial" },
    { name: "FAQ", href: "#faq" },
  ];

  // --- SMOOTH SCROLL HANDLER ---
  const handleScroll = (e, href) => {
    e.preventDefault();

    // 1. Update URL manually
    window.history.pushState(null, "", href);

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // 2. Offset to account for the fixed header height
      const headerOffset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Fallback: Scroll to top if element not found or is Home
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="bg-[#051d40] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          // UPDATED: Changed lg:grid-cols-3 to lg:grid-cols-4
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: Brand & Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                <img src={logo} alt="Universite Logo" className="h-20 w-auto" />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              We guide students toward their dream education with expert
              counseling and personalized university selection.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
            {[
              { 
                Icon: Instagram, 
                href: "https://www.instagram.com/edu_consultants?igsh=MTRnMzJzeHJhenB4aA==" 
              },
              { 
                Icon: Youtube, 
                href: "https://www.youtube.com/@educonsultants6746" 
              },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                whileHover={{ scale: 1.1, color: "#ef4444" }}
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-white text-white hover:text-red-600"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
          </motion.div>

          {/* Column 2: Nav Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 group"
                  whileHover={{ x: 5, color: "#fff" }}
                >
                  <ChevronRight
                    size={16}
                    className="text-red-600 group-hover:text-white transition-colors"
                  />
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-6 text-gray-300 text-sm">
              <div className="flex gap-3">
                <MapPin size={20} className="text-red-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">Address:</span>
                  <p className="leading-relaxed">
                    252, 2nd Floor, M G Road, Kottakuppam,
                    <br />
                    Vanur, Tamil Nadu 605104
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={20} className="text-red-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">Phone:</span>
                  <a
                    href="tel:8015359971"
                    className="hover:text-red-500 transition-colors"
                  >
                    +91 80153 59971
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={20} className="text-red-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">Email:</span>
                  <a
                    href="mailto:admin@abmgroups.org"
                    className="hover:text-red-500 transition-colors"
                  >
                    admin@abmgroups.org
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Google Map (NEW SECTION) */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Find Us</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                title="Google Map Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7806.390634278041!2d79.833135!3d11.960975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53636a1752dc05%3A0xaa5795ccc1815bf7!2sBM%20Academy%20-%20Digital%20Marketing%2C%20Full%20Stack%20Development%2C%20IT%20%26%20Skill%20Training%20Institute!5e0!3m2!1sen!2sin!4v1766062095369!5m2!1sen!2sin"
              ></iframe>
            </div>
          </motion.div>

        </motion.div>

        {/* Divider */}
        <motion.hr
          className="border-gray-700 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section: Copyright */}
        <motion.div
          className="text-center md:text-left text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>
            &copy; {currentYear}{" "}
            <a
              href="https://bmtechx.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              BMTechx.in
            </a>
            . All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;