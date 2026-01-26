import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const IMAGE_FOLDER = "/static/";

export type Contact = {
  icon: IconDefinition;
  link: string;
  label: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export type Skill = {
  title: string;
  components: string[];
};

export type Award = {
  title: string;
  description: string;
  image: string;
};

export const contacts: Contact[] = [
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/camphong24032002/',
    label: 'LinkedIn',
  },
  {
    icon: faGithub,
    link: 'https://github.com/camphong24032002',
    label: 'GitHub',
  },
  {
    icon: faEnvelope,
    link: 'mailto:camphong.work@gmail.com',
    label: 'Email',
  },
  // Add more icons as needed
];

export const projects: ProjectItem[] = [
  {
    title: 'Hand gesture classification',
    description: 'A real-time system for hand gesture classification. In this project, I use Mediapipe to inference and LSTM model from Tensorflow to train model.',
    image: "project1",
    link: "https://github.com/camphong24032002/hand-gesture-classification",
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

export const skills: Skill[] = [
  {
    title: 'Programming Languages',
    components: ['python', 'cpp'],
  },
  {
    title: 'AI',
    components: ['sklearn', 'pytorch', 'tensorflow', 'langchain', 'llamaindex'],
  },
  {
    title: 'Data',
    components: ['hadoop', 'spark', 'powerbi', 'tableau', 'mongodb', 'postgresql', 'sqlserver', 'pandas', 'numpy', 'qdrant'],
  },
  {
    title: 'Software Engineering',
    components: ['reactjs', 'nodejs', 'fastapi', 'github', 'postman'],
  },
];

export const awards: Award[] = [
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
];
