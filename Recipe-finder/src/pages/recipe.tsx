import Header from "@/components/Header";
import RecipeGrid from "@/components/RecipeGrid";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Recipe = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <RecipeGrid />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Recipe;
