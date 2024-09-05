// // src/pages/Generate.js
// import React from 'react';
// import { motion } from 'framer-motion';

// const Generate = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-6">
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <motion.h2
//           className="text-3xl font-bold text-gray-800 mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Generate Document
//         </motion.h2>
//         <motion.p
//           className="text-gray-700 mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           Here you can generate your documents. Provide the necessary details below.
//         </motion.p>
//         {/* Add your form or content here */}
//       </div>
//     </div>
//   );
// };

// export default Generate;


// src/pages/Generate.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Generate = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    aadhar: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Validate Aadhar number
    if (formData.aadhar) {
      const aadharNumber = formData.aadhar.replace(/\s+/g, ''); // Remove any whitespace
      if (aadharNumber.length < 12) {
        newErrors.aadhar = 'Aadhar number must be exactly 12 digits.';
        valid = false;
      } else if (!/^\d{12}$/.test(aadharNumber)) {
        newErrors.aadhar = 'Aadhar number must be numeric.';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log('Form data:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Generate Document
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Please fill in the details below to generate your document.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-gray-700 text-sm font-semibold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-gray-700 text-sm font-semibold mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              defaultValue=""
              className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="aadhar" className="block text-gray-700 text-sm font-semibold mb-2">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              placeholder="Enter your Aadhar number"
              className={`block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.aadhar ? 'border-red-500' : ''}`}
              maxLength="12"
              required
            />
            {errors.aadhar && <p className="text-red-600 text-sm mt-1">{errors.aadhar}</p>}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition-transform transform-gpu"
            whileHover={{ scale: 1.05 }}
          >
            Generate
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Generate;
