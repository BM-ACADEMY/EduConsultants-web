import { ClockIcon, ArrowUpRightIcon, SparklesIcon, MailIcon } from 'lucide-react';

export default function TrendingContentSection() {
    const trendingPosts = [
        {
            title: 'Top MBBS Colleges in Georgia: 2025 Rankings',
            excerpt: 'Exploring the best medical universities in Georgia with English-taught programs and global recognition.',
            category: 'MBBS Abroad',
            date: 'Updated 2 days ago',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400',
            link: '#'
        },
        {
            title: 'Scholarships for France: How to Apply',
            excerpt: 'A complete guide to Eiffel Excellence and other scholarships for international students in 2025.',
            category: 'Scholarships',
            date: 'Updated 5 days ago',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400',
            link: '#'
        },
        {
            title: 'Local vs Abroad: The Reality of Medical Education',
            excerpt: 'Comparing the ROI, clinical exposure, and licensing requirements for India vs. foreign universities.',
            category: 'Expert Guide',
            date: 'Trending Now',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400',
            link: '#'
        }
    ];

    return (
        <section className='relative py-16 md:py-24 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'>
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                
                {/* --- HEADER (Matches your other sections) --- */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <div className='flex items-center gap-3 mb-4'>
                        <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#CE2029]"></span>
                        <span className='text-[10px] md:text-[11px] font-[900] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#CE2029]'>
                            Resource Hub
                        </span>
                        <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#CE2029]"></span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-slate-900 tracking-tighter leading-none mb-6">
                        Trending <span className="text-slate-400">Resources</span>
                    </h2>
                    
                    <p className="max-w-xl text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                        Stay ahead with the latest news on international admissions, scholarship deadlines, and local college updates.
                    </p>
                </div>

                {/* --- GRID --- */}
                <div className='grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>
                    {trendingPosts.map((post, index) => (
                        <article
                            key={index}
                            className='group flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,31,63,0.1)] hover:-translate-y-2'
                        >
                            {/* Image Wrapper */}
                            <div className='relative h-52 w-full overflow-hidden'>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                <div className='absolute top-4 left-4 flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#001F3F] backdrop-blur-md shadow-sm'>
                                    <SparklesIcon className='size-3 text-[#CE2029]' />
                                    {post.category}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className='flex flex-1 flex-col p-6 md:p-8'>
                                <div className='flex items-center gap-2 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider'>
                                    <ClockIcon className='size-3.5' />
                                    <span>{post.date}</span>
                                </div>

                                <h3 className='text-xl font-extrabold text-[#001F3F] group-hover:text-[#CE2029] transition-colors line-clamp-2 leading-tight'>
                                    {post.title}
                                </h3>

                                <p className='mt-3 text-sm font-medium leading-relaxed text-slate-500 line-clamp-3'>
                                    {post.excerpt}
                                </p>

                                <div className='mt-auto pt-6 border-t border-slate-50'>
                                    <a
                                        href={post.link}
                                        className='inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#001F3F] transition-all hover:gap-3 hover:text-[#CE2029]'
                                    >
                                        Read Insights
                                        <ArrowUpRightIcon className='size-4' />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* --- NEWSLETTER SECTION --- */}
                <div className='mt-16 md:mt-24 w-full rounded-[2.5rem] bg-[#001F3F] p-8 md:p-12 text-center relative overflow-hidden'>
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E0FF]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CE2029]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 text-[#00E0FF]">
                            <MailIcon className="size-6" />
                        </div>
                        
                        <h4 className='text-2xl md:text-4xl font-black text-white mb-4'>
                            Want the latest updates in your inbox?
                        </h4>
                        <p className='text-slate-300 font-medium text-sm md:text-base mb-8'>
                            Get notified about direct admission openings and new scholarship opportunities.
                        </p>
                        
                        <form className='flex flex-col sm:flex-row gap-3 justify-center w-full max-w-lg mx-auto'>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className='w-full px-6 py-4 rounded-full border border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00E0FF] focus:bg-white/10 transition-all font-medium'
                            />
                            <button className='w-full sm:w-auto bg-[#CE2029] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-[#CE2029] transition-all shadow-lg active:scale-95 whitespace-nowrap'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}