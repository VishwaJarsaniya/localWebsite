import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Chip, FormControlLabel, Checkbox, FormGroup } from '@mui/material';

function FacilitySelector({ facilities }) {
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleFacilityChange = (event) => {
    const facility = event.target.value;
    setSelectedFacilities((prevSelected) =>
      prevSelected.includes(facility)
        ? prevSelected.filter((selected) => selected !== facility)
        : [...prevSelected, facility]
    );
  };

  return (
    <FormControl>
      <InputLabel id="facility-selector-label">Select Facilities</InputLabel>
      <Select
        labelId="facility-selector-label"
        id="facility-selector"
        multiple
        value={selectedFacilities}
        onChange={handleFacilityChange}
        renderValue={(selected) => (
          <div>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </div>
        )}
      >
        <FormGroup>
          {facilities.map((facility) => (
            <MenuItem key={facility} value={facility}>
              <FormControlLabel
                control={<Checkbox checked={selectedFacilities.includes(facility)} />}
                label={facility}
              />
            </MenuItem>
          ))}
        </FormGroup>
      </Select>
    </FormControl>
  );
}

export default FacilitySelector;
