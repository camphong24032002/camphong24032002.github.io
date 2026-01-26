import React from "react";
import { Section } from "../types/section";

interface SidebarProps {
  sections: Section[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Portfolio</h2>

      <nav>
        {sections.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`nav-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <Icon size={18} />
              {item.title}
            </button>
          );
        })}
      </nav>

      <p className="copyright">© 2026 Phong Thai</p>
    </aside>
  );
};

export default Sidebar;
