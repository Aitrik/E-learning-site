"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown, Filter, CheckSquare, X, Search } from "lucide-react";

// Added topic categorization and strict numeric equivalents for better sorting
const COURSES = [
    {
        id: 1,
        title: "The Complete Next.js 14 Bootcamp: From Zero to Hero",
        author: "John Doe",
        rating: 4.8,
        reviews: 12400,
        price: "$49.99",
        numericPrice: 49.99,
        image: "/images/portfolio/case1.webp",
        bestseller: true,
        level: "Beginner",
        topic: "Web Development"
    },
    {
        id: 2,
        title: "Mastering UI/UX Design Principles & Figma",
        author: "Sarah Smith",
        rating: 4.7,
        reviews: 8200,
        price: "$34.99",
        numericPrice: 34.99,
        image: "/images/bento/bento1.webp",
        bestseller: false,
        level: "Beginner",
        topic: "UI/UX Design"
    },
    {
        id: 3,
        title: "Advanced Tailwind CSS & Framer Motion Techniques",
        author: "Mark Johnson",
        rating: 4.9,
        reviews: 5100,
        price: "$29.99",
        numericPrice: 29.99,
        image: "/images/services/services-1.webp",
        bestseller: true,
        level: "Intermediate",
        topic: "Web Development"
    },
    {
        id: 4,
        title: "Fullstack Web Development with the MERN Stack",
        author: "Emily Chen",
        rating: 4.6,
        reviews: 15000,
        price: "$59.99",
        numericPrice: 59.99,
        image: "/images/portfolio/case2.webp",
        bestseller: false,
        level: "All Levels",
        topic: "Web Development"
    },
    {
        id: 5,
        title: "Python for Data Science and Machine Learning",
        author: "Dr. Angela Yu",
        rating: 4.8,
        reviews: 22000,
        price: "$54.99",
        numericPrice: 54.99,
        image: "/images/portfolio/case3.webp",
        bestseller: true,
        level: "All Levels",
        topic: "Data Science"
    },
    {
        id: 6,
        title: "React Native: Build Cross-Platform Mobile Apps",
        author: "Stephen Grider",
        rating: 4.7,
        reviews: 9800,
        price: "$44.99",
        numericPrice: 44.99,
        image: "/images/bento/bento2.webp",
        bestseller: false,
        level: "Intermediate",
        topic: "Mobile Development"
    },
    {
        id: 7,
        title: "Introduction to DevOps and CI/CD Pipelines",
        author: "James Lee",
        rating: 4.5,
        reviews: 3200,
        price: "Free",
        numericPrice: 0,
        image: "/images/services/services-2.webp",
        bestseller: false,
        level: "Beginner",
        topic: "DevOps"
    },
    {
        id: 8,
        title: "Advanced React Patterns and Performance",
        author: "Kent C. Dodds",
        rating: 4.9,
        reviews: 11000,
        price: "$69.99",
        numericPrice: 69.99,
        image: "/images/portfolio/case5.webp",
        bestseller: true,
        level: "Expert",
        topic: "Web Development"
    }
];

const FILTERS = [
    {
        id: "topic",
        title: "Topic",
        options: ["Web Development", "UI/UX Design", "Data Science", "Mobile Development", "DevOps"]
    },
    {
        id: "level",
        title: "Level",
        options: ["All Levels", "Beginner", "Intermediate", "Expert"]
    },
    {
        id: "price",
        title: "Price",
        options: ["Paid", "Free"]
    }
];

const SORT_OPTIONS = ["Most Popular", "Highest Rated", "Newest", "Price: Low to High", "Price: High to Low"];

