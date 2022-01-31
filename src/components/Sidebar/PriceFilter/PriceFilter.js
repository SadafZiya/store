import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FilterContext } from '../../context/filter_context';

export default function PriceFilter({ items }) {
  const { setFilterPrice } = React.useContext(FilterContext);

  const handleChange = (e) => {
    setFilterPrice({
      price: e.target.id,
      checked: e.target.checked,
    });
  };

  return (
    <FormControl
      sx={{
        '& .MuiTypography-root:hover': {
          color: 'var(--primary)',
        },
      }}
    >
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
      >
        {items.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                id={item}
                onClick={(e) => handleChange(e)}
                sx={{
                  color: 'var(--link)',
                  '&.Mui-checked': {
                    color: 'var(--link)',
                  },
                }}
              />
            }
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
