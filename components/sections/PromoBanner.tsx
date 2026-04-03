import { Button } from "@/components/ui/button";

export function PromoBanner() {
    return (
        <div className="w-full bg-[#3e4143] py-2 text-white text-center px-4">
            <p className="text-sm md:text-base font-bold">
                Ready to get started? <span className="font-normal opacity-90 mx-2">Personalize your learning journey with a few questions.</span>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-none h-8 px-4 font-bold ml-4 text-sm">Get started</Button>
            </p>
        </div>
    );
}
