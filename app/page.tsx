import { PromoBanner } from "@/components/sections/PromoBanner";
import { Hero } from "@/components/sections/Hero";
import { GoogleAISection } from "@/components/sections/GoogleAISection";
import { EduverdeBusiness } from "@/components/sections/EduverdeBusiness";
import { SkillsTabs } from "@/components/sections/SkillsTabs";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { CareerGrid } from "@/components/sections/CareerGrid";
import { TrendingCourses } from "@/components/sections/TrendingCourses";
import { GetStarted } from "@/components/sections/GetStarted";
import { PopularSkills } from "@/components/sections/PopularSkills";
import { FinalLinks } from "@/components/sections/FinalLinks";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white font-sans text-[#2d2f31] overflow-hidden">
      <PromoBanner />
      <Hero />
      <GoogleAISection />
      <EduverdeBusiness />
      <SkillsTabs />
      <SocialProof />
      <Testimonials />
      <CareerGrid />
      <TrendingCourses />
      <GetStarted />
      <PopularSkills />
    </div>
  );
}
