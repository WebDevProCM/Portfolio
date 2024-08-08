import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "../components/About";
import IconsSection from "../components/IconsSection";
import {Projects} from "../components/Projects";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Hero />
      <About />
      <Skills />
      <IconsSection />
      <Projects />
      <ContactSection />

    </div>
  );
}
