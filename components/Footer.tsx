import Link from "next/link"
import Image from "next/image"
import { Globe, Facebook, Instagram, Linkedin, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    const footerLinks = [
        {
            title: "Eduverde Business",
            links: ["Teach on Eduverde", "Get the app", "About us", "Contact us"]
        },
        {
            title: "Careers",
            links: ["Blog", "Help and Support", "Affiliate", "Investors"]
        },
        {
            title: "Terms",
            links: ["Privacy policy", "Cookie settings", "Sitemap", "Accessibility statement"]
        }
    ]

    return (
        <footer className="w-full bg-[#1c1d1f] text-white py-12 px-4 md:px-12 mt-auto">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 border-b border-gray-700 pb-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                        {footerLinks.map((section, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                                {section.links.map((link, lIdx) => (
                                    <Link key={lIdx} href="#" className="hover:underline text-sm opacity-80 hover:opacity-100 transition-opacity">
                                        {link}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-6 items-end w-full md:w-auto">
                        <Button variant="outline" className="border-white text-white hover:bg-white/10 gap-2 rounded-none">
                            <Globe size={18} />
                            English
                        </Button>

                        <div className="flex items-center gap-6">
                            <Link href="#" className="hover:text-brand-primary transition-colors"><Facebook size={24} /></Link>
                            <Link href="#" className="hover:text-brand-primary transition-colors"><X size={24} /></Link>
                            <Link href="#" className="hover:text-brand-primary transition-colors"><Instagram size={24} /></Link>
                            <Link href="#" className="hover:text-brand-primary transition-colors"><Linkedin size={24} /></Link>
                            <Link href="#" className="hover:text-brand-primary transition-colors"><Github size={24} /></Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-8">
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="Eduverde Logo"
                            width={100}
                            height={28}
                            className="brightness-0 invert h-8 w-auto"
                        />
                    </Link>
                    <p className="text-xs text-gray-500">© 2026 Eduverde, Inc.</p>
                </div>
            </div>
        </footer>
    )
}
