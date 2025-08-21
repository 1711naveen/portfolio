export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naveen Yadav",
  url: "https://naveen17.vercel.app",
  image: "https://naveen17.vercel.app/naveen-yadav.jpg",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Neural Info Solutions Pvt. Ltd."
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Madan Mohan Malaviya University of Technology"
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Spring Boot",
    "Java",
    "Python",
    "C++",
    "Full Stack Development",
    "MERN Stack",
    "Web Development"
  ],
  sameAs: [
    "https://github.com/1711naveen",
    "https://www.linkedin.com/in/naveenyadav1711",
    "https://leetcode.com/u/1711naveen",
    "https://codeforces.com/profile/1711naveen"
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN"
  },
  email: "naveenyadav1711@gmail.com"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "Website",
  name: "Naveen Yadav Portfolio",
  url: "https://naveen17.vercel.app",
  author: {
    "@type": "Person",
    name: "Naveen Yadav"
  },
  description: "Personal portfolio website of Naveen Yadav, a Full Stack Developer specializing in MERN stack development.",
  inLanguage: "en-US"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Naveen Yadav - Full Stack Developer",
  url: "https://naveen17.vercel.app",
  logo: "https://naveen17.vercel.app/logo.png",
  sameAs: [
    "https://github.com/1711naveen",
    "https://www.linkedin.com/in/naveenyadav1711"
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://naveen17.vercel.app"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://naveen17.vercel.app#about"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Projects",
      item: "https://naveen17.vercel.app#projects"
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Skills",
      item: "https://naveen17.vercel.app#skills"
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://naveen17.vercel.app#contact"
    }
  ]
};

export const projectSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Modern Portfolio Website",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: "Naveen Yadav"
    },
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring server-side rendering, static site generation, and optimal performance.",
    url: "https://naveen17.vercel.app",
    codeRepository: "https://github.com/1711naveen/portfolio",
    programmingLanguage: ["TypeScript", "JavaScript", "CSS"],
    runtimePlatform: "Next.js",
    screenshot: "https://naveen17.vercel.app/projects/portfolio.jpg",
    dateCreated: "2024-01-01",
    dateModified: "2025-01-01"
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DeepSeek ChartBot Chat Assistant",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: "Naveen Yadav"
    },
    description: "An intelligent chatbot that generates dynamic charts and data visualizations using the DeepSeek API, built with Next.js, Tailwind CSS, and TypeScript.",
    codeRepository: "https://github.com/1711naveen/chatbot",
    programmingLanguage: ["TypeScript", "JavaScript", "CSS"],
    runtimePlatform: "Next.js",
    screenshot: "https://naveen17.vercel.app/projects/chatbot.jpg",
    dateCreated: "2024-06-01",
    dateModified: "2024-12-01"
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Algorithm Visualizer",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: "Naveen Yadav"
    },
    description: "An educational tool that brings algorithm concepts to life through interactive visualizations, making complex logic accessible for learners and educators.",
    codeRepository: "https://github.com/1711naveen/Sorting-Visualiser",
    programmingLanguage: ["JavaScript", "HTML", "CSS"],
    runtimePlatform: "Web Browser",
    screenshot: "https://naveen17.vercel.app/projects/algorithm-visualizer.jpg",
    dateCreated: "2023-08-01",
    dateModified: "2024-03-01"
  }
];
