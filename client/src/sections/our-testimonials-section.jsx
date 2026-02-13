import { useState } from 'react';
import {
    WalletIcon,
    GlobeIcon,
    ClipboardCheckIcon,
    PlaneIcon,
    UserIcon,
    ArrowRightIcon,
    PlusIcon
} from 'lucide-react';

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            title: 'Global University Selection',
            description: 'Strategic placement in verified medical and engineering faculties across France, Georgia, Kyrgyzstan, and India. We match your academic profile with global standards.',
            icon: GlobeIcon,
            tag: 'Destinations',
            details: '150+ Partner Universities'
        },
        {
            title: 'Financial Planning & Cost Transparency',
            description: 'Customized budget planning from ₹10L to ₹30L+. Complete transparency on tuition fees, currency exchange, and living expenses — no hidden costs.',
            icon: WalletIcon,
            tag: 'Planning',
            details: 'No Hidden Charges'
        },
        {
            title: 'Apostille & Documentation Support',
            description: 'End-to-end handling of transcripts, NEET documentation, and international apostille requirements to ensure error-free applications.',
            icon: ClipboardCheckIcon,
            tag: 'Legal',
            details: '100% Document Success'
        },
        {
            title: 'Visa & Travel Assistance',
            description: 'Complete support for student visa interviews, approvals, and travel coordination — ensuring a smooth and stress-free arrival at your campus.',
            icon: PlaneIcon,
            tag: 'Schengen/Global',
            details: 'Priority Processing'
        },
        {
            title: 'Personal Career Counselling',
            description: 'One-on-one sessions with senior consultants to plan your medical or academic career, including post-study options and long-term goals.',
            icon: UserIcon,
            tag: 'Strategic',
            details: 'Expert Led'
        }
    ];

    return (
        <section
            id="about"
            // Reduced padding for mobile (py-16 vs py-32)
            className='relative py-16 md:py-32 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'
        >
            <div className="container mx-auto px-6 md:px-16 lg:px-24">

                {/* PRE-HEADER */}
                <div className='flex items-center gap-4 mb-4'>
                    <div className="h-[1px] w-8 md:w-12 bg-[#CE2029]"></div>
                    <span className='text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#CE2029]'>
                        Our Expertise
                    </span>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'>

                    {/* LEFT SIDE: Service List (Accordion on Mobile) */}
                    <div className='lg:col-span-7 space-y-2'>
                        {/* Heading scaled for mobile */}
                        <h2 className='text-4xl md:text-5xl lg:text-7xl font-black text-[#001F3F] tracking-tighter mb-8 md:mb-12 leading-none'>
                            What We <span className='text-slate-300'>Deliver.</span>
                        </h2>

                        <div className='border-t border-slate-100'>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index === activeIndex ? activeIndex : index)} // Allow clicking to stay active
                                    className={`group flex flex-col border-b border-slate-100 cursor-pointer transition-all duration-500 ${
                                        activeIndex === index ? 'bg-slate-50/50' : 'bg-transparent'
                                    }`}
                                >
                                    {/* VISIBLE ROW: Title & Icon */}
                                    <div className={`flex items-center justify-between py-6 md:py-8 ${
                                         activeIndex === index ? 'px-4' : 'px-0'
                                    } transition-all duration-500`}>
                                        <div className='flex items-center gap-4 md:gap-8'>
                                            <span className={`text-xs md:text-sm font-black transition-colors duration-500 ${
                                                activeIndex === index ? 'text-[#CE2029]' : 'text-slate-300'
                                            }`}>
                                                0{index + 1}
                                            </span>
                                            <h3 className={`text-lg md:text-[22px] font-bold tracking-tight transition-all duration-500 ${
                                                activeIndex === index ? 'text-[#001F3F] translate-x-2' : 'text-slate-400'
                                            }`}>
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Icon Wrapper */}
                                        <div className="flex items-center justify-center">
                                            <div
                                                className={`p-2 md:p-3 rounded-full transition-all duration-500 ease-in-out flex items-center justify-center ${
                                                    activeIndex === index
                                                        ? 'bg-[#CE2029] text-white shadow-lg shadow-[#CE2029]/20'
                                                        : 'bg-slate-50 text-slate-300'
                                                }`}
                                                style={{
                                                    transform: activeIndex === index ? 'rotate(135deg)' : 'rotate(0deg)'
                                                }}
                                            >
                                                <PlusIcon className='size-4 md:size-5 stroke-[3px]' />
                                            </div>
                                        </div>
                                    </div>

                                    {/* MOBILE ACCORDION CONTENT: Visible ONLY on small screens when active */}
                                    {/* This block is HIDDEN on lg screens because the card on the right takes over */}
                                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
                                        activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="p-6 pt-0">
                                            <div className="rounded-2xl bg-[#001F3F] p-6 text-white shadow-lg">
                                                <div className="flex items-center justify-between mb-4">
                                                    <service.icon className='size-6 text-[#00E0FF]' />
                                                    <span className='text-[10px] font-black uppercase tracking-widest text-[#00E0FF] bg-white/5 px-3 py-1 rounded-full border border-white/10'>
                                                        {service.tag}
                                                    </span>
                                                </div>
                                                <p className='text-white/80 text-sm font-medium leading-relaxed italic mb-6'>
                                                    "{service.description}"
                                                </p>
                                                <div className='pt-4 border-t border-white/10 flex items-center justify-between'>
                                                    <span className='text-[10px] font-bold text-[#00E0FF] uppercase tracking-widest'>
                                                        {service.details}
                                                    </span>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform" className='text-xs font-black flex items-center gap-2'>
                                                        ENQUIRE <ArrowRightIcon className='size-3' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Desktop Detail Card (Hidden on Mobile) */}
                    <div className='hidden lg:col-span-5 relative lg:block'>
                        <div className='sticky top-32'>
                            <div className='relative overflow-hidden rounded-[3rem] bg-[#001F3F] p-12 text-white shadow-[0_50px_100px_-20px_rgba(0,31,63,0.4)]'>
                                <div className='absolute top-0 right-0 w-64 h-64 bg-[#00E0FF]/10 rounded-full blur-3xl' />

                                <div key={activeIndex} className='relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700'>
                                    <div className='flex items-center justify-between'>
                                        <div className='p-4 bg-white/10 rounded-2xl backdrop-blur-md'>
                                            {(() => {
                                                const ActiveIcon = services[activeIndex].icon;
                                                return <ActiveIcon className='size-8 text-[#00E0FF]' />;
                                            })()}
                                        </div>
                                        <span className='text-[10px] font-black uppercase tracking-widest text-[#00E0FF] bg-white/5 px-4 py-2 rounded-full border border-white/10'>
                                            {services[activeIndex].tag}
                                        </span>
                                    </div>

                                    <h4 className='text-[22px] font-black leading-tight'>
                                        {services[activeIndex].title}
                                    </h4>

                                    <p className='text-white/70 text-[15px] font-medium leading-relaxed italic'>
                                        "{services[activeIndex].description}"
                                    </p>

                                    <div className='pt-8 border-t border-white/10 flex items-center justify-between'>
                                        <span className='text-xs font-bold text-[#00E0FF] uppercase tracking-widest'>
                                            {services[activeIndex].details}
                                        </span>
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform"
                                            target="_blank"
                                            rel="noreferrer"
                                            className='flex items-center gap-2 group/btn font-black text-sm hover:text-[#00E0FF] transition-colors'
                                        >
                                            ENQUIRE <ArrowRightIcon className='size-4 group-hover/btn:translate-x-2 transition-transform' />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <p className='mt-10 text-center text-slate-400 text-sm font-bold tracking-widest uppercase'>
                                Need more info? <span className='text-[#CE2029] cursor-pointer hover:underline ml-2' onClick={() => window.open('https://wa.me/918015359971')}>Book a Call</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}