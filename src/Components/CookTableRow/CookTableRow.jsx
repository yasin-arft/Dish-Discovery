import PropTypes from 'prop-types';

const CookTableRow = ({ recipe, idx, handlePreparingBtn, isPreparing }) => {
  const { recipe_name, preparing_time, calories } = recipe;
  console.log(isPreparing);

  return (
    <tr className='text-left space-x-6'>
      <td className='text-dark2 opacity-80'>{idx + 1}</td>
      <td className=''>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      {
        (!isPreparing) ? <td>
          <button onClick={() => handlePreparingBtn(recipe)} className='btn h-auto min-h-0 bg-green rounded-full py-3 font-lexend font-medium'>Preparing</button>
        </td> : <td></td>
      }
    </tr>
  );
};

CookTableRow.propTypes = {
  recipe: PropTypes.object.isRequired,
  idx: PropTypes.number,
  handlePreparingBtn: PropTypes.func,
  isPreparing: PropTypes.bool,
};

export default CookTableRow;