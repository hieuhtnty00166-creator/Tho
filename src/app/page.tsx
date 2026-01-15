import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { LatestInsights } from "@/components/home/LatestInsights";
import { BrandStory } from "@/components/home/BrandStory";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />  

      <BrandStory/>

      <FeaturedProducts />

      <LatestInsights/> 

      <ContactSection />
    </div>
  )
}