import PropTypes from 'prop-types';
import CookTableRow from '../CookTableRow/CookTableRow';

const CookTable = ({ recipes, handlePreparingBtn, isPreparing }) => {

  return (
    <table className='w-full text-dark3 border-separate border-spacing-x-6 border-spacing-y-4'>
      <thead>
        <tr className='text-left'>
          <th></th><th>Name</th><th>Time</th><th>Calories</th>
        </tr>
      </thead>
      <tbody>
        {
          recipes.map((recipe, idx) => <CookTableRow
            key={idx}
            recipe={recipe}
            idx={idx}
            handlePreparingBtn={handlePreparingBtn}
            isPreparing={isPreparing} />)
        }
      </tbody>
      {
        (isPreparing && recipes.length) ? <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td className='w-28'>
              Total Time =
              <br />
              45 minutes
            </td>
            <td className='w-28'>
              Total Calories =
              <br />
              1050 calories
            </td>
          </tr>
        </tfoot> : <tfoot></tfoot>
      }
    </table>
  );
};

CookTable.propTypes = {
  recipes: PropTypes.array.isRequired,
  handlePreparingBtn: PropTypes.func,
  isPreparing: PropTypes.bool,
};

export default CookTable;