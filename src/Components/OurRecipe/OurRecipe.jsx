import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import CookTable from "../CookTable/CookTable";
import PropTypes from 'prop-types';

const OurRecipe = ({ handleToast }) => {
  const [recipes, setRecipes] = useState([]);
  const [wantCooks, setWantCooks] = useState([]);
  const [currentlyCookings, setCurrentlyCookings] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const handleWantCookBtn = (recipe) => {
    const isExist = wantCooks.find(item => item.id === recipe.id);
    isExist ? handleToast() : setWantCooks([...wantCooks, recipe]);
  };

  const handlePreparingBtn = (recipe) => {
    const newWantCooks = wantCooks.filter(wantCook => recipe.id !== wantCook.id);
    setWantCooks(newWantCooks);
    setCurrentlyCookings([...currentlyCookings, recipe]);
  }

  return (
    <section className="py-12 md:my-16 lg:py-20 xl:py-24">
      <div className="font-lexend text-dark text-center max-w-3xl mx-auto">
        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">Our Recipes</h2>
        <p className="mt-4 md:mt-6 opacity-60">Explore diverse culinary creations curated for every taste. From quick meals to gourmet delights, find inspiration for every occasion. Start your flavorful journey with Our Recipes today!</p>
      </div>
      <div className="lg:flex lg:gap-8 mt-6 md:mt-10 lg:mt-12">
        {/* recipe container */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            recipes.map(recipe => <RecipeCard
              key={recipe.id}
              recipe={recipe}
              handleWantCookBtn={handleWantCookBtn} />)
          }
        </div>
        {/* side bar container */}
        <aside className="mt-8 lg:mt-0 lg:w-2/5">
          {/* want to cook */}
          <div className="overflow-auto">
            <h2 className='text-2xl font-semibold font-lexend text-center'>Want to cook: {wantCooks.length}</h2>
            <hr className='mt-4 mb-6 opacity-10' />
            <CookTable recipes={wantCooks} handlePreparingBtn={handlePreparingBtn} isPreparing={false} />
          </div>

          {/* currently cooking */}
          <div className="overflow-auto">
            <h2 className='text-2xl font-semibold font-lexend text-center mt-8'>Currently cooking: {currentlyCookings.length}</h2>
            <hr className='mt-4 mb-6 opacity-10' />
            <CookTable recipes={currentlyCookings} isPreparing={true} />
          </div>
        </aside>
      </div>
    </section>
  );
};

OurRecipe.propTypes = {
  handleToast: PropTypes.func,
};

export default OurRecipe;