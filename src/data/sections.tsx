import { User, Folder, Code, Award } from "lucide-react";

import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Awards from "../components/Awards";

import { Section } from "../types/section";

export const sections: Section[] = [
  {
    id: "profile",
    title: "Profile",
    icon: User,
    component: <Profile />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: Folder,
    component: <Projects />,
  },
  {
    id: "skills",
    title: "Skills",
    icon: Code,
    component: <Skills />,
  },
  {
    id: "awards",
    title: "Awards",
    icon: Award,
    component: <Awards />,
  },
];
