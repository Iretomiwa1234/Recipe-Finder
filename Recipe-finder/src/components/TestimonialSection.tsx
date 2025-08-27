import { Card, CardContent } from "@/components/ui/card";


const TestimonialSection = () => {
  return (
    <section className="py-24 bg-warm-brown text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-golden"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Happy Users Review</h2>
          <p className="text-xl text-cream max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied users who have transformed their cooking experience.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-golden text-2xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-xl text-cream mb-6 italic leading-relaxed">
                "Exactly! I have been searching this kind of platform for so many months but I couldn't find any! This is so helpful in finding quick & healthy meals."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">Food Critic</h4>
                  <p className="text-cream text-sm">Verified User</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;