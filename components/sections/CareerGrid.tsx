import Image from "next/image";

export function CareerGrid() {
    return (
        <section className="w-full py-12 px-4 md:px-12 max-w-[1340px] mx-auto bg-white">
            <h2 className="text-3xl font-bold mb-2 text-start text-[#1c1d1f]">Ready to reimagine your career?</h2>
            <p className="text-start text-[#6a6f73] mb-12 text-lg">Get the skills you need and find your dream job.</p>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                {/* Main Featured Card */}
                <div className="sm:col-span-5 group cursor-pointer">
                    <div className="relative h-[300px] sm:h-[400px] overflow-hidden shadow-eduverde">
                        <Image
                            src="/images/portfolio/portfolio_banner.jpg"
                            alt="Web Development"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#22D3EE] mb-2">Most Popular</p>
                            <h3 className="text-3xl font-bold mb-2">Web Development</h3>
                            <p className="text-sm opacity-80 max-w-xs text-gray-200">
                                Master the art of building modern, responsive, and high-performance websites.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sub-grid of cards */}
                <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        { title: "AI & ML", img: "/images/services/services-1.webp", tag: "Hot" },
                        { title: "Data Science", img: "/images/services/services-2.webp", tag: "High Demand" },
                        { title: "UX/UI Design", img: "/images/services/services-3.webp", tag: "Creative" },
                        { title: "Cyber Security", img: "/images/services/service-4.webp", tag: "Tech" },
                        { title: "Cloud Tech", img: "/images/portfolio/case6.webp", tag: "Cloud" },
                        { title: "Digital Marketing", img: "/images/bento/bento1.webp", tag: "Business" }
                    ].map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative h-40 overflow-hidden border border-[#d1d7dc] shadow-sm">
                                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter text-[#1c1d1f]">
                                    {item.tag}
                                </div>
                            </div>
                            <h4 className="text-[#1c1d1f] font-bold text-sm my-3 group-hover:text-[#0EA5B7] transition-colors">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
