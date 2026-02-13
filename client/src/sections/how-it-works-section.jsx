import {
  UserCheckIcon,
  GlobeIcon,
  ShieldCheckIcon,
  ZapIcon,
  GraduationCapIcon,
  FileTextIcon
} from 'lucide-react';

export default function WhyChooseUsSection() {
  const data = [
    {
      title: 'Personalized Guidance',
      description: 'One-on-one counselling tailored to your academic goals, budget, and career plans.',
      icon: UserCheckIcon,
    },
    {
      title: 'International Study Options',
      description: 'Guided pathways for study abroad in France and MBBS admissions in Georgia.',
      icon: GlobeIcon,
    },
    {
      title: 'Local Admissions',
      description: 'Expert assistance for securing seats in top local colleges and universities.',
      icon: GraduationCapIcon,
    },
    {
      title: 'Transparent Process',
      description: 'No hidden costs, clear fee structures, and complete transparency at every stage.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Visa & Documentation',
      description: 'Hassle-free visa support and end-to-end documentation handling.',
      icon: FileTextIcon,
    },
    {
      title: 'Instant Support',
      description: 'Get your queries resolved quickly through our 24/7 WhatsApp support team.',
      icon: ZapIcon,
    },
  ];

  return (
    // Reduced vertical padding on mobile (py-16 vs py-24)
    <section className='relative py-16 md:py-24 bg-white overflow-hidden font-["Plus_Jakarta_Sans"]'>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">

        {/* Header Section */}
        {/* Reduced bottom margin on mobile (mb-12 vs mb-20) */}
        <div className="mb-12 md:mb-20 max-w-3xl">
          <div className='flex items-center gap-3 mb-4 md:mb-6'>
            <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#CE2029]"></span>
            <span className='text-[10px] md:text-[11px] font-[900] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#CE2029]'>
              THE EDU CONSULTANT ADVANTAGE
            </span>
          </div>

          {/* Heading: Scaled down for mobile */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-slate-900 tracking-tighter leading-[1.1] mb-6 md:mb-8">
            Why Students <br />
            <span className="text-slate-400">Trust Us</span>
          </h2>

          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed border-l-[3px] border-slate-100 pl-4 md:pl-6">
            We simplify international and local admissions through expert guidance, transparent processes, and dedicated support.
          </p>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2'>
          {data.map((item, index) => (
            <div
              key={index}
              // Card: Reduced padding on mobile (p-6 vs p-10)
              // Layout: Stacks vertically on mobile (flex-col), horizontal on desktop (md:flex-row)
              className='group relative flex flex-col md:flex-row items-start gap-5 md:gap-6 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50/50 p-6 md:p-8 lg:p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,224,255,0.15)] border border-transparent hover:border-[#00E0FF]/20'
            >
              {/* Icon Container: Slightly smaller on mobile (size-14 vs size-16) */}
              <div className='flex size-14 md:size-16 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white transition-all duration-500 group-hover:bg-[#00E0FF] group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)]'>
                <item.icon className='size-6 md:size-7 stroke-[2px]' />
              </div>

              <div className="space-y-2 md:space-y-3">
                <h3 className='text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight'>
                  {item.title}
                </h3>
                <p className='text-[15px] md:text-[16px] leading-relaxed text-slate-500 font-medium max-w-md'>
                  {item.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}