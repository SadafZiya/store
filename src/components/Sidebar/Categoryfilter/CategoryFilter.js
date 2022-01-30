import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';

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
          control={
            <Checkbox
              sx={{
                color: orange[300],
                '&.Mui-checked': {
                  color: orange[400],
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
