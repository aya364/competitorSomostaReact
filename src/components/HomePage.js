// import React from "react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   return (
//     <div className="homepage">
//       <h1>مرحبًا بكم في مسابقة القرآن الكريم</h1>
//       <div className="options">
//         <Link to="/register-participant" className="button">
//           التسجيل كمتسابق
//         </Link>
//         <Link to="/organizer" className="button">
//           التسجيل كصاحب المسابقة
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import axios from 'axios';
// import photo from '../images/10.jpg';
// import photo2 from '../images/9.jpg';
// import ModalImage from 'react-modal-image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faHome, faUser, faEdit, faCog } from '@fortawesome/free-solid-svg-icons';
// import Sidebar from '../components/Sidebar';
// import PublicPage from '../components/PublicPage';

// function HomePage() {
//   const [view, setView] = useState('initial');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { username, password });
//       if (response.data.success) {
//         setView('organizer');
//       } else {
//         alert('الاسم أو الرقم السري غير صحيح');
//       }
//     } catch (error) {
//       console.error('Error logging in', error);
//     }
//   };

//   const navigate = useNavigate();
//     const handleClick = () => {
//       navigate('/RegistrationForm');
//     };

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//   <div className='bg-gray-100 text-gray-900 min-h-screen flex flex-col justify-between'>
//       {view === 'initial' && (
//         <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//         <div className="text-center">
//           <button onClick={() => setView('competitor')} className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4">الدخول كمتسابق</button>
//           <button onClick={() => setView('login')} className="w-full bg-green-500 text-white py-2 px-4 rounded">الدخول كصاحب المسابقة</button>
//         </div>
//         </div>
//       )}
//       {view === 'competitor' && (
//         <PublicPage>
//   </PublicPage>
//       )}
//       {view === 'login' && (
//         <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//           <h1 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h1>
//           <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="الاسم" className="w-full mb-4 p-2 border rounded" />
//           <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="الرقم السري" className="w-full mb-4 p-2 border rounded" />
//           <button onClick={handleLogin} className="w-full bg-green-500 text-white py-2 px-4 rounded">تسجيل الدخول</button>
//         </div>
//       )}
//       {view === 'organizer' && (
//         <div classname="">
//         <sidebar isopen="{isSidebarOpen}" togglesidebar="{toggleSidebar}">
//         </sidebar>
//         <div classname="flex-1 p-4">
//          <PublicPage>
//          </PublicPage>
//         </div>
//        </div>
//       )}

// </div>

//   );
// }

// export default HomePage;

// حلو في الشريط الجانبي

// import React, { useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
// import axios from "axios";
// import PublicPage from "../components/PublicPage";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faHome,
//   faUser,
//   faEdit,
//   faAdd,
// } from "@fortawesome/free-solid-svg-icons";

// function HomePage() {
//   const [view, setView] = useState("initial");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/login", {
//         username,
//         password,
//       });
//       if (response.data.success) {
//         setView("organizer");
//       } else {
//         alert("الاسم أو الرقم السري غير صحيح");
//       }
//     } catch (error) {
//       console.error("Error logging in", error);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const Sidebar = () => (
//     <div
//       className={`bg-blue-900 text-white h-screen p-4 transition-transform duration-300 fixed z-50
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:w-64
//         sm:static sm:h-auto sm:flex sm:flex-col`}
//     >
//       <button
//         className="text-xl mb-6 focus:outline-none sm:hidden"
//         onClick={toggleSidebar}
//       >
//         <FontAwesomeIcon icon={faBars} />
//       </button>
//       <ul className="space-y-4">
//         <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//           <NavLink to="/">
//             <FontAwesomeIcon icon={faHome} className="text-lg" />
//             <span className="ml-3 hidden sm:inline text-lg">الصفحة الرئيسية</span>
//           </NavLink>
//         </li>
//         <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//           <NavLink to="/excel">
//             <FontAwesomeIcon icon={faUser} className="text-lg" />
//             <span className="ml-3 hidden sm:inline text-lg">عرض المتسابقين</span>
//           </NavLink>
//         </li>
//         <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//           <NavLink to="/edit-public">
//             <FontAwesomeIcon icon={faEdit} className="text-lg" />
//             <span className="ml-3 hidden sm:inline text-lg">تعديل الاعلان</span>
//           </NavLink>
//         </li>
//         <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
//           <NavLink to="/RegistrationForm">
//             <FontAwesomeIcon icon={faAdd} className="text-lg" />
//             <span className="ml-3 hidden sm:inline">تسجيل متسابق</span>
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );

//   return (
//     <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col sm:flex-row">
//       {/* Sidebar */}
//       {view === "organizer" && <Sidebar />}

//       {/* Main Content */}
//       <div
//         className={`flex-1 transition-all duration-300 ${
//           view === "organizer"
//             ? isSidebarOpen
//               ? "sm:ml-60 sm:pl-3"
//               : "sm:ml-0"
//             : ""
//         }`}
//       >
//         {/* Top Navbar for small screens */}
//         {view === "organizer" && (
//           <div className="bg-blue-900 text-white p-4 sm:hidden flex justify-between items-center">
//             <button onClick={toggleSidebar}>
//               <FontAwesomeIcon icon={faBars} />
//             </button>
//             {/* <span>لوحة التحكم</span> */}
//           </div>
//         )}

