import {
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  ArrowRightIcon,
  GlobeIcon,
  CheckCircle2
} from 'lucide-react';

export default function AboutContactSection() {
  const GOOGLE_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";
  const WHATSAPP_LINK = "https://wa.me/918015359971";

  return (
    <section
      id="contact"
      // Reduced top padding for mobile (pt-16 vs pt-32)
      className='scroll-mt-28 relative pt-16 pb-16 md:pt-32 md:pb-24 bg-[#001F3F] font-["Plus_Jakarta_Sans"] overflow-hidden text-white'
    >
      {/* Background Decorations - Scaled down for mobile */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#CE2029]/10 md:bg-[#CE2029]/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#00E0FF]/10 md:bg-[#00E0FF]/5 rounded-full blur-[80px] md:blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        {/* Reduced gap for mobile (gap-12 vs gap-20) */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start'>

          {/* LEFT COLUMN */}
          <div className='lg:col-span-7 flex flex-col space-y-8 md:space-y-12'>
            <div>
              <div className='flex items-center gap-3 mb-4 md:mb-6'>
                <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#CE2029]"></span>
                <span className='text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#CE2029]'>
                  Established 2025
                </span>
              </div>

              {/* Scaled heading for mobile */}
              <h2 className='text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 md:mb-8'>
                Empowering Students to <br />
                <span className='text-[#00E0FF]'>Reach Further.</span>
              </h2>

              <p className='text-white/60 text-lg md:text-xl leading-relaxed font-medium max-w-2xl'>
                At EduConsultants, we believe every student deserves clear, honest, and professional guidance. We specialize in end-to-end support for{" "}
                <span className="text-white font-bold underline decoration-[#CE2029] underline-offset-4">
                  MBBS Abroad
                </span>
                , leading European universities, and premium local admissions.
              </p>
            </div>

            {/* VALUE PILLARS */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
              <div className='group p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all hover:bg-white/10'>
                <CheckCircle2 className='size-7 md:size-8 text-[#CE2029] mb-4' />
                <h4 className='font-black text-lg md:text-xl tracking-tight mb-2'>
                  Student-First
                </h4>
                <p className='text-white/40 text-sm font-medium'>
                  Every plan is thoughtfully tailored to your academic goals and budget.
                </p>
              </div>

              <div className='group p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all hover:bg-white/10'>
                <GlobeIcon className='size-7 md:size-8 text-[#00E0FF] mb-4' />
                <h4 className='font-black text-lg md:text-xl tracking-tight mb-2'>
                  Direct Access
                </h4>
                <p className='text-white/40 text-sm font-medium'>
                  No middlemen. Direct university communication and transparent fee structures.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='lg:col-span-5 lg:mt-16'>
            {/* Reduced padding inside card for mobile (p-8 vs p-12) */}
            <div className='bg-white rounded-[2.5rem] p-8 md:p-12 text-[#001F3F] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden'>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF]/10 rounded-full blur-3xl" />

              <h3 className='text-2xl md:text-3xl font-black tracking-tight mb-8 md:mb-10'>
                Get in Touch
              </h3>

              <div className='space-y-6 md:space-y-8 relative z-10'>

                {/* WHATSAPP */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className='flex items-center gap-4 md:gap-6 group'
                >
                  <div className='bg-[#001F3F] p-3 md:p-4 rounded-2xl text-white transition-transform group-hover:scale-110 group-hover:bg-[#CE2029] shrink-0'>
                    <MessageCircleIcon className='size-5 md:size-6' />
                  </div>
                  <div className='overflow-hidden'>
                    <p className='text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 truncate'>
                      Immediate Help
                    </p>
                    <p className='text-lg md:text-xl font-bold tracking-tight truncate'>
                      Chat on WhatsApp
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:admin@abmgroups.org"
                  className='flex items-center gap-4 md:gap-6 group'
                >
                  <div className='bg-slate-100 p-3 md:p-4 rounded-2xl text-[#001F3F] transition-transform group-hover:scale-110 shrink-0'>
                    <MailIcon className='size-5 md:size-6' />
                  </div>
                  <div className='overflow-hidden'>
                    <p className='text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 truncate'>
                      Email Support
                    </p>
                    <p className='text-lg md:text-xl font-bold tracking-tight group-hover:text-[#CE2029] transition-colors truncate'>
                      admin@abmgroups.org
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+918015359971"
                  className='flex items-center gap-4 md:gap-6 group'
                >
                  <div className='bg-slate-100 p-3 md:p-4 rounded-2xl text-[#001F3F] transition-transform group-hover:scale-110 shrink-0'>
                    <PhoneIcon className='size-5 md:size-6' />
                  </div>
                  <div>
                    <p className='text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1'>
                      Direct Line
                    </p>
                    <p className='text-lg md:text-xl font-bold tracking-tight group-hover:text-[#CE2029] transition-colors'>
                      +91 80153 59971
                    </p>
                  </div>
                </a>
              </div>

              {/* CTA */}
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className='mt-8 md:mt-12 flex items-center justify-between bg-[#CE2029] text-white p-5 md:p-6 rounded-2xl font-black text-xs md:text-sm tracking-widest transition-all hover:bg-[#001F3F] group active:scale-95'
              >
                START APPLICATION
                <ArrowRightIcon className='size-5 transition-transform group-hover:translate-x-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}