export default function CoursesPage() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    // Sort states
    const [sortBy, setSortBy] = useState("Most Popular");
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    // Close sort dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleFilter = (option: string) => {
        setSelectedFilters(prev =>
            prev.includes(option) ? prev.filter(f => f !== option) : [...prev, option]
        );
    };

    const clearFilters = () => {
        setSelectedFilters([]);
    };

    // Calculate dynamic filtering & sorting using useMemo for performance
    const { filteredAndSortedCourses, filterCounts } = useMemo(() => {
        // 1. Separate selected filters into their respectful categories
        const activeTopics = FILTERS.find(f => f.id === "topic")!.options.filter(opt => selectedFilters.includes(opt));
        const activeLevels = FILTERS.find(f => f.id === "level")!.options.filter(opt => selectedFilters.includes(opt));
        const activePrices = FILTERS.find(f => f.id === "price")!.options.filter(opt => selectedFilters.includes(opt));

        // 2. Filter logic
        const filtered = COURSES.filter(course => {
            const topicMatch = activeTopics.length === 0 || activeTopics.includes(course.topic);
            const levelMatch = activeLevels.length === 0 || activeLevels.includes(course.level);

            const coursePriceType = course.numericPrice === 0 ? "Free" : "Paid";
            const priceMatch = activePrices.length === 0 || activePrices.includes(coursePriceType);

            return topicMatch && levelMatch && priceMatch;
        });

        // 3. Sorting logic
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === "Most Popular") return b.reviews - a.reviews;
            if (sortBy === "Highest Rated") return b.rating - a.rating;
            if (sortBy === "Newest") return b.id - a.id; // Mocking newest by descending IDs
            if (sortBy === "Price: Low to High") return a.numericPrice - b.numericPrice;
            if (sortBy === "Price: High to Low") return b.numericPrice - a.numericPrice;
            return 0;
        });

        // 4. Calculate dynamic counts for the filter sidebar based on the CURRENT search constraints
        // This makes the UI feel highly responsive
        const counts: Record<string, number> = {};
        FILTERS.forEach(group => {
            group.options.forEach(option => {
                counts[option] = COURSES.filter(course => {
                    if (group.id === "topic") return course.topic === option;
                    if (group.id === "level") return course.level === option;
                    if (group.id === "price") {
                        const isFree = course.numericPrice === 0;
                        return option === "Free" ? isFree : !isFree;
                    }
                    return false;
                }).length;
            });
        });

        return { filteredAndSortedCourses: sorted, filterCounts: counts };
    }, [selectedFilters, sortBy]);

    return (
        <div className="min-h-screen bg-[#f7f9fa]">
            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8">

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-300">
                    <span className="font-bold text-[#1c1d1f]">Filter & Sort</span>
                    <Button variant="outline" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
                        <Filter size={18} className="mr-2" />
                        {mobileFiltersOpen ? "Hide Filters" : "Filters"}
                    </Button>
                </div>

                {/* Left Sidebar: Sticky Filters */}
                <aside className={`lg:w-[300px] shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
                    <div className="sticky top-[100px] bg-white rounded-xl shadow-sm border border-gray-300 p-6 space-y-8">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                            <h2 className="text-xl font-bold text-[#1c1d1f]">Filters</h2>
                            {selectedFilters.length > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="text-brand-primary text-sm font-bold hover:underline transition-all"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>

                        <div className="space-y-6">
                            {FILTERS.map((filterGroup, idx) => (
                                <div key={idx} className="space-y-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                    <h3 className="font-bold text-lg text-[#1c1d1f] flex items-center justify-between w-full">
                                        {filterGroup.title}
                                    </h3>
                                    <div className="space-y-3">
                                        {filterGroup.options.map((option, i) => {
                                            const isSelected = selectedFilters.includes(option);
                                            const count = filterCounts[option] || 0;

                                            // Optional: Hide options that have 0 results entirely
                                            // if (count === 0 && !isSelected) return null;

                                            return (
                                                <div
                                                    key={i}
                                                    className={`flex items-center gap-3 cursor-pointer group ${count === 0 ? 'opacity-50' : ''}`}
                                                    onClick={() => toggleFilter(option)}
                                                >
                                                    <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${isSelected ? 'bg-brand-primary border-brand-primary text-white' : 'border-gray-300 bg-white group-hover:border-brand-primary'}`}>
                                                        {isSelected && <CheckSquare size={14} className="bg-brand-primary outline-none stroke-[3]" />}
                                                    </div>
                                                    <span className="text-gray-700 group-hover:text-[#1c1d1f] transition-colors">{option}</span>
                                                    <span className="ml-auto text-xs text-gray-400">({count})</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Right Area: Course Grid */}
                <main className="flex-1 space-y-6">
                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1c1d1f] text-lg">
                            {filteredAndSortedCourses.length} {filteredAndSortedCourses.length === 1 ? 'result' : 'results'}
                        </span>

                        {/* Custom Animated Sort Dropdown */}
                        <div className="relative z-10" ref={sortRef}>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 font-medium hidden sm:block">Sort by:</span>
                                <div
                                    className="border border-gray-300 bg-white rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 font-medium text-[#1c1d1f] transition-colors min-w-[200px] justify-between shadow-sm"
                                    onClick={() => setIsSortOpen(!isSortOpen)}
                                >
                                    {sortBy} <ChevronDown size={18} className={`text-gray-500 transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
                                </div>
                            </div>

                            {isSortOpen && (
                                <div className="absolute top-full right-0 mt-2 w-[200px] bg-white border border-gray-300 shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2">
                                    {SORT_OPTIONS.map((option) => (
                                        <div
                                            key={option}
                                            className={`px-4 py-3 cursor-pointer text-sm font-medium transition-colors ${sortBy === option ? 'bg-brand-primary/10 text-brand-primary' : 'hover:bg-gray-50 text-gray-700'}`}
                                            onClick={() => {
                                                setSortBy(option);
                                                setIsSortOpen(false);
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Active Filter Tags Row */}
                    {selectedFilters.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 pb-2">
                            {selectedFilters.map((filter) => (
                                <div key={filter} className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 select-none">
                                    {filter}
                                    <X size={14} className="cursor-pointer hover:text-black transition-colors" onClick={() => toggleFilter(filter)} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Check if Empty */}
                    {filteredAndSortedCourses.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-16 flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                <Search size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1c1d1f]">No courses found</h3>
                            <p className="text-gray-500 max-w-sm">Try adjusting your filters or expanding your search to find exactly what you're looking for.</p>
                            <Button
                                onClick={clearFilters}
                                className="bg-brand-primary text-white hover:bg-brand-secondary font-bold h-10 mt-2"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    ) : (
                        /* Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredAndSortedCourses.map((course) => (
                                <div key={course.id} className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-300 overflow-hidden cursor-pointer">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Overlay Gradient on Hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col p-5 flex-1 relative">
                                        {course.bestseller && (
                                            <div className="absolute -top-3 left-4 bg-[#eceb98] text-[#3d3c0a] text-xs font-bold px-2 py-1 uppercase tracking-wider rounded shadow-sm">
                                                Bestseller
                                            </div>
                                        )}
                                        <h3 className="font-bold text-lg text-[#1c1d1f] leading-snug line-clamp-2 mt-2 group-hover:text-brand-primary transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-2 mb-1">{course.author}</p>

                                        <div className="flex items-center gap-1.5 mb-2">
                                            <span className="font-bold text-[#b4690e] text-sm">{course.rating}</span>
                                            <div className="flex items-center text-[#b4690e]">
                                                <Star size={14} fill="currentColor" />
                                                <Star size={14} fill="currentColor" />
                                                <Star size={14} fill="currentColor" />
                                                <Star size={14} fill="currentColor" />
                                                <Star size={14} fill="currentColor" />
                                            </div>
                                            <span className="text-xs text-gray-400">({course.reviews.toLocaleString()})</span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
                                            <span className="bg-gray-50 px-2 py-1 rounded font-semibold border border-gray-100">{course.level}</span>
                                            <span className="bg-gray-50 px-2 py-1 rounded font-semibold border border-gray-100">{course.topic}</span>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <span className="font-bold text-xl text-[#1c1d1f]">{course.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Load More Button */}
                    {filteredAndSortedCourses.length > 0 && (
                        <div className="flex justify-center pt-8">
                            <Button variant="outline" className="border-black text-black font-bold h-12 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                                Load More Results
                            </Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
