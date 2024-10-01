// import { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { shifts } from "./shiftData";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { HiCalendar, HiClock, HiCurrencyDollar } from "react-icons/hi";
// import Modal from "react-modal";
// import React from "react";
// import lg from "../../assets/images/lg.png";

// const ShiftDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const shift = shifts.find(shift => shift.id === parseInt(id || ""));
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleShiftAcceptance = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsConfirmed(true);
//     }, 4000);
//   };

//   if (!shift) {
//     return <div className="text-center mt-10">Shift not found</div>;
//   }

//   return (
//     <div className="bg-gray-100 h-screen flex justify-center items-center py-10 px-4 ">
//       <div className="max-w-xl mx-auto bg-white border border-t-blue-500 shadow-lg rounded-lg overflow-hidden ">
//         <div className="p-6 space-y-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold ">Shift Details</h1>
//             <img src={lg} alt="" />
//           </div>
//           <div className="flex flex-wrap items-center justify-between mt-2">
//             <div className="flex items-center text-gray-500">
//               <HiCalendar className="mr-2" /> {shift.date}
//             </div>
//             <div className="flex items-center text-gray-500">
//               <HiClock className="mr-2" /> {shift.duration}
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-200 p-6">
//           <h2 className="text-xl font-bold">{shift.name}</h2>
//           <div className="flex items-center text-gray-500 mb-4">
//             <FaMapMarkerAlt className="mr-2" />
//             {shift.location}
//           </div>
//           <p className="text-gray-700 mb-4">{shift.jobDescription}</p>

//           <div className="mb-6">
//             <h3 className="font-semibold text-lg mb-2">Skills and Expertise</h3>
//             <div className="flex flex-wrap gap-2">
//               {shift.skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-gray-100 rounded-full text-sm border border-gray-300"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-4 mb-6">
//             <div className="flex items-center text-gray-600">
//               <HiCurrencyDollar className="mr-2 text-gray-500 text-xl" />
//               <span>{shift.payRate}</span>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 flex justify-between items-center">
//           <Link to={"/shift"}>
//             <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
//               Decline Shift
//             </button>
//           </Link>
//           <button
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//             onClick={openModal}
//           >
//             + Accept Shift
//           </button>
//         </div>

//         {/* Modal */}
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={() => {}} // Disable closing by clicking outside
//           className="modal-content max-w-md mx-auto p-6 bg-white flex items-center justify-center rounded-lg shadow-xl"
//           overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center px-4"
//         >
//           {!isConfirmed ? (
//             <div>
//               {isLoading ? (
//                 // Display the loader only when loading
//                 <div className="flex flex-col items-center">
//                   <div className="loading">
//                     <div className="d1"></div>
//                     <div className="d2"></div>
//                   </div>
//                   {/* Display text only */}
//                 </div>
//               ) : (
//                 <div>
//                   <div className="flex justify-between gap-3">
//                     <p className="font-bold">Confirm Shift</p>
//                     <img src={lg} alt="Logo" className="h-8" />
//                   </div>

//                   <div className="text-sm text-gray-600 mb-4">
//                     By accepting this shift, you agree to report on time and
//                     fulfill the responsibilities outlined. Please ensure that
//                     you are available for the entire shift duration. If
//                     circumstances change, ensure to notify your supervisor as
//                     soon as possible.
//                   </div>
//                   <div className="text-sm font-semibold mb-4">
//                     Do you confirm your availability for this shift?
//                   </div>
//                   <div className="flex justify-between mt-4">
//                     <button
//                       onClick={closeModal}
//                       className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleShiftAcceptance}
//                       className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
//                     >
//                       Confirm
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             // Confirmation message with badge
//             <div className="modal-content max-w-md mx-auto p-6 bg-white rounded-lg text-center">
//               <div className="flex justify-center">
//                 <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
//                   <span className="text-3xl">✓</span>
//                 </div>
//               </div>
//               <h2 className="text-xl font-bold mb-4">Shift Confirmed</h2>
//               <p className="text-sm text-gray-600 mb-4">
//                 Thank you! You have successfully accepted the shift. Check your
//                 inbox for further details. The hospital will reach out soon.
//               </p>
//               <Link to={"/shift"}>
//                 {" "}
//                 <button
//                   onClick={closeModal}
//                   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//                 >
//                   Close
//                 </button>
//               </Link>
//             </div>
//           )}
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default ShiftDetails;

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { shifts } from "./shiftData";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import Modal from "react-modal";
import React from "react";
import lg from "../../assets/images/hlg.png";
import clk from "../../assets/images/clk.png";
import jbt from "../../assets/images/jbt.png";
import vct from "../../assets/images/vct.png";
import { ScreenLayout } from "../../components/layout/ScreenLayout";

const ShiftDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const shift = shifts.find(shift => shift.id === parseInt(id || ""));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleShiftAcceptance = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmed(true);
    }, 4000);
  };

  if (!shift) {
    return <div className="text-center mt-10">Shift not found</div>;
  }

  return (
    <ScreenLayout>
      <div className=" bg-white  overflow-hidden">
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold ">Shift Details</h1>
            <div className="text-sm text-gray-500 ">Posted 7 mins ago</div>
          </div>
          <div className="border-b-2 border-gray-300"></div>
          {/* Title and Location */}
          <div className="text-xl font-semibold text-gray-800 flex items-center">
            <img
              src={lg}
              alt="Hospital"
              className="h-12 w-12 rounded-full mr-4"
            />
            {shift.name}
          </div>
          <div className="flex items-center text-gray-500 mb-4 text-sm md:text-[16px]">
            <FaMapMarkerAlt className="mr-2" />
            {shift.location}
          </div>
          {/* Date and Time */}
          <div className="flex flex-wrap items-center justify-between mt-2 mb-4">
            <div className="flex items-center text-gray-500">
              <HiCalendar className="mr-2" /> {shift.date}
            </div>
            <div className="flex items-center  bg-gray-100 px-5 p-1 rounded">
              {shift.duration}
            </div>
          </div>
          {/* Hospital Info */}
          <div className="flex items-start mb-6">
            <p className="text-sm text-gray-700 mt-2">{shift.jobDescription}</p>
          </div>
          {/* Skills and Expertise */}

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Skills and Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {shift.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="border-b-2 border-gray-300"></div>

          {/* Shift Details (Duration, Job Type, Payment) */}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <img src={clk} alt="" className="h-8 mr-2" />
              <div className="flex flex-col">
                <p className="text-sm sm:text-base">Duration</p>
                <span className="text-sm sm:text-base">8 Hours</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <img src={jbt} alt="" className="h-7 mr-2" />
              <div className="flex flex-col">
                <p className="text-sm sm:text-base">Job Type</p>
                <span className="text-sm sm:text-base">One Time</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <img src={vct} alt="" className="h-7 mr-2" />
              <div className="flex flex-col">
                <p className="text-sm sm:text-base">Payment</p>
                <span className="text-sm sm:text-base">{shift.payRate}</span>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <img src={clk} alt="" className="h-8 mr-2" />
              <div className="flex flex-col">
                <p className="text-sm sm:text-base">Duration</p>
                <span className="text-sm sm:text-base">8 Hours</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <img src={jbt} alt="" className="h-7 mr-2" />
              <div className="flex flex-col">
                <p className="text-sm sm:text-base">Job Type</p>
                <span className="text-sm sm:text-base">One Time</span>
              </div>
            </div>

            <div className="flex items-center justify-center text-gray-600 col-span-2 sm:col-span-1 md:col-span-1">
              <img src={vct} alt="" className="h-7 mr-2" />
              <div className="flex flex-col">
                <p className="text-sm sm:text-base">Payment</p>
                <span className="text-sm sm:text-base">{shift.payRate}</span>
              </div>
            </div>
          </div> */}

          <div className="border-b-2 border-gray-300"></div>

          {/* Special Requirements */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Special Requirements</h3>
            <p className="text-sm text-gray-700">
              Bring your health care license and work ID for verification.
            </p>
            <p className="text-sm text-gray-700">
              Ensure that you have the necessary tools (stethoscope, therapeutic
              aids, etc.).
            </p>
          </div>
          {/* Shift Supervisor */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Shift Supervisor</h3>
            <p className="text-sm text-gray-700">
              John Friday, Lead Physiotherapist
            </p>
            <p className="text-sm text-gray-700">Email: johnfriday@gmail.com</p>
            <p className="text-sm text-gray-700">Phone: (234) 256-78910</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 flex justify-center gap-5 items-center">
          <Link to={"/shift"}>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
              Decline Shift
            </button>
          </Link>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={openModal}
          >
            Accept Shift
          </button>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => {}}
          className="modal-content max-w-md mx-auto p-6 bg-white flex items-center justify-center rounded-lg shadow-xl"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4"
        >
          {!isConfirmed ? (
            <div>
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <div className="loading">
                    <div className="d1"></div>
                    <div className="d2"></div>
                  </div>
                </div>
              ) : (
                <div className="relative p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>

                  {/* Modal Title */}
                  <p className="text-center font-bold text-lg mb-4">
                    Confirm Shift
                  </p>

                  {/* Shift Details */}
                  <div className="flex justify-center flex-col items-center mb-4">
                    <img src={lg} alt="Logo" className="h-12 mb-4" />
                    <p className="text-blue-300 text-sm">{shift.name}</p>
                  </div>

                  {/* Shift Description */}
                  <div className="text-center text-sm text-gray-600 mb-4">
                    By accepting this shift , you agree to report on time and
                    fulfill the responsibilities outlined.
                  </div>

                  {/* Confirm Availability Text */}
                  <div className="text-center text-sm font-semibold mb-6">
                    Do you confirm your availability for this shift?
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center gap-4">
                    {/* Cancel Button (Styled as Text) */}
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      Cancel
                    </button>

                    {/* Confirm Button (Solid Black) */}
                    <button
                      onClick={handleShiftAcceptance}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="modal-content max-w-md mx-auto p-6 bg-white rounded-lg text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">✓</span>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-4">Shift Confirmed</h2>
              <p className="text-sm text-gray-600 mb-4">
                Thank you! You have successfully accepted the shift. Check your
                inbox for further details.
              </p>
              <Link to={"/shift"}>
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Close
                </button>
              </Link>
            </div>
          )}
        </Modal>
      </div>
    </ScreenLayout>
  );
};

export default ShiftDetails;
