import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RecipeFinderSection from "@/components/RecipeFinderSection";
import RecipeGrid from "@/components/RecipeGrid";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <RecipeFinderSection />
        <RecipeGrid />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
