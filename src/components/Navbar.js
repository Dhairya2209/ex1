// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaFolder, FaUpload, FaCheckCircle, FaUser } from 'react-icons/fa';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container">
//         <Link className="navbar-brand" to="/">Sudarshan</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/"><FaHome className="me-1" /> Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/my-documents"><FaFolder className="me-1" /> My Documents</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/upload-document"><FaUpload className="me-1" /> Upload Document</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/verification-requests"><FaCheckCircle className="me-1" /> Verification Requests</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/profile"><FaUser className="me-1" /> Profile</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUpload, FaFolder, FaUserCircle, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-3xl font-bold flex items-center space-x-2">
          <FaFileAlt className="text-4xl text-yellow-300" />
          <span className="text-white drop-shadow-lg">Sudarshan</span>
        </Link>

        {/* Links */}
        <div className="space-x-8 flex items-center">
          {/* Home */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FaHome className="text-2xl" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link
            to="/generate"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FaFileAlt className="text-2xl" />
            <span className="hidden sm:inline">Generate</span>
          </Link>

          {/* Upload Document */}
          <Link
            to="/upload"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FaUpload className="text-2xl" />
            <span className="hidden sm:inline">Verify</span>
          </Link>

          {/* My Documents */}
          {/* <Link
            to="/my-documents"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FaFolder className="text-2xl" />
            <span className="hidden sm:inline">My Documents</span>
          </Link> */}

         

          {/* Profile */}
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-white text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FaUserCircle className="text-2xl" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
