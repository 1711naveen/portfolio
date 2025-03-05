import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Experience from "@/Components/Experience";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/Projects";
import TechStack from "@/Components/TechStack";


export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <RecentProjects/>
      <TechStack/>
      <Contact/>
    </div>
  );
}
