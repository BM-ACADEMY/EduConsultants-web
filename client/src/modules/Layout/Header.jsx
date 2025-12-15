import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Menu, 
  X, 
} from "lucide-react";
// Ensure you have your logo path correct
import Logo from "@/assets/logo/logo.png"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Use Framer Motion hook to detect scroll position smoothly
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  // Navigation Data
  const navLinks = [
    { name: "HOME", href: "#", active: true },
    { name: "ABOUT", href: "#" },
    { name: "ACADEMICS", href: "#" },
    { name: "FACULTIES", href: "#" },
    { name: "CAMPUS LIFE", href: "#" },
    { name: "BLOG", href: "#" },
    { name: "PAGES", href: "#" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 bg-white font-sans"
        initial={{ y: 0 }}
        animate={{ 
          boxShadow: isScrolled ? "0px 4px 20px rgba(0,0,0,0.05)" : "none" 
        }}
        transition={{ duration: 0.3 }}
      >
        {/* ================= TOP BAR (Desktop Only - Collapsible) ================= */}
        <motion.div 
          className="hidden lg:block bg-white overflow-hidden border-b border-gray-100"
          initial={{ height: "auto", opacity: 1 }}
          animate={{ 
            height: isScrolled ? 0 : "auto", 
            opacity: isScrolled ? 0 : 1 
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img 
                src={Logo} 
                alt="Universite Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>

            {/* Contact Info Section */}
            <div className="flex items-center gap-8">
              <ContactItem icon={MapPin} label="Address" value="2155 Palmer Ave, New York" />
              <ContactItem icon={Mail} label="Email" value="hello@univer-site.edu" />
              <ContactItem icon={Phone} label="Phone Number" value="(217) 555-0113" />
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN NAVBAR ================= */}
        <motion.nav
          className="bg-white"
          animate={{ 
            paddingBlock: isScrolled ? "10px" : "16px" 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            
            {/* ================= MOBILE/TABLET LAYOUT ================= */}
            <div className="lg:hidden flex flex-col gap-4">
              {/* This logo only appears when Top Bar is hidden (on mobile it's always "hidden" effectively by layout) 
                  or we can keep it static. For this design, let's keep the stacked look. */}
               <div className="flex items-center gap-2 pt-2">
                 <img src={Logo} alt="Universite Logo" className="h-10 w-auto object-contain" />
               </div>

               <div className="flex justify-between items-center border-t border-gray-100 pt-3 pb-2">
                 <button
                   onClick={() => setIsMobileMenuOpen(true)}
                   className="bg-[#C61A1A] hover:bg-[#a51515] text-white h-10 w-10 flex items-center justify-center transition-colors"
                 >
                   <Menu size={20} />
                 </button>
                 <button className="bg-[#C61A1A] hover:bg-[#a51515] text-white px-5 h-10 font-bold text-xs uppercase tracking-wide transition-colors flex items-center">
                   Contact Us
                 </button>
               </div>
            </div>

            {/* ================= DESKTOP LAYOUT ================= */}
            <div className="hidden lg:flex justify-between items-center">
              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                {/* We add a Mini Logo that fades in when scrolled, so branding is never lost */}
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ 
                    opacity: isScrolled ? 1 : 0,
                    width: isScrolled ? "auto" : 0,
                    paddingRight: isScrolled ? 20 : 0
                  }}
                  className="overflow-hidden flex items-center gap-2"
                >
                    <img src={Logo} alt="Logo" className="h-8 w-auto" />
                </motion.div>

                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`relative group flex items-center gap-1 text-sm font-bold transition-colors duration-200 ${
                      link.active ? "text-[#C61A1A]" : "text-gray-600 hover:text-[#C61A1A]"
                    }`}
                  >
                    {link.name}
                    {/* Hover Underline Animation */}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#C61A1A] transition-all duration-300 ${link.active ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button className="bg-[#C61A1A] hover:bg-[#a51515] text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors-sm shadow-md hover:shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* ================= MOBILE OFFCANVAS ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[70] lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
                <span className="text-xl font-bold text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-white bg-gray-200-full text-[#C61A1A] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-2 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`text-lg font-medium px-4 py-3-lg transition-colors ${
                      link.active 
                      ? "bg-red-50 text-[#C61A1A]" 
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="mt-8 border-t pt-6 flex flex-col gap-4">
                   <ContactItem icon={MapPin} label="Address" value="2155 Palmer Ave, NY" mobile />
                   <ContactItem icon={Phone} label="Phone" value="(217) 555-0113" mobile />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SPACER: 
        Since the header is fixed, we need to push the content down 
        so it doesn't hide behind the header initially. 
        Adjust height (h-[140px]) based on your actual initial header height.
      */}
      <div className="h-[140px] lg:h-[120px]" />
    </>
  );
};

// Helper Component for cleaner code
const ContactItem = ({ icon: Icon, label, value, mobile }) => (
  <div className={`flex items-center gap-3 ${mobile ? "text-gray-600" : ""}`}>
    <div className={`p-2 text-white ${mobile ? "bg-gray-100 text-[#0077C0]" : "bg-[#0077C0]"}`}>
      <Icon size={mobile ? 18 : 20} className={mobile ? "text-[#0077C0]" : "text-white"} />
    </div>
    <div className="flex flex-col">
      {!mobile && <span className="text-gray-500 text-sm">{label}</span>}
      <span className={`font-semibold text-sm ${mobile ? "text-gray-700" : "text-gray-800"}`}>{value}</span>
    </div>
  </div>
);

export default Header;