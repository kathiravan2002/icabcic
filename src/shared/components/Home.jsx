import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendar4Range, BsFillClockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaCalendarDays, FaCircleUser, FaLocationDot } from 'react-icons/fa6';
import { TbPointFilled } from 'react-icons/tb';
import { FaBullhorn, FaUsersLine, FaMicrophone } from 'react-icons/fa6';
import { FaCalendar, FaPaperclip, FaComment, FaAddressCard } from 'react-icons/fa';
import { FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

function Home() {

    const committeeMembers = [
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            initial: 'N',
        },
    ];



    const invitees = [
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            image: '/images/key_invitees_avatar.webp',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            image: '/images/key_invitees_avatar.webp',
        },
        {
            name: 'Name',
            position: 'Position',
            location: 'Chennai, India',
            image: '/images/key_invitees_avatar.webp',
        },
    ];
    const imageItems = [
        { src: '/images/associates/1.png', },
        { src: '/images/associates/2.jpg', },
        { src: '/images/associates/3.jpg', },
        { src: '/images/associates/4.jpg', },
        { src: '/images/associates/5.jpg', },
        { src: '/images/associates/6.jpg', },
        { src: "/images/associates/scopus.png", },
        { src: "/images/associates/8.jpg", },
        { src: "/images/associates/9.jpg", },
        { src: "/images/associates/10.jpg", },
        { src: "/images/associates/11.jpg", },
    ];

    // const boardMembers = [
    //     {
    //         name: "Dr. Priyanka Ganapathy",
    //         university: "Sree Balaji Medical College And Hospital",
    //         expertise: "Department of Physiology",
    //         country: " India"
    //     },

    //     {
    //         name: "Dr. Shakar Ahmed Aziz",
    //         university: "Duhok University",
    //         expertise: " Department of Mathematics",
    //         country: "  Iraq"
    //     },
    //     {
    //         name: "Dr. Satyabrata Roy",
    //         university: "Manipal University Jaipur",
    //         expertise: "Department of CSE",
    //         country: " India"
    //     },
    //     {
    //         name: "Dr. Sukant Kishoro Bisoy",
    //         university: "C V Raman Global University Bhubaneswar",
    //         expertise: " Department of CSE ",
    //         country: " India"
    //     },
    //     {
    //         name: "Dr. Asghar Ali Shah",
    //         university: " Bahria university",
    //         expertise: " Department of CSE",
    //         country: " Pakistan"
    //     },
    //     {
    //         name: "Dr. Subhash Panwar",
    //         university: "  Govt. Engineering College Bikaner",
    //         expertise: " Department of CSE",
    //         country: " India"
    //     },
    //     {
    //         name: "Dr. Ernesto Carrillo Arellano",
    //         university: "Metropolitan Autonomous University",
    //         expertise: "Department of ECE",
    //         country: " Mexico"
    //     },
    //     {
    //         name: "Dr.A. Karthikeyan ",
    //         university: "SNS College of Technology",
    //         expertise: "Department of ECE",
    //         country: " India"
    //     },
    //     {
    //         name: "Dr. Badamsi Sani Mohammed",
    //         university: "Al - Qalam University Katsina",
    //         expertise: " Department of Economics",
    //         country: " Nigeria"
    //     },
    //     {
    //         name: "Dr. BalaAnand Muthu",
    //         university: "Adhiyamaan College of Engineering",
    //         expertise: "  Department of CSE",
    //         country: " India"
    //     },
    //     {
    //         name: "Dr. Theopilus Bayu Sasongko",
    //         university: "University of Amikom Yogyakarta",
    //         expertise: " Department of Informatics",
    //         country: " Indonesia"
    //     },
    //     {
    //         name: "Dr. Qiushi Yang",
    //         university: "Babcock University",
    //         expertise: " Department of ECE",
    //         country: " China"
    //     },
    //     {
    //         name: "Dr.  Tusar Kanti Dash",
    //         university: "C V Raman Global University",
    //         expertise: " Department of ECE",
    //         country: " India"
    //     },

    //     {
    //         name: "Dr. Muhammad Suleman Memon",
    //         university: " University of Sindh",
    //         expertise: " Department of IT",
    //         country: " Pakistan"
    //     },
    //     {
    //         name: "Dr.S. Gopinath ",
    //         university: " Gnanamani college of technology",
    //         expertise: " Department of CSE",
    //         country: " India"
    //     },
    //     {
    //         name: "Dr.Md. Nahiduzzaman",
    //         university: " Rajshahi University of Engineering and Technology",
    //         expertise: " Department of ECE",
    //         country: " Bangladesh"
    //     },
    //     {
    //         name: "Dr. Asma Sbeih",
    //         university: " Palestine Ahliya university",
    //         expertise: " Department of IT",
    //         country: " Palestine"
    //     },
    //     {
    //         name: "Dr. Laiphrakpam Dolendro Singh",
    //         university: " National Institute of Technology Silchar",
    //         expertise: " Department of CSE",
    //         country: " India"
    //     },
    //     {
    //         name: "Dr.R. Arun Kumar",
    //         university: " University of South Wales",
    //         expertise: " Department of Cybersecurity",
    //         country: " United Kingdom"
    //     },
    //     {
    //         name: "Dr. Sakthivel Velusamy",
    //         university: " Sathyabama institute of science and technology",
    //         expertise: " Department of CSE",
    //         country: " South Korea"
    //     },

    // ];



    const organizing = [

        {
            name: "Dr. Monday Fredrick Ohemu",
            university: "  Airforce Institute of Technology",
            expertise: " Department of  Electrical and Electronics Engineering",
            country: "Nigeria"
        },
        {
            name: "Dr. Kolawole Yusuf Obiwusi",
            university: "Summit University",
            expertise: " Department of Mathematics and Computer Science",
            country: "Nigeria"
        },

        {
            name: "Dr. Folasade M. Dahunsi",
            university: "Federal University of Technology",
            expertise: " Department of Computer Science and Engineering",
            country: "Nigeria"
        },
        {
            name: "Dr. Egoigwe Sochima Vincent",
            university: "University of Nigeria",
            expertise: " Department of Computer Science",
            country: " Nigeria "
        },

        {
            name: "Dr. Oladapo Ibitoye",
            university: "Afe Babalola University",
            expertise: "Department of Electrical, Electronics and Computer Engineering",
            country: " Nigeria"
        },
    ]

    const technical = [

        {
            name: "Dr. Leo John Baptist",
            university: "Botho University",
            expertise: "Department of Information Technology",
            country: " Botswana"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            university: "International School of Information Processing Sciences",
            expertise: "Department of Computer Science and Engineering ",
            country: "France"
        },
        {
            name: "Dr. Comfort O. Folorunso",
            university: " University of Lagos",
            expertise: "Department of Systems Engineering",
            country: " Nigeria"
        },
        {
            name: "Dr. Ledan Qian",
            university: "  Wenzhou University",
            expertise: " Department of Information Technology",
            country: "China"
        },
        {
            name: "Dr. Meenakshi Gupta",
            university: " National University of Singapore",
            expertise: " Department of Electronics and Communication Engineering",
            country: "Singapore"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            university: " Qatar University",
            expertise: " Research Scientist at Qatar Mobility Innovations Center",
            country: " Qatar"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            university: "Metropolitan Autonomous University",
            expertise: "Department of Electronics Engineering",
            country: "Mexico"
        },
        {
            name: "Dr. Asma Sbeih",
            university: "Palestine Ahliya University",
            expertise: "Department of Information Technology ",
            country: "Palestine"
        },
        {
            name: "Dr. Shakar Ahmed Aziz",
            university: "Duhok University",
            expertise: " Department of Mathematics",
            country: "  Iraq"
        },
        {
            name: "Dr. Putri Mentari Endraswari",
            university: "  University of Bangka Belitung",
            expertise: " Department of Information Technology",
            country: "Indonesia"
        },
        {
            name: "Dr. Nor Musliza Mustafa",
            university: " Selangor Islamic University",
            expertise: "Department of Creative Multimedia and Computing",
            country: "Malaysia"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            university: "Cagayan State University",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Philippines"
        },
        {
            name: "Dr. Stephen Obono Ekwe",
            university: "  University of Cape Town",
            expertise: " Department of Electrical Engineering",
            country: " South Africa"
        },
        {
            name: "Dr. Nguyen Van Thieu",
            university: "Phenikaa University",
            expertise: " Department of Computer Science",
            country: "Vietnam"
        },
        {
            name: "Dr.E. Kusuma kumari",
            university: "Vasavi engineering college",
            expertise: "Department of Electronics and Communication Engineering",
            country: " India"
        },
        {
            name: "Dr. Nour Moustafa",
            university: "American University of the Middle East",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Kuwait"
        },
        {
            name: "Dr.A. Gabriel ",
            university: "Sharda University",
            expertise: "Department of Information Technology ",
            country: " Uzbekistan "
        },
        {
            name: "Dr. Islam Zada",
            university: "International Islamic University",
            expertise: "Department of Software Engineering",
            country: "Pakistan"
        },
        {
            name: "Dr. Mohammad Javad Fadaeieslam",
            university: "Semnan University",
            expertise: " Department of Electrical and Computer Engineering",
            country: " Iran"
        },
        {
            name: "Dr.R. Arun Kumar",
            university: "University of South Wales",
            expertise: " Department of Digital Forensics & Cyber Security",
            country: " United Kingdom"
        }
    ];


    const editorial = [
        {
            name: "Dr. Puneet Sharma",
            university: "  UiT The Arctic University of Norway",
            expertise: " Department of Automation and Process Engineering",
            country: " Norway"
        },
        {
            name: "Dr. Marcelo M S Souza",
            university: " Universidade Federal Do Ceará",
            expertise: "Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            university: "ESA Business School",
            expertise: " Department of Computer Science and Engineering",
            country: " Lebanon"
        },
        {
            name: "Dr. Rahman Shafique",
            university: " Yeungnam University",
            expertise: " Department of Information and Communication Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Ajanthaa Lakkshmanan",
            university: "Sathyabama institute of science and technology",
            expertise: "Department of Computer Science and Engineering ",
            country: " India"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            university: "Cavendish University",
            expertise: " Department of Computer Science and Engineering",
            country: " Uganda"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            university: "Cyprus International University",
            expertise: "Department of Computer Science and Engineering ",
            country: "Cyprus"
        },
        {
            name: "Dr. Ammar Amjad",
            university: " National Yang Ming Chiao Tung University",
            expertise: "Department of Computer Science and Engineering ",
            country: "Taiwan"
        },
        {
            name: "Dr. Argha Chandra Dhar",
            university: "Khulna University of Engineering & Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Mohammad Siraj",
            university: "  King Saud University",
            expertise: " Department of Electronics and Communication Engineering",
            country: "Saudi Arabia"
        },
        {
            name: "Dr. Omar Bin Samin",
            university: " Institute of Management Sciences",
            expertise: " Department of Information and Technology",
            country: "Pakistan"
        },
        {
            name: "Dr. Hung Nguyen",
            university: "Nha Trang university",
            expertise: " Department of Information Technology",
            country: "Vietnam"
        },
        {
            name: "Dr.M. Sathish kumar",
            university: "Hindustan Institute of technology and science",
            expertise: "Department of Computer Application",
            country: " India"
        },
        {
            name: "Dr. Syed Asim Ali Shah",
            university: "Bahria University",
            expertise: " Department of Software Engineering",
            country: "Pakistan"
        },
        
        {
            name: "Dr. Qian Liu",
            university: " Krirk University",
            expertise: "Department of Information Technology",
            country: "Thailand"
        },
        {
            name: "Dr.T. Kalaikumaran",
            university: "VSB College of Engineering Technical Campus",
            expertise: "Department of Artificial Intelligence and Data Science",
            country: " India"
        },
        {
            name: "Dr. Theopilus Bayu Sasongko",
            university: " Universitas Amikom Yogyakarta",
            expertise: " Department of Informatics",
            country: "Indonesia"
        },
        {
            name: "Dr. Saminda Premaratne",
            university: " University of Moratuwa",
            expertise: "   Department of Information Technology",
            country: "Sri Lanka"
        },
        {
            name: "Dr.K. Kishore Kumar",
            university: "Vel Tech Rangarajan Dr.Sagunthala R & D Institute of Science and Technology",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
        {
            name: "Dr. Kabelo Given Chuma",
            university: " University of South Africa",
            expertise: " Department of Information Science",
            country: "South Africa"
        },
        {
            name: "Dr. Alven Ritonga",
            university: " Universitas Wijaya Putra",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Indonesia"
        },
        {
            name: "Dr. Twana A. Hamad",
            university: " Harran University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Turkiye"
        },
        {
            name: "Dr. Ali Rizwan",
            university: "King Abdulaziz University",
            expertise: " Department of Industrial Engineering",
            country: " Saudi Arabia"
        },
        {
            name: "Dr. Yogi Pratama",
            university: " Al Insyirah Institute of Health and Technology",
            expertise: " Department of Medical Informatics",
            country: "Indonesia"
        },
        {
            name: "Dr.  Sakthivel Velusamy",
            university: " Konkuk University",
            expertise: " Department of Aerospace Information Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Leandro N. Balico",
            university: "  Federal University of Roraima",
            expertise: " Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Wasan Alamro",
            university: "Auckland University of Technology",
            expertise: "Department of Electrical and Electronics Engineering department ",
            country: " New Zealand"
        }
    ];





    return (
        <div >
            <section id="home" className=" flex flex-col lg:gap-10 gap-0 items-center justify-center mt-32 2xl:mt-32 2xl:pt-28 scroll-mt-[120px]">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-15 items-center  ">
                    <div className="flex flex-col gap-8   flex-70 ">
                        <div className="text-[1e1b4b] space-y-10 lg:space-y-6  ">
                            <h1 className="text-[22px] text-[#1e1b4b]  lg:text-[32px] poppins-bold leading-relaxed ">
                                International Conference on Advances in Big Data, Cloud, and Intelligent Computing
                            </h1>
                            <div className="max-w-[450px] relative mx-auto lg:hidden block group">
                                <div className="absolute inset-0 -z-10  bg-blue-600/20 rounded-[40px] transform group-hover:-rotate-6  rotate-6 transition duration-300"></div>
                                <img alt="Conference speaker" className="h-auto object-cover rounded-[40px] " src="/images/hero_conference.webp" />
                            </div>
                            <p className="  lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium">
                                <span className="opacity-70">The </span><span className="poppins-bold text-[#1e1b4b] ">International Conference on Advances in Big Data, Cloud, and Intelligent Computing</span><span className="opacity-70"> brings together the brightest minds in technology to explore groundbreaking innovations. Join leading researchers and industry pioneers as we examine the latest advancements in </span><span className="poppins-bold text-[#1e1b4b] ">AI-driven solutions, scalable cloud architectures,</span><span className="opacity-70"> and</span><span className="poppins-bold text-[#1e1b4b] "> data intelligence systems.</span> <span className="opacity-70">Through keynote presentations, technical sessions, and networking opportunities, you'll gain actionable insights while helping shape the future of intelligent computing. Be part of this premier gathering where ideas meet implementation.</span>
                            </p>
                        </div>
                        <div className=" overflow-hidden w-fit rounded-lg">
                            <button className="px-5 py-2 bg-[#1e1b4b] text-white leading-10 poppins-semibold cursor-pointer text-lg rounded-lg shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  >
                                Submit your Paper
                            </button>
                        </div>
                    </div>
                    <div className="max-w-[500px] relative hidden lg:block group ">
                        <div className="absolute inset-0 -z-10  bg-blue-600/20 rounded-[40px] transform group-hover:-rotate-6 transition duration-300 rotate-6"></div>
                        <img alt="Conference speaker" className="h-auto object-cover rounded-[40px] " src="/images/hero_conference.webp" />
                    </div>
                </div>
                <div className="container mx-auto px-4  py-8 lg:py-10 xl:py-10 2xl:py-16">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
            </section>
            <section id="aboutus" className='scroll-mt-[120px] px-4'>
                <div className="container mx-auto  flex flex-col lg:gap-10 gap-0 ">
                    {/* Heading + Paragraphs */}
                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="text-2xl text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight mb-6 sm:mb-8">
                            About the Conference
                        </div>
                        <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium">
                            <span className="opacity-70">The</span> <span className="poppins-bold text-[#1e1b4b] ">1st International Conference on Advances in Big Data, Cloud, and Intelligent Computing </span> <span className="opacity-70">is a pioneering event designed to bring together researchers, industry experts, and technology enthusiasts. Organized in collaboration with leading institutions, this conference will serve as a global platform for discussing breakthroughs in </span><span className="poppins-bold text-[#1e1b4b] ">Big Data, Cloud Computing, and Artificial Intelligence</span>.
                        </p>
                        <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium mt-4">
                            <span className="opacity-70">As our inaugural conference, ICABCIC-2025 will feature </span><span className="poppins-bold text-[#1e1b4b] ">keynote speeches, technical sessions, and workshops</span><span className="opacity-70">, fostering knowledge exchange on emerging trends. Participants will have the opportunity to present research, engage in discussions, and explore advancements in </span><span className="poppins-bold text-[#1e1b4b] ">data science, cloud architectures, and AI-driven innovations</span><span className="opacity-70">. We aim to establish ICABCIC as an annual forum that bridges academia and industry, contributing to the evolution of </span><span className="poppins-bold text-[#1e1b4b] ">intelligent computing and digital transformation</span><span className="opacity-70">. Join us in shaping this milestone event and be part of the conversation that will drive future technological progress.The Selective accepted papers of our International Conference on Advances in Big Data, Cloud, and Intelligent Computing will be recommended to publish in the indexed Journals.</span>
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center bg-[#1e1b4b] p-6 sm:p-8 rounded-lg space-y-2">
                            <div className="text-4xl sm:text-5xl text-white">
                                <FaBullhorn />
                            </div>
                            <div className="text-2xl  poppins-bold mt-4 text-white">
                                World-Class Speakers
                            </div>
                            <div className="text-gray-300 text-lg sm:text-xl poppins-medium">
                                Featuring industry leaders and innovators
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center bg-[#1e1b4b] p-6 sm:p-8 rounded-lg space-y-2">
                            <div className="text-4xl sm:text-5xl text-white">
                                <FaUsersLine />
                            </div>
                            <div className="text-2xl  poppins-bold mt-4 text-white">
                                Global Community
                            </div>
                            <div className="text-gray-300 text-lg sm:text-xl poppins-medium">
                                Connecting professionals worldwide
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center bg-[#1e1b4b] p-6 sm:p-8 rounded-lg space-y-2">
                            <div className="text-4xl sm:text-5xl text-white">
                                <FaMicrophone />
                            </div>
                            <div className="text-2xl  poppins-bold mt-4 text-white">
                                Engaging Content
                            </div>
                            <div className="text-gray-300 text-lg sm:text-xl poppins-medium">
                                Interactive sessions and workshops
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-8 lg:py-10 xl:py-10 2xl:py-16 ">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    </div>
                </div>
            </section>
            <section id="scope" className="bg-[#ffffff]  scroll-mt-[120px]">
                <div className="container mx-auto px-4 ">
                    {/* Title */}
                    <div className="text-center mb-12">
                        <div className="text-2xl text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8">
                            Scope Of The Conference
                        </div>
                    </div>

                    {/* Image and Text */}
                    <div className="mt-16 mb-8 flex flex-col lg:flex-row items-center gap-12">
                        {/* Image */}
                        <div className="relative w-full lg:w-1/2   group">
                            <div className="absolute inset-0 bg-blue-600/20 rounded-[40px] transform group-hover:-rotate-6  rotate-6 transition duration-300"></div>
                            <div className="relative overflow-hidden rounded-[40px] bg-white">
                                <img
                                    alt="Conference Audience"
                                    className="w-full h-full object-cover rounded-[40px] "
                                    src="/images/scope_conference.jpg"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2  text-center md:text-left">
                            <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium">
                                <span className="opacity-70">Join us for</span> <span className="poppins-bold text-[#1e1b4b] ">ICABCIC</span><span className="opacity-70">, the</span> <span className="poppins-bold text-[#1e1b4b] ">International Conference on Advances in Big Data, Cloud, and Intelligent Computing</span><span className="opacity-70">, organized in collaboration with leading academic and industry partners.</span>
                            </p>
                            <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium mt-4"><span className="opacity-70">Building on past successes, this conference brings together </span><span className="poppins-bold text-[#1e1b4b] ">scholars, researchers, and industry experts</span> <span className="opacity-70">to exchange ideas, explore innovative solutions, and discuss the latest advancements in </span><span className="poppins-bold text-[#1e1b4b] ">Big Data, Cloud Computing, and Artificial Intelligence .</span></p>
                            <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium mt-4"><span className="opacity-70">Be part of this</span> <span className="poppins-bold text-[#1e1b4b] ">transformative event</span><span className="opacity-70"> driving the </span><span className="poppins-bold text-[#1e1b4b] ">future of intelligent computing and digital innovation</span><span className="opacity-70">!</span></p>
                        </div>
                    </div>
                </div>

                {/* Horizontal Gradient Line */}
                <div className="container mx-auto px-4 py-8 lg:py-10 xl:py-10 2xl:py-16">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
            </section>

            {/* <div className="px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-8 sm:leading-10 mb-6 sm:mb-8 text-center">
                        Key Invitees
                    </div>

                    
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
                        {invitees.map((person, index) => (
                            <div
                                key={index}
                                className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-48  mx-auto mb-4">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-white"
                                    />
                                </div>
                                <div className="text-xl font-semibold text-[#1e1b4b] mb-2">{person.name}</div>
                                <p className="text-[#1e1b4b] opacity-90">{person.position}</p>
                                <p className="text-gray-500">
                                    <i className="fa-solid fa-location-dot mr-1" />
                                    {person.location}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 py-16">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                </div>
            </div> */}




            {/* <section id="committee" className=" bg-white  scroll-mt-[120px]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8">
                            Organizing Committee
                        </h2>
                        <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium">
                            <span className="opacity-70">The</span> <span className="poppins-bold text-[#1e1b4b] ">Organizing Committee</span> <span className="opacity-70">of the</span> <span className="poppins-bold text-[#1e1b4b] ">International Conference on Advances in Big Data, Cloud, and Intelligent Computing</span> <span className="opacity-70">comprises dedicated professionals committed to ensuring the success of this global event. The committee is divided into two key groups: the </span><span className="poppins-bold text-[#1e1b4b] ">Strategic and Oversight Committee</span><span className="opacity-70">, which focuses on high-level planning, academic integrity, and global outreach, and the</span> <span className="poppins-bold text-[#1e1b4b] ">Organizing and Technical Committee</span><span className="opacity-70">, which handles operational, logistical, and technical responsibilities. Together, they manage </span><span className="poppins-bold text-[#1e1b4b] ">logistics</span><span className="opacity-70">, </span><span className="poppins-bold text-[#1e1b4b] ">scheduling</span><span className="opacity-70">, </span><span className="poppins-bold text-[#1e1b4b] ">communication</span><span className="opacity-70">, and</span><span className="poppins-bold text-[#1e1b4b] ">resources</span> <span className="opacity-70">to foster collaboration among researchers, industry leaders, and innovators.</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {committeeMembers.map((member, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="p-6 text-center z-10 relative">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-[#1e1b4b] text-2xl font-bold">
                                        {member.initial}
                                    </div>
                                    <div className="text-xl poppins-bold text-gray-800 mb-1">{member.name}</div>
                                    <p className="text-[#1e1b4b] poppins-medium mb-1">{member.position}</p>
                                    <p className="text-gray-500 text-sm flex gap-2 items-center justify-center poppins-medium">
                                        <FaLocationDot className="fa-solid fa-location-dot " /> {member.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8 lg:py-10 xl:py-10 2xl:py-16">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                </div>
            </section> */}

            <section className="bg-white  ">
                <div className="container mx-auto">
                    <div className="bg-white text-black py-3">
                        <div className="container mx-auto px-4">
                            {/* <div className="text-center mb-12">
                                <div className="text-2xl text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8">
                                    Editorial Board
                                </div>
                                <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium">
                                    <span className="opacity-70"> The </span><span className="poppins-bold text-[#1e1b4b] ">Editorial Board</span><span className="opacity-70"> of the </span><span className="poppins-bold text-[#1e1b4b] ">International Conference on Advances in Big Data, Cloud, and Intelligent Computing</span> <span className="opacity-70">consists of leading </span><span className="poppins-bold text-[#1e1b4b] ">experts</span> <span className="opacity-70">in Big Data, Cloud Computing, and Intelligent Systems. They ensure all research papers meet</span><span className="poppins-bold text-[#1e1b4b] "> high academic and ethical standards</span><span className="opacity-70">, supporting the conference's goals. With their deep</span> <span className="poppins-bold text-[#1e1b4b] ">knowledge</span> <span className="opacity-70">and</span> <span className="poppins-bold text-[#1e1b4b] ">experience</span><span className="opacity-70">, the board ensures that accepted papers are</span> <span className="poppins-bold text-[#1e1b4b] ">valuable, accurate, and relevant</span> <span className="opacity-70">to the research community. The board oversees the </span><span className="poppins-bold text-[#1e1b4b] ">review process</span><span className="opacity-70">, provides constructive feedback, and ensures a </span><span className="poppins-bold text-[#1e1b4b] ">thorough peer-review</span> <span className="opacity-70">for each submission. Their commitment maintains the conference's </span><span className="poppins-bold text-[#1e1b4b] ">credibility</span><span className="opacity-70"> and influence in the field.</span>
                                </p>
                            </div> */}
                            <section className="scroll-mt-[120px]" id="committee">
                                <h2 className="text-2xl text-center text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8 " >
                                    Organizing Committee
                                </h2>
                                <div className='pb-10'>
                                    <div className="max-w-[1300px] mx-auto mt-5 ">
                                        <div className="space-y-2">
                                            {organizing.map((item, index) => (
                                                <div key={index} className="flex gap-2 items-center">
                                                    <FaCircleUser className='text-[18px] flex shrink-0 text-[#1e1b4b]' />
                                                    <p className="leading-relaxed "><span className=" text-[#1e1b4b] text-[16px] poppins-semibold  text-center ">{item.name} - </span><span className="text-[16px] poppins-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] poppins-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] poppins-medium text-center opacity-80">{item.country}.</span></p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="scroll-mt-[120px]" id="technical">
                                <h2 className="text-2xl text-center text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8 scroll-mt-[120px]" >
                                    Technical Program Committee
                                </h2>
                                <div className='pb-10'>
                                    <div className="max-w-[1300px] mx-auto mt-5 ">
                                        <div className="space-y-2">
                                            {technical.map((item, index) => (
                                                <div key={index} className="flex gap-2 items-center">
                                                    <FaCircleUser className='text-[18px] flex shrink-0 text-[#1e1b4b]' />
                                                    <p className="leading-relaxed "><span className=" text-[#1e1b4b] text-[16px] poppins-semibold  text-center ">{item.name} - </span><span className="text-[16px] poppins-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] poppins-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] poppins-medium text-center opacity-80">{item.country}.</span></p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="scroll-mt-[120px]" id="board">
                                <h2 className="text-2xl text-center text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8 scroll-mt-[120px]" >
                                    International Advisory Board Committee Members
                                </h2>
                                <div className='pb-0'>
                                    <div className="max-w-[1300px] mx-auto mt-5 ">
                                        <div className="space-y-2">
                                            {editorial.map((item, index) => (
                                                <div key={index} className="flex gap-2 items-center">
                                                    <FaCircleUser className='text-[18px] flex shrink-0 text-[#1e1b4b]' />
                                                    <p className="leading-relaxed "><span className=" text-[#1e1b4b] text-[16px] poppins-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] poppins-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] poppins-medium text-center opacity-80">{item.country}.</span></p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {boardMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="relative group overflow-hidden rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <div className=" md:block hidden bg-white rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.25)] max-w-[400px] mx-auto text-center transition-all duration-500 cursor-pointer h-[140px] flex items-center justify-center relative">

                                            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0">
                                                <p className="poppins-semibold text-[20px] text-[#17116b]">{member.name}</p>
                                            </div>

                                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 space-y-2 p-2">
                                                <p className="text-[16px]  poppins-semibold text-[#17116b]">{member.expertise},</p>
                                                <p className="text-[16px]  poppins-semibold text-yellow-500">{member.university},</p>
                                                <p className="text-[16px]  poppins-semibold text-[#17116b]">{member.country}</p>
                                            </div>

                                        </div>
                                        <div className=" md:hidden bg-white rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.25)] max-w-[400px] mx-auto text-center cursor-pointer flex flex-col items-center justify-center px-2 py-4 ">

                                            <div className=" flex items-center justify-center transition-all duration-500 ">
                                                <p className="poppins-semibold text-[18px] text-[#17116b]">{member.name},</p>
                                            </div>

                                            <div className=" flex flex-col mt-2 items-center justify-center space-y-2">
                                                <p className="text-[15px] poppins-semibold text-[#17116b]">{member.expertise},</p>
                                                <p className="text-[15px] poppins-semibold text-yellow-500">{member.university},</p>
                                                <p className="text-[15px] poppins-semibold text-[#17116b]">{member.country}</p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 py-8 lg:py-10 xl:py-10 2xl:py-16">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    </div>
                </div>
            </section>

            <section id="tracks" className="bg-white container mx-auto px-4 scroll-mt-[120px]">
                <div className="text-center mb-12 mt-1">
                    <div className="text-2xl text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8">
                        Conference Tracks
                    </div>
                    <br />
                    <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium">
                        <span className="poppins-bold text-[#1e1b4b] ">ICABCIC</span><span className="opacity-70"> features diverse </span><span className="poppins-bold text-[#1e1b4b] ">conference tracks</span> <span className="opacity-70">that explore advancements, challenges, and innovations in</span>
                        <span className="poppins-bold text-[#1e1b4b] "> Big Data, Cloud Computing, and Intelligent Systems</span><span className="opacity-70">. These tracks provide a platform for researchers, academics, and professionals to present </span>
                        <span className="poppins-bold text-[#1e1b4b] "> cutting-edge developments, discuss emerging trends</span><span className="poppins-bold text-[#1e1b4b] ">, and collaborate on future technologies.</span>
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-16 lg:px-36">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

                        {/* Track Card 1 */}
                        <div className="group relative bg-[#1e1b4b] rounded-xl p-6 sm:p-10 shadow-lg transition duration-300 hover:scale-105 flex flex-col h-full">
                            <div className="flex-grow">
                                <div className="text-2xl poppins-semibold text-blue-400 mb-4">Big Data Analytics</div>
                                <p className="text-slate-400 text-lg poppins-medium">Techniques, tools, and applications in Big Data processing</p>
                            </div>
                        </div>

                        {/* Track Card 2 */}
                        <div className="group relative bg-[#1e1b4b] rounded-xl p-6 sm:p-10 shadow-lg transition duration-300 hover:scale-105 flex flex-col h-full">
                            <div className="flex-grow">
                                <div className="text-2xl poppins-semibold text-purple-400 mb-4">Cloud Computing</div>
                                <p className="text-slate-400 text-lg poppins-medium">Advancements in cloud architectures, services, and security</p>
                            </div>
                        </div>

                        {/* Track Card 3 */}
                        <div className="group relative bg-[#1e1b4b] rounded-xl p-6 sm:p-10 shadow-lg transition duration-300 hover:scale-105 flex flex-col h-full">
                            <div className="flex-grow">
                                <div className="text-2xl poppins-semibold text-pink-400 mb-4">AI & Machine Learning</div>
                                <p className="text-slate-400 text-lg poppins-medium">Deep learning, NLP, computer vision, and intelligent systems</p>
                            </div>
                        </div>

                        {/* Track Card 4 */}
                        <div className="group relative bg-[#1e1b4b] rounded-xl p-6 sm:p-10 shadow-lg transition duration-300 hover:scale-105 flex flex-col h-full">
                            <div className="flex-grow">
                                <div className="text-2xl poppins-semibold text-rose-400 mb-4">Cybersecurity & Blockchain</div>
                                <p className="text-slate-400 text-lg poppins-medium">Security frameworks, cryptography, and blockchain innovations</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container mx-auto px-8 md:px-16 lg:px-24 py-8 lg:py-10 xl:py-10 2xl:py-16">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
            </section>




            <section id="key" className="bg-white flex items-center scroll-mt-[120px] pb-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        <div className="text-2xl text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8">
                            Key Dates
                        </div>
                        <p className="lg:text-lg text-lg lg:leading-[40px] leading-[30px] text-justify poppins-medium"><span className="poppins-bold text-[#1e1b4b] ">Key Dates</span><span className="opacity-70"> for the</span><span className="poppins-bold text-[#1e1b4b] "> International Conference on Advances in Big Data, Cloud, and Intelligent Computing </span><span className="opacity-70"> are critical deadlines and milestones that participants must adhere  to. These include the</span> <span className="poppins-bold text-[#1e1b4b] ">paper submission deadline, notification of acceptance registration deadline and the conference dates</span><span className="opacity-70">. Staying informed about these dates ensures a smooth and organized participation process.</span>
                        </p>
                    </div>

                    {/* Key Dates Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mt-12">
                        {[
                            {
                                title: "Paper Submission",
                                icon: FaPaperclip,
                                date: "October 14, 2024",
                                color: "#3b82f6", // blue-500
                            },
                            {
                                title: "Acceptance Notification",
                                icon: FaComment,
                                date: "October 21, 2024",
                                color: "#a855f7", // purple-500
                            },
                            {
                                title: "Registration Deadline",
                                icon: FaAddressCard,
                                date: "October 21, 2024",
                                color: "#ec4899", // pink-500
                            },
                            {
                                title: "Conference Dates",
                                icon: FaCalendarDays,
                                date: "November 28, 2024",
                                color: "#f43f5e", // rose-500
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="p-4 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            backgroundColor: `${item.color}20`, // 20% opacity background
                                        }}
                                    >
                                        <item.icon
                                            className="text-4xl flex shrink-0"
                                            style={{ color: item.color }}
                                        />
                                    </div>
                                    <div className="text-2xl poppins-bold text-[#1e1b4b] mb-4">
                                        {item.title}
                                    </div>
                                    <p className="text-gray-600 poppins-medium">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Topics Section */}
                    <div className="mt-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Keynote: Future of Big Data",
                                    icon: FaDatabase,
                                    color: "#3b82f6", // blue-500
                                    description:
                                        "Explore the latest trends and future directions in big data analytics and its impact on industries.",
                                },
                                {
                                    title: "Cloud Computing Innovations",
                                    icon: FaCloud,
                                    color: "#a855f7", // purple-500
                                    description:
                                        "Discover cutting-edge advancements in cloud infrastructure and services.",
                                },
                                {
                                    title: "AI and Intelligent Systems",
                                    icon: FaRobot,
                                    color: "#ec4899", // pink-500
                                    description:
                                        "Learn about the latest breakthroughs in AI, machine learning, and cognitive computing.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                            style={{
                                                backgroundColor: `${item.color}1a`, // 10% opacity background
                                            }}
                                        >
                                            <item.icon
                                                className="text-3xl"
                                                style={{ color: item.color }}
                                            />
                                        </div>
                                        <div className="text-2xl poppins-bold text-[#1e1b4b] mb-4">
                                            {item.title}
                                        </div>
                                        <p className="text-gray-600 leading-relaxed poppins-medium">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    {/* <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    </div> */}
                </div>
            </section>

            <div className="max-w-[1600px] mx-auto">
                <div className=" pt-0 space-y-10   px-4">
                    <h2 className="text-2xl text-center text-[#1e1b4b] lg:text-[32px] poppins-bold leading-relaxed xl:leading-tight  mb-6 sm:mb-8">Indexed Journals</h2>
                    <p className="text-center inter-medium opacity-85 text-[16px] leading-[30px] max-w-[1000px] mx-auto">The Selective accepted papers of our International Conference on Advances in Big Data, Cloud, and Intelligent Computing will be recommended to publish in the following index & publisher Journals.</p>
                </div>
                <Marquee direction='right'  pauseOnClick pauseOnHover>
                    <div className="  flex  pb-10 pt-10 ">
                        {imageItems.map((item, index) => (
                            <div key={index} className=" flex justify-center mr-10  py-5" >
                                <img src={item.src} alt="images" className=" w-[300px] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition duratiom-300" />
                            </div>
                        ))}
                    </div>
                </Marquee>

            </div>

        </div>
    )
}

export default Home