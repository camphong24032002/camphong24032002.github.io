import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Section } from "../types/section";

interface Props {
  sections: Section[];
  activeIndex: number;
}

const SectionContainer: React.FC<Props> = ({
  sections,
  activeIndex,
}) => {
  return (
    <main className="content">
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[activeIndex].id}
          className="content-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          {sections[activeIndex].component}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default SectionContainer;
