import React, { memo } from "react";
import { awards } from "../data";
import { getPath } from "../utils";
import "../styles/awards.css";

interface Award {
  title: string;
  description: string;
  image: string;
}

const Awards: React.FC = () => {
  return (
    <div className="awards-container">

      {/* Header */}
      <header className="awards-header">
        <h2>Awards & Certificates</h2>
        <p>Recognitions & achievements in my journey</p>
      </header>

      {/* Grid */}
      <div className="awards-grid">
        {awards.map((award: Award) => (
          <div key={award.title} className="award-card">

            {/* Image */}
            <div className="award-image-wrapper">
              <img
                src={getPath(award.image)}
                alt={award.title}
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="award-content">
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default memo(Awards);
