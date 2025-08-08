
// import React, { useState } from 'react'
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { IoCloseSharp } from 'react-icons/io5';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null); // 'about' | 'author' | null
//     const location = useLocation();
//     const isActive = location.pathname;

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         if (isMobileMenuOpen) {
//             if (isMobileMenuOpen) setActiveDropdown(null);
//         }
//     };

//     const handleDropdownClick = (dropdown) => {
//         setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
//     };

//     const handleLinkClick = (sectionId) => {
//         setIsMobileMenuOpen(false); // Close mobile menu on link click
//         setActiveDropdown(null); // Close any open dropdown
//         setTimeout(() => {
//             const element = document.getElementById(sectionId);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, 0);
//     };

//     return (


        
//         <header className="fixed top-0 w-full py-2 md:py-2 lg:py-2 text-[16px] md:text-[20px] lg:text-[20px] bg-[#1e1b4b] shadow-md z-50">
//             <div className="container mx-auto px-8">
//                 <div className="flex justify-between items-center">
//                     <div className="flex-shrink-0 ml-[-20px]">
//                         <Link to="/" onClick={() => handleLinkClick('home')}>
//                             <img alt="Logo" className="h-[80px] w-auto" src="/images/logomin.webp" />
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex space-x-8 items-center ml-auto">
//                         <Link
//                             to="/"
//                             onClick={() => handleLinkClick('home')}
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer text-white  ${isActive == '/' ? 'text-[#E5AE36] ' : '  '}`}
//                         >
//                             Home
//                         </Link>

//                         <div className="lg:flex space-x-6 text-white poppins-medium">
//                             {/* About Us */}
//                             <div className="relative group w-full lg:w-auto">
//                                 <div className="flex py-2 items-center justify-center cursor-pointer">
//                                     <span>About Us</span>
//                                     <span className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180">
//                                         <IoIosArrowDropdown />
//                                     </span>
//                                 </div>

//                                 {/* Dropdown */}
//                                 <div className="absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white text-[16px] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-auto">
//                                     <Link to="/" onClick={() => handleLinkClick('home')} className="block px-4 py-2 hover:text-yellow-400 cursor-pointer">
//                                         About the Conference
//                                     </Link>
//                                     <Link to="/" onClick={() => handleLinkClick('scope')} className="block px-4 py-2 hover:text-yellow-400 cursor-pointer">
//                                         Scope of Conference
//                                     </Link>
//                                     <Link to="/" onClick={() => handleLinkClick('committee')} className="block px-4 py-2 hover:text-yellow-400 cursor-pointer">
//                                         Organizing Committee
//                                     </Link>
//                                     <Link to="/" onClick={() => handleLinkClick('board')} className="block px-4 py-2 hover:text-yellow-400 cursor-pointer">
//                                         Editorial Board
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Author's Desk */}
//                             <div className="relative group w-full lg:w-auto">
//                                 <div className="flex py-2 items-center justify-center cursor-pointer">
//                                     <span>Author's Desk</span>
//                                     <span className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180">
//                                         <IoIosArrowDropdown />
//                                     </span>
//                                 </div>

//                                 {/* Dropdown */}
//                                 <div className="absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white rounded-md text-[16px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-auto">
//                                     <Link to="/" onClick={() => handleLinkClick('tracks')} className="block px-4 py-2 hover:text-yellow-400 cursor-pointer">
//                                         Conference Tracks
//                                     </Link>
//                                     <Link to="/" onClick={() => handleLinkClick('key')} className="block px-4 py-2 hover:text-yellow-400 cursor-pointer">
//                                         Key Dates
//                                     </Link>
//                                     <div className="px-4 py-2 hover:text-yellow-400 cursor-pointer">
//                                         Registration Details
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <Link
//                             to="/paper-submission"
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer " ${isActive == '/paper-submission' ? 'text-yellow-400 ' : ' text-white '}`}
//                         >
//                             New Paper Submission
//                         </Link>

//                         <Link
//                             to="/contact-us"
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer " ${isActive == '/contact-us' ? 'text-yellow-400 ' : ' text-white '}`}
//                         >
//                             Contact Us
//                         </Link>
//                     </nav>

//                     {/* Mobile Toggle Button & Menu */}
//                     <div className="lg:hidden">
//                         {/* Toggle Button */}
//                         <div className="cursor-pointer" onClick={toggleMobileMenu}>
//                             {isMobileMenuOpen ? (
//                                 <IoCloseSharp className="text-[40px] text-white cursor-pointer duration-300" />
//                             ) : (
//                                 <HiOutlineMenuAlt3 className="text-[40px] text-white cursor-pointer duration-300" />
//                             )}
//                         </div>

//                         {/* Mobile Menu */}
//                         {isMobileMenuOpen && (
//                             <div className="absolute top-[90px] left-0 right-0 bg-[#1e1b4b] w-full shadow-lg p-4 flex flex-col items-center z-20">
//                                 <Link
//                                     to="/"
//                                     onClick={() => handleLinkClick('home')}
//                                     className="block py-2 hover:text-yellow-400 poppins-medium transition-colors duration-300 w-full text-center cursor-pointer text-yellow-400"
//                                 >
//                                     Home
//                                 </Link>

