import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import TalentCompass from './pages/TalentCompass';
// import ResumeVault from './pages/ResumeVault';
// // import AIInterviewMaestro from './pages/AIInterviewMaestro';
// import TalentEvaluator from './pages/TalentEvaluator';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/talent-compass" element={<TalentCompass />} />
//         <Route path="/resume-vault" element={<ResumeVault />} />
//         <Route path="/talent-evaluator" element={<TalentEvaluator />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
