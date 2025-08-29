import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/adeiretomiwa@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json", // 👈 required for FormSubmit
        },
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset(); // clear form
        window.location.href = "/thank_you"; // optional redirect
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("⚠️ Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-warm-brown mb-2">Get in Touch</h2>
          <hr className="w-[6%] h-[3px] mb-4 mx-auto bg-[hsl(var(--primary))] rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_next" value="/recipe" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Full Name
                    </label>
                    <Input name="name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-warm-brown mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" name="phone" placeholder="Your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-warm-brown mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
