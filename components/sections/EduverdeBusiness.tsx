import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EduverdeBusiness() {
    return (
        <section className="w-full py-12 px-4">
            <div className="max-w-[1340px] mx-auto">
                <div className="bg-gradient-to-r from-[#1c1d1f] to-blue-900 text-white p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row rounded-none items-center lg:items-center lg:justify-between shadow-2xl relative overflow-hidden">
                    <div className="lg:w-1/2 space-y-6 flex flex-col justify-start z-10">
                        <h2 className="text-sm uppercase font-bold tracking-widest text-start opacity-80 text-blue-300">
                            Eduverde Plus
                        </h2>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-start text-white">
                            Upskill your team with <span className="text-blue-300">Eduverde Plus</span>
                        </h1>
                        <p className="text-lg text-gray-300 text-start max-w-lg">
                            Unlimited access to 25,000+ top-rated Eduverde courses, anytime, anywhere.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Access top-tier experts to strengthen your team",
                                "Seamlessly manage projects and optimize workflows",
                                "Benefit from continuous support and end-to-end solutions"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center space-x-3 text-start group">
                                    <div className="h-5 w-5 bg-blue-500/20 flex items-center justify-center shrink-0 rounded-full">
                                        <Check size={12} className="text-blue-300" />
                                    </div>
                                    <span className="text-gray-200 text-sm font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button className="bg-white text-black hover:bg-gray-100 rounded-none px-8 h-12 font-bold text-base transition-all">
                                Get Eduverde Plus
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-none px-8 h-12 font-bold text-base transition-all">
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:w-1/2 mt-8 lg:mt-0 justify-end relative">
                        <div className="relative w-full max-w-[500px] aspect-[4/3] shadow-2xl   transition-transform duration-700">
                            <Image
                                src="/images/about/about_banner.jpg"
                                alt="Eduverde Business"
                                fill
                                className="object-cover border-4 border-white/10"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