//                                 <div className="w-full">
//                                     <div
//                                         className="flex items-center justify-between text-white poppins-medium py-2 cursor-pointer"
//                                         onClick={() => handleDropdownClick('about')}
//                                     >
//                                         <span className="w-full text-center">About Us</span>
//                                         <IoIosArrowDropdown
//                                             className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
//                                         />
//                                     </div>
//                                     {activeDropdown === 'about' && (
//                                         <div className="bg-[#1e1b4b] rounded-md border-2 border-white text-white w-full text-center transition-all duration-300 ease-in-out">
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('home')}
//                                                 className="block py-2 px-4 hover:text-yellow-400"
//                                             >
//                                                 About the Conference
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('scope')}
//                                                 className="block py-2 px-4 hover:text-yellow-400"
//                                             >
//                                                 Scope of Conference
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('committee')}
//                                                 className="block py-2 px-4 hover:text-yellow-400"
//                                             >
//                                                 Organizing Committee
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('board')}
//                                                 className="block py-2 px-4 hover:text-yellow-400"
//                                             >
//                                                 Editorial Board
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Author's Desk */}
//                                 <div className="mt-2 w-full">
//                                     <div
//                                         className="flex items-center justify-between text-white poppins-medium py-2 cursor-pointer"
//                                         onClick={() => handleDropdownClick('author')}
//                                     >
//                                         <span className="w-full text-center">Author's Desk</span>
//                                         <IoIosArrowDropdown
//                                             className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'author' ? 'rotate-180' : ''}`}
//                                         />
//                                     </div>
//                                     {activeDropdown === 'author' && (
//                                         <div className="bg-[#1e1b4b] rounded-md border-2 border-white text-white w-full text-center transition-all duration-300 ease-in-out">
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('tracks')}
//                                                 className="block py-2 px-4 hover:text-yellow-400"
//                                             >
//                                                 Conference Tracks
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('key')}
//                                                 className="block py-2 px-4 hover:text-yellow-400"
//                                             >
//                                                 Key Dates
//                                             </Link>
//                                             <Link to="/registration" className="block py-2 px-4 hover:text-yellow-400">
//                                                 Registration Details
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <Link
//                                     to="/paper-submission"
//                                     className="block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer text-white"
//                                 >
//                                     New Paper Submission
//                                 </Link>

//                                 <Link
//                                     to="/contact-us"
//                                     className="block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer text-white"
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </header>

//     )
// }

// export default Header


// import React, { useState, useEffect } from 'react'
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { IoCloseSharp } from 'react-icons/io5';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null); // 'about' | 'author' | null
//     const [activeSection, setActiveSection] = useState('home'); // Track active section
//     const location = useLocation();
//     const isActive = location.pathname;

//     useEffect(() => {
//         const handleScroll = () => {
//             // Only check for active sections on home page
//             if (location.pathname === '/') {
//                 const sections = ['home', 'aboutus','scope', 'committee', 'board', 'tracks', 'key'];
//                 let currentSection = 'home';

//                 for (const sectionId of sections) {
//                     const element = document.getElementById(sectionId);
//                     if (element) {
//                         const rect = element.getBoundingClientRect();
//                         // Consider a section active if it's in the upper half of the viewport
//                         if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//                             currentSection = sectionId;
//                             break;
//                         }
//                     }
//                 }
//                 setActiveSection(currentSection);
//             }
//         };

