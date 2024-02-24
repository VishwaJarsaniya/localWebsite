import Category from './category';
import EventsForm from './eventsForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Category />} />
    <Route path="/eventsForm"  element={<EventsForm />} />
    </Routes>
    </Router>
  );
}

export default App;
