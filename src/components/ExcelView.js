// import React, { useState, useEffect } from 'react';
//    import axios from 'axios';

//    function ExcelView() {
//      const [registrations, setRegistrations] = useState([]);

//      useEffect(() => {
//        const fetchRegistrations = async () => {
//          try {
//            const response = await axios.get('http://localhost:5000/api/register');
//            setRegistrations(response.data);
//          } catch (error) {
//            console.error('Error fetching registrations', error);
//          }
//        };

//        fetchRegistrations();
//      }, []);

//      const downloadExcel = async () => {
//        try {
//          const response = await axios.get('http://localhost:5000/api/excel/download', {
//            responseType: 'blob',
//          });
//          const url = window.URL.createObjectURL(new Blob([response.data]));
//          const link = document.createElement('a');
//          link.href = url;
//          link.setAttribute('download', 'registrations.xlsx');
//          document.body.appendChild(link);
//          link.click();
//        } catch (error) {
//          console.error('Error downloading Excel file', error);
//        }
//      };

//      return (
//        <div className="min-h-screen flex items-center justify-center bg-gray-100">
//          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
//            <h1 className="text-3xl font-bold mb-6 text-center">بيانات المسجلين</h1>
//            <button
//              onClick={downloadExcel}
//              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 mb-4"
//            >
//              تحميل ملف Excel
//            </button>
//            <table className="min-w-full bg-white">
//              <thead>
//                <tr>
//                  <th className="py-2">الاسم</th>
//                  <th className="py-2">البلد</th>
//                  <th className="py-2">رقم الهاتف</th>
//                  <th className="py-2">تاريخ الميلاد</th>
//                  <th className="py-2">عدد الأجزاء</th>
//                  <th className="py-2">شهادة الميلاد</th>
//                </tr>
//              </thead>
//              <tbody>
//                {registrations.map((registration) => (
//                  <tr key={registration._id}>
//                    <td className="py-2">{registration.name}</td>
//                    <td className="py-2">{registration.country}</td>
//                    <td className="py-2">{registration.phone}</td>
//                    <td className="py-2">{new Date(registration.dob).toLocaleDateString()}</td>
//                    <td className="py-2">{registration.parts}</td>
//                    <td className="py-2">
//                      <a href={`http://localhost:5000/${registration.birthCertificate}`} target="_blank" rel="noopener noreferrer">
//                        عرض
//                      </a>
//                    </td>
//                  </tr>
//                ))}
//              </tbody>
//            </table>
//          </div>
//        </div>
//      );
//    }

//    export default ExcelView;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import { useNavigate,Link, NavLink } from "react-router-dom";
// import PublicPage from '../components/PublicPage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faHome, faUser, faEdit, faCog, faAdd } from '@fortawesome/free-solid-svg-icons';

// function ExcelView() {
//   const [view, setView] = useState(localStorage.getItem("view") || "initial");

//   const [registrations, setRegistrations] = useState([]);
//   const [editingId, setEditingId] = useState(null);
// const [editData, setEditData] = useState({});
// const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// const handleEdit = (registration) => {
//   setEditingId(registration._id);
//   setEditData({ ...registration });
// };

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setEditData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

// const handleSave = async () => {
//   try {
//     await axios.put(`http://localhost:5000/api/register/${editingId}`, editData);
//     setRegistrations((prev) =>
//       prev.map((item) => (item._id === editingId ? editData : item))
//     );
//     setEditingId(null); // الخروج من وضع التعديل
//   } catch (error) {
//     console.error('Error updating registration:', error);
//   }
// };

// const handleCancel = () => {
//   setEditingId(null);
// };
//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/register');
//         setRegistrations(response.data);
//       } catch (error) {
//         console.error('Error fetching registrations', error);
//       }
//     };

//     fetchRegistrations();
//   }, []);

//   const downloadExcel = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/excel/download', {
//         responseType: 'blob',
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'registrations.xlsx');
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading Excel file', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('هل تريد حذف هذا المسجل؟')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/register/${id}`);
//         setRegistrations(registrations.filter((r) => r._id !== id));
//       } catch (error) {
//         console.error('Error deleting registration:', error);
//       }
//     }
//   };

