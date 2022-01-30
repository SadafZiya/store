import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

//styles
import './StarRating.css';
export default function StarRating({ rate }) {
  //   const [value, setValue] = React.useState(2);
  return (
    <Stack spacing={1}>
      {/* <Rating name='half-rating' defaultValue={2.5} precision={0.5} /> */}
      <div className='start-rating'>
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
