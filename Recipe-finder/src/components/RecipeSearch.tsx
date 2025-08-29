import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeSearch({ searchRecipes }: { searchRecipes: (query: string) => boolean }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = searchRecipes(query);

    if (found) {
      navigate(`/recipe/${query}`); // Or wherever your results page is
    } else {
      navigate("/something_is_wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 max-w-md mx-auto mb-12"
    >
      <input
        type="text"
        name="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipe here ..."
        required
        className="border border-primary text-primary w-full rounded py-2 px-6 text-sm"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
      >
        Search
      </button>
    </form>
  );
}

export default RecipeSearch;