//         // Only add scroll listener on home page
//         if (location.pathname === '/') {
//             window.addEventListener('scroll', handleScroll);
//             handleScroll(); // Check initial position
//         } else {
//             // Set active section based on current route
//             if (location.pathname === '/paper-submission') {
//                 setActiveSection('paper-submission');
//             } else if (location.pathname === '/contact-us') {
//                 setActiveSection('contact-us');
//             } else if (location.pathname === '/registration') {
//                 setActiveSection('registration');
//             }
//         }

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [location.pathname]);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         if (isMobileMenuOpen) {
//             setActiveDropdown(null);
//         }
//     };

//     const handleDropdownClick = (dropdown) => {
//         setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
//     };

//     const handleLinkClick = (sectionId) => {
//         setIsMobileMenuOpen(false); // Close mobile menu on link click
//         setActiveDropdown(null); // Close any open dropdown
//         setActiveSection(sectionId); // Set active section immediately for better UX
        
//         setTimeout(() => {
//             const element = document.getElementById(sectionId);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, 0);
//     };

//     // Helper function to check if a section/route is active
//     const isLinkActive = (linkType, sectionId = null) => {
//         if (location.pathname !== '/' && linkType === 'route') {
//             return isActive === sectionId;
//         }
//         if (location.pathname === '/' && linkType === 'section') {
//             return activeSection === sectionId;
//         }
//         return false;
//     };

//     return (
//         <header className="fixed top-0 w-full py-2 md:py-2 lg:py-2 text-[16px] md:text-[20px] lg:text-[20px] bg-[#1e1b4b] shadow-md z-50">
//             <div className="container mx-auto px-8">
//                 <div className="flex justify-between items-center">
//                     <div className="flex-shrink-0 ml-[-20px]">
//                         <Link to="/" onClick={() => handleLinkClick('home')}>
//                             <img alt="Logo" className="h-[80px] w-auto" src="/images/logo.png" />
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex space-x-8 items-center ml-auto">
//                         <Link
//                             to="/"
//                             onClick={() => handleLinkClick('home')}
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
//                                 isActive === '/' && activeSection === 'home' ? 'text-[#E5AE36]' : 'text-white'
//                             }`}
//                         >
//                             Home
//                         </Link>

//                         <div className="lg:flex space-x-6 text-white poppins-medium">
//                             {/* About Us */}
//                             <div className="relative group w-full lg:w-auto">
//                                 <div className={`flex py-2 items-center justify-center cursor-pointer ${
//                                     isActive === '/' && ['aboutus','scope', 'committee', 'board'].includes(activeSection) ? 'text-[#E5AE36]' : ''
//                                 }`}>
//                                     <span>About Us</span>
//                                     <span className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180">
//                                         <IoIosArrowDropdown />
//                                     </span>
//                                 </div>

//                                 {/* Dropdown */}
//                                 <div className="absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white text-[16px] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-auto">
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('aboutus')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'aboutus') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         About the Conference
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('scope')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'scope') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Scope of Conference
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('committee')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'committee') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Organizing Committee
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('board')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'board') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Editorial Board
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Author's Desk */}
//                             <div className="relative group w-full lg:w-auto">
//                                 <div className={`flex py-2 items-center justify-center cursor-pointer ${
//                                     isActive === '/' && ['tracks', 'key'].includes(activeSection) || 
//                                     isActive === '/registration' ? 'text-[#E5AE36]' : ''
//                                 }`}>
//                                     <span>Author's Desk</span>
//                                     <span className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180">
//                                         <IoIosArrowDropdown />
//                                     </span>
//                                 </div>

//                                 {/* Dropdown */}
//                                 <div className="absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white rounded-md text-[16px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-auto">
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('tracks')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'tracks') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Conference Tracks
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('key')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'key') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Key Dates
//                                     </Link>
//                                     {/* <Link 
//                                         to="/registration" 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('route', '/registration') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Registration Details
//                                     </Link> */}
//                                 </div>
//                             </div>
//                         </div>

//                         <Link
//                             to="/paper-submission"
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
//                                 isActive === '/paper-submission' ? 'text-yellow-400' : 'text-white'
//                             }`}
//                         >
//                             New Paper Submission
//                         </Link>

//                         <Link
//                             to="/contact-us"
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
//                                 isActive === '/contact-us' ? 'text-yellow-400' : 'text-white'
//                             }`}
//                         >
//                             Contact Us
//                         </Link>
//                     </nav>

//                     {/* Mobile Toggle Button & Menu */}
//                     <div className="lg:hidden">
//                         {/* Toggle Button */}
//                         <div className="cursor-pointer" onClick={toggleMobileMenu}>
//                             {isMobileMenuOpen ? (
//                                 <IoCloseSharp className="text-[40px] text-white cursor-pointer duration-300" />
//                             ) : (
//                                 <HiOutlineMenuAlt3 className="text-[40px] text-white cursor-pointer duration-300" />
//                             )}
//                         </div>

//                         {/* Mobile Menu */}
//                         {isMobileMenuOpen && (
//                             <div className="absolute top-[90px] left-0 right-0 bg-[#1e1b4b] w-full shadow-lg p-4 flex flex-col items-center z-20">
//                                 <Link
//                                     to="/"
//                                     onClick={() => handleLinkClick('home')}
//                                     className={`block py-2 hover:text-yellow-400 poppins-medium transition-colors duration-300 w-full text-center cursor-pointer ${
//                                         isActive === '/' && activeSection === 'home' ? 'text-yellow-400' : 'text-white'
//                                     }`}
//                                 >
//                                     Home
//                                 </Link>

