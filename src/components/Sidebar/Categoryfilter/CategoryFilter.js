import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CategoryFilter = ({ items }) => {
  return (
    <FormGroup
      sx={{
        '& span.MuiTypography-root': {
          fontSize: '1.2rem',
        },
        '& span.MuiTypography-root:hover': {
          color: 'var(--primary)',
        },
      }}
    >
      {items.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
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
    </FormGroup>
  );
};

export default CategoryFilter;
