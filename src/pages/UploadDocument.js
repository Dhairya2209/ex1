// // src/pages/UploadDocument.js

// import React, { useState } from 'react';

// const UploadDocument = () => {
//   const [documentType, setDocumentType] = useState('');
//   const [documentFile, setDocumentFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert('Document submitted successfully!');
//   };

//   return (
//     <div className="container mt-5">
//       <h2><i className="fas fa-upload"></i> Upload Document</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="documentType" className="form-label">
//             <i className="fas fa-file-alt"></i> Document Type
//           </label>
//           <select
//             className="form-select"
//             id="documentType"
//             value={documentType}
//             onChange={(e) => setDocumentType(e.target.value)}
//             required
//           >
//             <option value="" disabled>Select Document Type</option>
//             <option>Birth Certificate</option>
//             <option>Academic Transcript</option>
//             <option>Identification Card</option>
//             <option>Experience Certificate</option>
//             <option>Aadhar Card</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="documentFile" className="form-label">
//             <i className="fas fa-file-upload"></i> Upload File
//           </label>
//           <input
//             type="file"
//             className="form-control"
//             id="documentFile"
//             onChange={(e) => setDocumentFile(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           <i className="fas fa-upload"></i> Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadDocument;


// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadDocument = () => {
//   const [documentType, setDocumentType] = useState('');
//   const [documentFile, setDocumentFile] = useState(null);
//   const [message, setMessage] = useState(''); // For showing success/error messages

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!documentFile) {
//       setMessage('Please select a file before submitting');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('document', documentFile); // Append the file
//     formData.append('type', documentType);     // Append the document type

//     try {
//       const res = await axios.post('http://localhost:3001/api/documents/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setMessage('Document uploaded successfully!');
//       console.log('Uploaded file:', res.data); // Check response data if needed
//     } catch (err) {
//       console.error('Error uploading document:', err);
//       setMessage('Error uploading document');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2><i className="fas fa-upload"></i> Upload Document</h2>
//       {message && <p className="alert alert-info">{message}</p>} {/* Show message if available */}
      
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="documentType" className="form-label">
//             <i className="fas fa-file-alt"></i> Document Type
//           </label>
//           <select
//             className="form-select"
//             id="documentType"
//             value={documentType}
//             onChange={(e) => setDocumentType(e.target.value)}
//             required
//           >
//             <option value="" disabled>Select Document Type</option>
//             <option>Birth Certificate</option>
//             <option>Academic Transcript</option>
//             <option>Identification Card</option>
//             <option>Experience Certificate</option>
//             <option>Aadhar Card</option>
//           </select>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="documentFile" className="form-label">
//             <i className="fas fa-file-upload"></i> Upload File
//           </label>
//           <input
//             type="file"
//             className="form-control"
//             id="documentFile"
//             onChange={(e) => setDocumentFile(e.target.files[0])}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-success">
//           <i className="fas fa-upload"></i> Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadDocument;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const UploadDocument = () => {
//   const [documentType, setDocumentType] = useState('');
//   const [documentFile, setDocumentFile] = useState(null);
//   const [message, setMessage] = useState(''); // For showing success/error messages

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!documentFile) {
//       setMessage('Please select a file before submitting');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('document', documentFile); // Append the file
//     formData.append('type', documentType);     // Append the document type

//     try {
//       const res = await axios.post('http://localhost:3001/api/documents/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setMessage('Document uploaded successfully!');
//       console.log('Uploaded file:', res.data); // Check response data if needed
//     } catch (err) {
//       console.error('Error uploading document:', err);
//       setMessage('Error uploading document');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-blue-100">
//       <motion.div
//         className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 lg:w-1/3"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
//           <i className="fas fa-upload"></i> Upload Document
//         </h2>

//         {message && (
//           <motion.p
//             className="alert alert-info text-center py-2 rounded mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4 }}
//           >
//             {message}
//           </motion.p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Document Type Dropdown */}
//           <div className="mb-3">
//             <label htmlFor="documentType" className="block text-gray-700 font-medium mb-2">
//               <i className="fas fa-file-alt"></i> Document Type
//             </label>
//             <motion.select
//               className="form-select block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="documentType"
//               value={documentType}
//               onChange={(e) => setDocumentType(e.target.value)}
//               required
//               whileFocus={{ scale: 1.02 }}
//             >
//               <option value="" disabled>Select Document Type</option>
//               <option>Birth Certificate</option>
//               <option>Academic Transcript</option>
//               <option>Identification Card</option>
//               <option>Experience Certificate</option>
//               <option>Aadhar Card</option>
//             </motion.select>
//           </div>

//           {/* File Upload */}
//           <div className="mb-3">
//             <label htmlFor="documentFile" className="block text-gray-700 font-medium mb-2">
//               <i className="fas fa-file-upload"></i> Upload File
//             </label>
//             <motion.input
//               type="file"
//               className="form-control block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="documentFile"
//               onChange={(e) => setDocumentFile(e.target.files[0])}
//               required
//               whileFocus={{ scale: 1.02 }}
//             />
//           </div>

//           {/* Submit Button */}
//           <motion.button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <i className="fas fa-upload"></i> Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default UploadDocument;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const UploadDocument = () => {
//   const [documentType, setDocumentType] = useState('');
//   const [documentFile, setDocumentFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!documentFile || !documentType) {
//       setMessage('Please select a file and document type before submitting');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('document', documentFile);
//     formData.append('type', documentType);

//     try {
//       const res = await axios.post('http://localhost:3001/api/documents/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setMessage('Document uploaded successfully!');
//       console.log('Uploaded file:', res.data);
//     } catch (err) {
//       console.error('Error uploading document:', err);
//       setMessage('Error uploading document');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-6">Upload Your Document</h2>
//       {message && <p className="text-center text-red-500 mb-4">{message}</p>}
//       <motion.form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-8 mx-auto max-w-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="mb-4">
//           <label htmlFor="documentType" className="block text-lg font-medium mb-2">Document Type</label>
//           <select
//             id="documentType"
//             value={documentType}
//             onChange={(e) => setDocumentType(e.target.value)}
//             className="form-select block w-full border-gray-300 rounded-md shadow-sm"
//             required
//           >
//             <option value="" disabled>Select Document Type</option>
//             <option>Birth Certificate</option>
//             <option>Academic Transcript</option>
//             <option>Identification Card</option>
//             <option>Experience Certificate</option>
//             <option>Aadhar Card</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="documentFile" className="block text-lg font-medium mb-2">Upload File</label>
//           <input
//             type="file"
//             id="documentFile"
//             onChange={(e) => setDocumentFile(e.target.files[0])}
//             className="form-input block w-full border-gray-300 rounded-md shadow-sm"
//             required
//           />
//         </div>

//         <div className="flex justify-center">
//           <motion.button
//             type="submit"
//             className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-600 transition duration-200"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Upload Document
//           </motion.button>
//         </div>
//       </motion.form>
//     </div>
//   );
// };

// export default UploadDocument;



// src/pages/UploadDocument.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { FaFileUpload, FaFileAlt } from 'react-icons/fa';

// const UploadDocument = () => {
//   const [documentType, setDocumentType] = useState('');
//   const [documentFile, setDocumentFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!documentFile) {
//       setMessage('Please select a file before submitting');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('document', documentFile);
//     formData.append('type', documentType);

//     try {
//       const res = await axios.post('http://localhost:3001/api/documents/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setMessage('Document uploaded successfully!');
//       console.log('Uploaded file:', res.data);
//     } catch (err) {
//       console.error('Error uploading document:', err);
//       setMessage('Error uploading document');
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-6">
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
//           <FaFileUpload className="text-blue-500 mr-2" /> Upload Document
//         </h2>
//         {message && <p className={`mb-4 p-3 rounded-md text-center ${message.includes('Error') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>{message}</p>}
        
//         <motion.form 
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-6"
//         >
//           <div>
//             <label htmlFor="documentType" className="block text-gray-700 text-sm font-semibold mb-2">
//               <FaFileAlt className="inline-block text-blue-500 mr-2" /> Document Type
//             </label>
//             <select
//               className="form-select block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               id="documentType"
//               value={documentType}
//               onChange={(e) => setDocumentType(e.target.value)}
//               required
//             >
//               <option value="" disabled>Select Document Type</option>
//               <option>Birth Certificate</option>
//               <option>Academic Transcript</option>
//               <option>Identification Card</option>
//               <option>Experience Certificate</option>
//               <option>Aadhar Card</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="documentFile" className="block text-gray-700 text-sm font-semibold mb-2">
//               <FaFileUpload className="inline-block text-blue-500 mr-2" /> Upload File
//             </label>
//             <input
//               type="file"
//               className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               id="documentFile"
//               onChange={(e) => setDocumentFile(e.target.files[0])}
//               required
//             />
//           </div>

//           <motion.button 
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition-transform transform-gpu"
//             whileHover={{ scale: 1.05 }}
//           >
//             <FaFileUpload className="inline-block mr-2" /> Submit
//           </motion.button>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default UploadDocument;



import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaFileUpload, FaFileAlt } from 'react-icons/fa';