//         {view === "initial" && (
//           <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <div className="text-center">
//               <button
//                 onClick={() => setView("competitor")}
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4"
//               >
//                 الدخول كمتسابق
//               </button>
//               <button
//                 onClick={() => setView("login")}
//                 className="w-full bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 الدخول كصاحب المسابقة
//               </button>
//             </div>
//           </div>
//         )}
//         {view === "competitor" && (
//           <div className="flex-1">
//             <PublicPage />
//           </div>
//         )}
//         {view === "login" && (
//           <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <h1 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h1>
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               placeholder="الاسم"
//               className="w-full mb-4 p-2 border rounded"
//             />
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="الرقم السري"
//               className="w-full mb-4 p-2 border rounded"
//             />
//             <button
//               onClick={handleLogin}
//               className="w-full bg-green-500 text-white py-2 px-4 rounded"
//             >
//               تسجيل الدخول
//             </button>
//           </div>
//         )}
//         {view === "organizer" && <PublicPage />}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// الصحيح

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";
// import PublicPage from "../components/PublicPage";

// function HomePage() {
//   const [view, setView] = useState(localStorage.getItem("view") || "initial");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/login", {
//         username,
//         password,
//       });
//       if (response.data.success) {
//         setView("organizer");
//         localStorage.setItem("view", "organizer");
//       } else {
//         alert("الاسم أو الرقم السري غير صحيح");
//       }
//     } catch (error) {
//       console.error("Error logging in", error);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const resetView = () => {
//     setView("initial");
//     localStorage.removeItem("view");
//   };

//   useEffect(() => {
//     if (view !== "initial") {
//       localStorage.setItem("view", view);
//     }
//   }, [view]);

//   return (
//     <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col sm:flex-row">
//       {view === "organizer" && (
//         <Sidebar
//           isSidebarOpen={isSidebarOpen}
//           toggleSidebar={toggleSidebar}
//           resetView={resetView}
//         />
//       )}

//       <div className={`flex-1 transition-all duration-300`}>
//         {view === "initial" && (
//           <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <div className="text-center">
//               <button
//                 onClick={() => setView("competitor")}
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4"
//               >
//                 الدخول كمتسابق
//               </button>
//               <button
//                 onClick={() => setView("login")}
//                 className="w-full bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 الدخول كصاحب المسابقة
//               </button>
//             </div>
//           </div>
//         )}
//         {view === "competitor" && <PublicPage />}
//         {view === "login" && (
//           <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <h1 className="text-2xl font-bold mb-4 text-center">
//               تسجيل الدخول
//             </h1>
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               placeholder="الاسم"
//               className="w-full mb-4 p-2 border rounded"
//             />
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="الرقم السري"
//               className="w-full mb-4 p-2 border rounded"
//             />
//             <button
//               onClick={handleLogin}
//               className="w-full bg-green-500 text-white py-2 px-4 rounded"
//             >
//               تسجيل الدخول
//             </button>
//           </div>
//         )}
//         {view !== "initial" && view !== "organizer" && (
//           <div className="text-center mt-4">
//             <button
//               onClick={resetView}
//               className="bg-red-500 text-white py-2 px-4 rounded"
//             >
//               تغيير الحالة
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import EditPublicPage from "../components/EditPublicPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faEdit,
  faAdd,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import photo from "../images/10.jpg";
import photo2 from "../images/9.jpg";