//                                 <div className="w-full">
//                                     <div
//                                         className={`flex items-center justify-between poppins-medium py-2 cursor-pointer ${
//                                             isActive === '/' && ['aboutus','scope', 'committee', 'board'].includes(activeSection) ? 'text-yellow-400' : 'text-white'
//                                         }`}
//                                         onClick={() => handleDropdownClick('about')}
//                                     >
//                                         <span className="w-full text-center">About Us</span>
//                                         <IoIosArrowDropdown
//                                             className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
//                                         />
//                                     </div>
//                                     {activeDropdown === 'about' && (
//                                         <div className="bg-[#1e1b4b] rounded-md border-2 border-white text-white w-full text-center transition-all duration-300 ease-in-out">
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('aboutus')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'aboutus') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 About the Conference
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('scope')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'scope') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Scope of Conference
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('committee')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'committee') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Organizing Committee
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('board')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'board') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Editorial Board
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Author's Desk */}
//                                 <div className="mt-2 w-full">
//                                     <div
//                                         className={`flex items-center justify-between poppins-medium py-2 cursor-pointer ${
//                                             isActive === '/' && ['tracks', 'key'].includes(activeSection) || 
//                                             isActive === '/registration' ? 'text-yellow-400' : 'text-white'
//                                         }`}
//                                         onClick={() => handleDropdownClick('author')}
//                                     >
//                                         <span className="w-full text-center">Author's Desk</span>
//                                         <IoIosArrowDropdown
//                                             className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'author' ? 'rotate-180' : ''}`}
//                                         />
//                                     </div>
//                                     {activeDropdown === 'author' && (
//                                         <div className="bg-[#1e1b4b] rounded-md border-2 border-white text-white w-full text-center transition-all duration-300 ease-in-out">
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('tracks')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'tracks') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Conference Tracks
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('key')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'key') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Key Dates
//                                             </Link>
//                                             {/* <Link 
//                                                 to="/registration" 
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('route', '/registration') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Registration Details
//                                             </Link> */}
//                                         </div>
//                                     )}
//                                 </div>

//                                 <Link
//                                     to="/paper-submission"
//                                     className={`block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer ${
//                                         isActive === '/paper-submission' ? 'text-yellow-400' : 'text-white'
//                                     }`}
//                                 >
//                                     New Paper Submission
//                                 </Link>

//                                 <Link
//                                     to="/contact-us"
//                                     className={`block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer ${
//                                         isActive === '/contact-us' ? 'text-yellow-400' : 'text-white'
//                                     }`}
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Header

// import React, { useState, useEffect, useRef } from 'react';
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { IoCloseSharp } from 'react-icons/io5';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null); // 'about' | 'author' | null
//     const [activeSection, setActiveSection] = useState('home'); // Track active section
//     const location = useLocation();
//     const isActive = location.pathname;

//     // Refs for mobile menu and dropdowns
//     const mobileMenuRef = useRef(null);
//     const aboutDropdownRef = useRef(null);
//     const authorDropdownRef = useRef(null);

//     // Function to check which section is currently in view
//     useEffect(() => {
//         const handleScroll = () => {
//             if (location.pathname === '/') {
//                 const sections = ['home', 'aboutus', 'scope', 'committee', 'board', 'tracks', 'key'];
//                 let currentSection = 'home';

//                 for (const sectionId of sections) {
//                     const element = document.getElementById(sectionId);
//                     if (element) {
//                         const rect = element.getBoundingClientRect();
//                         if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//                             currentSection = sectionId;
//                             break;
//                         }
//                     }
//                 }
//                 setActiveSection(currentSection);
//             }
//         };

//         if (location.pathname === '/') {
//             window.addEventListener('scroll', handleScroll);
//             handleScroll();
//         } else {
//             if (location.pathname === '/paper-submission') {
//                 setActiveSection('paper-submission');
//             } else if (location.pathname === '/contact-us') {
//                 setActiveSection('contact-us');
//             } else if (location.pathname === '/registration') {
//                 setActiveSection('registration');
//             }
//         }

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [location.pathname]);

//     // Handle clicks outside to close mobile menu and dropdowns
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//                 setIsMobileMenuOpen(false);
//             }
//             if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
//                 setActiveDropdown(prev => prev === 'about' ? null : prev);
//             }
//             if (authorDropdownRef.current && !authorDropdownRef.current.contains(event.target)) {
//                 setActiveDropdown(prev => prev === 'author' ? null : prev);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         if (isMobileMenuOpen) {
//             setActiveDropdown(null);
//         }
//     };

//     const handleDropdownClick = (dropdown) => {
//         setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
//     };

//     const handleLinkClick = (sectionId) => {
//         setIsMobileMenuOpen(false); // Close mobile menu
//         setActiveDropdown(null); // Close dropdown
//         setActiveSection(sectionId); // Set active section
        
//         setTimeout(() => {
//             const element = document.getElementById(sectionId);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, 0);
//     };

//     // Helper function to check if a section/route is active
//     const isLinkActive = (linkType, sectionId = null) => {
//         if (location.pathname !== '/' && linkType === 'route') {
//             return isActive === sectionId;
//         }
//         if (location.pathname === '/' && linkType === 'section') {
//             return activeSection === sectionId;
//         }
//         return false;
//     };

