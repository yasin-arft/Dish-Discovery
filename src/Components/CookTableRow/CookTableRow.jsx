import PropTypes from 'prop-types';

const CookTableRow = ({ wantCook, idx }) => {
  const { recipe_name, preparing_time, calories } = wantCook;

  return (
    <tr className='text-left space-x-6'>
      <td className='text-dark2 opacity-80'>{idx + 1}</td>
      <td className=''>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <td>
        <button className='btn h-auto min-h-0 bg-green rounded-full py-3 font-lexend font-medium'>Preparing</button>
      </td>
    </tr>
  );
};

CookTableRow.propTypes = {
  wantCook: PropTypes.object.isRequired,
  idx: PropTypes.number,
};

export default CookTableRow;