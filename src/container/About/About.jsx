import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      _id: 1,
      title: "Web Designer",
      imgUrl: images.web_designer,
      description:
        "I love developing web applications that work on all platforms.",
    },
    {
      _id: 2,
      title: "Backend Developer",
      imgUrl: images.backend_developer,
      description:
        "I am very passionate in building RESTful applications using MySQL database.",
    },
    {
      _id: 3,
      title: "React Native Developer",
      imgUrl: images.react_native_developer,
      description:
        "I am a React Native developer with a passion for building beautiful and functional mobile applications.",
    },
    {
      _id: 4,
      title: "Frontend Developer",
      imgUrl: images.frontend_developer,
      description: "I love building responsive and beautiful web applications.",
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Apps</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
