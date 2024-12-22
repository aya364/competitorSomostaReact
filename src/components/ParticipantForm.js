
// import React, { useState, useRef } from 'react';
// import axios from 'axios';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     country: '',
//     phone: '',
//     dob: '',
//     parts: '30',
//     birthCertificate: null,
//   });

//   // إنشاء ref لحقل ملف شهادة الميلاد
//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const age = calculateAge(new Date(formData.dob));
//     const valid = validateAge(age, parseInt(formData.parts));

//     if (!valid) {
//       alert('العمر غير مناسب مع المستوى المختار');
//       return;
//     }

//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/register', data);
//       if (response.data.success) {
//         alert('تم التسجيل بنجاح');

//         // إعادة تعيين الخانات إلى القيم الافتراضية
//         setFormData({
//           name: '',
//           country: '',
//           phone: '',
//           dob: '',
//           parts: '30',
//           birthCertificate: null,
//         });

//         // تنظيف حقل الملف باستخدام ref
//         if (fileInputRef.current) {
//           fileInputRef.current.value = null;
//         }
//       } else {
//         alert('حدث خطأ أثناء التسجيل');
//       }
//     } catch (error) {
//       console.error('Error submitting form', error);
//       alert('حدث خطأ أثناء التسجيل');
//     }
//   };

//   const calculateAge = (dob) => {
//     const today = new Date();
//     let age = today.getFullYear() - dob.getFullYear();
//     const monthDiff = today.getMonth() - dob.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//       age--;
//     }
//     return age;
//   };

//   const validateAge = (age, parts) => {
//     if ((parts === 30 && age <= 30) ||
//         (parts === 22 && age <= 25) ||
//         (parts === 15 && age <= 15) ||
//         (parts === 10 && age <= 12) ||
//         (parts === 7 && age <= 10) ||
//         (parts === 3 && age <= 6)) {
//       return true;
//     }
//     return false;
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8">
//       <div className="bg-white rounded-lg shadow-lg max-w-lg w-full participant-form p-6 sm:p-8">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center h1">مسابقة القرآن الكريم</h1>
//         <form id="registrationForm" className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">البلد</label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="dob" className="block text-sm font-medium text-gray-700">تاريخ الميلاد</label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="parts" className="block text-sm font-medium text-gray-700">عدد الأجزاء</label>
//             <select
//               id="parts"
//               name="parts"
//               value={formData.parts}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//               onChange={handleChange}
//             >
//               <option value="30">30 جزء</option>
//               <option value="22">22 جزء</option>
//               <option value="15">15 جزء</option>
//               <option value="10">10 أجزاء</option>
//               <option value="7">7 أجزاء</option>
//               <option value="3">3 أجزاء</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="birthCertificate" className="block text-sm font-medium text-gray-700">رفع صورة شهادة الميلاد</label>
//             <input
//               type="file"
//               id="birthCertificate"
//               name="birthCertificate"
//               ref={fileInputRef} // ربط عنصر الإدخال بـ ref
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               تسجيل
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm;







