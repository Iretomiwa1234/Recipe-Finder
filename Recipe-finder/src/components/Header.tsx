import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/40 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">Recipe</h1>
          <span className="text-2xl font-bold text-warm-brown">Finder</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="/recipe" className="text-foreground hover:text-primary transition-colors">My Recipe</a>
          <a href="/testimonies" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Desktop Sign In */}
        <Button variant="outline" className="hidden md:block">
          Sign In
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start space-y-8 px-6 py-8 bg-background/95 backdrop-blur-md border-t border-border h-[100vh]">
          <a href="/" className="block w-full text-foreground hover:text-primary transition-colors">Home</a>
          <a href="/about" className="block w-full text-foreground hover:text-primary transition-colors">About</a>
          <a href="/recipe" className="block w-full text-foreground hover:text-primary transition-colors">My Recipe</a>
          <a href="/testimonies" className="block w-full text-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="/contact" className="block w-full text-foreground hover:text-primary transition-colors">Contact</a>
          <Button variant="outline" className="w-full">Sign In</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
