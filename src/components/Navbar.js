import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFolder, FaUpload, FaCheckCircle, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">Sudarshan</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"><FaHome className="me-1" /> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-documents"><FaFolder className="me-1" /> My Documents</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upload-document"><FaUpload className="me-1" /> Upload Document</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/verification-requests"><FaCheckCircle className="me-1" /> Verification Requests</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile"><FaUser className="me-1" /> Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;