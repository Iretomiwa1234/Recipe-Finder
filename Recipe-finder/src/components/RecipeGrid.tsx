import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Card, CardContent } from "@/components/ui/card";



const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const navigate = useNavigate(); 

  const endpointURL = import.meta.env.VITE_API_URL; 

  // Fetch recipes
  const fetchRecipes = async (query = "chicken") => {
    const res = await fetch(`${endpointURL}${query}`)
    const data = await res.json();

    if (!data.meals) {
      navigate("/something_is_wrong");
      return;
    }

    setRecipes(data.meals);
  };

  useEffect(() => {
    fetchRecipes(); // load some default recipes
  }, []);

  // Extract ingredients + measures
  const getIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 3; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  return (
    <section className="py-20 mb-6">
      <div className="container mx-auto px-12">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-warm-brown mb-2">
            Food Recipes
          </h2>
          <hr className="w-[6%] h-[3px] mb-4 mx-auto bg-[hsl(var(--primary))] rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search for delicious recipes, explore ingredients, and learn how to
            cook them step-by-step.
          </p>
        </div>

        {/* Search bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchRecipes(search);
          }}
          className="flex items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="p-2 flex w-full">
            <input
              type="text"
              placeholder="Search for recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow border border-primary text-gray-700 focus:outline-none rounded-l-full py-2 pl-5 pr-5 text-sm shadow-sm"
            />
            <button
              type="submit"
              className="bg-[hsl(var(--primary))] text-white px-6 py-2 text-sm font-medium rounded-r-full hover:bg-opacity-90 transition shadow-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Recipe cards OR detail view */}
        {selectedRecipe ? (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="text-sm mb-4 text-primary hover:underline"
            >
              ← Back to recipes
            </button>
            <h2 className="text-3xl font-bold mb-4">
              {selectedRecipe.strMeal}
            </h2>
            <img
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
              className="w-full h-80 object-cover rounded mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground">
              {getIngredients(selectedRecipe).map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <p className="text-muted-foreground whitespace-pre-line mb-6">
              {selectedRecipe.strInstructions}
            </p>
            {selectedRecipe.strYoutube && (
              <div className="mb-6">
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${selectedRecipe.strYoutube.split("v=")[1]}`}
                  title="YouTube video"
                  className="rounded"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {selectedRecipe.strSource && (
              <a
                href={selectedRecipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                View Full Recipe Source →
              </a>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card
                key={recipe.idMeal}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-warm-brown mb-2">
                    {recipe.strMeal}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {recipe.strArea} • {recipe.strCategory}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipeGrid;