const UploadDocument = () => {
  const [documentType, setDocumentType] = useState('');
  const [documentFile, setDocumentFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!documentFile) {
      setMessage('Please select a file before submitting');
      return;
    }

    const formData = new FormData();
    formData.append('document', documentFile);
    formData.append('type', documentType);

    try {
      const res = await axios.post('http://localhost:3001/api/documents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Document uploaded successfully!');
      console.log('Uploaded file:', res.data);
    } catch (err) {
      console.error('Error uploading document:', err);
      setMessage('Error uploading document');
    }
  };

  return (
    <div className="relative bg-gray-50 min-h-screen py-12 px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: 'url("")' }}
      ></div>
      <div className="relative z-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg opacity-90">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <FaFileUpload className="text-blue-500 mr-2" /> Verify Document
        </h2>
        {message && <p className={`mb-4 p-3 rounded-md text-center ${message.includes('Error') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>{message}</p>}
        
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="documentType" className="block text-gray-700 text-sm font-semibold mb-2">
              <FaFileAlt className="inline-block text-blue-500 mr-2" /> Document Type
            </label>
            <select
              className="form-select block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
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

          <div>
            <label htmlFor="documentFile" className="block text-gray-700 text-sm font-semibold mb-2">
              <FaFileUpload className="inline-block text-blue-500 mr-2" /> Upload File
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              id="documentFile"
              onChange={(e) => setDocumentFile(e.target.files[0])}
              required
            />
          </div>

          <motion.button 
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition-transform transform-gpu"
            whileHover={{ scale: 1.05 }}
          >
            <FaFileUpload className="inline-block mr-2" /> Submit
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default UploadDocument;

