import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FilterContext } from '../../context/filter_context';

//styles
import './StarRating.css';
export default function StarRating({ rate }) {
  const { setFilterStar, filterStar } = React.useContext(FilterContext);
  const [boldClass, setBoldClass] = useState();
  const [checking, setChecking] = useState(false);

  //todo change the start type to a radio btn

  const clickHandler = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setFilterStar({
        Star: e.target.id,
        checkedStar: true,
      });
      setBoldClass('select-bold');
    } else {
      setFilterStar({
        Star: '',
        checkedStar: false,
      });
      setBoldClass('');
    }
    setChecking(!checking);
  };
  return (
    <Stack spacing={1}>
      <div
        className={`start-rating ${boldClass}`}
        id={`star-${rate}`}
        onClick={(e) => {
          clickHandler(e);
        }}
        checked={checking}
      >
        <Rating
          name='half-rating-read'
          defaultValue={2.5}
          precision={0.5}
          readOnly
          value={rate}

          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        />
        <span style={{ cursor: 'arrow' }}> & Up</span>
      </div>
    </Stack>
  );
}
