import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const OurRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);


  return (
    <section className="py-24">
      <div className="font-lexend text-dark text-center max-w-3xl mx-auto">
        <h2 className="font-semibold  text-4xl">Our Recipes</h2>
        <p className="mt-6 opacity-60">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      <div className="md:flex md:gap-8 mt-12">
        {/* recipe container */}
        <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
          }
        </div>
        {/* side bar container */}
        <aside className="md:w-2/5">

        </aside>
      </div>
    </section>
  );
};

export default OurRecipe;