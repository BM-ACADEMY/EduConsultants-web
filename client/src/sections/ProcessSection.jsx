import { ClipboardEditIcon, MessageSquareIcon, FingerprintIcon, ArrowRightIcon } from 'lucide-react';

export default function ProcessSection() {
    const steps = [
        {
            title: 'Register Your Profile',
            description: 'Fill out our quick lead form with your study preferences (MBBS, France, or local options).',
            icon: ClipboardEditIcon,
        },
        {
            title: 'Expert Outreach',
            description: 'Our counselors will contact you via WhatsApp within 24–48 hours for a personalized discovery call.',
            icon: MessageSquareIcon,
        },
        {
            title: 'Tracking & Updates',
            description: 'Receive a unique Application ID to track your admission status in real time.',
            icon: FingerprintIcon,
        },
    ];

    return (
        // Reduced padding for mobile (py-16 vs py-32)
        <section className='relative py-16 md:py-32 bg-[#FDFDFD] font-["Plus_Jakarta_Sans"] overflow-hidden'>
            
            {/* Decorative Image Top Right - FIXED ALIGNMENT */}
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden z-0">
                {/* Mask/Fade Effect - Colors updated to #FDFDFD to match section bg */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FDFDFD]/20 to-[#FDFDFD] z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDFDFD] via-transparent to-[#FDFDFD] z-10" />
                <img 
                    src="/assets/edudoc.jpeg" 
                    alt="Education Consultant" 
                    // Added object-top to ensure the head isn't cut off
                    className="w-full h-full object-cover object-top opacity-60 mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-20">
                
                {/* Header Section */}
                {/* Reduced bottom margin (mb-12 vs mb-16) */}
                <div className="flex flex-col mb-12 md:mb-16 gap-4 md:gap-6">
                    <div className="max-w-2xl">
                        <div className='flex items-center gap-3 mb-4 md:mb-6'>
                            <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#CE2029]"></span>
                            <span className='text-[10px] md:text-[11px] font-[900] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#CE2029]'>
                                The Roadmap
                            </span>
                        </div>
                        
                        {/* Scaled heading for mobile */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-[#001F3F] tracking-tighter leading-none">
                            How Our <br />
                            <span className="text-slate-400">Process Works</span>
                        </h2>
                    </div>
                    
                    <p className="max-w-2xl text-base md:text-lg text-slate-500 font-medium leading-relaxed border-l-[3px] border-slate-100 pl-4 md:pl-6">
                        We’ve streamlined the journey from exploration to enrollment into three simple stages.
                    </p>
                </div>

                <div className='relative mt-12 md:mt-16 w-full max-w-6xl mx-auto'>
                    {/* Grid: Reduced gap for mobile (gap-10 vs gap-16) */}
                    <div className='grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-3'>
                        {steps.map((step, index) => (
                            <div key={index} className='relative flex flex-col items-center text-center group'>
                                
                                {/* Step Number */}
                                <div className='mb-4 md:mb-6 text-[10px] font-black text-[#CE2029] uppercase tracking-[0.4em]'>
                                    Stage 0{index + 1}
                                </div>

                                {/* Icon Circle */}
                                {/* Slightly smaller on mobile (size-20 vs size-24) to save space */}
                                <div className={`relative z-10 flex size-20 md:size-24 items-center justify-center rounded-[2rem] bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] text-[#001F3F] transition-all duration-500 group-hover:bg-[#001F3F] group-hover:text-white group-hover:-translate-y-2`}>
                                    <step.icon className='size-8 md:size-10 stroke-[1.5px]' />

                                    {/* Hover Badge */}
                                    <div className='absolute -right-2 -top-2 flex size-7 md:size-8 items-center justify-center rounded-xl bg-[#CE2029] text-[9px] md:text-[10px] font-black text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity'>
                                        GO
                                    </div>
                                </div>

                                <h3 className='mt-6 md:mt-10 text-xl md:text-2xl font-black text-[#001F3F] tracking-tight'>
                                    {step.title}
                                </h3>

                                <p className='mt-3 md:mt-4 text-[14px] md:text-[15px] leading-relaxed text-slate-500 font-medium px-2 md:px-6'>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Premium CTA Button */}
                <div className='mt-16 md:mt-24 flex flex-col items-center'>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform"
                        target="_blank"
                        rel="noreferrer"
                        className='group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-[#001F3F] px-8 py-4 md:px-12 md:py-5 text-sm font-black text-white transition-all hover:bg-[#CE2029] hover:shadow-[0_20px_40px_rgba(206,32,41,0.3)] active:scale-95'
                    >
                        <span className="tracking-widest italic">START STEP 1 NOW</span>
                        <ArrowRightIcon className='size-5 transition-transform group-hover:translate-x-2' />
                    </a>
                    
                    <div className='mt-6 flex items-center gap-2'>
                        <div className="h-1.5 w-1.5 rounded-full bg-[#00E0FF] animate-pulse" />
                        <p className='text-[10px] text-slate-400 font-black uppercase tracking-widest'>
                            100% Free Consultation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}