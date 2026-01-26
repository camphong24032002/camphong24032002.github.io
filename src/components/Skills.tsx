import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import { skills } from "../data";
import { getPath } from "../utils";

import "../styles/skills.css";

interface SkillCategory {
  title: string;
  components: string[];
}

const Skills: React.FC = () => {
  const [visibleSection, setVisibleSection] =
    useState<string>("Programming Languages");

  const toggle = useCallback((title: string) => {
    setVisibleSection((prev) =>
      prev === title ? "" : title
    );
  }, []);

  const onKeyToggle = useCallback(
    (e: React.KeyboardEvent, title: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(title);
      }
    },
    [toggle]
  );

  return (
    <div className="skills-container">

      {/* Header */}
      <header className="skills-header">
        <h2>Technical Skills</h2>
        <p>Tools & technologies I work with</p>
      </header>

      {/* Accordion */}
      <div className="skills-list">
        {skills.map((skill: SkillCategory) => {
          const isSelected =
            visibleSection === skill.title;

          return (
            <div
              key={skill.title}
              className={`skill-card ${
                isSelected ? "active" : ""
              }`}
            >

              {/* Title */}
              <button
                className="skill-header"
                aria-expanded={isSelected}
                onClick={() => toggle(skill.title)}
                onKeyDown={(e) =>
                  onKeyToggle(e, skill.title)
                }
              >
                <span>{skill.title}</span>

                <FontAwesomeIcon
                  icon={
                    isSelected
                      ? faCaretUp
                      : faCaretDown
                  }
                />
              </button>

              {/* Content */}
              <div
                className={`skill-content ${
                  isSelected ? "open" : ""
                }`}
              >
                <div className="skill-grid">
                  {skill.components.map((component) => (
                    <div
                      key={component}
                      className="skill-item"
                    >
                      <img
                        src={getPath(component)}
                        alt={component}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Skills;
