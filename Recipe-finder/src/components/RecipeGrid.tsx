import { Card, CardContent } from "@/components/ui/card";
import cheeseburgerImg from "@/assets/cheese-burger.jpg";
import saladImg from "@/assets/green-salad.jpg";
import pastaImg from "@/assets/pasta-dish.jpg";

const recipes = [
  {
    id: 1,
    title: "Cheese Burger",
    description: "Juicy beef patty with melted cheese, fresh lettuce, and tomatoes on a golden bun.",
    image: cheeseburgerImg,
    cookTime: "25 min"
  },
  {
    id: 2,
    title: "Green Salad",
    description: "Fresh mixed greens with cherry tomatoes, cucumbers, and house vinaigrette.",
    image: saladImg,
    cookTime: "10 min"
  },
  {
    id: 3,
    title: "Creamy Pasta",
    description: "Rich and creamy pasta with herbs, parmesan cheese, and aromatic seasonings.",
    image: pastaImg,
    cookTime: "20 min"
  },
];

const RecipeGrid = () => {
  return (
    <section className="py-20 mb-6 bg-background">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-warm-brown mb-2">Food Recipes</h2>
          <hr className="w-[6%] h-[3px] mb-4 mx-auto bg-[hsl(var(--primary))] rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delicious menu made simple. Filter by occasion, cuisine, time, or dietary needs. Find exactly what you're hungry for.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {recipe.cookTime}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-warm-brown mb-2">{recipe.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{recipe.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeGrid;