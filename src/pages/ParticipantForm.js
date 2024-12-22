
import React, { useState } from 'react';
import axios from 'axios';

const ParticipantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    birthDate: '',
    level: '',
    birthCertificate: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, birthCertificate: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }
    try {
      const response = await axios.post('https://competitorsomostanode-production.up.railway.app/register-participant', formPayload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'حدث خطأ أثناء التسجيل');
    }
  };

  return (
    <div dir="rtl" style={{ textAlign: 'right' }}>
      <h2>تسجيل المتسابق</h2>
      <form onSubmit={handleSubmit}>
        <label>الاسم الكامل:</label>
        <input type="text" name="name" onChange={handleChange} required />
        
        <label>البلد:</label>
        <input type="text" name="country" onChange={handleChange} required />
        
        <label>رقم الهاتف:</label>
        <input type="tel" name="phone" onChange={handleChange} required />
        
        <label>تاريخ الميلاد:</label>
        <input type="date" name="birthDate" onChange={handleChange} required />
        
        <label>اختر المستوى:</label>
        <select name="level" onChange={handleChange} required>
          <option value="">اختر المستوى</option>
          <option value="3">3 أجزاء</option>
          <option value="7">7 أجزاء</option>
          <option value="10">10 أجزاء</option>
          <option value="15">15 جزء</option>
          <option value="22">22 جزء</option>
          <option value="30">30 جزء</option>
        </select>
        
        <label>رفع شهادة الميلاد:</label>
        <input type="file" name="birthCertificate" onChange={handleFileChange} required />
        
        <button type="submit">تسجيل</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ParticipantForm;
