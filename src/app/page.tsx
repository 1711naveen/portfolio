"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { useTheme } from "next-themes";


export default function Home() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 border rounded"
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <Hero />
      <About />
      <Experience />
      <RecentProjects />
      <TechStack />
      <Contact />
    </div>
  );
}
