// src/pages/VerificationRequests.js

import React from 'react';

const VerificationRequests = () => {
  // Sample Data (Replace with dynamic data as needed)
  const requests = [
    {
      id: 1,
      documentType: 'Birth Certificate',
      user: 'John Doe',
      dateSubmitted: '2024-08-25',
      status: 'Pending',
    },
    {
      id: 2,
      documentType: 'Academic Transcript',
      user: 'Jane Smith',
      dateSubmitted: '2024-08-20',
      status: 'Approved',
    },
    // Add more requests as needed
  ];

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
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
      <h2><i className="fas fa-check-circle"></i> Verification Requests</h2>
      <table className="table table-hover mt-3">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Document Type</th>
            <th scope="col">User</th>
            <th scope="col">Date Submitted</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <th scope="row">{req.id}</th>
              <td><i className="fas fa-file-alt"></i> {req.documentType}</td>
              <td><i className="fas fa-user"></i> {req.user}</td>
              <td><i className="fas fa-calendar-alt"></i> {req.dateSubmitted}</td>
              <td className={getStatusColor(req.status)}>
                <i className={`fas ${req.status === 'Approved' ? 'fa-check-circle' : req.status === 'Pending' ? 'fa-hourglass-half' : 'fa-times-circle'}`}></i> {req.status}
              </td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  <i className="fas fa-eye"></i> View
                </button>
                <button className="btn btn-secondary btn-sm">
                  <i className="fas fa-edit"></i> Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerificationRequests;
