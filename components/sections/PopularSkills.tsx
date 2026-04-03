import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PopularSkills() {
    return (
        <section className="w-full py-12 px-4 md:px-12 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 transform origin-top-right -z-10 blur-3xl opacity-50"></div>

            <div className="max-w-[1340px] mx-auto relative z-10">
                <h2 className="text-3xl font-bold mb-12 text-[#1c1d1f]">Popular Skills</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-start">

                    {/* Featured Skill Card */}
                    <div className="border border-brand-primary/20 p-8 bg-gradient-to-br from-white to-brand-primary/5 flex flex-col justify-between shadow-eduverde rounded-2xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl group-hover:bg-brand-primary/20 transition-all duration-500 transform group-hover:scale-150"></div>
                        <div className="space-y-4 relative z-10">
                            <h3 className="text-2xl font-bold text-[#1c1d1f]">ChatGPT is a top skill</h3>
                            <p className="text-[#6a6f73] leading-relaxed">90% of Fortune 100 companies are using Gen AI to stay competitive.</p>
                        </div>
                        <Button className="w-full rounded-xl bg-brand-primary text-white font-bold h-12 mt-8 hover:bg-brand-secondary transition-colors duration-300 shadow-md relative z-10">
                            See ChatGPT courses
                        </Button>
                    </div>

                    {/* Skill Categories */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
                        {/* Development Category */}
                        <div>
                            <h4 className="font-bold mb-6 text-sm tracking-widest text-[#6a6f73] border-b border-gray-200 pb-2">DEVELOPMENT</h4>
                            <ul className="space-y-4 font-bold text-brand-primary">
                                {["Python", "Web Development", "Data Science", "JavaScript"].map((skill) => (
                                    <li key={skill}>
                                        <Link href="#" className="flex items-center group/link">
                                            <span className="group-hover/link:translate-x-2 group-hover/link:text-brand-secondary transition-all duration-300">
                                                {skill}
                                            </span>
                                            <ArrowRight size={14} className="opacity-0 -translate-x-4 ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:text-brand-secondary transition-all duration-300" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Design Category */}
                        <div>
                            <h4 className="font-bold mb-6 text-sm tracking-widest text-[#6a6f73] border-b border-gray-200 pb-2">DESIGN</h4>
                            <ul className="space-y-4 font-bold text-brand-primary">
                                {["Blender", "Graphic Design", "User Experience", "Photoshop"].map((skill) => (
                                    <li key={skill}>
                                        <Link href="#" className="flex items-center group/link">
                                            <span className="group-hover/link:translate-x-2 group-hover/link:text-brand-secondary transition-all duration-300">
                                                {skill}
                                            </span>
                                            <ArrowRight size={14} className="opacity-0 -translate-x-4 ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:text-brand-secondary transition-all duration-300" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Business Category */}
                        <div>
                            <h4 className="font-bold mb-6 text-sm tracking-widest text-[#6a6f73] border-b border-gray-200 pb-2">BUSINESS</h4>
                            <ul className="space-y-4 font-bold text-brand-primary">
                                {["PMP", "Excel", "Data Analysis", "Leadership"].map((skill) => (
                                    <li key={skill}>
                                        <Link href="#" className="flex items-center group/link">
                                            <span className="group-hover/link:translate-x-2 group-hover/link:text-brand-secondary transition-all duration-300">
                                                {skill}
                                            </span>
                                            <ArrowRight size={14} className="opacity-0 -translate-x-4 ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:text-brand-secondary transition-all duration-300" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