//     return (
//         <header className="fixed top-0 w-full py-2 md:py-2 lg:py-2 text-[16px] md:text-[20px] lg:text-[20px] bg-[#1e1b4b] shadow-md z-50">
//             <div className="container mx-auto px-8">
//                 <div className="flex justify-between items-center">
//                     <div className="flex-shrink-0 ml-[-20px]">
//                         <Link to="/" onClick={() => handleLinkClick('home')}>
//                             <img alt="Logo" className="h-[80px] w-auto" src="/images/logo.png" />
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex space-x-8 items-center ml-auto">
//                         <Link
//                             to="/"
//                             onClick={() => handleLinkClick('home')}
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
//                                 isActive === '/' && activeSection === 'home' ? 'text-[#E5AE36]' : 'text-white'
//                             }`}
//                         >
//                             Home
//                         </Link>

//                         <div className="lg:flex space-x-6 text-white poppins-medium">
//                             {/* About Us */}
//                             <div className="relative w-full lg:w-auto" ref={aboutDropdownRef}>
//                                 <div className={`flex py-2 items-center justify-center cursor-pointer ${
//                                     isActive === '/' && ['aboutus', 'scope', 'committee', 'board'].includes(activeSection) ? 'text-[#E5AE36]' : ''
//                                 }`} onClick={() => handleDropdownClick('about')}>
//                                     <span>About Us</span>
//                                     <span className="ml-2 transform transition-transform duration-300 ease-in-out ${activeDropdown === 'about' ? 'rotate-180' : ''}">
//                                         <IoIosArrowDropdown />
//                                     </span>
//                                 </div>

//                                 {/* Dropdown */}
//                                 <div className={`absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white text-[16px] rounded-md shadow-lg transition-all duration-300 ease-in-out pointer-events-auto ${
//                                     activeDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'
//                                 }`}>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('aboutus')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'aboutus') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         About the Conference
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('scope')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'scope') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Scope of Conference
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('committee')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'committee') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Organizing Committee
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('board')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'board') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Editorial Board
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Author's Desk */}
//                             <div className="relative w-full lg:w-auto" ref={authorDropdownRef}>
//                                 <div className={`flex py-2 items-center justify-center cursor-pointer ${
//                                     isActive === '/' && ['tracks', 'key'].includes(activeSection) || 
//                                     isActive === '/registration' ? 'text-[#E5AE36]' : ''
//                                 }`} onClick={() => handleDropdownClick('author')}>
//                                     <span>Author's Desk</span>
//                                     <span className="ml-2 transform transition-transform duration-300 ease-in-out ${activeDropdown === 'author' ? 'rotate-180' : ''}">
//                                         <IoIosArrowDropdown />
//                                     </span>
//                                 </div>

//                                 {/* Dropdown */}
//                                 <div className={`absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white rounded-md text-[16px] shadow-lg transition-all duration-300 ease-in-out pointer-events-auto ${
//                                     activeDropdown === 'author' ? 'opacity-100 visible' : 'opacity-0 invisible'
//                                 }`}>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('tracks')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'tracks') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Conference Tracks
//                                     </Link>
//                                     <Link 
//                                         to="/" 
//                                         onClick={() => handleLinkClick('key')} 
//                                         className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
//                                             isLinkActive('section', 'key') ? 'text-[#E5AE36]' : ''
//                                         }`}
//                                     >
//                                         Key Dates
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <Link
//                             to="/paper-submission"
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
//                                 isActive === '/paper-submission' ? 'text-yellow-400' : 'text-white'
//                             }`}
//                         >
//                             New Paper Submission
//                         </Link>

//                         <Link
//                             to="/contact-us"
//                             className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
//                                 isActive === '/contact-us' ? 'text-yellow-400' : 'text-white'
//                             }`}
//                         >
//                             Contact Us
//                         </Link>
//                     </nav>

//                     {/* Mobile Toggle Button & Menu */}
//                     <div className="lg:hidden">
//                         {/* Toggle Button */}
//                         <div className="cursor-pointer" onClick={toggleMobileMenu}>
//                             {isMobileMenuOpen ? (
//                                 <IoCloseSharp className="text-[40px] text-white cursor-pointer duration-300" />
//                             ) : (
//                                 <HiOutlineMenuAlt3 className="text-[40px] text-white cursor-pointer duration-300" />
//                             )}
//                         </div>

//                         {/* Mobile Menu */}
//                         {isMobileMenuOpen && (
//                             <div ref={mobileMenuRef} className="absolute top-[90px] left-0 right-0 bg-[#1e1b4b] w-full shadow-lg p-4 flex flex-col items-center z-20">
//                                 <Link
//                                     to="/"
//                                     onClick={() => handleLinkClick('home')}
//                                     className={`block py-2 hover:text-yellow-400 poppins-medium transition-colors duration-300 w-full text-center cursor-pointer ${
//                                         isActive === '/' && activeSection === 'home' ? 'text-yellow-400' : 'text-white'
//                                     }`}
//                                 >
//                                     Home
//                                 </Link>

