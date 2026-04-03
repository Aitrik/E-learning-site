"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
    const swiperRef = useRef<any>(null);
    const [scrollY, setScrollY] = useState(0);

    // Using local mock data instead of Redux for now
    const bannerData = [
        {
            banner_image: "/images/slide1.jpg",
            banner_heading1: "Explore in-demand skillsets",
            banner_sub_heading: "Unlock your potential with our curated selection of in-demand courses. From tech and business to creative arts, we have the perfect program to help you achieve your goals.",
            Button1_text: "Explore Courses",
            Button1_link: "#",
            Button2_text: "Learn More",
            Button2_link: "#",
        },
        {
            banner_image: "/images/slide2.jpg",
            banner_heading1: "Offline/online course enrolment and training",
            banner_sub_heading: "Unlock your potential with our curated selection of in-demand courses. From tech and business to creative arts, we have the perfect program to help you achieve your goals.",
            Button1_text: "Explore Courses",
            Button1_link: "#",
            Button2_text: "View Plans",
            Button2_link: "#",
        }
    ];

    const isLoading = false;

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    return (
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">

            {/* ============================
           BLUE LOADING SKELETON
         ============================ */}
            {isLoading && (
                <div className="w-full h-full relative overflow-hidden">
                    {/* Background linear */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#0ea5e9] to-[#38bdf8] opacity-80" />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-sm" />

                    {/* Skeleton Elements */}
                    <div className="absolute inset-0 flex items-center justify-center md:justify-start px-8 md:px-16">
                        <div className="space-y-5 max-w-2xl animate-pulse w-full">
                            <div className="h-12 md:h-20 w-3/4 bg-white/20 rounded-lg"></div>
                            <div className="h-12 md:h-20 w-1/2 bg-white/20 rounded-lg"></div>
                            <div className="h-4 md:h-6 w-2/3 bg-white/20 rounded-lg"></div>

                            <div className="flex gap-4 pt-8">
                                <div className="h-12 w-32 bg-white/20 rounded-lg"></div>
                                <div className="h-12 w-32 bg-white/20 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================
          🟦 REAL SLIDER (only when data exists)
         ============================ */}
            {!isLoading && bannerData.length > 0 && (
                <>
                    <Swiper
                        loop
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Autoplay, Pagination, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        speed={1000}
                        pagination={{
                            clickable: true,
                        }}
                        className="w-full h-full"
                    >
                        {bannerData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="absolute inset-0 overflow-hidden"
                                    style={{
                                        backgroundImage: `url('${slide.banner_image}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
                                </div>

                                {/* Text section */}
                                <div className="absolute inset-0 flex items-center justify-center md:justify-start md:ml-[10%] px-8">
                                    <div className="max-w-2xl text-center md:text-left text-white transition-all duration-700 ease-out">

                                        {slide.banner_heading1 && (
                                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                                {slide.banner_heading1}
                                            </h1>
                                        )}

                                        {slide.banner_sub_heading && (
                                            <p
                                                className="text-sm md:text-lg mb-8 max-w-xl mx-auto md:mx-0 text-gray-200"
                                                dangerouslySetInnerHTML={{
                                                    __html: slide.banner_sub_heading,
                                                }}
                                            />
                                        )}

                                        {/* =============================
                        🔵 ButtonS (WITH LINK ADDED)
                      ============================= */}
                                        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                                            {slide.Button1_text && (
                                                <Link href={slide.Button1_link || "#"}>
                                                    <Button className="w-full md:w-auto bg-brand-primary text-white px-8 py-3 text-lg font-bold hover:bg-brand-secondary transition duration-300">
                                                        {slide.Button1_text}
                                                    </Button>
                                                </Link>
                                            )}

                                            {slide.Button2_text && (
                                                <Link href={slide.Button2_link || "#"}>
                                                    <Button className="w-full md:w-auto text-white border border-white hover:bg-white/10 px-8 py-3 text-lg font-bold transition duration-300">
                                                        {slide.Button2_text}
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation arrows */}
                    <Button
                        onClick={handlePrev}
                        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 border border-white/20 text-white p-3 hover:bg-black/60 transition rounded-full"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <Button
                        onClick={handleNext}
                        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 border border-white/20 text-white p-3 hover:bg-black/60 transition rounded-full"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </>
            )}
        </div>
    );
}