function HomePage() {
  const [view, setView] = useState(localStorage.getItem("view") || "initial");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (response.data.success) {
        setView("organizer");
        localStorage.setItem("view", "organizer");
      } else {
        alert("الاسم أو الرقم السري غير صحيح");
      }
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const resetView = () => {
    setView("initial");
    localStorage.removeItem("view");
  };

  useEffect(() => {
    if (view !== "initial") {
      localStorage.setItem("view", view);
    }
  }, [view]);

  const Sidebar = () => (
    <div className="">
      <div
        className={`bg-blue-900 text-white fixed sm:static top-0 left-0 sm:min-h-screen w-full sm:w-60 z-50 transition-transform duration-300
          ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          } sm:translate-y-0`}
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

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({
    title: "مسابقة القرآن الكريم رقم ٦",
    sponsor: "أولاد الحاج سعد عبدالستار جاد المولی زاید",
    prize: "خمسون ألف جنيها",
    description:
      "أولاد الحاج سعد عبد الستار قدموا هذه المسابقة إلى أهل سمسطا بالكامل كصدقة عن والدهم رحمة الله عليه ومن أجل الحفاظ على الهوية الدينية وتربية الشباب والأطفال على روح المنافسة الجميلة والنزيهة، توسعة دائرة النفع حيث يعم المركز كاملا ويفوز متسابقين جدد.",

    photo: photo,
    photo2: photo2,
    sponsors: [
      "الأستاذ رجب سعد عبدالستار ",
      "الأستاذ محمد سعد عبدالستار ",
      "الأستاذ إبراهيم سعد عبدالستار ",
    ],
    per1: "۸۰%",
    per2: "٢٠%",

    levels: [
      "تقسم المسابقة إلى ستة مستويات",
      "الأول ۳۰ جزء: السن لا يتجاوز ٣٠ سنة، قيمة الجوائز",
      "الأول ۲۲ جزء: السن لا يتجاوز ٢٥ سنة، قيمة الجوائز",
      "الأول ١٥ جزء: السن لا يتجاوز ١٥ سنة، قيمة الجوائز",
      "الأول ١٠ جزء: السن لا يتجاوز ١٢ سنة، قيمة الجوائز",
      "الأول ٧ جزء: السن لا يتجاوز ١٠ سنة، قيمة الجوائز",
      "الأول ٣ جزء: السن لا يتجاوز ٨ سنة، قيمة الجوائز",
    ],

    loc: "بيت مال مازورة",

    rest: [
      "التسجيل أون لاين عن طريق أدمن جروب مازورة الخير بصورة شهادة الميلاد أو صورة البطاقة، رقم تليفون، اسم البلد، عدد الأجزاء ولا يوجد تجاوز السن حتى لو بيوم واحد (يحسب السن من ١٨ يناير ٢٠٢٥).",
      "غير مسموح بالإشتراك لموظفي الأزهر والأوقاف.",
      "لن يقبل أي اسم بعد إنتهاء مدة التسجيل المعلن عنها.",
    ],

    judj: ["الشيخ أحمد عيسى محمود كفافي", "الشيخ ربيع عبد العظيم حسين شيمي"],
    hadeth: [
      "الشيخ شعبان سيد فراج ",
      "الشيخ محمود صديق",
      "الدكتور حسن جنيدي",
      "الشيخ زايد حسن",
      "الشيخ أحمد الخزامي",
    ],

    fdate: " ١ ديسمبر ٢٠٢٤ ",
    edate: " ۳۱ ديسمبر ٢٠٢٤ ",
    date2: "١٠ يناير ٢٠٢٥",
    date3: "١٨ يناير ٢٠٢٥",
    ramadan: "شهر رمضان المبارك عام ١٤٤٦",
    year: "2024",
  });

  const handleChange = (index, key, value) => {
    const updatedList = [...content[key]];
    updatedList[index] = value;
    setContent((prev) => ({ ...prev, [key]: updatedList }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = () => setIsEditing(false);

  const ActionButtons = ({
    isEditing,
    handleSave,
    handleCancel,
    handleEdit,
  }) => {
    return (
      <div className="container mx-auto p-4 flex justify-end space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full"
            >
              إتمام التعديل
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full"
            >
              إلغاء
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full"
          >
            تعديل الإعلان
          </button>
        )}
      </div>
    );
  };

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

{view === "organizer" && <EditPublicPage />}



{/* <div> */}
    {/* Initial View */}
    {view === "initial" && (
      <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-gray-300 flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h2 className="text-2xl font-bold text-blue-800 text-center mt-6">
            اختر طريقة الدخول
          </h2>
          <p className="text-center text-gray-600 text-sm mt-2">
            مرحبا! يمكنك الدخول كمتسابق للتسجيل ، أو كصاحب المسابقة لإدارة المسجلين
          </p>
          <div className="space-y-4 mt-8">
            <button
              onClick={() => setView("competitor")}
              className="w-full bg-[#5D8AA8] text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              الدخول كمتسابق
            </button>

            <button
              onClick={() => setView("login")}
              className="w-full bg-[#ADD8E6] text-blue text-lg py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              الدخول كصاحب المسابقة
            </button>
          </div>
        </div>
      </div>
    )}

    {/* </div> */}





        {view === "competitor" && (
          <>
            <EditPublicPage />
            <div className="text-center mt-4">
              <button
                onClick={resetView}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                تغيير الحالة
              </button>
            </div>
          </>
        )}

        {view === "login" && (
          // <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-gray-300 flex items-center justify-center p-6"> 
  <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative">
            <h1 className="text-2xl font-bold mb-4 text-center">
              تسجيل الدخول
            </h1>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="الاسم"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="الرقم السري"
              className="w-full mb-4 p-2 border rounded"
            />

            <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            تسجيل الدخول
          </button>
          </div>
          </div>
        
        )}

        {/* {view === "organizer" && (
          <>
            <EditPublicPage />
            <ActionButtons
              isEditing={isEditing}
              handleSave={handleSave}
              handleCancel={handleCancel}
              handleEdit={handleEdit}
            />
          </>
        )} */}

{/* {view === "organizer" && 
          
            // <EditPublicPage />
            <ActionButtons
              isEditing={isEditing}
              handleSave={handleSave}
              handleCancel={handleCancel}
              handleEdit={handleEdit}
            />
          
        } */}
      </div>
    </div>
  );
}

export default HomePage;
