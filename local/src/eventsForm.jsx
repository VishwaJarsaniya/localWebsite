import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button , Box, TextField, Checkbox, FormControlLabel} from "@mui/material";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import light from "./images/sun.png";
import dark from "./images/dark-mode.png";
import { Switch, MenuItem, Select, InputLabel } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 630,
      sm: 800,
      md: 1000,
    },
  },
});

function EventsForm() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [description, setDescription] = useState(""); 
  const [isFreeEvent, setIsFreeEvent] = useState(false);
  const [categoryPrices, setCategoryPrices] = useState({});
  const [categoryTickets, setCategoryTickets] = useState({});
  const [categories, setCategories] = useState([]);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const handleCheckboxChange = (event) => {
    setIsMultiDay(event.target.checked);
    setSelectedDateRange([null, null]);
  };

  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };

  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  
  const handleFreeEventToggle = () => {
    setIsFreeEvent(!isFreeEvent);
  };

  const handleAddCategory = () => {
    setCategories([...categories, '']);
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  const handleCategoryPriceChange = (category, price) => {
    setCategoryPrices({
      ...categoryPrices,
      [category]: price,
    });
  };

  const handleCategoryTicketChange = (category, tickets) => {
    setCategoryTickets({
      ...categoryTickets,
      [category]: tickets,
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card style={{ background: isDarkMode ? '#28282B' : '#d4d4d4', padding: '1.7%', borderRadius: '0px', display: 'flex' }}>
        <Card style={{ position: 'relative', zIndex: 1,height:'100%', width: "85%", margin: '0 auto', marginTop: '6px', backgroundColor: isDarkMode ? '#080806' : '#f5f5f5' }}>
          <CardContent>
            <div style={{display:'flex'}}>
          <div style={{ flex: 1 }}>
            <Typography>Name of the event</Typography>
            <TextField id="filled-basic" label="Event Name" variant="filled" />

            <Typography>Who is this event organized by?</Typography>
            <Typography>(Enter self if there is no company)</Typography>
            <TextField id="filled-basic"  label="Company Name" variant="filled" />

            <Typography>Date for the event</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {isMultiDay ? (
                <React.Fragment>
                  <DatePicker
                    label="Start Date"
                    value={selectedDateRange[0]}
                    onChange={(newValue) => setSelectedDateRange([newValue, selectedDateRange[1]])}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="End Date"
                    value={selectedDateRange[1]}
                    onChange={(newValue) => setSelectedDateRange([selectedDateRange[0], newValue])}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </React.Fragment>
              ) : (
                <DatePicker
                  label="Date"
                  value={selectedDateRange[0]}
                  onChange={(newValue) => setSelectedDateRange([newValue, null])}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            </LocalizationProvider>
            <div>
              <FormControlLabel
                control={<Checkbox checked={isMultiDay} onChange={handleCheckboxChange} />}
                label="More than 1 day?"
              />
            </div>
              <Typography>Start Time</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                value={startTime}
                onChange={handleStartTimeChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography>End time</Typography>
              <TimePicker
                value={endTime}
                onChange={handleEndTimeChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Typography>Ticket Price</Typography>
            <div style={{display:'flex'}}>
            <div><Switch checked={isFreeEvent} onChange={handleFreeEventToggle} /></div>
            <div><Typography>{isFreeEvent ? 'Free event' : 'Paid event'}</Typography></div>
            </div>
            {!isFreeEvent && (
                  <React.Fragment>
                  <InputLabel >Category</InputLabel>
                  {categories.map((category, index) => (
                    <div key={index}>
                     
                      <Select
                        value={category}
                        onChange={(e) => handleCategoryChange(index, e.target.value)}
                        label={`Category ${index + 1}`}
                        style={{ width: '150px', marginRight: '10px' }}
                      >
                        <MenuItem value="VIP">VIP</MenuItem>
                        <MenuItem value="EarlyBird">Early Bird</MenuItem>
                        <MenuItem value="General">General</MenuItem>
                        <MenuItem value="Balcony">Balcony</MenuItem>
                      </Select>
                      <TextField
                        label="Price"
                        value={categoryPrices[category] || ''}
                        onChange={(e) => handleCategoryPriceChange(category, e.target.value)}
                        type="number"
                        style={{ marginRight: '10px' }}
                      />
                      <TextField
                        label="Number of Tickets"
                        value={categoryTickets[category] || ''}
                        onChange={(e) => handleCategoryTicketChange(category, e.target.value)}
                        type="number"
                        style={{ marginRight: '10px' }}
                      />
                    </div>
                  ))}
                  <Button onClick={handleAddCategory} style={{ marginTop: '10px' }}>Add Category</Button>
                </React.Fragment>
                )}
        
            </div>

            <div style={{ flex: 1 }}>
              <Typography>Description of the event</Typography>
              <TextField
              id="filled-basic"
              label="Enter a description"
              variant="filled"
              value={description}
              onChange={handleDescriptionChange}
              multiline
              rows={4}
            />
            </div>
            </div>
            </CardContent>
        </Card>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default EventsForm;
