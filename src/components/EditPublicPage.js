import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ModalImage from "react-modal-image"; // تأكد من تثبيت هذا الحزمة باستخدام npm أو yarn
import photo from "../images/10.jpg";
import photo2 from "../images/9.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faEdit,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";

function EditPublicPage() {
  const navigate = useNavigate();

  const [view, setView] = useState(localStorage.getItem("view") || "initial");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div
      className={`bg-blue-900 text-white h-screen p-4 transition-transform duration-300 fixed z-50
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 sm:w-64
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
            <span className="ml-3 hidden sm:inline text-lg">
              الصفحة الرئيسية
            </span>
          </NavLink>
        </li>
        <li className="nav-link flex items-center cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded">
          <NavLink to="/excel">
            <FontAwesomeIcon icon={faUser} className="text-lg" />
            <span className="ml-3 hidden sm:inline text-lg">
              عرض المتسابقين
            </span>
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
            <span className="ml-3 hidden sm:inline text-lg">تسجيل متسابق</span>
          </NavLink>
        </li>
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
  );

  // حالة إدارة التعديل
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({
    title: "مسابقة القرآن الكريم ",
    titlen: "رقم 6",
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
      " الأول ۳۰ جزء: السن لا يتجاوز ٣٠ سنة، قيمة الجوائز ١١٦٠٠ جنيها ",
      "الأول ۲۲ جزء: السن لا يتجاوز ٢٥ سنة، قيمة الجوائز ١٠٠٥٠ جنيها ",
      "الأول ١٥ جزء: السن لا يتجاوز ١٥ سنة، قيمة الجوائز ٨٦٥٠ جنيها",
      "الأول ١٠ جزء: السن لا يتجاوز ١٢ سنة، قيمة الجوائز ٧٤٠٠ جنيها",
      "الأول ٧ جزء: السن لا يتجاوز ١٠ سنة، قيمة الجوائز ٦٣٠٠ جنيها",
      "الأول ٣ جزء: السن لا يتجاوز ٨ سنة، قيمة الجوائز ٥٣٥٠ جنيها",
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

  // const handleChange = (index, key, value) => {
  //   const updatedList = [...content[key]];
  //   updatedList[index] = value;
  //   setContent((prev) => ({ ...prev, [key]: updatedList }));
  // };

  // const handleEdit = () => setIsEditing(true);
  // const handleCancel = () => setIsEditing(false);
  // const handleSave = () => setIsEditing(false);

  const handleClick = () => {
    navigate("/RegistrationForm");
  };

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
      {/* {view === "organizer" && <Sidebar />} */}

      <div
        className={`flex-1 transition-all duration-300 ${
          view === "organizer"
            ? isSidebarOpen
              ? "sm:ml-60 sm:pl-3"
              : "sm:ml-0"
            : ""
        }`}
      >
        {/* {view === "organizer" && (
          <div className="bg-blue-900 text-white p-4 sm:hidden flex justify-between items-center">
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        )} */}

        <div
          dir="rtl"
          className="bg-gray-100 text-gray-900 min-h-screen flex flex-col justify-between"
        >
          <div className="container mx-auto p-4">
            <div className="public bg-white shadow-lg rounded-lg overflow-hidden">
              {isEditing ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleChange(
                      "photo",
                      URL.createObjectURL(e.target.files[0])
                    )
                  }
                  className="w-full h-64 object-cover cursor-pointer"
                />
              ) : (
                <img
                  src={content.photo}
                  alt="صورة توضيحية للمسابقة"
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                {isEditing ? (
                  <input
                    type="text"
                    value={content.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="text-5xl font-bold mb-4 text-center text-blue-700 w-full p-2 border border-gray-300 rounded inline"
                  />
                ) : (
                  <div className="flex justify-center items-center w-full">
                    <h1 className="text-5xl font-bold mb-4 text-center text-blue-700">
                      {content.title}
                      {isEditing ? (
                        <input
                          type="text"
                          value={content.titlen}
                          onChange={(e) =>
                            handleChange("titlen", e.target.value)
                          }
                          className="text-5xl font-bold mb-4 text-center text-blue-700 w-full p-2 border border-gray-300 rounded"
                        />
                      ) : (
                        <span className="text-3xl font-bold mb-4 text-center text-red-700">
                          {content.titlen}
                        </span>
                      )}
                    </h1>
                  </div>
                )}

                <p className="text-lg mb-4 text-center">
                  برعاية{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      value={content.sponsor}
                      onChange={(e) => handleChange("sponsor", e.target.value)}
                      className="text-lg font-bold text-green-600 w-full p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    <span className="text-lg font-bold text-green-600">
                      {content.sponsor}
                    </span>
                  )}
                </p>

                <p className="text-lg mb-4 text-center">
                  المسابقة بقيمة جوائز مالية{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      value={content.prize}
                      onChange={(e) => handleChange("prize", e.target.value)}
                      className="text-red-600 text-2xl font-bold underline w-full p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    <span className="text-red-600 text-2xl font-bold underline">
                      {content.prize}
                    </span>
                  )}
                </p>

                <p className="text-lg mb-4 leading-relaxed">
                  {isEditing ? (
                    <textarea
                      value={content.description}
                      onChange={(e) =>
                        handleChange("description", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    content.description
                  )}
                </p>
                <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
                  رعاة المسابقة
                </h2>
                <ul className="mb-4 space-y-2">
                  {content.sponsors &&
                    content.sponsors.map((sponsor, index) => (
                      <li
                        key={index}
                        className={`bg-green-100 p-2 rounded-lg shadow-md ${
                          isEditing ? "flex space-x-2" : ""
                        }`}
                      >
                        {isEditing ? (
                          <input
                            type="text"
                            value={sponsor}
                            onChange={(e) =>
                              handleChange(index, "name", e.target.value)
                            }
                            className="bg-green-100 p-2 rounded-lg shadow-md w-full"
                          />
                        ) : (
                          <span>{sponsor}</span>
                        )}
                      </li>
                    ))}
                </ul>
                <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
                  التحكيم
                </h2>
                <p className="text-lg mb-4">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={content.per1}
                        onChange={(e) => handleChange("per1", e.target.value)}
                        className="text-blue-700 font-bold text-2xl w-full"
                      />
                      <input
                        type="text"
                        value={content.per2}
                        onChange={(e) => handleChange("per2", e.target.value)}
                        className="text-blue-700 font-bold text-2xl w-full"
                      />
                    </>
                  ) : (
                    <>
                      <span className="text-blue-700 font-bold text-2xl">
                        {content.per1}
                      </span>{" "}
                      القرآن الكريم{" "}
                      <span className="text-blue-700 font-bold text-2xl">
                        {content.per2}
                      </span>{" "}
                      السيرة النبوية
                    </>
                  )}
                </p>

                <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
                  تقسم المسابقة إلى ستة مستويات
                </h2>

                <ul className="mb-4 space-y-2">
                  {content.levels &&
                    content.levels.map((level, index) => (
                      <li
                        key={index}
                        className={`bg-yellow-100 p-2 rounded-lg shadow-md ${
                          isEditing ? "flex space-x-2" : ""
                        }`}
                      >
                        {isEditing ? (
                          <input
                            type="text"
                            value={level}
                            onChange={(e) =>
                              handleChange(index, "levels", e.target.value)
                            }
                            className="font-extrabold bg-yellow-100 p-2 rounded-lg shadow-md w-full"
                          />
                        ) : (
                          <span>{level}</span>
                        )}
                      </li>
                    ))}
                </ul>

                <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
                  مقر فاعليات المسابقة
                </h2>
                <p className="text-lg mb-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={content.loc}
                      onChange={(e) => handleChange("loc", e.target.value)}
                      className="font-extrabold w-full p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    content.loc
                  )}
                </p>
                <h2 className="text-3xl font-extrabold mb-4 text-red-600 border-b-4 border-red-300 pb-2">
                  الشروط
                </h2>
                <ul className="mb-4 space-y-2">
                  {content.rest &&
                    content.rest.map((restItem, index) => (
                      <li
                        key={index}
                        className={`bg-red-100 p-2 rounded-lg shadow-md ${
                          isEditing ? "flex space-x-2" : ""
                        }`}
                      >
                        {isEditing ? (
                          <textarea
                            value={restItem}
                            onChange={(e) =>
                              handleChange(index, "rest", e.target.value)
                            }
                            className="bg-red-100 p-2 rounded-lg shadow-md w-full"
                          />
                        ) : (
                          <span>{restItem}</span>
                        )}
                      </li>
                    ))}
                </ul>

                {/* ///////////////////////////////////// */}
                <h2 className="text-3xl font-extrabold mb-4 text-blue-600 border-b-4 border-blue-300 pb-2">
                  لجنة التحكيم لمتسابقي القرآن الكريم
                </h2>
                <ul className="mb-4 space-y-2">
                  {content.judj &&
                    content.judj.map((judge, index) => (
                      <li
                        key={index}
                        className={`bg-blue-100 p-2 rounded-lg shadow-md ${
                          isEditing ? "flex space-x-2" : ""
                        }`}
                      >
                        {isEditing ? (
                          <input
                            type="text"
                            value={judge}
                            onChange={(e) =>
                              handleChange(index, "judj", e.target.value)
                            }
                            className="bg-blue-100 p-2 rounded-lg shadow-md w-full"
                          />
                        ) : (
                          <span>{judge}</span>
                        )}
                      </li>
                    ))}
                </ul>

                <h2 className="text-3xl font-extrabold mb-4 text-blue-600 border-b-4 border-blue-300 pb-2">
                  لجنة التحكيم لمتسابقي الأحاديث النبوية
                </h2>
                <ul className="mb-4 space-y-2">
                  {content.hadeth &&
                    content.hadeth.map((hadethItem, index) => (
                      <li
                        key={index}
                        className={`bg-purple-100 p-2 rounded-lg shadow-md ${
                          isEditing ? "flex space-x-2" : ""
                        }`}
                      >
                        {isEditing ? (
                          <input
                            type="text"
                            value={hadethItem}
                            onChange={(e) =>
                              handleChange(index, "hadeth", e.target.value)
                            }
                            className="bg-purple-100 p-2 rounded-lg shadow-md w-full"
                          />
                        ) : (
                          <span>{hadethItem}</span>
                        )}
                      </li>
                    ))}
                </ul>

                <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-8 border-teal-500 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-800">
                    <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                      التسجيل:
                    </span>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={content.fdate}
                          onChange={(e) =>
                            handleChange("fdate", e.target.value)
                          }
                          className="font-bold text-teal-700 w-full"
                        />
                        <input
                          type="text"
                          value={content.edate}
                          onChange={(e) =>
                            handleChange("edate", e.target.value)
                          }
                          className="font-bold text-teal-700 w-full"
                        />
                      </>
                    ) : (
                      <>
                        أون لاين عن طريق أدمن جروب مازورة الخير من
                        <span className="font-bold text-teal-700">
                          {" "}
                          {content.fdate}{" "}
                        </span>
                        وحتى
                        <span className="font-bold text-teal-700">
                          {" "}
                          {content.edate}{" "}
                        </span>
                        .
                      </>
                    )}
                    سيتم بمشيئة الله الإعلان عن أسماء المشتركين وموعد الاختبارات
                    يوم
                    {isEditing ? (
                      <input
                        type="text"
                        value={content.date2}
                        onChange={(e) => handleChange("date2", e.target.value)}
                        className="font-bold text-teal-700 w-full"
                      />
                    ) : (
                      <span className="font-bold text-teal-700">
                        {content.date2}
                      </span>
                    )}
                  </p>

                  <p className="text-lg leading-relaxed text-gray-800">
                    <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                      موعد المسابقة:
                    </span>
                    تبدأ المسابقة
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={content.date3}
                          onChange={(e) =>
                            handleChange("date3", e.target.value)
                          }
                          className="font-bold text-teal-700 w-full"
                        />
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-teal-700">
                          {" "}
                          {content.date3}{" "}
                        </span>
                      </>
                    )}
                    بإذن الله تعالى.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800">
                    <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                      النتائج:
                    </span>
                    إعلان النتائج بعد الإنتهاء من تجهيزها بإذن الله تعالى.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800">
                    <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                      حفل توزيع الجوائز:
                    </span>
                    حفل توزيع الجوائز
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={content.ramadan}
                          onChange={(e) =>
                            handleChange("ramadan", e.target.value)
                          }
                          className="font-bold text-teal-700 w-full"
                        />
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-teal-700">
                          {" "}
                          {content.ramadan}{" "}
                        </span>
                      </>
                    )}{" "}
                    بإذن الله تعالى.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800">
                    <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                      المشاركة:
                    </span>
                    المسابقة خاصة بمركز سمسطا بالكامل.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800">
                    صلِّ وسلم على شفيعك يوم الدين، عليه أفضل الصلاة والسلام، ثم
                    ادعو للحاج سعد عبدالستار بالرحمة والمغفرة، وبالتوفيق للجميع
                    إن شاء الله.
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="text-3xl font-extrabold mb-4 text-purple-600 border-b-4 border-blue-300 pb-2">
                    {" "}
                  </h2>

                  {isEditing ? (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleChange(
                          "photo2",
                          URL.createObjectURL(e.target.files[0])
                        )
                      }
                      className="w-full h-64 object-cover cursor-pointer"
                    />
                  ) : (
                    <div className="flex justify-center">
                      <ModalImage
                        small={content.photo2}
                        large={content.photo2}
                        alt="صورة توضيحية"
                      />
                    </div>
                  )}

                  <h2 className="text-3xl font-extrabold mb-6 text-teal-600 border-b-4 border-teal-300 pb-3">
                    {" "}
                  </h2>
                  <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-8 border-teal-500 space-y-6">
                    <p className="text-lg leading-relaxed text-gray-800">
                      المسابقة مفتوحة للجميع. يسعدنا حضوركم والمشاركة. للتسجيل
                      اضغط{" "}
                      <button
                        onClick={handleClick}
                        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full"
                      >
                        هنا للتسجيل
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {view === "organizer" && (
                <>
                  
                  <ActionButtons
                    isEditing={isEditing}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                    handleEdit={handleEdit}
                  />
                </>
              )}

          <footer className="bg-blue-900 text-white py-7 shadow-lg mt-6">
            <div className="container mx-auto flex flex-col items-center text-center">
              <a
                href="https://facebook.com/groups/1682795115333495/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-300"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.344v21.313C0 23.4.6 24 1.344 24H12.82v-9.313H9.692V11.31h3.13V8.396c0-3.1 1.884-4.794 4.637-4.794 1.322 0 2.457.099 2.788.143v3.24l-1.915.001c-1.504 0-1.797.716-1.797 1.766v2.315h3.592l-.468 3.378h-3.124V24h6.116c.744 0 1.344-.6 1.344-1.343V1.343C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              <p className="text-lg mt-4">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={content.year}
                      onChange={(e) => handleChange("year", e.target.value)}
                      className="font-bold text-white w-full"
                    />
                  </>
                ) : (
                  <>
                    <span className="font-bold text-white">
                      {" "}
                      {content.year}{" "}
                    </span>
                  </>
                )}{" "}
                | مسابقة القرآن الكريم
              </p>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 text-yellow-500"
                  aria-label="Hand Fist Icon"
                >
                  <path d="M288 32c-35.3 0-64 28.7-64 64V216h-8V96c0-35.3-28.7-64-64-64S88 60.7 88 96v80H72c-39.8 0-72 32.2-72 72v48c0 18.6 6.6 35.6 17.6 48.9C9.8 367.1 0 390.3 0 416c0 53 43 96 96 96H288c79.5 0 144-64.5 144-144V280c0-26.5-21.5-48-48-48h-16V96c0-35.3-28.7-64-64-64s-64 28.7-64 64v120h-8V96c0-35.3-28.7-64-64-64zm24 184h88c13.3 0 24 10.7 24 24v72c0 61.9-50.1 112-112 112H96c-26.5 0-48-21.5-48-48 0-19.2 10.8-35.8 26.6-44.5l18.3-10.1-11.8-16.9C69.4 288.6 64 276.7 64 264v-48c0-13.3 10.7-24 24-24h96v72c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0-13.3 10.7-24 24-24s24 10.7 24 24v120z" />
                </svg>
                <p className="mt-2">مازورة الخير، لجنة زكاة قرية مازورة . </p>
              </div>
            </div>
          </footer>

          {/* <div className="container mx-auto p-4 flex justify-end space-x-4">
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
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default EditPublicPage;
