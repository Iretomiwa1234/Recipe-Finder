import { useState } from "react";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.target);

  try {
    const res = await fetch("https://formsubmit.co/adeiretomiwa@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json", // 👈 important
      },
    });

    if (res.ok) {
      e.target.reset(); // clear input
      window.location.href = "/thank_you"; // redirect back to your app (optional)
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("⚠️ Error sending subscription.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <footer className="bg-warm-brown text-white py-20">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-2xl font-bold text-primary">Recipe</h3>
              <span className="text-2xl font-bold text-white">Finder</span>
            </div>
            <p className="text-cream text-sm leading-relaxed mb-4">
              Discover amazing recipes from around the world. Perfect meals for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/adeyemo.aderonke.796" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="https://wa.me/qr/JWDDU3RGMZU2E1" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-sm">@</span>
              </a>
              <a href="https://www.linkedin.com/in/aderonke-adeyemo-2a2297302/" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="https://www.instagram.com/iretomi1/" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>
          
          {/* Contact Us Column */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <hr className="w-[16%] h-[2px] mb-6 bg-[hsl(var(--primary))] rounded-full" />
            <div className="space-y-4 text-cream text-sm">
              <p>123 Recipe Street, Foodie City, Lagos State</p>
              <p>Phone: +234 (81) 6087-6081</p>
              <p>Email: info@recipefinder.com</p>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Search Links</h4>
            <hr className="w-[16%] h-[2px] mb-6 bg-[hsl(var(--primary))] rounded-full" />
            <div className="space-y-3">
              <a href="/" className="block text-cream hover:text-primary transition-colors text-sm">Home</a>
              <a href="/recipe" className="block text-cream hover:text-primary transition-colors text-sm">Recipes</a>
              <a href="/about" className="block text-cream hover:text-primary transition-colors text-sm">About</a>
              <a href="/contact" className="block text-cream hover:text-primary transition-colors text-sm">Contact</a>
            </div>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <hr className="w-[16%] h-[2px] mb-6 bg-[hsl(var(--primary))] rounded-full" />
            <p className="text-cream text-sm mb-4">
              Subscribe to receive updates on new recipes and cooking tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input type="hidden" name="_next" value="/thank_you" />
  <input type="hidden" name="_captcha" value="false" />
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 mb-2 rounded bg-white/10 border border-white/20 text-white placeholder-cream/70 text-sm"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-white py-2 rounded text-sm font-medium transition-colors"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-cream text-sm">
            © 2025 Recipe Finder All Rights Reserved. Designed by Aderonke
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
