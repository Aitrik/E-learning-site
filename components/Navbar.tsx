"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Bell, Menu, ChevronRight, Code, Briefcase, PieChart, Monitor, FileText, User, PenTool, Target, TvMinimalPlay, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

export function Navbar() {
    const [open, setOpen] = useState(false)
    const categories = [
        { name: "Digital Marketing", icon: <TvMinimalPlay size={16} /> },
        { name: "AI ML", icon: <Bot size={16} /> },
        { name: "Development", icon: <Code size={16} /> },
        { name: "Business", icon: <Briefcase size={16} /> },
        { name: "Finance & Accounting", icon: <PieChart size={16} /> },
        { name: "IT & Software", icon: <Monitor size={16} /> },
        { name: "Office Productivity", icon: <FileText size={16} /> },
        { name: "Personal Development", icon: <User size={16} /> },
        { name: "Design", icon: <PenTool size={16} /> },
        { name: "Marketing", icon: <Target size={16} /> },
    ]

    const close = () => setOpen(false)

    return (
        <nav className="flex h-[72px] items-center border-b border-gray-200 px-4 md:px-6 gap-4 w-full max-w-[1440px] mx-auto bg-white/95 backdrop-blur-sm sticky top-0 z-50">

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex items-center bg-white">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="shrink-0">
                            <Menu size={24} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[500px] bg-white border-r-0 shadow-2xl z-[100] text-black overflow-y-auto">
                        <SheetHeader className="text-left mb-6 border-b pb-4">
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2 font-bold mb-4">
                                <Link href="/login" onClick={close} className="py-2 hover:text-brand-primary">
                                    Log in
                                </Link>
                                <Link href="/signup" onClick={close} className="py-2 hover:text-brand-primary">
                                    Sign up
                                </Link>
                            </div>
                            <hr />
                            <div className="flex flex-col gap-2 font-medium">
                                <h3 className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Categories</h3>
                                {categories.map((cat, i) => (
                                    <Link key={i} href="#" onClick={close} className="py-2 flex justify-between items-center group">
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400 group-hover:text-brand-primary transition-colors">{cat.icon}</span>
                                            <span className="group-hover:text-brand-primary transition-colors">{cat.name}</span>
                                        </div>
                                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:text-brand-primary transition-all group-hover:translate-x-1" />
                                    </Link>
                                ))}
                            </div>
                            <hr />
                            <div className="flex flex-col gap-2 font-medium">
                                <Link href="#" onClick={close} className="py-2 hover:text-brand-primary">
                                    Eduverde Business
                                </Link>
                                <Link href="#" onClick={close} className="py-2 hover:text-brand-primary">
                                    Teach on Eduverde
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 shrink-0 pr-2">
                <Image
                    src="/images/logo.png"
                    alt="Eduverde Logo"
                    width={91}
                    height={34}
                    className="h-[34px] w-auto object-contain"
                />
            </Link>

            {/* Desktop Categories Menu */}
            <div className="hidden lg:flex shrink-0 z-50">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:text-brand-primary text-[13px] cursor-pointer font-normal px-3 h-10 hover:bg-transparent">
                                Categories
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-1 p-1 md:w-[250px] md:max-h-[calc(100vh-3rem)] md:overflow-y-auto grid-cols-1 bg-white shadow-2xl rounded-2xl text-[#1c1d1f] border border-gray-300">
                                    {categories.map((component, idx) => (
                                        <li key={idx}>
                                            <NavigationMenuLink asChild>
                                                <a href="#" className="flex items-center text-sm gap-3 select-none rounded-xl p-1 leading-none no-underline outline-none transition-all duration-300 hover:bg-brand-primary/5 hover:text-brand-primary group font-medium">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500 group-hover:bg-white group-hover:text-brand-primary group-hover:shadow-sm transition-all duration-300">
                                                        {component.icon}
                                                    </div>
                                                    {component.name}
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Search Bar */}
            <div className="flex-1 relative hidden md:block group h-12">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-text-primary">
                    <Search size={18} />
                </div>
                <Input
                    className="pl-12 h-full w-full rounded-full bg-[#f7f9fa] focus-visible:ring-0 focus:bg-white transition-all placeholder:text-text-secondary text-sm"
                    placeholder="Search for anything"
                />
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-4 ml-2 shrink-0">
                <Link href="/courses" className="text-[13px] font-normal text-text-primary hover:text-brand-primary transition-colors whitespace-nowrap">
                    Courses
                </Link>
                <Link href="#" className="text-[13px] font-normal text-text-primary hover:text-brand-primary transition-colors whitespace-nowrap">
                    Eduverde+
                </Link>
                <Link href="#" className="text-[13px] font-normal text-text-primary hover:text-brand-primary transition-colors whitespace-nowrap">
                    Teach on Eduverde
                </Link>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-1 ml-auto shrink-0 h-full">
                <div className="hidden sm:flex items-center">
                    <Button variant="ghost" size="icon" className="text-text-primary hover:bg-transparent hover:text-brand-primary h-full w-12 cursor-pointer">
                        <ShoppingCart size={20} strokeWidth={1.5} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-text-primary hover:bg-transparent hover:text-brand-primary h-full w-12 cursor-pointer">
                        <Bell size={20} strokeWidth={1.5} />
                    </Button>
                </div>

                <div className="flex items-center gap-2 ml-2">
                    <Button variant="outline" asChild className="hidden md:flex border-text-primary text-text-primary hover:bg-[#f7f9fa] rounded-none px-4 h-10 font-bold cursor-pointer">
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button asChild className="hidden md:flex bg-brand-primary text-white hover:bg-brand-secondary rounded-none px-4 h-10 font-bold cursor-pointer">
                        <Link href="/signup">Sign up</Link>
                    </Button>
                </div>

                <Button variant="ghost" size="icon" className="md:hidden ml-1">
                    <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden ml-1">
                    <ShoppingCart size={20} />
                </Button>
            </div>

        </nav>
    )
}