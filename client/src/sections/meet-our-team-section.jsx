import { CalendarIcon, VideoIcon, ArrowRightIcon } from 'lucide-react';

export default function UpcomingWebinarsSection() {
  const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";

  const webinars = [
    {
      topic: 'MBBS in Georgia: Eligibility, Fees & Admission Process',
      date: 'Free Consultant',
      category: 'MBBS ABROAD',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    },
    {
      topic: 'Study in France: Universities, Costs & Admission Process',
      date: 'Free Consultant',
      category: 'STUDY IN FRANCE',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
    },
    {
      topic: 'Local College Admissions: Counselling, Cut-Offs & Seats',
      date: 'Free Consultant',
      category: 'LOCAL ADMISSIONS',
      image: 'https://images.unsplash.com/photo-1667273704848-32df02bd29f3?q=80&w=1170&auto=format&fit=crop',
    },
  ];

  return (
    <section id="webinars" className='relative py-16 md:py-24 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'>
      
      {/* Background Decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className='flex items-center gap-3 mb-4'>
              <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#CE2029]"></span>
              <span className='text-[10px] md:text-[11px] font-[900] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#CE2029]'>
                Live Learning
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-slate-900 tracking-tighter leading-none">
              Upcoming <span className="text-slate-400">Webinars</span>
            </h2>
          </div>
          
          <p className="max-w-xs text-sm font-bold text-slate-400 tracking-widest leading-relaxed">
            Join expert-led sessions on MBBS abroad, France education, and local admissions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {webinars.map((webinar, index) => (
            <div key={index} className='group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]'>

              {/* Image Container */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={webinar.image}
                  alt={webinar.topic}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 rounded-xl bg-white/90 px-3 py-2 md:px-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#001F3F] backdrop-blur-md shadow-sm">
                  {webinar.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col p-6 md:p-8 bg-white flex-1">
                <div className="mb-3 md:mb-4 flex items-center gap-2 text-xs font-black text-[#CE2029] uppercase tracking-wider">
                  <CalendarIcon className="size-4" />
                  <span>{webinar.date}</span>
                </div>

                <h3 className='text-xl md:text-2xl font-extrabold leading-[1.2] text-[#001F3F] mb-6'>
                  {webinar.topic}
                </h3>

                <div className="mt-auto">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                        <VideoIcon className="size-4 text-slate-300" />
                        <span>Live via Zoom/Meet</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CENTERED CTA */}
        <div className="flex justify-center">
            <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className='group flex items-center justify-center gap-4 rounded-full bg-[#001F3F] px-10 py-5 text-sm md:text-base font-black text-white transition-all hover:bg-[#CE2029] hover:shadow-[0_20px_40px_-10px_rgba(206,32,41,0.4)] active:scale-95'
            >
                REGISTER FOR FREE COUNSELLING
                <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-2" />
            </a>
        </div>

      </div>
    </section>
  );
}