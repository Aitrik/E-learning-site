"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        <path d="M1 1h22v22H1z" fill="none" />
    </svg>
);

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex w-full">
            {/* Left side: Image layout (50%) */}
            <div className="hidden lg:flex w-1/2 relative bg-gray-900 overflow-hidden">
                <Image
                    src="/images/slide2.jpg"
                    alt="Signup Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-12 text-white">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Eduverde" width={140} height={40} className="brightness-0 invert object-contain" />
                    </Link>
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold mb-4">Start Learning Today</h1>
                        <p className="text-lg text-gray-300">
                            Create an account to track your progress, save courses, and join a community of thousands of learners.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side: Form layout (50%) Light Theme */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 bg-white text-[#1c1d1f] relative">
                {/* Mobile absolute header */}
                <div className="absolute top-6 left-6 lg:hidden">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Eduverde" width={120} height={35} className="object-contain" />
                    </Link>
                </div>
                {/* Back button */}
                <div className="absolute top-6 right-6">
                    <Button variant="ghost" asChild className="text-gray-500 hover:text-black hover:bg-gray-100 rounded-full h-10 w-10 p-0">
                        <Link href="/"><ArrowLeft size={20} /></Link>
                    </Button>
                </div>

                <div className="w-full max-w-[420px] space-y-8 mt-12 lg:mt-0">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-[#1c1d1f]">Create an account</h2>
                        <p className="text-gray-500 text-sm">Sign up logically to enhance your learning.</p>
                    </div>

                    <div className="space-y-4">
                        {/* Google Auth Button */}
                        <Button variant="outline" className="w-full h-12 bg-white border border-gray-300 hover:bg-gray-50 text-[#1c1d1f] font-bold flex items-center justify-center gap-3 rounded-xl transition-all shadow-sm">
                            <GoogleIcon />
                            <span>Sign up with Google</span>
                        </Button>

                        {/* Divider */}
                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase font-bold text-gray-500">
                                <span className="bg-white px-3">Or sign up with email</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-[#1c1d1f] font-bold">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    className="bg-gray-50 border border-gray-300 focus-visible:ring-brand-primary placeholder:text-gray-400 text-[#1c1d1f] h-12 rounded-xl transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[#1c1d1f] font-bold">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="bg-gray-50 border border-gray-300 focus-visible:ring-brand-primary placeholder:text-gray-400 text-[#1c1d1f] h-12 rounded-xl transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-[#1c1d1f] font-bold">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        required
                                        className="bg-gray-50 border border-gray-300 focus-visible:ring-brand-primary placeholder:text-gray-400 text-[#1c1d1f] h-12 rounded-xl transition-all font-medium pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 font-medium">Must be at least 8 characters long.</p>
                            </div>
                            <Button type="submit" className="w-full h-12 bg-brand-primary text-white hover:bg-brand-secondary font-bold rounded-xl mt-8 transition-all text-base shadow-lg shadow-brand-primary/20">
                                Sign up
                            </Button>
                        </form>
                    </div>

                    <div className="text-center text-sm text-gray-500 font-medium">
                        Already have an account?{" "}
                        <Link href="/login" className="text-brand-primary font-bold hover:text-brand-secondary transition-colors hover:underline underline-offset-4">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
