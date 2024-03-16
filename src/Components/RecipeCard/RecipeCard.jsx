import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const RecipeCard = ({ recipe, handleWantCookBtn }) => {
  const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

  return (
    <div>
      <div className="card p-6 h-full rounded-2xl border border-[#28282833] font-firaSans text-dark2">
        <figure className='w-full max-h-[200px] rounded-2xl overflow-hidden'>
          <img src={recipe_image} alt={`${recipe_name} image`} />
        </figure>
        <div className="card-body p-0 pt-6">
          <h2 className="card-title text-xl font-semibold font-lexend">{recipe_name}</h2>
          <p className=' text-dark3'>{short_description}</p>
          <hr className='mt-4 mb-6 opacity-10' />
          <h5 className='text-lg font-medium font-lexend'>Ingredients: {ingredients.length}</h5>
          <ul className='grow text-dark3 pl-6'>
            {
              ingredients.map((ingredient, idx) => <li className='list-disc' key={idx}>{ingredient}</li>)
            }
          </ul>
          <hr className='mt-4 mb-6 opacity-10' />
          <div className='flex gap-5 opacity-80'>
            <div className='flex items-center gap-3.5'>
              <CiClock2 />
              <p>{preparing_time} minutes</p>
            </div>
            <div className='flex items-center gap-3.5'>
              <AiOutlineFire />
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions mt-6">
            <button onClick={() => handleWantCookBtn(recipe)} className="btn bg-green font-firaSans text-dark rounded-full px-6">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object,
  handleWantCookBtn: PropTypes.func,
};

export default RecipeCard;