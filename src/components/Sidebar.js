
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUser, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Sidebar({ isSidebarOpen, toggleSidebar, resetView }) {
  const [view, setView] = useState(localStorage.getItem("view") || "initial");

  

  // Reset view function
  const handleResetView = () => {
    setView("initial");
    localStorage.removeItem("view");
    resetView(); // Ensure this function resets the view in the parent component
  };


  return (

    <div
          className={`bg-blue-900 text-white h-screen p-4 transition-transform duration-300 fixed z-50
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:w-64
            sm:static sm:h-auto sm:flex sm:flex-col`}
        >
          <button
            className="text-xl mb-6 focus:outline-none sm:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul className="space-y-4">
            <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
              <NavLink to="/">
                <FontAwesomeIcon icon={faHome} className="text-lg" />
                <span className="ml-3 hidden sm:inline text-lg">الصفحة الرئيسية</span>
              </NavLink>
            </li>
            <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
              <NavLink to="/excel">
                <FontAwesomeIcon icon={faUser} className="text-lg" />
                <span className="ml-3 hidden sm:inline text-lg">عرض المتسابقين</span>
              </NavLink>
            </li>
            <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
              <NavLink to="/edit-public">
                <FontAwesomeIcon icon={faEdit} className="text-lg" />
                <span className="ml-3 hidden sm:inline text-lg">تعديل الاعلان</span>
              </NavLink>
            </li>
            <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
              <NavLink to="/RegistrationForm">
                <FontAwesomeIcon icon={faAdd} className="text-lg" />
                <span className="ml-3 hidden sm:inline">تسجيل متسابق</span>
              </NavLink>
            </li>
          </ul>
        
      <button
        onClick={handleResetView} 
        className="bg-red-500 px-4 py-2 w-full mt-4"
      >
        تغيير الحالة
      </button>
    </div>
  );
}

export default Sidebar;