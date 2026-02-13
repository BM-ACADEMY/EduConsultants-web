import { MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const GOOGLE_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";

  const links = [
    { name: 'Home', scrollId: 'top' },
    { name: 'Programs', scrollId: 'programs' },
    { name: 'Webinars', scrollId: 'webinars' },
    { name: 'About', scrollId: 'about' },
    { name: 'Contact Us', scrollId: 'contact' },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav className='sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-xl md:px-16 lg:px-24 font-heading'>
        {/* LOGO */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleScroll('top')}
            className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          >
            <img src='/assets/edu.png' alt='EDU Consultants' className='h-10 w-auto' />
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className='hidden flex-grow items-center justify-center space-x-8 text-[13px] font-bold tracking-tight text-slate-600 md:flex'>
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.scrollId)}
              className='relative transition-colors hover:text-edu-navy group'
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-edu-red transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden flex-shrink-0 items-center gap-4 md:flex">
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className='rounded-full bg-edu-navy px-8 py-3 text-[13px] font-bold text-white shadow-xl shadow-edu-navy/20 transition-all hover:bg-edu-red hover:shadow-edu-red/20 hover:-translate-y-0.5 active:scale-95'
          >
            Apply Now
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button 
          onClick={() => setIsOpen(true)} 
          className='p-2 text-edu-navy md:hidden active:scale-95'
        >
          <MenuIcon className='size-7' />
        </button>
      </nav>

      {/* --- MOBILE DRAWER START --- */}
      
      {/* 1. Backdrop (Dimmed Background) */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)} // Clicking outside closes menu
      />

      {/* 2. Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 z-[70] h-full w-[75%] max-w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          
          {/* Header: Logo & Close Button */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
            <img src='/assets/edu.png' alt='Logo' className='h-8 w-auto' />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="size-6 text-slate-500" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.scrollId)}
                className="text-left text-lg font-semibold text-slate-700 hover:text-edu-navy hover:pl-2 transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Footer Action */}
          <div className="mt-auto pt-8 border-t border-slate-100">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-edu-navy py-3 text-center font-bold text-white shadow-md active:scale-95 transition-transform"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      {/* --- MOBILE DRAWER END --- */}
    </>
  );
}