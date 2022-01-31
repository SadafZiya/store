import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FilterContext } from '../../context/filter_context';

//styles
import './StarRating.css';
export default function StarRating({ rate }) {
  const { setFilterStar } = React.useContext(FilterContext);

  const clickHandler = (e) => {
    console.log(e.target.id);
  };
  return (
    <Stack spacing={1}>
      <div
        className='start-rating'
        id={`star-${rate}`}
        onClick={(e) => {
          clickHandler(e);
        }}
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
        <span> & Up</span>
      </div>
    </Stack>
  );
}
