import { ArrowRightIcon, CheckCircle2, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  const features = ['100% Free Registration', '24/7 WhatsApp Admission Support', 'Live Student Webinars Every Month'];

  const waMessage = "Hello 👋  I’m interested in Study Abroad in France and MBBS in Georgia. Please guide me.";
  const waLink = `https://wa.me/918015359971?text=${encodeURIComponent(waMessage)}`;

  return (
    // Added py-20 to ensure content doesn't touch edges on short screens
    <section className='relative min-h-screen flex items-center bg-white px-6 py-20 lg:px-24 lg:py-0 overflow-hidden'>

      {/* BACKGROUND */}
      <div className="absolute inset-0 hero-gradient z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

      {/* MAIN GRID */}
      <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>

        {/* LEFT CONTENT */}
        <div className='lg:col-span-7 space-y-8 lg:space-y-10'>
          
          <div className='space-y-4'>
            {/* Tagline */}
            <div className='flex items-center gap-3'>
              <span className="h-[1px] w-8 bg-edu-red"></span>
              <span className='text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-edu-red'>
                OFFICIAL INTERNATIONAL ADMISSION GUIDANCE
              </span>
            </div>

            {/* Heading: Scaled down for mobile */}
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-edu-navy leading-[1.1] tracking-[-0.04em] font-heading'>
              Study Abroad in France <br className="hidden md:block" />
              & MBBS in Georgia <br />
              <span className='relative inline-block text-edu-red/90'>
                With Expert Guidance
                <span className='absolute bottom-2 left-0 w-full h-2 md:h-3 bg-edu-red/10 -z-10'></span>
              </span>
            </h1>

            <p className='max-w-xl text-base md:text-lg lg:text-xl text-slate-500 font-light leading-relaxed'>
              We Provide One-On-One Counselling, Fast Processes, and End-To-End Admission
              Support for Study Abroad in France and MBBS in Georgia.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform'
              target="_blank"
              rel="noopener noreferrer"
              // w-full on mobile for easier tapping
              className='inline-flex justify-center items-center gap-3 bg-edu-navy text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-edu-red hover:-translate-y-1 shadow-lg shadow-edu-navy/20 w-full sm:w-auto'
            >
              GET FREE COUNSELLING
              <ArrowRightIcon className='size-4' />
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex justify-center items-center gap-3 bg-white border border-slate-200 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm text-edu-navy hover:border-edu-navy transition-colors w-full sm:w-auto'
            >
              <MessageSquare className='size-4 text-green-500' />
              CONSULT ON WHATSAPP
            </a>
          </div>

          {/* FEATURE LIST */}
          <div className='flex flex-wrap gap-4 md:gap-8 pt-2 md:pt-6'>
            {features.map((feature, i) => (
              <div key={i} className='flex items-center gap-2'>
                <CheckCircle2 className='size-5 text-edu-red flex-shrink-0' />
                <span className='text-xs font-semibold text-slate-700 uppercase tracking-wider'>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className='lg:col-span-5 relative mt-8 lg:mt-0'>
          <div className='relative group max-w-sm mx-auto lg:max-w-none'>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-edu-navy to-edu-red opacity-5 rounded-[3rem] blur-2xl group-hover:opacity-10 transition-opacity" />

            {/* Main Image Card */}
            <div className='relative rounded-[2rem] md:rounded-[2.5rem] border-[1px] border-slate-200 p-3 md:p-4 bg-white shadow-2xl'>
              <div className='overflow-hidden rounded-[1.5rem] md:rounded-[1.8rem] aspect-[4/5]'>
                <img
                  src="https://images.unsplash.com/photo-1546237769-db6351c228d0?q=80&w=880&auto=format&fit=crop"
                  className='w-full h-full object-cover transition-all duration-700 hover:scale-105'
                  alt="Professional Consultancy"
                />
              </div>

              {/* Floating Badge - Responsive Positioning */}
              {/* Mobile: Centered at bottom. Desktop: Hanging off the left */}
              <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-10 md:bottom-8 bg-edu-navy p-5 md:p-6 rounded-3xl shadow-2xl text-white w-[90%] md:w-64 border-t border-white/10'>
                <p className='text-[10px] font-bold opacity-60 uppercase tracking-tighter'>Certified Excellence</p>
                <div className='flex items-end gap-2 mt-1'>
                  <span className='text-3xl md:text-4xl font-bold leading-none'>98%</span>
                  <span className='text-[10px] font-medium leading-none mb-1'> Admission Success Rate</span>
                </div>
                <div className='mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden'>
                  <div className='h-full w-[98%] bg-edu-red'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}