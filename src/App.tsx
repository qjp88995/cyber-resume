import { resumeData } from "./data";
import { Header } from "./components/Header";
import { CoreModules } from "./components/CoreModules";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { EducationAwards } from "./components/EducationAwards";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="max-w-275 mx-auto px-6 py-16">
      <Header data={resumeData} />
      <main>
        <CoreModules data={resumeData} />
        <Experience data={resumeData} />
        <Projects data={resumeData} />
        <EducationAwards data={resumeData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
