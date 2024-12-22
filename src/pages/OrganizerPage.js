


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
      const response = await axios.post('https://competitorsomostanode-production.up.railway.app/register-organizer', organizer);
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
