import React from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";


const Experience = () => {
    return (
        <div className="px-20 p-8">
            <div className="flex p-10 ">
                {/* <Image src="/my-avatar.png" height={40} width={40} alt="change it later" /> */}
                {/* <FaBriefcase className="h-14 w-14 px-2 mx-2"/> */}
                <p className="text-5xl text-purple-500">Professional Experience</p>
            </div>

            <ol className="relative  dark:border-gray-700">
                <li className="mb-10 ms-6 ">
                    {/* <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span> */}
                    <Button
                        key={1}
                        //   random duration will be fun , I think , may be not
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        // remove bg-white dark:bg-slate-900
                        className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image
                                src={"/company.png"}
                                alt={"Neural Company logo"}
                                className="lg:w-32 md:w-20 w-16"
                                height={300}
                                width={300}
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {"Neural Info Solutions Pvt. Ltd."}
                                </h1>
                                <p className="text-start">MERN Stack Developer</p>
                                <div className="text-start text-white-100 mt-3 font-semibold">
                                    <ul>
                                        <li className="py-2">
                                            Engineered scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js
                                            (MERN Stack), implementing RESTful APIs and modern architectural patterns.
                                        </li>
                                        <li className="py-2">
                                            Collaborated with cross-functional teams to design and implement responsive, user-centric
                                            interfaces, enhancing overall user experienc
                                        </li>
                                        <li className="py-2">
                                            Optimized application performance by 20% through third-party API integrations and code
                                            optimization strategies including caching mechanisms and React component lazy-loading.
                                        </li>
                                        <li className="py-2">
                                            Utilized Git and GitHub for version control, ensuring streamlined collaboration and efficient
                                            codebase management in an agile development environment.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Button>

                </li>
                {/* <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li> */}
            </ol>


        </div>
    );
};

export default Experience;






// import React from "react";
// import { Button } from "./ui/moving-border";

// const workExperience = [
//     {
//         id: 1,
//         title: "Frontend Engineer Intern",
//         desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//         className: "md:col-span-2",
//         thumbnail: "/exp1.svg",
//     },
//     {
//         id: 2,
//         title: "Mobile App Dev - JSM Tech",
//         desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//         className: "md:col-span-2", // change to md:col-span-2
//         thumbnail: "/exp2.svg",
//     },
//     {
//         id: 3,
//         title: "Freelance App Dev Project",
//         desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//         className: "md:col-span-2", // change to md:col-span-2
//         thumbnail: "/exp3.svg",
//     },
//     {
//         id: 4,
//         title: "Lead Frontend Developer",
//         desc: "Developed and maintained user-facing features using modern frontend technologies.",
//         className: "md:col-span-2",
//         thumbnail: "/exp4.svg",
//     },
// ];



// const Experience = () => {
//     return (
//         <div className="py-20 w-full">
//             <h1 className="heading">
//                 My <span className="text-purple">work experience</span>
//             </h1>

//             <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//                 {workExperience.map((card) => (
//                     <Button
//                         key={card.id}
//                         //   random duration will be fun , I think , may be not
//                         duration={Math.floor(Math.random() * 10000) + 10000}
//                         borderRadius="1.75rem"
//                         style={{
//                             //   add these two
//                             //   you can generate the color from here https://cssgradient.io/
//                             background: "rgb(4,7,29)",
//                             backgroundColor:
//                                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//                             // add this border radius to make it more rounded so that the moving border is more realistic
//                             borderRadius: `calc(1.75rem* 0.96)`,
//                         }}
//                         // remove bg-white dark:bg-slate-900
//                         className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//                     >
//                         <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//                             <img
//                                 src={card.thumbnail}
//                                 alt={card.thumbnail}
//                                 className="lg:w-32 md:w-20 w-16"
//                             />
//                             <div className="lg:ms-5">
//                                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                                     {card.title}
//                                 </h1>
//                                 <p className="text-start text-white-100 mt-3 font-semibold">
//                                     {card.desc}
//                                 </p>
//                             </div>
//                         </div>
//                     </Button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Experience;