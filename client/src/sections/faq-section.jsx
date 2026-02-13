import { MinusIcon, PlusIcon, MessageCircleIcon } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const data = [
        {
            question: 'Is NEET mandatory for MBBS abroad?',
            answer: 'Yes. As per NMC guidelines, qualifying NEET is mandatory for Indian students who plan to practice in India after completing their MBBS abroad.',
        },
        {
            question: 'How do you assist with the student visa process?',
            answer: 'We provide end-to-end visa support, including document preparation, appointment guidance, and personalized mock interviews for a smooth approval process.',
        },
        {
            question: 'Are there scholarships for France & MBBS?',
            answer: 'Yes. We guide students through Eiffel and Charpak scholarships for France, along with merit-based tuition waivers offered by select medical universities.',
        },
        {
            question: 'Which program fits my budget?',
            answer: 'Through personalized 1-to-1 counseling, we match your academic profile with global programs ranging from ₹10L to ₹30L+ based on your budget and goals.',
        }
    ];

    return (
        // Reduced vertical padding for mobile (py-16 vs py-24)
        <section className='relative py-16 md:py-24 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'>
            <div className="container mx-auto px-6 md:px-16 lg:px-24">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className='flex items-center gap-3 mb-4 md:mb-6'>
                            <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#CE2029]"></span>
                            <span className='text-[10px] md:text-[11px] font-[900] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#CE2029]'>
                                Knowledge Base
                            </span>
                        </div>
                        
                        {/* Scaled heading for mobile */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-[#001F3F] tracking-tighter leading-none">
                            Expert <span className="text-slate-400">Insights</span>
                        </h2>
                    </div>
                    
                    {/* Desktop CTA */}
                    <div className='hidden lg:block'>
                        <a href="https://wa.me/918015359971" target="_blank" rel="noreferrer" className='flex items-center gap-4 text-sm font-black text-[#001F3F] group'>
                            GET DIRECT SUPPORT
                            <div className='p-3 rounded-full bg-slate-50 group-hover:bg-[#00E0FF] group-hover:text-white transition-all'>
                                <MessageCircleIcon className='size-5' />
                            </div>
                        </a>
                    </div>
                </div>

                {/* FAQ List */}
                <div className='mx-auto w-full max-w-5xl'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`group border-b border-slate-100 transition-all duration-500 ${openIndex === index ? 'py-8 md:py-10' : 'py-6 md:py-8'}`}
                        >
                            <div
                                className='flex items-start gap-4 md:gap-8 cursor-pointer'
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {/* Numbering System */}
                                <span className={`text-xs md:text-sm font-black tracking-widest transition-colors duration-500 pt-1 md:pt-2 ${openIndex === index ? 'text-[#CE2029]' : 'text-slate-300'}`}>
                                    0{index + 1}
                                </span>

                                <div className='flex-1'>
                                    {/* Question Header */}
                                    <div className='flex items-start justify-between gap-4'>
                                        <h3 className={`text-lg md:text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-500 leading-tight ${openIndex === index ? 'text-[#001F3F] translate-x-1 md:translate-x-2' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                            {item.question}
                                        </h3>
                                        
                                        {/* Icon Toggle */}
                                        <div className={`p-1.5 md:p-2 rounded-full shrink-0 transition-all duration-500 ${openIndex === index ? 'bg-[#CE2029] text-white rotate-180' : 'bg-slate-50 text-slate-300'}`}>
                                            {openIndex === index ? <MinusIcon className='size-4 md:size-5' /> : <PlusIcon className='size-4 md:size-5' />}
                                        </div>
                                    </div>

                                    {/* Answer Dropdown */}
                                    {/* Changed max-h-40 to max-h-[500px] to prevent text cutting off on mobile */}
                                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 mt-4 md:mt-8' : 'max-h-0 opacity-0'}`}>
                                        <p className='text-base md:text-lg leading-relaxed text-slate-500 font-medium md:max-w-[85%] lg:max-w-[65%] italic'>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Support CTA */}
                <div className='mt-12 lg:hidden'>
                    <a 
                        href="https://wa.me/918015359971" 
                        target="_blank"
                        rel="noreferrer"
                        className='flex w-full items-center justify-center gap-4 rounded-2xl bg-[#001F3F] py-5 text-white font-black text-xs tracking-widest active:scale-95 transition-transform'
                    >
                        WHATSAPP SUPPORT
                        <MessageCircleIcon className='size-4' />
                    </a>
                </div>
            </div>
        </section>
    );
}