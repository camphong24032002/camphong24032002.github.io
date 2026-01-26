import React, { useEffect, useRef, useState } from "react";

import { sections } from "./data/sections";

import Sidebar from "./components/Sidebar";
import SectionContainer from "./components/SectionContainer";

import "./styles/layout.css";

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrolling = useRef<boolean>(false);

  /* Scroll Handler */
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrolling.current) return;

      scrolling.current = true;

      if (e.deltaY > 0) {
        setActiveIndex((prev) =>
          Math.min(prev + 1, sections.length - 1)
        );
      } else {
        setActiveIndex((prev) =>
          Math.max(prev - 1, 0)
        );
      }

      setTimeout(() => {
        scrolling.current = false;
      }, 600);
    };

    const container = containerRef.current;

    if (!container) return;

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="app-layout">
      <Sidebar
        sections={sections}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <SectionContainer
        sections={sections}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default App;
