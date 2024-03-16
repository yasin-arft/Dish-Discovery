import PropTypes from 'prop-types';
import CookTableRow from '../CookTableRow/CookTableRow';

const CookTable = ({ wantCooks }) => {

  return (
    <table className='w-full text-dark3 border-separate border-spacing-x-6 border-spacing-y-4'>
      <thead>
        <tr className='text-left'>
          <th></th><th>Name</th><th>Time</th><th>Calories</th><th></th>
        </tr>
      </thead>
      <tbody>
        {
          wantCooks.map((wantCook, idx) => <CookTableRow
            key={wantCook.id}
            wantCook={wantCook}
            idx={idx} />)
        }
      </tbody>
    </table>
  );
};

CookTable.propTypes = {
  wantCooks: PropTypes.array.isRequired,
};

export default CookTable;