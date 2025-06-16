import {
  web,
  frontend,
  design,
  backend,
  fullStack,
  html,
  css,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  mongoose,
  git,
  github,
  vscode,
  ChatGPT,
  chrome,
  mongodbCompass,
  postman,
  ubuntu,
  ECommerce,
  Handyman,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullStack,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "Mongoose", icon: mongoose },
  { name: "Git", icon: git },
  { name: "GitHup", icon: github },
];


const tools = [
  { name: "VS Code", icon: vscode },
  { name: "ChatGPT", icon: ChatGPT },
  { name: "Chrome", icon: chrome }, 
  { name: "Mongodb Compass", icon: mongodbCompass },
  { name: "Postman", icon: postman },
  { name: "Ubuntu", icon: ubuntu },
];


const experiences = [
  {
    title: "Frontend Development",
    company_name: "Infinimove IT solutions pvt ltd",
    icon: frontend,
    iconBg: "#383E56",
    date: "",
    points: [
      "Advanced skills in React.js for building dynamic web applications.",
      "Expertise in Redux for efficient state management.",
      "Experience with JSW and Cors for seamless form handling and validation.",
    ],
  },
  {
    title: "ML Trainee",
    company_name: "Pragyashal pvt Ltd",
    icon: design,
    iconBg: "white",
    date: "",
    points: [
      "Proficient in Python, Scikit-learn, TensorFlow, and Keras for building machine learning and deep learning models.",
      "Applied data preprocessing, model evaluation, and hyperparameter tuning to improve model accuracy.",
      "Visualized training and validation metrics to monitor performance and avoid overfitting.",
      "Experienced in regularization techniques such as dropout and early stopping for better generalization.",

    ],
  },
];

const projects = [
  {
    name: "E Commerce",
    description:
      "A web-based platform that allows users to search, and order products. admin can manage products, orders, reviews, and users. Providing a convenient and efficient solution for people who need the best online shopping experience.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: ECommerce,
    alt: "E-Commerce",
    source_code_link: "",
    live_link: "",
  },
  {
    name: "Handyman Services",
    description:
      "A web application that enables users to find the Technicians to Get the Service, Here it Works Based on the realtime Location Tracking and Slot booking for the Service Based on availability , Users can Choose the Service",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image:Handyman,
    alt: "Pro Connect Up",

    source_code_link: "",
    live_link: "",
  },
  {
    name: "ChatAPP",
    description:
      "Developed a real-time chat application with WebSocket integration, enabling instant messaging, online user tracking, and notification features like sound alerts and message animations without page refresh.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image:
      "",
    alt: "Image",
    source_code_link: "",
    live_link: "",
  },
  ];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  tools,
};
