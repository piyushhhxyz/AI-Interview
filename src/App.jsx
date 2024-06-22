import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Candidates from './pages/Candidates';
import Resumes from './pages/ResumeVault';
import AIInterview from './pages/AIInterview';
import Evaluations from './pages/Evaluations';
// import TalentCompass from './pages/TalentCompass';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/ai-interview" element={<AIInterview />} />
        <Route path="/evaluations" element={<Evaluations />} />
      </Routes>
    </Router>
  );
}

export default App;