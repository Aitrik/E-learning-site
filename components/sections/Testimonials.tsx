import { Quote } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
    return (
        <section className="w-full py-12 px-4 md:px-12 max-w-[1340px] mx-auto">
            <h2 className="text-2xl font-bold mb-10">Join others transforming their lives through learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border border-[#d1d7dc] p-8 flex flex-col h-full">
                        <Quote className="text-gray-300 mb-6" size={40} />
                        <p className="text-sm font-normal mb-8 leading-relaxed flex-1 italic">
                            "I am proud to say that after taking several courses on Eduverde, I reached my goal of becoming a software engineer at a top-tier firm."
                        </p>
                        <div className="flex items-center gap-3">
                            <Image
                                src={`/images/avatars/avatar${(i % 3) + 1}.jpg`}
                                alt="Student Avatar"
                                width={32}
                                height={32}
                                className="rounded-full object-cover h-8 w-8"
                            />
                            <div>
                                <p className="font-bold text-xs">S. Kumar</p>
                                <p className="text-[10px] text-[#6a6f73]">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
