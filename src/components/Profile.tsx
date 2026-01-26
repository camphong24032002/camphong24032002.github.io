import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contacts } from "../data";
import { getPath } from "../utils";

import "../styles/profile.css";

interface Contact {
  link: string;
  label: string;
  icon: any;
}

const Profile: React.FC = () => {
  return (
    <div className="profile-container">

      {/* Avatar */}
      <div className="profile-avatar-wrapper">
        <div className="profile-avatar-ring">
          <img
            src={getPath("avatar")}
            alt="Thai Cam Phong"
            className="profile-avatar"
          />
        </div>
      </div>

      {/* Info */}
      <div className="profile-info">
        <h1>Thai Cam Phong</h1>

        <span className="profile-role">
          Data Science / AI Engineer
        </span>
      </div>

      {/* Contacts */}
      <div className="profile-contacts">
        {contacts.map((contact: Contact) => (
          <a
            key={contact.link}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.label}
            className="profile-contact-btn"
          >
            <FontAwesomeIcon icon={contact.icon} />
          </a>
        ))}
      </div>

    </div>
  );
};

export default memo(Profile);
