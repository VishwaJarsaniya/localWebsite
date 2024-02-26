import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const FoodDropdown = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const handleSelectChange = (event) => {
    const selectedFood = event.target.value;
    if (selectedFoods.includes(selectedFood)) {
      setSelectedFoods(selectedFoods.filter(food => food !== selectedFood));
      setSelectedCount(selectedCount - 1);
    } else if (selectedCount < 3) {
      setSelectedFoods([...selectedFoods, selectedFood]);
      setSelectedCount(selectedCount + 1);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="food-select-label">Select Food</InputLabel>
        <Select
          labelId="food-select-label"
          id="food-select"
          multiple
          value={selectedFoods}
          onChange={handleSelectChange}
          label="Select Food"
        >
          <MenuItem value="Mediterranean">Mediterranean</MenuItem>
          <MenuItem value="Mexican">Mexican</MenuItem>
          <MenuItem value="Italian">Italian</MenuItem>
          <MenuItem value="Thai">Thai</MenuItem>
          <MenuItem value="Chinese">Chinese</MenuItem>
          <MenuItem value="Bakery">Bakery</MenuItem>
          <MenuItem value="Alcohol">Alcohol</MenuItem>
          <MenuItem value="Coffee">Coffee</MenuItem>
          <MenuItem value="Continental">Continental</MenuItem>
          <MenuItem value="Indian">Indian</MenuItem>
        </Select>
      </FormControl>
      <div>
        Selected Foods: {selectedFoods.join(', ')}
      </div>
      <Button variant="contained" disabled={selectedCount === 0}>Submit</Button>
    </div>
  );
};

export default FoodDropdown;
