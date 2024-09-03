// // src/pages/Home.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="container text-center mt-5">
//       <div className="jumbotron">
//         <h1 className="display-4"><i className="fas fa-file-alt"></i> Welcome to Sudarshan</h1>
//         <p className="lead">Your one-stop solution for managing and verifying your important documents securely and efficiently.</p>
//         <hr className="my-4" />
//         <p>Get started by uploading your documents or checking your verification requests.</p>
//         <Link className="btn btn-primary btn-lg me-2" to="/upload-document" role="button">
//           <i className="fas fa-upload"></i> Upload Document
//         </Link>
//         <Link className="btn btn-secondary btn-lg" to="/verification-requests" role="button">
//           <i className="fas fa-check-circle"></i> Verification Requests
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFileAlt } from 'react-icons/fa';

// function Home() {
//   return (
//     <div className="text-center">
//       <FaFileAlt size={64} className="mb-4 text-muted" />
//       <h1 className="display-4 mb-3">Welcome to Sudarshan</h1>
//       <p className="lead mb-5">Your one-stop solution for managing and verifying your important documents securely and efficiently.</p>
//       <p className="mb-4">Get started by uploading your documents or checking your verification requests.</p>
//       <div>
//         <Link to="/upload-document" className="btn btn-primary btn-lg me-3">Upload Document</Link>
//         <Link to="/verification-requests" className="btn btn-secondary btn-lg">Verification Requests</Link>
//       </div>
//     </div>
//   );
// }

// export default Home;



// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className="jumbotron">
        <FaFileAlt size={64} className="mb-4 text-muted" />
        <h1 className="display-4 mb-3">Welcome to Sudarshan</h1>
        <p className="lead mb-5">
          Your one-stop solution for managing and verifying your important documents securely and efficiently.
        </p>
        <p className="mb-4">Get started by uploading your documents or checking your verification requests.</p>
        <div className="btn-group">
          <Link to="/upload-document" className="btn btn-primary btn-lg me-3">
            <i className="fas fa-upload"></i> Upload Document
          </Link>
          <Link to="/verification-requests" className="btn btn-secondary btn-lg">
            <i className="fas fa-check-circle"></i> Verification Requests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;