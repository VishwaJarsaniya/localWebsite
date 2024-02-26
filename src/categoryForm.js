// import React, { useState } from "react";
// import {Box,TextField,Typography,MenuItem,Select,InputLabel,Button,Grid} from "@mui/material";
// import { MuiFileInput } from 'mui-file-input';
// import dayjs from "dayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TimeField } from "@mui/x-date-pickers";
// import CurrencyTextField from "@unicef/material-ui-currency-textfield";
// import FacilitySelector from "./FacilitySelector";
// import DropdownClassify from "./DropdownClassify";
// import FoodDropdown from "./FoodDropdown";
// import BookingOptions from "./BookingOptions";
// import ReviewEventPopup from "./ReviewEventPopup";

// function CategoryForm() {
//   const facilities = ["Facility 1", "Facility 2", "Facility 3"];
//   const [startTime, setStartTime] = useState(dayjs("2022-04-17T15:30"));
//   const [endTime, setEndTime] = useState(dayjs("2022-04-17T15:30"));
//   const [startDay, setStartDay] = useState("");
//   const [endDay, setEndDay] = useState("");
//   const [price, setPrice] = useState("");
//   const [bannerImg, setBannerImg] = useState(null)
//   const [vibeImg, setVibeImg] = useState(null)
//   const [menuImg, setMenuImg] = useState(null)

//   const handleBannerImgChange = bannerImg => {
//     setBannerImg(bannerImg)
//   }
//   const handleVibeImgChange = vibeImg => {
//     setVibeImg(vibeImg)
//   }
//   const handleMenuImgChange = menuImg => {
//     setMenuImg(menuImg)
//   }
//   const handleStartTime = (event) => {
//     setStartTime(event.target.value);
//   };
//   const handleEndTime = (event) => {
//     setEndTime(event.target.value);
//   };
//   const handleStartDay = (event) => {
//     setStartDay(event.target.value);
//   };
//   const handleEndDay = (event) => {
//     setEndDay(event.target.value);
//   };
//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//   };

//   return (
//     <form action="" method="post">
//       <Box sx={{ boxShadow: 2 }}>
//         <Grid container spacing={2}>
//           <Box sx={{ mt: 1 }}>
//             <Typography htmlFor="name">
//               Provide the name of your business
//             </Typography>
//             <TextField
//               margin="normal"
//               required
//               id="name"
//               label="Name of the business"
//               name="name"
//               autoComplete="name"
//             />
//             <Typography htmlFor="location">Where are you located?</Typography>
//             <TextField
//               margin="normal"
//               required
//               id="location"
//               label="Start typing the location"
//               name="location"
//               autoComplete="location"
//             />
//             <Typography htmlFor="timing">Timings of the business</Typography>
//             <p>
//               <InputLabel>Start Day</InputLabel>
//               <Select
//                 id="demo-simple-select-helper"
//                 value={startDay}
//                 label="Start Day"
//                 onChange={handleStartDay}
//               >
//                 <MenuItem value="">
//                   <em></em>
//                 </MenuItem>
//                 <MenuItem value={1}>Monday</MenuItem>
//                 <MenuItem value={2}>Tuesday</MenuItem>
//                 <MenuItem value={3}>Wednesday</MenuItem>
//                 <MenuItem value={4}>Thursday</MenuItem>
//                 <MenuItem value={5}>Friday</MenuItem>
//               </Select>
//               <InputLabel>End Day</InputLabel>
//               <Select
//                 id="demo-simple-select-helper"
//                 value={endDay}
//                 label="End Day"
//                 onChange={handleEndDay}
//               >
//                 <MenuItem value="">
//                   <em></em>
//                 </MenuItem>
//                 <MenuItem value={10}>Monday</MenuItem>
//                 <MenuItem value={20}>Tuesday</MenuItem>
//                 <MenuItem value={30}>Wednesday</MenuItem>
//                 <MenuItem value={30}>Thursday</MenuItem>
//                 <MenuItem value={30}>Friday</MenuItem>
//               </Select>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DemoContainer components={["TimeField, TimeField"]}>
//                   <TimeField
//                     label="Start Time"
//                     value={startTime}
//                     onChange={handleStartTime}
//                   />
//                   <TimeField
//                     label="End Time"
//                     value={endTime}
//                     onChange={handleEndTime}
//                   />
//                 </DemoContainer>
//               </LocalizationProvider>
//               <Button variant="outlined">+ Add Timings</Button>
//             </p>
//             <Typography htmlFor="price">Price for two</Typography>
//             <CurrencyTextField
//               label="Amount"
//               variant="outlined"
//               value={price}
//               currencySymbol="$"
//               outputFormat="string"
//               onChange={handlePriceChange}
//             />
//             {/* <Typography htmlFor="fac">Choose the facilities you provide</Typography>
//           <FacilitySelector facilities={facilities} /> */}

