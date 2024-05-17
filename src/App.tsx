import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import './App.css';

const IMAGE_FOLDER = "/static/"
const contacts = [
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/camphong24032002/',
  },
  {
    icon: faGithub,
    link: 'https://github.com/camphong24032002',
  },
  {
    icon: faEnvelope,
    link: 'mailto:camphong.work@gmail.com',
  },
  // Add more icons as needed
]

const projects = [
  {
    title: 'Hand gesture classification',
    description: 'A real-time system for hand gesture classification. In this project, I use Mediapipe to inference and LSTM model from Tensorflow to train model.',
    image: "project1",
    link: "github.com/camphong24032002/hand-gesture-classification"
  },
  {
    title: 'Recommendation system',
    description: 'A system generates a list of products that most closely match the user\'s specifications in Python.',
    image: "project2",
    link: "https://huggingface.co/spaces/camphong/recommendation-system"
  },
  {
    title: 'ResNet fine-tuning',
    description: 'A simple project to fine-tune ResNet model on CIFAR-10 dataset. The primary objective involves modifying the model\'s architecture to suit the dataset and evaluating predictions.',
    image: "project3",
    link: "https://github.com/camphong24032002/Finetune-with-ResNet50"
  },
];

const skills = [
  {
    title: 'Programming Languages',
    components: ['python', 'cpp', 'julia', 'R', 'js'],
  },
  {
    title: 'AI',
    components: ['sklearn', 'pytorch', 'tensorflow', 'langchain', 'llamaindex'],
  },
  {
    title: 'Data',
    components: ['hadoop', 'spark', 'powerbi', 'tableau', 'mongodb', 'postgresql', 'sqlserver', 'pandas', 'numpy'],
  },
  {
    title: 'Software Engineering',
    components: ['reactjs', 'nodejs', 'flask', 'fastapi', 'github', 'postman'],
  },
]

const awards = [
  {
    title: 'TOEIC Listening & Reading',
    description: 'The TOEIC Listening & Reading test evaluates English proficiency in workplace contexts through listening and reading comprehension assessments for global recognition.',
    image: 'toeic',
  },
  {
    title: 'Scholarship In 3 Semesters',
    description: 'Awarded to students with outstanding academic performance throughout the semester',
    image: 'hcmus',
  },
  {
    title: 'Microsoft Office Specialist (MOS) Word',
    description: 'The Microsoft Office Specialist (MOS) certification in Word validates proficiency in creating and formatting documents, enhancing productivity and efficiency in various professional environments.',
    image: 'mos',
  },
  {
    title: 'Shopee Code League 2022 - Participant',
    description: 'Shopee Code League is a 2-week coding league consisting of two rounds of coding competitions, open to all students and professionals.',
    image: 'shopee-code',
  },
]

function get_path(name: string) {
  return `${IMAGE_FOLDER}${name}.png`;
}

function App() {
  const [visibleSection, setVisibleSection] = useState("Programming Languages");
  return (
    <div className="App">
      <header className="App-header">
        <div className="info">
          <img src={get_path("avatar")} alt="Profile" className="info-image"/>
          <div className="info-text">
            <h1>Thai Cam Phong</h1>
            <h2>Data Science / AI Engineer</h2>
          </div>
          <div className="contact">
            {contacts.map((contact, index) => (
              <a className="contact-icon" key={index} href={contact.link}>
                <FontAwesomeIcon icon={contact.icon} color="white"/>
              </a>
            ))}
          </div>
        </div>
        <div className="content">
          <div className="content-box">
            <div className="summary-background" style={{ backgroundImage: `url(${get_path("summary")})`}}>
              <div className="summary-box">
                <div className="summary-text">
                  <h1>Hi! I'm Thai Cam Phong</h1>
                  <p>I am deeply passionate about Computer Science and Data Science. They fuel my enthusiasm and drive for advancing knowledge and innovation.</p>
                  <div className="resume">
                    <a href="/static/resume.pdf" className="resume-button" target="_blank">
                      Resume
                    </a>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          <div className="content-box">
            <div className="content-header">
              <h2>Projects</h2>
            </div>
            <div className="content-detail">
              {projects.map((project, index) => (
                <a href={project.link} key={index} className="project-box">
                  <div className="project-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-image">
                    <img src={get_path(project.image)} alt={project.title}/>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="content-box">
            <div className="content-header">
              <h2>Skills</h2>
            </div>
            <div className="content-detail">
              {
                skills.map((skill, index) => (
                  <div key={index} className={`skill-box ${visibleSection === skill.title ? "selected" : ""}`}>
                    <h3 onClick={() => setVisibleSection(visibleSection === skill.title ? "" : skill.title)}>
                      {skill.title}
                      <FontAwesomeIcon icon={visibleSection === skill.title ? faCaretUp : faCaretDown} />
                    </h3>
                    <div className="skill-component">
                      {skill.components.map((component, cIndex) => (
                        <img key={cIndex} className="skill-image" src={get_path(component)} alt={component} />
                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="content-box">
            <div className="content-header">
              <h2>Awards & Certificates</h2>
            </div>
            <div className="content-detail">
              {awards.map((award, index) => (
                <div key={index} className="award-box">
                  <img className="award-image" src={get_path(award.image)} alt={award.title}/>
                  <div className="award-text">
                    <h3>{award.title}</h3>
                    <p>{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <footer className="footer">
            <p>&copy; 2024 - Thai Cam Phong</p>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
