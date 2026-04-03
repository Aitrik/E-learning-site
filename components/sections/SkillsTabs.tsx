"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SKILLS = [
    "Artificial Intelligence (AI)",
    "Python",
    "Web Development",
    "Data Science",
    "Management",
    "Communication",
    "Marketing"
];

const COURSE_DATA: Record<string, any[]> = {
    "Artificial Intelligence (AI)": [
        { title: "Generative AI Masterclass: From Basics to Advanced", auth: "Andrew Ng", rating: "4.9", reviews: "12,450", price: "₹3,499", img: "/images/services/services-banner.webp" },
        { title: "Deep Learning Specialization", auth: "DeepLearning.AI", rating: "4.8", reviews: "8,200", price: "₹4,200", img: "/images/services/services-1.webp" },
        { title: "AI Strategy for Business Leaders", auth: "Wharton", rating: "4.7", reviews: "3,100", price: "₹2,999", img: "/images/services/services-2.webp" },
        { title: "Natural Language Processing with Python", auth: "Lazy Programmer", rating: "4.6", reviews: "5,600", price: "₹3,199", img: "/images/services/services-3.webp" },
        { title: "Computer Vision: Complete Guide", auth: "OpenCV Team", rating: "4.8", reviews: "2,400", price: "₹3,800", img: "/images/services/service-4.webp" }
    ],
    "Python": [
        { title: "2024 Complete Python Bootcamp", auth: "Jose Portilla", rating: "4.8", reviews: "450,200", price: "₹3,499", img: "/images/services/services-1.webp" },
        { title: "Python for Data Science and ML", auth: "Jose Portilla", rating: "4.7", reviews: "89,000", price: "₹2,999", img: "/images/services/services-2.webp" },
        { title: "Automate the Boring Stuff", auth: "Al Sweigart", rating: "4.9", reviews: "32,000", price: "Free", img: "/images/services/services-3.webp" },
        { title: "Django 4.0: Modern Web Dev", auth: "Brad Traversy", rating: "4.6", reviews: "12,000", price: "₹3,199", img: "/images/services/service-4.webp" },
        { title: "Advanced Python Decorators", auth: "Real Python", rating: "4.8", reviews: "1,200", price: "₹1,800", img: "/images/portfolio/portfolio_banner.jpg" }
    ],
    "Web Development": [
        { title: "The Web Developer Bootcamp 2024", auth: "Colt Steele", rating: "4.8", reviews: "230,000", price: "₹3,499", img: "/images/about/about-1.webp" },
        { title: "React - The Complete Guide (incl Hooks, React Router, Redux)", auth: "Maximilian Schwarzmüller", rating: "4.7", reviews: "150,000", price: "₹2,999", img: "/images/about/about-2.webp" },
        { title: "Next.js 14: Modern Web Apps", auth: "Brad Traversy", rating: "4.9", reviews: "18,000", price: "₹3,199", img: "/images/about/about-3.webp" },
        { title: "Tailwind CSS from Scratch", auth: "Brad Traversy", rating: "4.8", reviews: "25,000", price: "₹2,499", img: "/images/about/about-4.webp" },
        { title: "TypeScript Mastery 2024", auth: "The Net Ninja", rating: "4.7", reviews: "10,000", price: "₹1,999", img: "/images/about/about_banner.jpg" }
    ]
};

// Fallback for missing keys
SKILLS.forEach(skill => {
    if (!COURSE_DATA[skill]) {
        COURSE_DATA[skill] = [1, 2, 3, 4, 5].map(i => ({
            title: `${skill} Specialist course ${i}`,
            auth: "Eduverde Expert",
            rating: "4.7",
            reviews: "1,200",
            price: "₹3,499",
            img: `/images/services/services-${i > 3 ? 3 : i}.webp`
        }));
    }
});

export function SkillsTabs() {
    const [activeTab, setActiveTab] = useState(SKILLS[0]);
    const courses = COURSE_DATA[activeTab] || [];

    return (
        <section className="w-full py-12 px-4 md:px-12 max-w-[1340px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Skills to transform your career and life</h2>
                    <p className="text-lg text-[#6a6f73]">From critical soft skills to technical mastery, Eduverde helps you fuel professional development.</p>
                </div>
                <Button variant="outline" className="border-black font-bold h-10 rounded-none hover:bg-gray-50 shrink-0">
                    View all {activeTab} courses
                </Button>
            </div>

            <div className="flex gap-6 border-b border-[#d1d7dc] mb-8 overflow-x-auto pb-4 scrollbar-hide">
                {SKILLS.map((skill) => (
                    <button
                        key={skill}
                        onClick={() => setActiveTab(skill)}
                        className={`text-sm font-bold whitespace-nowrap pb-2 border-b-2 transition-all ${activeTab === skill ? 'border-black text-black' : 'border-transparent text-[#6a6f73] hover:text-black'}`}
                    >
                        {skill}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {courses.map((course, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative aspect-video mb-3 border border-[#d1d7dc]">
                            <Image
                                src={course.img}
                                fill
                                alt={course.title}
                                className="object-cover"
                            />
                        </div>
                        <h4 className="font-bold text-sm mb-1 line-clamp-2">
                            {course.title}
                        </h4>
                        <p className="text-[12px] text-[#6a6f73] mb-1">{course.auth}</p>
                        <div className="flex items-center gap-1 mb-1">
                            <span className="text-[#b4690e] font-bold text-sm">{course.rating}</span>
                            <div className="flex text-[#b4690e]"><Star size={10} fill="currentColor" /></div>
                            <span className="text-[12px] text-[#6a6f73]">({course.reviews})</span>
                        </div>
                        <p className="font-bold">{course.price}</p>
                        <Badge className="bg-[#eceb98] text-[#3d3c0a] hover:bg-[#eceb98] rounded-none py-0 px-2 text-[10px] mt-2 font-bold">
                            {i === 0 ? "Bestseller" : i === 1 ? "New" : "Recommended"}
                        </Badge>
                    </div>
                ))}
            </div>
        </section>
    );
}
