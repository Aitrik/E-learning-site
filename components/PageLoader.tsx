"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        // Initial load simulation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200); // 1.2s minimum artificial loading time to show the brand beautifully

        return () => clearTimeout(timer);
    }, []);

    // Also trigger loader slightly when pathname changes so it feels cohesive
    useEffect(() => {
        if (!isMounted) return;
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [pathname, isMounted]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100000] bg-white flex flex-col items-center justify-center pointer-events-auto">
            <div className="relative flex flex-col items-center gap-6 animate-pulse">
                <Image
                    src="/images/logo.png"
                    alt="Eduverde Logo Loader"
                    width={200}
                    height={80}
                    className="object-contain drop-shadow-xl"
                />

                {/* Modern custom loading bar */}
                <div className="h-1.5 w-32 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-primary w-full animate-shimmer"
                    />
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 1.2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}
