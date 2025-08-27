import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-5 text-warm-brown">404</h1>
        <p className="text-primary font-medium text-xl mb-3">Oops! Recipe Not Found</p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-4">The recipe page you're looking for might have been removed, renamed, or is temporarily unavailable.</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-2 text-lg">
            <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
