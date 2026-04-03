import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "../ui/button";

export function GoogleAISection() {
    return (
        <section className="w-full py-12 px-4 md:px-12 max-w-[1340px] mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Learn AI with Eduverde</h2>
                <Button variant="outline" className="border-black font-bold h-10 rounded-none hover:bg-gray-50 shrink-0">
                    View all  courses
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Featured Google Card */}
                <div className="lg:col-span-3 border border-[#d1d7dc] p-6 flex flex-col items-start bg-white">
                    <div className="mb-4 h-8 w-20 flex items-start">
                        <span className="text-2xl font-bold font-sans tracking-tighter text-[#4285F4]">G</span>
                        <span className="text-2xl font-bold font-sans tracking-tighter text-[#EA4335]">o</span>
                        <span className="text-2xl font-bold font-sans tracking-tighter text-[#FBBC05]">o</span>
                        <span className="text-2xl font-bold font-sans tracking-tighter text-[#4285F4]">g</span>
                        <span className="text-2xl font-bold font-sans tracking-tighter text-[#34A853]">l</span>
                        <span className="text-2xl font-bold font-sans tracking-tighter text-[#EA4335]">e</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Google AI Professional Certificates</h3>
                    <p className="text-sm mb-6 leading-relaxed">
                        Get job-ready for in-demand career fields with professional certificates from Google.
                    </p>
                    <Link href="#" className="text-[#0EA5B7] font-bold text-sm mt-auto border-b-2 border-[#0EA5B7] pb-1">Learn more</Link>
                </div>

                {/* Grid of Courses */}
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        {
                            title: "AI For Everyone",
                            auth: "DeepLearning.AI",
                            rating: "4.8",
                            reviews: "234,401",
                            price: "Free",
                            img: "/images/bento/bento1.webp"
                        },
                        {
                            title: "Generative AI Fundamentals",
                            auth: "Google Cloud",
                            rating: "4.7",
                            reviews: "12,904",
                            price: "₹2,499",
                            img: "/images/bento/bento2.webp"
                        },
                        {
                            title: "Machine Learning Concepts",
                            auth: "IBM",
                            rating: "4.6",
                            reviews: "85,213",
                            price: "₹3,199",
                            img: "/images/bento/bento3.webp"
                        },
                        {
                            title: "AI Strategy for Business",
                            auth: "Wharton",
                            rating: "4.9",
                            reviews: "5,432",
                            price: "₹4,200",
                            img: "/images/portfolio/case1.webp"
                        }
                    ].map((course, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-video mb-3 border border-[#d1d7dc]">
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-sm mb-1 line-clamp-2 leading-tight">{course.title}</h4>
                            <p className="text-[12px] text-[#6a6f73] mb-1">{course.auth}</p>
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-[#b4690e] font-bold text-sm">{course.rating}</span>
                                <div className="flex text-[#b4690e]"><Star size={10} fill="currentColor" /></div>
                                <span className="text-[12px] text-[#6a6f73]">({course.reviews})</span>
                            </div>
                            <p className="font-bold text-base">{course.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
