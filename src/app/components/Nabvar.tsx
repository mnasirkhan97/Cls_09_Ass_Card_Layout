import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-blue-600">
      <div className="bg-black h-4 w-10 md:h-6 md:w-12 lg:w-16"></div>

      <div className="bg-orange-600 h-4 w-20 md:h-6 md:w-24 lg:w-32"></div>

      <ul className="flex flex-wrap items-center space-x-3 md:space-x-5">
        <li className="bg-red-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li>
        <li className="bg-orange-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li>
        <li className="bg-purple-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li>
        {/* <li className="bg-pink-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li> */}
      </ul>
    </nav>
  );
};

// --------------

export default Navbar;

// import React from "react";

// function Nabvar() {
//   return (
//     // <nav className="bg-blue-700 h-12 w-100vw ">
//     <nav className="flex justify-around items-center bg-blue-700 h-4 ">
//       <div className="bg-black h-2 w-10"></div>
//       <div className="bg-orange-600 h-2 w-20"></div>
//       <ul className="flex">
//         <li className="bg-red-600 h-2 w-10"></li>
//         <li className="bg-pink-600 h-2 w-10"></li>
//         <li className="bg-purple-900 h-2 w-10"></li>
//         <li className="bg-orange-600 h-2 w-10"></li>
//       </ul>
//       {/* <div>
//         <ul className="flex">
//           <li>Home</li>
//           <li>Contact</li>
//           <li>Apply</li>
//           <li>Courses</li>
//         </ul>
//       </div> */}
//     </nav>
//   );
// }

// export default Nabvar;
