
import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo from '../images/10.jpg';
import photo2 from '../images/9.jpg';
import ModalImage from 'react-modal-image';

function PublicPage() {
  
    const navigate = useNavigate(); 
    const handleClick = () => {
      navigate('/RegistrationForm');
    };
  return (
    <div dir="rtl" className="bg-gray-100 text-gray-900 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto p-4">
        <div className="public bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={photo}
            alt="صورة توضيحية للمسابقة القرآنية مع جوائز مالية"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-5xl font-bold mb-4 text-center text-blue-700">
              مسابقة القرآن الكريم <span className="text-red-500">رقم ٦</span>
            </h1>
            <p className="text-lg mb-4 text-center">
              برعاية <span className="text-lg font-bold text-green-600">أولاد الحاج سعد عبدالستار جاد المولی زاید</span>
            </p>
            <p className="text-lg mb-4 text-center">
              المسابقة بقيمة جوائز مالية{' '}
              <span className="text-red-600 text-2xl font-bold underline">خمسون ألف جنيها</span>
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              أولاد الحاج سعد عبد الستار قدموا هذه المسابقة إلى أهل سمسطا بالكامل كصدقة عن والدهم رحمة الله عليه
              ومن أجل الحفاظ على الهوية الدينية وتربية الشباب والأطفال على روح المنافسة الجميلة والنزيهة، توسعة
              دائرة النفع حيث يعم المركز كاملا ويفوز متسابقين جدد.
            </p>

            <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
              رعاة المسابقة
            </h2>
            <ul className="mb-4 space-y-2">
              <li className="bg-green-100 p-2 rounded-lg shadow-md">الأستاذ رجب سعد عبدالستار  </li>
              <li className="bg-green-100 p-2 rounded-lg shadow-md">الأستاذ محمد سعد عبدالستار</li>
              <li className="bg-green-100 p-2 rounded-lg shadow-md">الأستاذ إبراهيم سعد عبدالستار</li>
            </ul>
            <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
              التحكيم
            </h2>
            <p className="text-lg mb-4">
              <span className="text-blue-700 font-bold text-2xl">۸۰%</span> القرآن الكريم{' '}
              <span className="text-blue-700 font-bold text-2xl">٢٠%</span> السيرة النبوية
            </p>

            <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
              تقسم المسابقة إلى ستة مستويات
            </h2>
            <ul className="mb-4 space-y-2">
              <li className="bg-yellow-100 p-2 rounded-lg shadow-md">
                الأول ۳۰ جزء: السن لا يتجاوز ٣٠ سنة، قيمة الجوائز{' '}
                <span className="text-blue-700 font-bold text-xl">١١٦٠٠</span> جنيه مقسمة على ١٠ فائزين
              </li>
              <li className="bg-yellow-100 p-2 rounded-lg shadow-md">
                الثاني ۲۲ جزء: السن لا يتجاوز ٢٥ سنة، قيمة الجوائز{' '}
                <span className="text-blue-700 font-bold text-xl">١٠٠٥٠</span> جنيه مقسمة على ١٠ فائزين
              </li>
              <li className="bg-yellow-100 p-2 rounded-lg shadow-md">
                الثالث ١٥ جزء: السن لا يتجاوز ١٥ سنة، قيمة الجوائز{' '}
                <span className="text-blue-700 font-bold text-xl">٨٦٥٠</span> جنيه مقسمة على ١٠ فائزين
              </li>
              <li className="bg-yellow-100 p-2 rounded-lg shadow-md">
                الرابع ١٠ أجزاء: السن لا يتجاوز ١٢ سنة، قيمة الجوائز{' '}
                <span className="text-blue-700 font-bold text-xl">٧٤٠٠</span> جنيه مقسمة على ١٠ فائزين
              </li>
              <li className="bg-yellow-100 p-2 rounded-lg shadow-md">
                الخامس ٧ أجزاء: السن لا يتجاوز ١٠ سنوات، قيمة الجوائز{' '}
                <span className="text-blue-700 font-bold text-xl">٦٣٠٠</span> جنيه مقسمة على ١٠ فائزين
              </li>
              <li className="bg-yellow-100 p-2 rounded-lg shadow-md">
                السادس ٣ أجزاء: السن لا يتجاوز ٨ سنوات، قيمة الجوائز{' '}
                <span className="text-blue-700 font-bold text-xl">٥٣٥٠</span> جنيه مقسمة على ١٠ فائزين
              </li>
            </ul>

            <h2 className="text-3xl font-extrabold mb-4 text-green-600 border-b-4 border-green-300 pb-2">
              مقر فاعليات المسابقة
            </h2>
            <p className="text-lg mb-4">بيت مال مازورة</p>

            <h2 className="text-3xl font-extrabold mb-4 text-red-600 border-b-4 border-red-300 pb-2">
              الشروط
            </h2>
            <ul className="mb-4 space-y-2">
              <li className="bg-red-100 p-2 rounded-lg shadow-md">
                التسجيل أون لاين عن طريق أدمن جروب مازورة الخير بصورة شهادة الميلاد أو صورة البطاقة، رقم تليفون،
                اسم البلد، عدد الأجزاء ولا يوجد تجاوز السن حتى لو بيوم واحد (يحسب السن من ١٨ يناير ٢٠٢٥).
              </li>
              <li className="bg-red-100 p-2 rounded-lg shadow-md">
                غير مسموح بالإشتراك لموظفي الأزهر والأوقاف.
              </li>
              <li className="bg-red-100 p-2 rounded-lg shadow-md">
                لن يقبل أي اسم بعد إنتهاء مدة التسجيل المعلن عنها.
              </li>
            </ul>

            <h2 className="text-3xl font-extrabold mb-4 text-blue-600 border-b-4 border-blue-300 pb-2">
              لجنة التحكيم لمتسابقي القرآن الكريم
            </h2>
            <ul className="mb-4 space-y-2">
              <li className="bg-blue-100 p-2 rounded-lg shadow-md">الشيخ أحمد عيسى محمود كفافي</li>
              <li className="bg-blue-100 p-2 rounded-lg shadow-md">الشيخ ربيع عبد العظيم حسين شيمي</li>
            </ul>

            <h2 className="text-3xl font-extrabold mb-4 text-blue-600 border-b-4 border-blue-300 pb-2">
              لجنة التحكيم لمتسابقي الأحاديث النبوية
            </h2>
            <ul className="mb-4 space-y-2">
              <li className="bg-blue-100 p-2 rounded-lg shadow-md"> الشيخ شعبان سيد فراج </li>
              <li className="bg-blue-100 p-2 rounded-lg shadow-md">الشيخ محمود صديق</li>
              <li className="bg-blue-100 p-2 rounded-lg shadow-md">الدكتور حسن جنيدي</li>
              <li className="bg-blue-100 p-2 rounded-lg shadow-md">الشيخ زايد حسن</li>
              <li className="bg-blue-100 p-2 rounded-lg shadow-md">الشيخ أحمد الخزامي</li>
            </ul>

            <h2 className="text-3xl font-extrabold mb-6 text-teal-600 border-b-4 border-teal-300 pb-3">
            
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-8 border-teal-500 space-y-6">
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                  التسجيل:
                </span>
                أون لاين عن طريق أدمن جروب مازورة الخير من
                <span className="font-bold text-teal-700"> ١ ديسمبر ٢٠٢٤ </span>
                وحتى
                <span className="font-bold text-teal-700"> ۳۱ ديسمبر ٢٠٢٤ </span>.
                سيتم بمشيئة الله الإعلان عن أسماء المشتركين وموعد الاختبارات يوم
                <span className="font-bold text-teal-700">١٠ يناير ٢٠٢٥</span>. سنراعي أن يكون لكل بلد يوم موحد أو يومين على حسب أعداد المتسابقين من كل بلد.
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                  موعد المسابقة:
                </span>
                تبدأ المسابقة
                <span className="font-bold text-teal-700">١٨ يناير ٢٠٢٥</span>
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
                <span className="font-bold text-teal-700">شهر رمضان المبارك عام ١٤٤٦</span>
                بإذن الله تعالى.
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="block text-teal-700 font-bold text-2xl border-b-2 border-teal-300 inline-block mb-2">
                  المشاركة:
                </span>
                المسابقة خاصة بمركز سمسطا بالكامل.
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                صلِّ وسلم على شفيعك يوم الدين، عليه أفضل الصلاة والسلام، ثم ادعو للحاج سعد عبدالستار بالرحمة والمغفرة، وبالتوفيق للجميع إن شاء الله.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-3xl font-extrabold mb-4 text-purple-600 border-b-4 border-blue-300 pb-2">
                
              </h2>
              <div className="flex justify-center">
                <ModalImage
                  small={photo2}
                  large={photo2}
                  alt="صورة توضيحية للمسابقة"
                  className="rounded-lg shadow-lg cursor-pointer"
                />
              </div>

<h2 className="text-3xl font-extrabold mb-6 text-teal-600 border-b-4 border-teal-300 pb-3">
            
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-8 border-teal-500 space-y-6">
              <p className="text-lg leading-relaxed text-gray-800">
                المسابقة مفتوحة للجميع. يسعدنا حضوركم والمشاركة. للتسجيل اضغط{' '}
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
          <p className="text-lg mt-4">2024 | مسابقة القرآن الكريم</p>
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
    </div>
  );
}

export default PublicPage;





