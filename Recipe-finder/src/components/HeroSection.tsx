import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>
      
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Find the Perfect Recipes to Match Your Cravings
        </h1>
        
        <p className="text-lg md:text-xl text-cream mb-8 pt-6 max-w-2xl mx-auto leading-relaxed">
          Find the perfect dish for every craving — from quick weekday meals to gourmet delights. Search, save, and savor recipes made just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-2 text-lg">
            <a href="/recipe">Find Recipes</a>
          </Button>
          
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-2 text-lg"
          >
            <a href="/signup">Favorite Recipes</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
