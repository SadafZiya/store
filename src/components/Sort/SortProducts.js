import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//styles
import './SortProducts.css';

const SortProducts = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='sort-products'>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id='demo-simple-select-standard-label'>Sort by:</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={age}
          onChange={handleChange}
          label='feature'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Price: Low to High</MenuItem>
          <MenuItem value={20}>Price: High to Low</MenuItem>
          <MenuItem value={30}>Popularity: Low To High</MenuItem>
          <MenuItem value={40}>Popularity: High To Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortProducts;
