import Image from "next/image";
import { Button } from "../ui/button";

export function TrendingCourses() {
    const trending = [
        { title: "Prompt Engineering for ChatGPT and AI Models 2024", img: "/images/portfolio/case2.webp" },
        { title: "Full Stack Web Development with Next.js 14", img: "/images/portfolio/case3.webp" },
        { title: "Python for Data Science Masterclass", img: "/images/portfolio/case4.webp" },
        { title: "UI/UX Design Essentials using Figma", img: "/images/portfolio/case5.webp" }
    ];

    return (
        <section className="w-full py-12 px-4 md:px-12 max-w-[1340px] mx-auto bg-white border-t border-[#d1d7dc]">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Trending courses</h2>
                <Button variant="outline" className="border-black font-bold h-10 rounded-none hover:bg-gray-50 shrink-0">
                    View all Trending courses
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {trending.map((course, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative aspect-video mb-3">
                            <Image
                                src={course.img}
                                fill
                                alt={course.title}
                                className="object-cover"
                            />
                        </div>
                        <p className="text-xs font-bold text-blue-700 mb-1">NEW CARD</p>
                        <h4 className="font-bold text-sm mb-1 leading-tight line-clamp-2">{course.title}</h4>
                        <p className="text-[12px] text-[#6a6f73]">Eduverde Academy</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
