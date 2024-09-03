// src/pages/MyDocuments.js

import React from 'react';

const MyDocuments = () => {
  // Sample Data (Replace with dynamic data as needed)
  const documents = [
    {
      id: 1,
      title: 'Birth Certificate',
      type: 'Birth Certificate',
      status: 'Verified',
    },
    {
      id: 2,
      title: 'Academic Transcript',
      type: 'Academic Transcript',
      status: 'Pending',
    },
    // Add more documents as needed
  ];

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Verified':
        return 'text-success';
      case 'Pending':
        return 'text-warning';
      case 'Rejected':
        return 'text-danger';
      default:
        return 'text-secondary';
    }
  };

  return (
    <div className="container mt-5">
      <h2><i className="fas fa-folder"></i> My Documents</h2>
      <div className="row">
        {documents.map((doc) => (
          <div className="col-md-4" key={doc.id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-file-alt"></i> {doc.title}</h5>
                <p className="card-text"><i className="fas fa-id-card"></i> Type: {doc.type}</p>
                <p className={`card-text ${getStatusColor(doc.status)}`}>
                  <i className="fas fa-check-circle"></i> Status: {doc.status}
                </p>
                <a href="#" className="btn btn-primary">
                  <i className="fas fa-eye"></i> View Document
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* Add more cards dynamically */}
      </div>
    </div>
  );
};

export default MyDocuments;
