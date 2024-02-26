import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const BookingOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Option</FormLabel>
      <RadioGroup
        row
        aria-label="booking-options"
        name="booking-options"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <FormControlLabel value="booking" control={<Radio />} label="Booking" />
        <FormControlLabel value="walk-ins" control={<Radio />} label="Walk-ins" />
        <FormControlLabel value="both" control={<Radio />} label="Both" />
      </RadioGroup>
    </FormControl>
  );
};

export default BookingOptions;
