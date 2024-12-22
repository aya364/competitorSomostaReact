// import React from "react";

// function OrganizerPage() {
//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center">
//       <div className="text-center space-y-6">
//         <h2 className="text-primary text-3xl font-bold">لوحة تحكم المنظم</h2>
//         <p className="text-secondary">تحميل ملفات Excel للمتسابقين</p>
//         <a
//           href="http://localhost:5000/participants-excel"
//           className="px-6 py-3 bg-secondary text-primary rounded-lg shadow-md hover:bg-primary hover:text-white"
//         >
//           تحميل الملف
//         </a>
//       </div>
//     </div>
//   );
// }

// export default OrganizerPage;


import React, { useState } from 'react';
import axios from 'axios';

const OrganizerForm = () => {
  const [organizer, setOrganizer] = useState({ name: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganizer({ ...organizer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register-organizer', organizer);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'حدث خطأ أثناء التسجيل');
    }
  };

  return (
    <div dir="rtl" style={{ textAlign: 'right' }}>
      <h2>تسجيل المنظم</h2>
      <form onSubmit={handleSubmit}>
        <label>اسم المنظم:</label>
        <input type="text" name="name" onChange={handleChange} required />
        
        <label>كلمة المرور:</label>
        <input type="password" name="password" onChange={handleChange} required />
        
        <button type="submit">تسجيل</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OrganizerForm;
