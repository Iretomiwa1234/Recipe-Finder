import Header from "@/components/Header";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Testimonial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonial;
