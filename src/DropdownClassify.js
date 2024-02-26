import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const DropdownClassify = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedOption}
        onChange={handleChange}
      >
        <MenuItem value={'Restaurants'}>Restaurants</MenuItem>
        <MenuItem value={'Cafe'}>Cafe</MenuItem>
        <MenuItem value={'Bakery'}>Bakery</MenuItem>
        <MenuItem value={'Bar'}>Bar</MenuItem>
        <MenuItem value={'Club'}>Club</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropdownClassify;
