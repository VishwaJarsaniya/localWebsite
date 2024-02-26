import Category from './category';
import EventsCount from './eventsCount';
import EventsForm from './eventsForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Category />} />
    <Route path="/eventsCount"  element={<EventsCount />} />
    <Route path="/eventsForm" element={<EventsForm />} />
    </Routes>
    </Router>
  );
}

export default App;
