// // src/pages/Profile.js

// import React, { useState } from 'react';

// const Profile = () => {
//   // Sample Data (Replace with dynamic data as needed)
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle profile update logic here
//     alert('Profile updated successfully!');
//   };

//   return (
//     <div className="container mt-5">
//       <h2><i className="fas fa-user"></i> Profile</h2>
//       <form onSubmit={handleSubmit} className="mt-3">
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             <i className="fas fa-user"></i> Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={profile.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             <i className="fas fa-envelope"></i> Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={profile.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             <i className="fas fa-lock"></i> Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={profile.password}
//             onChange={handleChange}
//             placeholder="Enter new password"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           <i className="fas fa-save"></i> Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;


import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  // Sample user data (replace with dynamic data as needed)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://icons8.com/l/3d/images/2_thumb_up_man_1.webp', // Replace with actual profile picture URL
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <motion.img
            src={user.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <h1 className="text-3xl font-semibold text-center mb-4">{user.name}</h1>
        <p className="text-center text-gray-600 mb-4">{user.email}</p>

        {/* Profile Details Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
          <p className="mb-2"><span className="font-semibold">Name:</span> {user.name}</p>
          <p className="mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
          {/* Add more user details as needed */}
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">Edit Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