import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faEdit, faCog, faAdd,faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate,Link, NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {

  const [view, setView] = useState(localStorage.getItem("view") || "initial");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  


  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    dob: '',
    parts: '30',
    birthCertificate: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const age = calculateAge(new Date(formData.dob));
    const valid = validateAge(age, parseInt(formData.parts));

    if (!valid) {
      alert('العمر غير مناسب مع المستوى ');
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', data);
      if (response.data.success) {
        alert('تم التسجيل بنجاح');
        setFormData({
          name: '',
          country: '',
          phone: '',
          dob: '',
          parts: '30',
          birthCertificate: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      } else {
        alert('حدث خطأ أثناء التسجيل');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('حدث خطأ أثناء التسجيل');
    }
  };

  const calculateAge = (dob) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  const validateAge = (age, parts) => {
    if ((parts === 30 && age <= 30) ||
        (parts === 22 && age <= 25) ||
        (parts === 15 && age <= 15) ||
        (parts === 10 && age <= 12) ||
        (parts === 7 && age <= 10) ||
        (parts === 3 && age <= 8)) {
      return true;
    }
    return false;
  };



  const resetView = () => {
    setView("initial");
    localStorage.removeItem("view");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const Sidebar = () => (
      <div className="">
        
        <div
          className={`bg-blue-900 text-white fixed sm:static top-0 left-0 sm:min-h-screen w-full sm:w-60 z-50 transition-transform duration-300
            ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"} sm:translate-y-0`}
        >
          {/* Sidebar close button for small screens */}
          <button
            className="text-xl mb-6 focus:outline-none sm:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          <ul className="space-y-4 p-4">
                  <NavLink to="/">
                    <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
                      
                        <FontAwesomeIcon icon={faHome} className="text-lg" />
                        <span className="ml-3 text-lg">الصفحة الرئيسية</span>
                      
                    </li>
                    </NavLink>
                    <NavLink to="/excel">
                    <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
                        <FontAwesomeIcon icon={faUser} className="text-lg" />
                        <span className="ml-3 text-lg">عرض المتسابقين</span>
                    </li>
                    </NavLink>
                    <NavLink to="/RegistrationForm">
                    <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
                        <FontAwesomeIcon icon={faAdd} className="text-lg" />
                        <span className="ml-3 text-lg">تسجيل متسابق</span>
                      
                    </li>
                    </NavLink>
                    {view === "organizer" && (
                      <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
                        <button
                          onClick={resetView}
                          className="w-full bg-red-500 text-white py-2 px-4 rounded"
                        >
                          تغيير الحالة
                        </button>
                      </li>
                    )}
                  </ul>
        </div>
    
        {/* FAB button for small screens */}
        {/* <button
          className="text-xl p-3 bg-blue-900 text-white rounded-full fixed top-4 right-4 z-50 sm:hidden"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button> */}
      </div>
    );

  return (


    <div className="registration-page bg-gray-100 text-gray-900 min-h-screen flex flex-col sm:flex-row">
    {view === "organizer" && <Sidebar />}
    
          {/* Main Content */}
          <div
            className={`flex-1 transition-all duration-300 ${
              view === "organizer"
                ? isSidebarOpen
                  ? "sm:ml-60 sm:pl-3"
                  : "sm:ml-0"
                : ""
            }`}
          >
            {/* Top Navbar for small screens */}
            {view === "organizer" && (
              <div className="bg-blue-900 text-white p-4 sm:hidden flex justify-between items-center">
                <button onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            )}
  
    <div className="flex-1 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full participant-form p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center h1">مسابقة القرآن الكريم</h1>
        <form id="registrationForm" className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="compLabel block text-lg font-medium text-gray-700 text-right">الاسم</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country" className="compLabel block text-lg font-medium text-gray-700 text-right">البلد</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="compLabel block text-lg font-medium text-gray-700 text-right">رقم الهاتف</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="dob" className="compLabel block text-lg font-medium text-gray-700 text-right">تاريخ الميلاد</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="parts" className="compLabel block text-lg font-medium text-gray-700 text-right">عدد الأجزاء</label>
            <select
              id="parts"
              name="parts"
              value={formData.parts}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleChange}
            >
              <option value="30"> (لا يزيد عن 30 سنة) 30 جزء </option>
              <option value="22">(لا يزيد عن 25 سنة) 22 جزء </option>
              <option value="15">(لا يزيد عن 15 سنة) 15 أجزاء </option>
              <option value="10">(لا يزيد عن 12 سنة) 10 أجزاء  </option>
              <option value="7">(لا يزيد عن 10 سنوات) 7 أجزاء </option>
              <option value="3">(لا يزيد عن 8 سنوات) 3 أجزاء</option>
            </select>
          </div>
          <div>
            <label htmlFor="birthCertificate" className="compLabel block text-lg font-medium text-gray-700 text-right">رفع صورة شهادة الميلاد</label>
            <input
              type="file"
              id="birthCertificate"
              name="birthCertificate"
              ref={fileInputRef}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              تسجيل
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>


  </div>
  

    
  );
}

export default RegistrationForm;
