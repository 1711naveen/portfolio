"use client";

import ProjectCard from "./ProjectCard";


const RecentProjects = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            des: "I built my portfolio website using Next.js and Tailwind CSS to ensure a robust and visually appealing experience. Next.js offers the benefits of server-side rendering and static site generation, which not only improves performance but also boosts SEO. Tailwind CSS, with its utility-first approach, allowed for rapid styling and helped create a responsive, consistent design that's easy to maintain. The combination of these technologies resulted in a modular, component-driven architecture, delivering a seamless and scalable user experience across all devices.",
            img: "/chatbot.jpeg",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
            link: "/ui.earth.com",
        },
        {
            id: 2,
            title: "DeepSeek ChartBot Chat Assistant",
            des: "An intelligent chatbot designed to generate dynamic charts and data visualizations on the fly. This project integrates the DeepSeek free API to fetch and process data, enabling users to receive insightful, real-time chart outputs. Built with Next.js, Tailwind CSS, and TypeScript, the Chat Assistant offers a responsive, clean interface and smooth user interactions, showcasing both technical expertise and creative problem-solving in data presentation.",
            img: "/chatbot.jpeg",
            iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
            link: "/ui.aiimg.com",
        },
        {
            id: 3,
            title: "Algorithm Visualizer",
            des: "A user-friendly tool built with HTML, CSS, and JavaScript that brings algorithm concepts to life through interactive visualizations. This project allows users to step through algorithm processes and see real-time changes in data structures, making complex logic more accessible. Ideal for both learners and educators, the Algorithm Visualizer highlights the elegance of programming by transforming abstract concepts into an engaging, hands-on experience.",
            img: "/algorithm.jpeg",
            iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
            link: "/ui.apple.com",
        },
    ];
    return (
        <div className="py-20" id="projects">
            <h1 className="text-center font-bold text-5xl">
                A small selection of{" "}
                <span className="text-purple-500">recent projects</span>
            </h1>
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