import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { MapPin, Mail, Phone, Menu, X } from "lucide-react";
import Logo from "@/assets/logo/edu.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const isClickScrolling = useRef(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isClickScrolling.current) return;

    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const handleScroll = (e, href) => {
    e.preventDefault();
    window.history.pushState(null, "", href);
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    isClickScrolling.current = true;

    const isGoingToTop = targetId === "home";
    setIsScrolled(!isGoingToTop);

    setTimeout(() => {
      const elem = document.getElementById(targetId);

      if (elem) {
        const headerOffset = isGoingToTop ? 120 : 90;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else if (href === "#" || isGoingToTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }, 50);
  };

  const navLinks = [
    { name: "HOME", href: "#home", active: true },
    { name: "ABOUT", href: "#about" },
    { name: "WHY CHOOSE", href: "#whychoose" },
    { name: "WEBINARS", href: "#webinars" },
    { name: "OUR PROCESS", href: "#ourprocess" },
    { name: "TESTIMONIAL", href: "#testimonial" },
    { name: "FAQ", href: "#faq" },
  ];

  // Define contact info here to reuse in mobile and desktop
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Puducherry",
      href: "https://maps.app.goo.gl/deu3f4ntDPYwjkJM6", // Map Link
    },
    {
      icon: Mail,
      label: "Email",
      value: "admin@abmgroups.org",
      href: "mailto:admin@abmgroups.org", // Email Action
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "8015359971",
      href: "tel:8015359971", // Call Action
    },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 bg-white font-sans"
        initial={{ y: 0 }}
        animate={{
          boxShadow: isScrolled ? "0px 4px 20px rgba(0,0,0,0.05)" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="hidden lg:block bg-white overflow-hidden border-b border-gray-100"
          initial={{ height: "auto", opacity: 1 }}
          animate={{
            height: isScrolled ? 0 : "auto",
            opacity: isScrolled ? 0 : 1,
            marginBottom: isScrolled ? 0 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="flex items-center gap-3"
            >
              <img
                src={Logo}
                alt="Universite Logo"
                className="h-15 w-auto object-contain"
              />
            </a>

            <div className="flex items-center gap-8">
              {contactInfo.map((info, idx) => (
                <ContactItem key={idx} {...info} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.nav
          className="bg-white"
          animate={{
            paddingBlock: isScrolled ? "10px" : "16px",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="lg:hidden flex flex-col gap-4">
              <div className="flex items-center gap-2 pt-2">
                <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                  <img
                    src={Logo}
                    alt="Universite Logo"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 pt-3 pb-2">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="bg-[#C61A1A] hover:bg-[#a51515] text-white h-10 w-10 flex items-center justify-center transition-colors"
                >
                  <Menu size={20} />
                </button>
                <a
                  href="https://docs.google.com/forms/d/1_IfXhH2B5eA0NyE4MNl1hbsme-hyZS7NnGkwiWNr_Vc/viewform?edit_requested=true" target="_blank"
                  className="bg-[#C61A1A] hover:bg-[#a51515] text-white px-5 h-10 font-bold text-xs uppercase tracking-wide transition-colors flex items-center"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-between items-center">
              <div className="flex items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: isScrolled ? 1 : 0,
                    width: isScrolled ? "auto" : 0,
                    paddingRight: isScrolled ? 20 : 0,
                  }}
                  className="overflow-hidden flex items-center gap-2"
                >
                  <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                    <img src={Logo} alt="Logo" className="h-14 w-auto" />
                  </a>
                </motion.div>

                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`relative group flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      link.active
                        ? "text-[#C61A1A]"
                        : "text-gray-600 hover:text-[#C61A1A]"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#C61A1A] transition-all duration-300 ${
                        link.active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                ))}
              </div>

              <a
                 href="https://docs.google.com/forms/d/1_IfXhH2B5eA0NyE4MNl1hbsme-hyZS7NnGkwiWNr_Vc/viewform?edit_requested=true" target="_blank"
                className="bg-[#C61A1A] hover:bg-[#a51515] text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.nav>
      </motion.header>

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
                  className="p-2 hover:bg-white bg-gray-200 rounded-full text-[#C61A1A] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-2 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                      link.active
                        ? "bg-red-50 text-[#C61A1A]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="mt-8 border-t pt-6 flex flex-col gap-4">
                  {contactInfo.map((info, idx) => (
                    <ContactItem key={idx} {...info} mobile={true} />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-[140px] lg:h-[120px]" />
    </>
  );
};

// Updated ContactItem to handle links (href)
const ContactItem = ({ icon: Icon, label, value, mobile, href }) => {
  const content = (
    <div
      className={`flex items-center gap-3 group ${
        mobile ? "text-gray-600" : ""
      }`}
    >
      <div
        className={`p-2 text-white transition-colors duration-300 ${
          mobile
            ? "bg-gray-100 text-[#0077C0]"
            : "bg-[#0077C0] group-hover:bg-[#005fa3]"
        }`}
      >
        <Icon
          size={mobile ? 18 : 20}
          className={mobile ? "text-[#0077C0]" : "text-white"}
        />
      </div>
      <div className="flex flex-col">
        {!mobile && (
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">
            {label}
          </span>
        )}
        <span
          className={`font-medium text-sm ${
            mobile
              ? "text-gray-700"
              : "text-gray-800 group-hover:text-[#C61A1A] transition-colors"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Header;