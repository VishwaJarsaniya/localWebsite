import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', 
    },
    background: {
      default: '#00FF00', 
    },
  },
//   components: {
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#FFF', // Change Paper component background color to white
//         },
//       },
//     },
//   },
});

export default theme;
