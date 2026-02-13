import {
  InstagramIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  LinkedinIcon
} from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className='relative bg-white pt-16 md:pt-24 font-["Plus_Jakarta_Sans"] border-t border-slate-100'>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 md:pb-20">

          {/* BRAND */}
          <div className="space-y-6">
            <button onClick={() => scrollTo("top")} className="block">
              <img src="/assets/edu.png" alt="EDU Consultants" className="h-10 md:h-12" />
            </button>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              We guide students toward their dream education through expert counseling, transparent guidance, and personalized university selection.
            </p>
            
            {/* SOCIAL MEDIA */}
            <div className="pt-4">
              <h4 className="mb-4 text-xs font-black uppercase tracking-widest text-[#CE2029]">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/edu_consultants/?igsh=MTRnMzJzeHJhenB4aA%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-50 rounded-full text-slate-600 hover:bg-[#CE2029] hover:text-white transition-all"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/edu-consultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-50 rounded-full text-slate-600 hover:bg-[#CE2029] hover:text-white transition-all"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/19Lzkx7dNq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-50 rounded-full text-slate-600 hover:bg-[#CE2029] hover:text-white transition-all"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@educonsultants6746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-50 rounded-full text-slate-600 hover:bg-[#CE2029] hover:text-white transition-all"
                >
                  <YoutubeIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-[#CE2029]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[#001F3F] font-bold text-sm">
              <li>
                <button onClick={() => scrollTo("top")} className="hover:text-[#CE2029] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("programs")} className="hover:text-[#CE2029] transition-colors">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("webinars")} className="hover:text-[#CE2029] transition-colors">
                  Webinars
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="hover:text-[#CE2029] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-[#CE2029]">
              Contact Us
            </h4>
            <div className="space-y-5 text-slate-500 text-sm font-medium leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPinIcon className="size-5 text-[#CE2029] shrink-0 mt-0.5" />
                <p>
                  252, 2nd Floor, MG Road<br />
                  Kottakuppam, Vanur<br />
                  Tamil Nadu 605104
                </p>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="size-5 text-[#00E0FF] shrink-0" />
                <a href="tel:+918015359971" className="hover:text-[#CE2029] transition-colors">
                  +91 80153 59971
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MailIcon className="size-5 text-[#001F3F] shrink-0" />
                <a href="mailto:admin@abmgroups.org" className="hover:text-[#CE2029] transition-colors break-all">
                  admin@abmgroups.org
                </a>
              </div>
            </div>
          </div>

          {/* MAP SECTION - ALWAYS COLOR */}
          <div className="w-full h-[200px] md:h-auto rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.045663165239!2d79.8277!3d11.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU4JzE3LjgiTiA3OcKwNDknMzkuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Edu Consultants Location"
              className="w-full h-full"
            />
          </div>

        </div>

        {/* BOTTOM BAR - UPDATED TEXT */}
        <div className="border-t border-slate-100 py-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
          © 2026{" "}
          <a
            href="https://bmtechx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001F3F] hover:text-[#CE2029] transition-colors"
          >
            BMTechx.in
          </a>
          . All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}