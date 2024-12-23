// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ParticipantForm from "./pages/ParticipantForm";
// import OrganizerPage from "./pages/OrganizerPage";
import "./styles.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/register-participant" element={<ParticipantForm />} />
//         <Route path="/organizer" element={<OrganizerPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ParticipantForm from './components/ParticipantForm';
// import OrganizerForm from './components/OrganizerForm';
// import Home from './components/Home';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/register-participant" element={<ParticipantForm />} />
//                 <Route path="/register-organizer" element={<OrganizerForm />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router,Route, Routes } from 'react-router-dom';
import RegistrationForm from "./components/ParticipantForm";
import PublicPage from "./components/PublicPage";
import ExcelView from "./components/ExcelView";
import HomePage from "./components/HomePage";
import EditPublicPage from "./components/EditPublicPage";
import "./App.css";
// import Sidebar from "./components/Sidebar";
// competitorsomostanode-production-1a56.up.railway.app
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        {/* <Route path="/" element={<PublicPage />} /> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Sidebar />} /> */}
        <Route path="/excel" element={<ExcelView />} />
        {/* <Route path="/" element={<EditPublicPage />} /> */}
        <Route path="/EditPublicPage" element={<EditPublicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
