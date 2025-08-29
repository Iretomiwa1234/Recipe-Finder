import RecipeOwner from "@/assets/recipe.png";

const RecipeFinderSection = () => {
  return (
    <section className="pt-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="relative col-md-6">
            <img 
              src={RecipeOwner} 
              alt="RecipeCurator"
              className="w-[2400px] h-[500px] object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-warm-brown mb-6">Recipe Finder</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Recipe Finder is a digital tool or service that assists in discovering recipes based on criteria or available ingredients. It allows users to search for recipes by cuisine, dietary restrictions, and more, often recommending meals tailored to their preferences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our advanced Recipe Finder is a multifunctional online resource that not only helps you find specialized recipes, but also allows you to customize your search to match your mood, cooking style, and preferences. Whether you're planning a romantic dinner, searching for a weeknight solution, or looking for the ultimate comfort food, Recipe Finder is here for you.
            </p>
            <h6 className="text-xl text-center font-bold text-center text-primary mt-5 mb-2">Adeyemo Aderonke</h6>
            <p className="text-muted-foreground text-center leading-relaxed"><i>Recipe Curator & Founder</i></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeFinderSection;
