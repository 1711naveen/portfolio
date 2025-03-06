import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/Projects";
import TechStack from "@/components/TechStack";


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