//             <Typography htmlFor="cuisine">What do you Classify as?</Typography>
//             <FoodDropdown />
//             <Typography htmlFor="fac">What do you Classify as?</Typography>
//             <DropdownClassify />
//           </Box>
//         </Grid>
//         <Grid container spacing={2}>
//           <Typography htmlFor="banner">Upload Banner for Business</Typography>
//           <MuiFileInput
//             inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
//             value={bannerImg}
//             onChange={handleBannerImgChange}
//             multiple
//             size="small"
//           />
//           <Typography htmlFor="vibe">Upload Pictures of the Vibe</Typography>
//           <MuiFileInput
//             inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
//             value={vibeImg}
//             onChange={handleVibeImgChange}
//             multiple
//             size="small"
//           />
//           <Typography htmlFor="menu">Upload Pictures of the Menu</Typography>
//           <MuiFileInput
//             inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
//             value={menuImg}
//             onChange={handleMenuImgChange}
//             multiple
//             size="small"
//           />
//           <Typography htmlFor="bookingOptions">: Do you take bookings or walk-in or both?</Typography>
//           <BookingOptions/>
//         </Grid>
//         <ReviewEventPopup/>
//         <Button color="primary">Save Draft</Button>
//       </Box>
//     </form>
//   );
// }

// export default CategoryForm;

import React, { useState } from "react";
import { Box, TextField, Typography, MenuItem, Select, InputLabel, Button, Grid, ThemeProvider } from "@mui/material";
import { MuiFileInput } from 'mui-file-input';
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import FacilitySelector from "./FacilitySelector";
import DropdownClassify from "./DropdownClassify";
import FoodDropdown from "./FoodDropdown";
import BookingOptions from "./BookingOptions";
import ReviewEventPopup from "./ReviewEventPopup";
import theme from "./theme";


function CategoryForm() {
  const facilities = ["Facility 1", "Facility 2", "Facility 3"];
  const [startTime, setStartTime] = useState(dayjs("2022-04-17T15:30"));
  const [endTime, setEndTime] = useState(dayjs("2022-04-17T15:30"));
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [price, setPrice] = useState("");
  const [bannerImg, setBannerImg] = useState(null)
  const [vibeImg, setVibeImg] = useState(null)
  const [menuImg, setMenuImg] = useState(null)

  const handleBannerImgChange = bannerImg => {
    setBannerImg(bannerImg)
  }
  const handleVibeImgChange = vibeImg => {
    setVibeImg(vibeImg)
  }
  const handleMenuImgChange = menuImg => {
    setMenuImg(menuImg)
  }
  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const handleEndTime = (event) => {
    setEndTime(event.target.value);
  };
  const handleStartDay = (event) => {
    setStartDay(event.target.value);
  };
  const handleEndDay = (event) => {
    setEndDay(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
    <form action="" method="post">
      <Box sx={{ boxShadow: 3, p: 3, m:3 }}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>Provide the name of your business</Typography>
          <TextField
              margin="normal"
              required
              id="name"
              label="Name of the business"
              name="name"
              autoComplete="name"
          />
          <Typography variant="h6" sx={{ mb: 2 }}>Where are you located?</Typography>
            <TextField
              margin="normal"
              required
              id="location"
              label="Start typing the location"
              name="location"
              autoComplete="location"
            />
            <Typography variant="h6" sx={{ mb: 2 }}>Timings of the business</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel>Start Day</InputLabel>
                <Select
                  value={startDay}
                  label="Start Day"
                  onChange={handleStartDay}
                  fullWidth
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={1}>Monday</MenuItem>
                  <MenuItem value={2}>Tuesday</MenuItem>
                  <MenuItem value={3}>Wednesday</MenuItem>
                  <MenuItem value={4}>Thursday</MenuItem>
                  <MenuItem value={5}>Friday</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel>End Day</InputLabel>
                <Select
                  value={endDay}
                  label="End Day"
                  onChange={handleEndDay}
                  fullWidth
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={10}>Monday</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={40}>Thursday</MenuItem>
                  <MenuItem value={50}>Friday</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimeField, TimeField"]}>
                <TimeField
                  label="Start Time"
                  value={startTime}
                  onChange={handleStartTime}
                />
                <TimeField
                  label="End Time"
                  value={endTime}
                  onChange={handleEndTime}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Button variant="outlined">+ Add Timings</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>Price for two</Typography>
            <CurrencyTextField
              label="Amount"
              variant="outlined"
              value={price}
              currencySymbol="$"
              outputFormat="string"
              onChange={handlePriceChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>What do you Classify as?</Typography>
            <FoodDropdown />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>What do you Classify as?</Typography>
            <DropdownClassify />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>Upload Banner for Business</Typography>
            <MuiFileInput
              inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
              value={bannerImg}
              onChange={handleBannerImgChange}
              multiple
              size="small"
            />
            <Typography variant="h6" sx={{ mb: 2 }}>Upload Pictures of the Vibe</Typography>
            <MuiFileInput
              inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
              value={vibeImg}
              onChange={handleVibeImgChange}
              multiple
              size="small"
            />
            <Typography variant="h6" sx={{ mb: 2 }}>Upload Pictures of the Menu</Typography>
            <MuiFileInput
              inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
              value={menuImg}
              onChange={handleMenuImgChange}
              multiple
              size="small"
            />
            <Typography variant="h6" sx={{ mb: 2 }}>Do you take bookings or walk-in or both?</Typography>
            <BookingOptions />
          </Grid>
          <Grid item xs={12}>
            <ReviewEventPopup />
            <Button variant="contained" color="primary">Save Draft</Button>
          </Grid>
      </Box>
    </form>
    </ThemeProvider>
  );
}

export default CategoryForm;
