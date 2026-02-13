import { ClockIcon, TagIcon, ArrowRightIcon } from 'lucide-react';
export default function TrendingContentSection() {
  const APPLY_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";

  const trendingPosts = [
    {
      title: 'Top MBBS Colleges in Georgia: 2025 Rankings',
      excerpt: 'Top medical universities in Georgia offering English-taught MBBS programs with global reach.',
      category: 'MBBS Abroad',
      date: '2 Days Ago',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600',
    },
    {
      title: 'Scholarships for France: How to Apply',
      excerpt: 'Step-by-step guide to scholarships for MBBS and higher studies in France for international students.',
      category: 'Scholarships',
      date: '5 Days Ago',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600',
    },
    {
      title: 'Medical Education: Local vs Abroad',
      excerpt: 'Comparison of medical education in India and abroad, including costs, exposure, and licensing paths.',
      category: 'Expert Guide',
      date: 'Trending',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600',
    }
  ];

  return (
    <section className='relative py-24 bg-[#FDFDFD] font-["Plus_Jakarta_Sans"] overflow-hidden'>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00E0FF]/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24">

        {/* Header Section with Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          
          {/* Title Block */}
          <div className="max-w-2xl">
            <div className='flex items-center gap-3 mb-6'>
              <span className="h-[3px] w-12 bg-[#CE2029]"></span>
              <span className='text-[11px] font-[900] uppercase tracking-[0.3em] text-[#CE2029]'>
                Editorial Insights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-[900] text-[#001F3F] tracking-tighter leading-none">
              Trending <span className="text-slate-400">Content</span>
            </h2>
          </div>

          {/* RIGHT SIDE TOP BUTTON */}
<div className="flex-shrink-0">
  <a
    href={APPLY_LINK}
    target="_blank"
    rel="noopener noreferrer"
    // Added 'tracking-widest' here 👇
    className='group flex items-center justify-center gap-3 rounded-full bg-[#001F3F] px-8 py-4 text-sm font-black text-white tracking-widest transition-all hover:bg-[#CE2029] hover:shadow-[0_20px_40px_-10px_rgba(206,32,41,0.4)] active:scale-95'
  >
    ENROLL NOW
    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
  </a>
</div>

        </div>

        {/* Editorial Grid */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {trendingPosts.map((post, index) => (
            <div
              key={index}
              className='group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,31,63,0.15)] hover:-translate-y-2'
            >
              {/* Image Header */}
              <div className='relative h-64 w-full overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent" />

                <div className='absolute top-6 left-6 flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#001F3F] shadow-sm'>
                  <TagIcon className='size-3 text-[#00E0FF]' />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className='flex flex-1 flex-col p-8'>
                <div className='flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#CE2029] mb-4'>
                  <ClockIcon className='size-3' />
                  <span>{post.date}</span>
                </div>

                <h3 className='text-2xl font-bold text-[#001F3F] leading-snug group-hover:text-[#CE2029] transition-colors mb-4'>
                  {post.title}
                </h3>

                <p className='text-[15px] leading-relaxed text-slate-500 font-medium'>
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}