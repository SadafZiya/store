import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FilterContext } from '../../context/filter_context';

const CategoryFilter = ({ items }) => {
  const { setFilterCategory } = React.useContext(FilterContext);

  const handleChange = (e) => {
    if (e.target.checked) {
      setFilterCategory({
        category: e.target.id,
        checked: e.target.checked,
      });
    } else {
      setFilterCategory({
        category: '',
        checked: e.target.checked,
      });
    }
  };
  //click on a element and check id its checked or not

  //filter the cards after we checked the situation
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
};

export default CategoryFilter;
