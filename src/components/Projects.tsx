"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/Pin";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            des: "I built my portfolio website using Next.js and Tailwind CSS to ensure a robust and visually appealing experience. Next.js offers the benefits of server-side rendering and static site generation, which not only improves performance but also boosts SEO. Tailwind CSS, with its utility-first approach, allowed for rapid styling and helped create a responsive, consistent design that's easy to maintain. The combination of these technologies resulted in a modular, component-driven architecture, delivering a seamless and scalable user experience across all devices.",
            img: "/somerandom.png",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
            link: "/ui.earth.com",
        },
        {
            id: 2,
            title: "Yoom - Video Conferencing App",
            des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
            img: "/somerandom.png",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
            link: "/ui.yoom.com",
        },
        {
            id: 3,
            title: "AI Image SaaS - Canva Application",
            des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
            img: "/somerandom.png",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
            link: "/ui.aiimg.com",
        },
        {
            id: 4,
            title: "Animated Apple Iphone 3D Website",
            des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
            img: "/somerandom.png",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
            link: "/ui.apple.com",
        },
    ];
    return (
        <div className="py-20">
            <h1 className="text-center font-bold text-5xl">
                A small selection of{" "}
                <span className="text-purple-500">recent projects</span>
            </h1>
            {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title="/ui.aceternity.com"
                            href="https://twitter.com/mannupaaji"
                        >
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div> */}

            <div className="container mx-auto px-10 py-8">
                <div className="space-y-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;