//                                 <div className="w-full" ref={aboutDropdownRef}>
//                                     <div
//                                         className={`flex items-center justify-between poppins-medium py-2 cursor-pointer ${
//                                             isActive === '/' && ['aboutus', 'scope', 'committee', 'board'].includes(activeSection) ? 'text-yellow-400' : 'text-white'
//                                         }`}
//                                         onClick={() => handleDropdownClick('about')}
//                                     >
//                                         <span className="w-full text-center">About Us</span>
//                                         <IoIosArrowDropdown
//                                             className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
//                                         />
//                                     </div>
//                                     {activeDropdown === 'about' && (
//                                         <div className="bg-[#1e1b4b] rounded-md border-2 border-white text-white w-full text-center transition-all duration-300 ease-in-out">
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('aboutus')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'aboutus') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 About the Conference
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('scope')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'scope') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Scope of Conference
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('committee')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'committee') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Organizing Committee
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('board')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'board') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Editorial Board
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Author's Desk */}
//                                 <div className="mt-2 w-full" ref={authorDropdownRef}>
//                                     <div
//                                         className={`flex items-center justify-between poppins-medium py-2 cursor-pointer ${
//                                             isActive === '/' && ['tracks', 'key'].includes(activeSection) || 
//                                             isActive === '/registration' ? 'text-yellow-400' : 'text-white'
//                                         }`}
//                                         onClick={() => handleDropdownClick('author')}
//                                     >
//                                         <span className="w-full text-center">Author's Desk</span>
//                                         <IoIosArrowDropdown
//                                             className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'author' ? 'rotate-180' : ''}`}
//                                         />
//                                     </div>
//                                     {activeDropdown === 'author' && (
//                                         <div className="bg-[#1e1b4b] rounded-md border-2 border-white text-white w-full text-center transition-all duration-300 ease-in-out">
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('tracks')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'tracks') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Conference Tracks
//                                             </Link>
//                                             <Link
//                                                 to="/"
//                                                 onClick={() => handleLinkClick('key')}
//                                                 className={`block py-2 px-4 hover:text-yellow-400 ${
//                                                     isLinkActive('section', 'key') ? 'text-yellow-400' : ''
//                                                 }`}
//                                             >
//                                                 Key Dates
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <Link
//                                     to="/paper-submission"
//                                     onClick={() => handleLinkClick('paper-submission')}
//                                     className={`block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer ${
//                                         isActive === '/paper-submission' ? 'text-yellow-400' : 'text-white'
//                                     }`}
//                                 >
//                                     New Paper Submission
//                                 </Link>

