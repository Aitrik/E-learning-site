import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalLinks() {
    return (
        <section className="w-full py-12 px-4 bg-[#1c1d1f] border-t border-white/10">
            <div className="max-w-[1340px] mx-auto flex flex-wrap justify-between items-center gap-6">
                <div className="flex gap-12 opacity-60 grayscale scale-90">
                    <span className="text-white font-bold text-xl">pwc</span>
                    <span className="text-white font-bold text-xl">Citi</span>
                    <span className="text-white font-bold text-xl italic">Vimeo</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="rounded-none border-white text-white hover:bg-white/10 h-10 px-4 font-bold flex items-center gap-2">
                        <Globe size={16} /> English
                    </Button>
                </div>
            </div>
        </section>
    );
}
