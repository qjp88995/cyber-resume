import { useEffect } from 'react';

import gsap from 'gsap';

import { CoreModules } from './components/CoreModules';
import { EducationAwards } from './components/EducationAwards';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { resumeData } from './data';

function App() {
  useEffect(() => {
    const handleBeforePrint = () => {
      // 将所有有限动画瞬间跳到终态，使元素处于最终可见状态
      // 跳过 repeat:-1 的无限动画（blink 等），它们由 CSS opacity:1!important 兜底
      gsap.globalTimeline.getChildren(false, true, true).forEach(child => {
        if (child.vars.repeat !== -1) {
          child.progress(1);
        }
      });
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    return () => window.removeEventListener('beforeprint', handleBeforePrint);
  }, []);

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
