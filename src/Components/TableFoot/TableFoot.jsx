import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const TableFoot = ({ recipes }) => {
  
  const [preparingTime, setPreparingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  
  let newPreparingTime = 0;
  let newTotalCal = 0;

  recipes.forEach(recipe => {
    newPreparingTime += recipe.preparing_time;
    newTotalCal += recipe.calories;
  });

  useEffect(() => {
    setPreparingTime(newPreparingTime);
    setTotalCalories(newTotalCal);
  }, [newPreparingTime, newTotalCal]);

  return (
    <tfoot>
      <tr>
        <td></td>
        <td></td>
        <td className='w-28'>
          Total Time =
          <br />
          {preparingTime} minutes
        </td>
        <td className='w-28'>
          Total Calories =
          <br />
          {totalCalories} calories
        </td>
      </tr>
    </tfoot>
  );
};

TableFoot.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default TableFoot;