export function GetStarted() {
    return (
        <section className="relative py-12 bg-[white] text-[#0F172A]">
            {/* Glow Background */}
            <div
                aria-hidden="true"
                className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40"
            >
                <div className="blur-[106px] h-56 bg-gradient-to-br from-[#0EA5B7] to-[#22D3EE]" />
                <div className="blur-[106px] h-32 bg-gradient-to-r from-[#22D3EE] to-[#C85A00]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="relative">
                    {/* Avatars */}
                    <div className="flex items-center justify-center -space-x-2">
                        <img src="https://randomuser.me/api/portraits/women/12.jpg" className="h-8 w-8 rounded-full object-cover" />
                        <img src="https://randomuser.me/api/portraits/women/45.jpg" className="h-12 w-12 rounded-full object-cover" />
                        <img src="https://randomuser.me/api/portraits/women/60.jpg" className="z-10 h-16 w-16 rounded-full object-cover" />
                        <img src="https://randomuser.me/api/portraits/women/4.jpg" className="h-12 w-12 rounded-full object-cover" />
                        <img src="https://randomuser.me/api/portraits/women/34.jpg" className="h-8 w-8 rounded-full object-cover" />
                    </div>

                    {/* Content */}
                    <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12 text-center">
                        <h1 className="text-4xl font-bold md:text-5xl text-[#0F172A]">
                            Get Started now
                        </h1>
                        <p className="text-xl text-[#64748B]">
                            Be part of millions people around the world using Eduverde in modern
                            User Interfaces.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {/* Primary */}
                            <a
                                href="#"
                                className="relative flex h-12 items-center justify-center px-8 rounded-full bg-[#0EA5B7] text-white font-semibold transition duration-300 hover:scale-105 hover:bg-[#F97316] active:scale-95"
                            >
                                Get Started
                            </a>

                            {/* Secondary */}
                            <a
                                href="#"
                                className="relative flex h-12 items-center justify-center px-8 rounded-full border border-[#E2E8F0] bg-white text-[#0EA5B7] font-semibold transition duration-300 hover:scale-105 hover:bg-[#EDEFF2] active:scale-95"
                            >
                                More about
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
