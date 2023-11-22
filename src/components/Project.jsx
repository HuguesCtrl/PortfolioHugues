import { useEffect, useState } from "react";
import ProjectData from "../data/projectsData";
import { motion } from "framer-motion";

function Project({ projectNumber, video, github, inline }) {
  const [currentProject, setCurrentProject] = useState(
    ProjectData[projectNumber]
  );
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 900) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
      className="project-main"
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <motion.div
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
        className="img-content"
      >
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        <div className="button-container">
          {inline && (
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover"
            >
              <i className="fas fa-upload"></i>
              <span>voir le site</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover github"
            >
              <i className="fab fa-github"></i>
              <span>voir le projet GitHub</span>{" "}
            </a>
          )}
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="hover video"
            >
              <i className="fas fa-video"></i>
              <span>voir la présentation vidéo</span>{" "}
            </a>
          )}
        </div>
      </motion.div>
      <span
        className="random-circle"
        style={{ left: left, top: top, transform: size }}
      ></span>
    </motion.div>
  );
}
export default Project;
