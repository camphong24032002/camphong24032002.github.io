import { ReactNode, ComponentType } from "react";
import { LucideIcon } from "lucide-react";

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  component: ReactNode;
}
