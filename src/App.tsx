import { useRef } from "react";
import { resumeData } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Header } from "./components/Header";
import { CoreModules } from "./components/CoreModules";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { EducationAwards } from "./components/EducationAwards";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.batch(".gsap-fade-up", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              y: 40,
              scale: 0.98,
              filter: "blur(10px)",
            },
            {
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              stagger: 0.1,
              duration: 0.6,
              ease: "expo.out",
              overwrite: true,
            },
          );
        },
        once: true,
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="max-w-275 mx-auto px-6 py-16">
      {/* --- HERO SECTION --- */}
      <Header data={resumeData} />

      <main>
        {/* --- PERSONAL ADVANTAGES --- */}
        <CoreModules data={resumeData} />

        {/* --- EXPERIENCE --- */}
        <Experience data={resumeData} />

        {/* --- PROJECTS --- */}
        <Projects data={resumeData} />

        {/* --- FOOTER (Education & Awards) --- */}
        <EducationAwards data={resumeData} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
