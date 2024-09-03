import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';
import MyDocuments from './pages/MyDocuments';
import UploadDocument from './pages/UploadDocument';
import VerificationRequests from './pages/VerificationRequests';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Wrapper to manage layout */}
        <Navbar />
        <div className="main-content container mt-5 mb-5"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-documents" element={<MyDocuments />} />
            <Route path="/upload-document" element={<UploadDocument />} />
            <Route path="/verification-requests" element={<VerificationRequests />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer /> {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
