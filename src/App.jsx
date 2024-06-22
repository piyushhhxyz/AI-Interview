import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Candidates from './pages/Candidates';
import Resumes from './pages/ResumeVault';
import AIInterview from './pages/AIInterview';
import Evaluations from './pages/Evaluations';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
        <div className="flex-1">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/ai-interview" element={<AIInterview />} />
        <Route path="/evaluations" element={<Evaluations />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;