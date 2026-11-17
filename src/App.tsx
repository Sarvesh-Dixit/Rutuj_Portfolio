import { AnimatePresence, MotionConfig } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import About, { PhilosophyMarquee } from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useScrollLock } from "./hooks/useScrollLock";
import { ScrollTrigger } from "./lib/gsap";

export default function App() {
  const [loading, setLoading] = useState(true);
  const finish = useCallback(() => setLoading(false), []);

  useScrollLock(loading);

  // Recalculate scroll-linked positions once fonts and the page layout have settled.
  useEffect(() => {
    if (loading) return;
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 300);
    document.fonts?.ready.then(refresh).catch(() => undefined);
    return () => window.clearTimeout(t);
  }, [loading]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader key="preloader" onComplete={finish} />}</AnimatePresence>

      <Cursor />
      <Navbar ready={!loading} />

      <main id="main">
        <Hero ready={!loading} />
        <About />
        <PhilosophyMarquee />
        <Education />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      {/* film grain */}
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[110] opacity-[0.06] mix-blend-overlay" />
    </MotionConfig>
  );
}
