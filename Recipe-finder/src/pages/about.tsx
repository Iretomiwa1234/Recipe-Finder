import Header from "@/components/Header";
import RecipeFinderSection from "@/components/RecipeFinderSection";
import RecipeGrid from "@/components/RecipeGrid";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <RecipeFinderSection />
        <RecipeGrid />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
