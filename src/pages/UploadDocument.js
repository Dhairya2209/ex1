// src/pages/UploadDocument.js

import React, { useState } from 'react';

const UploadDocument = () => {
  const [documentType, setDocumentType] = useState('');
  const [documentFile, setDocumentFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Document submitted successfully!');
  };

  return (
    <div className="container mt-5">
      <h2><i className="fas fa-upload"></i> Upload Document</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="documentType" className="form-label">
            <i className="fas fa-file-alt"></i> Document Type
          </label>
          <select
            className="form-select"
            id="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            required
          >
            <option value="" disabled>Select Document Type</option>
            <option>Birth Certificate</option>
            <option>Academic Transcript</option>
            <option>Identification Card</option>
            <option>Experience Certificate</option>
            <option>Aadhar Card</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="documentFile" className="form-label">
            <i className="fas fa-file-upload"></i> Upload File
          </label>
          <input
            type="file"
            className="form-control"
            id="documentFile"
            onChange={(e) => setDocumentFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-upload"></i> Submit
        </button>
      </form>
    </div>
  );
};

export default UploadDocument;