//                                 <Link
//                                     to="/contact-us"
//                                     onClick={() => handleLinkClick('contact-us')}
//                                     className={`block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer ${
//                                         isActive === '/contact-us' ? 'text-yellow-400' : 'text-white'
//                                     }`}
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // 'about' | 'author' | null
    const [activeSection, setActiveSection] = useState('home'); // Track active section
    const location = useLocation();
    const isActive = location.pathname;

    // Refs for mobile menu and dropdowns
    const mobileMenuRef = useRef(null);
    const aboutDropdownRef = useRef(null);
    const authorDropdownRef = useRef(null);

    // Function to check which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                const sections = ['home', 'aboutus', 'scope', 'committee', 'board', 'tracks', 'key'];
                let currentSection = 'home';

                for (const sectionId of sections) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                            currentSection = sectionId;
                            break;
                        }
                    }
                }
                setActiveSection(currentSection);
            }
        };

        // Set initial active section based on current path
        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial scroll position
        } else if (location.pathname === '/paper-submission') {
            setActiveSection('paper-submission');
        } else if (location.pathname === '/contact-us') {
            setActiveSection('contact-us');
        } else if (location.pathname === '/registration') {
            setActiveSection('registration');
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    // Handle clicks outside to close mobile menu and dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
            if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
                setActiveDropdown(prev => prev === 'about' ? null : prev);
            }
            if (authorDropdownRef.current && !authorDropdownRef.current.contains(event.target)) {
                setActiveDropdown(prev => prev === 'author' ? null : prev);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setActiveDropdown(null);
        }
    };

    const handleDropdownClick = (dropdown) => {
        setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
    };

    const handleLinkClick = (sectionId) => {
        setIsMobileMenuOpen(false); // Close mobile menu
        setActiveDropdown(null); // Close dropdown
        
        // Set the active section immediately
        setActiveSection(sectionId);
        
        // If clicking on a home page section while on a different route
        if (location.pathname !== '/' && ['home', 'aboutus', 'scope', 'committee', 'board', 'tracks', 'key'].includes(sectionId)) {
            // Use setTimeout to ensure navigation happens after state updates and page loads
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 150); // Slightly longer delay to ensure page navigation completes
        } else if (location.pathname === '/') {
            // Already on home page, just scroll to section
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    };

    // Helper function to check if a section/route is active
    const isLinkActive = (linkType, sectionId = null) => {
        if (location.pathname !== '/' && linkType === 'route') {
            return isActive === sectionId;
        }
        if (location.pathname === '/' && linkType === 'section') {
            return activeSection === sectionId;
        }
        return false;
    };

    return (
        <header className="fixed top-0 w-full py-2 md:py-2 lg:py-2 text-[16px] bg-[#1e1b4b] shadow-md z-50">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 ml-[-20px]">
                        <Link to="/" onClick={() => handleLinkClick('home')}>
                            <img alt="Logo" className="h-[80px] w-auto" src="/images/logo.png" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8 items-center ml-auto">
                        <Link
                            to="/"
                            onClick={() => handleLinkClick('home')}
                            className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
                                isActive === '/' && activeSection === 'home' ? 'text-[#E5AE36]' : 'text-white'
                            }`}
                        >
                            Home
                        </Link>

                        <div className="lg:flex space-x-6 text-white poppins-medium">
                            {/* About Us */}
                            <div className="relative w-full lg:w-auto" ref={aboutDropdownRef}>
                                <div className={`flex py-2 items-center justify-center cursor-pointer hover:text-yellow-400 transition-colors ${
                                    isActive === '/' && ['aboutus', 'scope', 'committee', 'board'].includes(activeSection) ? 'text-[#E5AE36]' : 'text-white'
                                }`} onClick={() => handleDropdownClick('about')}>
                                    <span>About Us</span>
                                    <span className={`ml-2 transform transition-transform duration-300 ease-in-out ${activeDropdown === 'about' ? 'rotate-180' : ''}`}>
                                        <IoIosArrowDropdown />
                                    </span>
                                </div>

                                {/* Dropdown */}
                                <div className={`absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white text-[16px] rounded-md shadow-lg transition-all duration-300 ease-in-out pointer-events-auto ${
                                    activeDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}>
                                    <Link 
                                        to="/" 
                                        onClick={() => handleLinkClick('aboutus')} 
                                        className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
                                            isLinkActive('section', 'aboutus') ? 'text-[#E5AE36]' : ''
                                        }`}
                                    >
                                        About the Conference
                                    </Link>
                                    <Link 
                                        to="/" 
                                        onClick={() => handleLinkClick('scope')} 
                                        className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
                                            isLinkActive('section', 'scope') ? 'text-[#E5AE36]' : ''
                                        }`}
                                    >
                                        Scope of Conference
                                    </Link>
                                    <Link 
                                        to="/" 
                                        onClick={() => handleLinkClick('committee')} 
                                        className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
                                            isLinkActive('section', 'committee') ? 'text-[#E5AE36]' : ''
                                        }`}
                                    >
                                        Organizing Committee
                                    </Link>
                                    <Link 
                                        to="/" 
                                        onClick={() => handleLinkClick('board')} 
                                        className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
                                            isLinkActive('section', 'board') ? 'text-[#E5AE36]' : ''
                                        }`}
                                    >
                                        Editorial Board
                                    </Link>
                                </div>
                            </div>

                            {/* Author's Desk */}
                            <div className="relative w-full lg:w-auto" ref={authorDropdownRef}>
                                <div className={`flex py-2 items-center justify-center cursor-pointer hover:text-yellow-400 transition-colors ${
                                    isActive === '/' && ['tracks', 'key'].includes(activeSection) || 
                                    isActive === '/registration' ? 'text-[#E5AE36]' : 'text-white'
                                }`} onClick={() => handleDropdownClick('author')}>
                                    <span>Author's Desk</span>
                                    <span className={`ml-2 transform transition-transform duration-300 ease-in-out ${activeDropdown === 'author' ? 'rotate-180' : ''}`}>
                                        <IoIosArrowDropdown />
                                    </span>
                                </div>

                                {/* Dropdown */}
                                <div className={`absolute left-0 z-50 mt-2 w-58 bg-[#1e1b4b] text-white rounded-md text-[16px] shadow-lg transition-all duration-300 ease-in-out pointer-events-auto ${
                                    activeDropdown === 'author' ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}>
                                    <Link 
                                        to="/" 
                                        onClick={() => handleLinkClick('tracks')} 
                                        className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
                                            isLinkActive('section', 'tracks') ? 'text-[#E5AE36]' : ''
                                        }`}
                                    >
                                        Conference Tracks
                                    </Link>
                                    <Link 
                                        to="/" 
                                        onClick={() => handleLinkClick('key')} 
                                        className={`block px-4 py-2 hover:text-yellow-400 cursor-pointer ${
                                            isLinkActive('section', 'key') ? 'text-[#E5AE36]' : ''
                                        }`}
                                    >
                                        Key Dates
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/paper-submission"
                            className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
                                isActive === '/paper-submission' ? 'text-yellow-400' : 'text-white'
                            }`}
                        >
                            New Paper Submission
                        </Link>

                        <Link
                            to="/contact-us"
                            className={`no-underline hover:text-yellow-400 poppins-medium transition-colors cursor-pointer ${
                                isActive === '/contact-us' ? 'text-yellow-400' : 'text-white'
                            }`}
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile Toggle Button & Menu */}
                    <div className="lg:hidden">
                        {/* Toggle Button */}
                        <div className="cursor-pointer" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <IoCloseSharp className="text-[40px] text-white cursor-pointer duration-300" />
                            ) : (
                                <HiOutlineMenuAlt3 className="text-[40px] text-white cursor-pointer duration-300" />
                            )}
                        </div>

                        {/* Mobile Menu */}
                        {isMobileMenuOpen && (
                            <div ref={mobileMenuRef} className="absolute top-[90px] left-0 right-0 bg-[#1e1b4b] w-full shadow-lg p-4 flex flex-col items-center z-20">
                                <Link
                                    to="/"
                                    onClick={() => handleLinkClick('home')}
                                    className={`block py-2 hover:text-yellow-400 poppins-medium transition-colors duration-300 w-full text-center cursor-pointer ${
                                        isActive === '/' && activeSection === 'home' ? 'text-yellow-400' : 'text-white'
                                    }`}
                                >
                                    Home
                                </Link>

                                <div className="w-full" ref={aboutDropdownRef}>
                                    <div
                                        className={`flex items-center justify-between poppins-medium py-2 cursor-pointer ${
                                            isActive === '/' && ['aboutus', 'scope', 'committee', 'board'].includes(activeSection) ? 'text-yellow-400' : 'text-white'
                                        }`}
                                        onClick={() => handleDropdownClick('about')}
                                    >
                                        <span className="w-full text-center">About Us</span>
                                        <IoIosArrowDropdown
                                            className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                    {activeDropdown === 'about' && (
                                        <div className="bg-[#1e1b4b] rounded-md poppins-medium text-[14px] shadow-md shadow-gray-600 text-white w-full text-center transition-all duration-300 ease-in-out">
                                            <Link
                                                to="/"
                                                onClick={() => handleLinkClick('aboutus')}
                                                className={`block py-2 px-4 hover:text-yellow-400 ${
                                                    isLinkActive('section', 'aboutus') ? 'text-yellow-400' : ''
                                                }`}
                                            >
                                                About the Conference
                                            </Link>
                                            <Link
                                                to="/"
                                                onClick={() => handleLinkClick('scope')}
                                                className={`block py-2 px-4 hover:text-yellow-400 ${
                                                    isLinkActive('section', 'scope') ? 'text-yellow-400' : ''
                                                }`}
                                            >
                                                Scope of Conference
                                            </Link>
                                            <Link
                                                to="/"
                                                onClick={() => handleLinkClick('committee')}
                                                className={`block py-2 px-4 hover:text-yellow-400 ${
                                                    isLinkActive('section', 'committee') ? 'text-yellow-400' : ''
                                                }`}
                                            >
                                                Organizing Committee
                                            </Link>
                                            <Link
                                                to="/"
                                                onClick={() => handleLinkClick('board')}
                                                className={`block py-2 px-4 hover:text-yellow-400 ${
                                                    isLinkActive('section', 'board') ? 'text-yellow-400' : ''
                                                }`}
                                            >
                                                Editorial Board
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Author's Desk */}
                                <div className="mt-2 w-full" ref={authorDropdownRef}>
                                    <div
                                        className={`flex items-center justify-between poppins-medium py-2 cursor-pointer ${
                                            isActive === '/' && ['tracks', 'key'].includes(activeSection) || 
                                            isActive === '/registration' ? 'text-yellow-400' : 'text-white'
                                        }`}
                                        onClick={() => handleDropdownClick('author')}
                                    >
                                        <span className="w-full text-center">Author's Desk</span>
                                        <IoIosArrowDropdown
                                            className={`ml-2 transform transition-transform duration-300 flex shrink-0 ${activeDropdown === 'author' ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                    {activeDropdown === 'author' && (
                                        <div className="bg-[#1e1b4b] rounded-md poppins-medium text-[14px] shadow-md shadow-gray-600 text-white w-full text-center transition-all duration-300 ease-in-out">
                                            <Link
                                                to="/"
                                                onClick={() => handleLinkClick('tracks')}
                                                className={`block py-2 px-4 hover:text-yellow-400 ${
                                                    isLinkActive('section', 'tracks') ? 'text-yellow-400' : ''
                                                }`}
                                            >
                                                Conference Tracks
                                            </Link>
                                            <Link
                                                to="/"
                                                onClick={() => handleLinkClick('key')}
                                                className={`block py-2 px-4 hover:text-yellow-400 ${
                                                    isLinkActive('section', 'key') ? 'text-yellow-400' : ''
                                                }`}
                                            >
                                                Key Dates
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    to="/paper-submission"
                                    onClick={() => handleLinkClick('paper-submission')}
                                    className={`block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer ${
                                        isActive === '/paper-submission' ? 'text-yellow-400' : 'text-white'
                                    }`}
                                >
                                    New Paper Submission
                                </Link>

                                <Link
                                    to="/contact-us"
                                    onClick={() => handleLinkClick('contact-us')}
                                    className={`block py-2 hover:text-yellow-400 transition-colors poppins-medium duration-300 w-full text-center cursor-pointer ${
                                        isActive === '/contact-us' ? 'text-yellow-400' : 'text-white'
                                    }`}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;