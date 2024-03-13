import { ThemeProvider } from '@emotion/react';
import Category from './category';
import EventsCount from './eventsCount';
import EventsForm from './eventsForm';
import ManageEvents from './manageEvents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import colorfontTheme from './colorfontTheme';
function App() {
  return (
    <ThemeProvider theme={colorfontTheme}>
    <Router>
    <Routes>
    <Route path="/" element={<Category />} />
    <Route path="/eventsCount"  element={<EventsCount />} />
    <Route path="/eventsForm" element={<EventsForm />} />
    <Route path="/manageEvents" element={<ManageEvents />} />
    </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
