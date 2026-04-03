export function SocialProof() {
    return (
        <section className="w-full py-12 bg-[#f7f9fa] border-y border-[#d1d7dc]">
            <div className="max-w-[1340px] mx-auto text-center px-4">
                <p className="text-[#6a6f73] font-medium mb-12">Trusted by over 16,000 companies and millions of learners worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
                    {["SAMSUNG", "Cisco", "vimeo", "P&G", "Hewlett Packard", "Citi", "Volkswagen"].map(name => (
                        <span key={name} className="text-xl md:text-2xl font-bold tracking-tight">{name}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
