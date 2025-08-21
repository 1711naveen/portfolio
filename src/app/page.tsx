"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { StructuredData } from "@/components/StructuredData";
import { 
  personSchema, 
  websiteSchema, 
  organizationSchema, 
  breadcrumbSchema,
  projectSchemas 
} from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData 
        data={[
          personSchema,
          websiteSchema,
          organizationSchema,
          breadcrumbSchema,
          ...projectSchemas
        ]} 
      />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <RecentProjects />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