//   const resetView = () => {
//     setView("initial");
//     localStorage.removeItem("view");
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const Sidebar = ({ isOpen, toggle }) => (
//     <div
//         className={`bg-blue-900 text-white h-screen p-4 fixed z-50 transition-transform duration-300 w-64
//             ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//             sm:translate-x-0`} // مهم: هنا نضمن الظهور على الشاشات الكبيرة
//     >
//         <button className="text-xl mb-6 focus:outline-none sm:hidden" onClick={toggle}>
//             <FontAwesomeIcon icon={faBars} />
//         </button>
//         <ul className="space-y-4">
//           <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//             <NavLink to="/">
//               <FontAwesomeIcon icon={faHome} className="text-lg" />
//               <span className="ml-3 hidden sm:inline text-lg">
//                 الصفحة الرئيسية
//               </span>
//             </NavLink>
//           </li>
//           <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//             <NavLink to="/excel">
//               <FontAwesomeIcon icon={faUser} className="text-lg" />
//               <span className="ml-3 hidden sm:inline text-lg">
//                 عرض المتسابقين
//               </span>
//             </NavLink>
//           </li>
//           <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//             <NavLink to="/edit-public">
//               <FontAwesomeIcon icon={faEdit} className="text-lg" />
//               <span className="ml-3 hidden sm:inline text-lg">تعديل الاعلان</span>
//             </NavLink>
//           </li>
//           <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//             <NavLink to="/RegistrationForm">
//               <FontAwesomeIcon icon={faAdd} className="text-lg" />
//               <span className="ml-3 hidden sm:inline text-lg">تسجيل متسابق</span>
//             </NavLink>
//           </li>
//           {view === "organizer" && (
//             <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//               <button
//                 onClick={resetView}
//                 className="w-full bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 تغيير الحالة
//               </button>
//             </li>
//           )}
//         </ul>
//       </div>
//     );

//   return (

//     <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col sm:flex-row">
//  <Sidebar />

// <div className="flex-1 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 view min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 m-6">
//   <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-full">
//     <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center h1">بيانات المتسابقين</h1>
//     <button
//       onClick={downloadExcel}
//       className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 mb-4 w-full sm:w-auto"
//     >
//       تحميل ملف Excel
//     </button>
//     <div className="overflow-x-auto">

// <table className="min-w-full bg-white border border-gray-300 text-right rtl">
//   <thead className="bg-blue-100">
//     <tr>
//     <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300"></th>
//       <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">شهادة الميلاد</th>
//       <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">عدد الأجزاء</th>
//       <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">تاريخ الميلاد</th>
//       <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">رقم الهاتف</th>
//       <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">البلد</th>
//       <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">الاسم</th>

//     </tr>
//   </thead>

// <tbody>
//   {registrations.map((registration, index) => (
//     <tr
//       key={registration._id}
//       className={`hover:bg-gray-50 ${index % 2 === 0 ? '' : 'bg-gray-50'}`}
//     >
//       {editingId === registration._id ? (
//         <>
//           <td className="py-3 px-4 border-b border-gray-300 text-center">
//             <button
//               onClick={handleSave}
//               className="text-green-500 hover:text-green-700 mx-2"
//             >
//               ✔️
//             </button>
//             <button
//               onClick={handleCancel}
//               className="text-gray-500 hover:text-gray-700 mx-2"
//             >
//               ✖️
//             </button>
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">
//             <input
//               type="text"
//               name="birthCertificate"
//               value={editData.birthCertificate}
//               onChange={handleChange}
//               className="border p-1 rounded w-full"
//             />
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">
//             <input
//               type="number"
//               name="parts"
//               value={editData.parts}
//               onChange={handleChange}
//               className="border p-1 rounded w-full"
//             />
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">
//             <input
//               type="date"
//               name="dob"
//               value={new Date(editData.dob).toISOString().split('T')[0]}
//               onChange={handleChange}
//               className="border p-1 rounded w-full"
//             />
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">
//             <input
//               type="text"
//               name="phone"
//               value={editData.phone}
//               onChange={handleChange}
//               className="border p-1 rounded w-full"
//             />
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">
//             <input
//               type="text"
//               name="country"
//               value={editData.country}
//               onChange={handleChange}
//               className="border p-1 rounded w-full"
//             />
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300">
//             <input
//               type="text"
//               name="name"
//               value={editData.name}
//               onChange={handleChange}
//               className="border p-1 rounded w-full"
//             />
//           </td>
//         </>
//       ) : (
//         <>
//           <td className="py-3 px-4 border-b border-gray-300 text-center">
//             <button
//               onClick={() => handleEdit(registration)}
//               className="text-blue-500 hover:text-blue-700 mx-2"
//             >
//               ✏️
//             </button>
//             <button
//               onClick={() => handleDelete(registration._id)}
//               className="text-red-500 hover:text-red-700 mx-2"
//             >
//               🗑️
//             </button>
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r text-blue-600">
//             <a
//               href={`http://localhost:5000/${registration.birthCertificate}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline"
//             >
//               عرض
//             </a>
//           </td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">{registration.parts}</td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">{new Date(registration.dob).toLocaleDateString()}</td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">{registration.phone}</td>
//           <td className="py-3 px-4 border-b border-gray-300 border-r">{registration.country}</td>
//           <td className="py-3 px-4 border-b border-gray-300">{registration.name}</td>
//         </>
//       )}
//     </tr>
//   ))}
// </tbody>

// </table>

//     </div>
//   </div>
// </div>

// </div>

//   );
// }

// export default ExcelView;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, NavLink } from "react-router-dom";
import PublicPage from "../components/PublicPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAdd,
  faHome,
  faUser,
  faEdit,
  faCog,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function ExcelView() {
  const [view, setView] = useState(localStorage.getItem("view") || "initial");
  const [registrations, setRegistrations] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleEdit = (registration) => {
    setEditingId(registration._id);
    setEditData({ ...registration });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/register/${editingId}`,
        editData
      );
      setRegistrations((prev) =>
        prev.map((item) => (item._id === editingId ? editData : item))
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating registration:", error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/register");
        setRegistrations(response.data);
      } catch (error) {
        console.error("Error fetching registrations", error);
      }
    };

    fetchRegistrations();
  }, []);

  const downloadExcel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/excel/download",
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "registrations.xlsx");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading Excel file", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا المسجل؟")) {
      try {
        await axios.delete(`http://localhost:5000/api/register/${id}`);
        setRegistrations(registrations.filter((r) => r._id !== id));
      } catch (error) {
        console.error("Error deleting registration:", error);
      }
    }
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
              ${
                isSidebarOpen ? "translate-y-0" : "-translate-y-full"
              } sm:translate-y-0`}
      >
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
    </div>
  );

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col sm:flex-row">
    
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

      <div className="flex-1 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 view min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 m-6">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center h1">
            بيانات المتسابقين
          </h1>
          <button
            onClick={downloadExcel}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 mb-4 w-full sm:w-auto"
          >
            تحميل ملف Excel
          </button>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-right rtl">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300"></th>
                  <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">
                    شهادة الميلاد
                  </th>
                  <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">
                    عدد الأجزاء
                  </th>
                  <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">
                    تاريخ الميلاد
                  </th>
                  <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">
                    رقم الهاتف
                  </th>
                  <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">
                    البلد
                  </th>
                  <th className="py-3 px-4 text-gray-700 font-bold text-sm sm:text-lg border-b border-gray-300 border-r">
                    الاسم
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration, index) => (
                  <tr
                    key={registration._id}
                    className={`hover:bg-gray-50 ${
                      index % 2 === 0 ? "" : "bg-gray-50"
                    }`}
                  >
                    {editingId === registration._id ? (
                      <>
                        <td className="py-3 px-4 border-b border-gray-300 text-center">
                          <button
                            onClick={handleSave}
                            className="text-green-500 hover:text-green-700 mx-2"
                          >
                            ✔️
                          </button>
                          <button
                            onClick={handleCancel}
                            className="text-gray-500 hover:text-gray-700 mx-2"
                          >
                            ✖️
                          </button>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          <input
                            type="text"
                            name="birthCertificate"
                            value={editData.birthCertificate}
                            onChange={handleChange}
                            className="border p-1 rounded w-full"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          <input
                            type="number"
                            name="parts"
                            value={editData.parts}
                            onChange={handleChange}
                            className="border p-1 rounded w-full"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          <input
                            type="date"
                            name="dob"
                            value={
                              new Date(editData.dob).toISOString().split("T")[0]
                            }
                            onChange={handleChange}
                            className="border p-1 rounded w-full"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          <input
                            type="text"
                            name="phone"
                            value={editData.phone}
                            onChange={handleChange}
                            className="border p-1 rounded w-full"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          <input
                            type="text"
                            name="country"
                            value={editData.country}
                            onChange={handleChange}
                            className="border p-1 rounded w-full"
                          />
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300">
                          <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleChange}
                            className="border p-1 rounded w-full"
                          />
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-3 px-4 border-b border-gray-300 text-center">
                          <button
                            onClick={() => handleEdit(registration)}
                            className="text-blue-500 hover:text-blue-700 mx-2"
                          >
                            {/* ✏️ */}
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="text-lg"
                            />
                          </button>
                          <button
                            onClick={() => handleDelete(registration._id)}
                            className="text-red-500 hover:text-red-700 mx-2"
                          >
                            🗑️
                          </button>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r text-blue-600">
                          <a
                            href={`http://localhost:5000/${registration.birthCertificate}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            عرض
                          </a>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          {registration.parts}
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          {new Date(registration.dob).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          {registration.phone}
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300 border-r">
                          {registration.country}
                        </td>
                        <td className="py-3 px-4 border-b border-gray-300">
                          {registration.name}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default ExcelView;
