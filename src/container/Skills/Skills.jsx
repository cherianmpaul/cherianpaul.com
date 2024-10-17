import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const experiences = [
    {
      _id: 1,
      year: 2014,
      works: [
        {
          name: "Independent Software Consultant",
          company: "Self-employed",
          desc: "Developed Web Applications with HTML5, CSS3, JavaScript and REST API. ",
        },
      ],
    },
    {
      _id: 2,
      year: 2012,
      works: [
        {
          name: "Senior Software Engineer",
          company: "Houston Chronicle",
          desc: "Worked on SQL Server Integration and Reporting Services, .NET and Classic ASP projects.",
        },
      ],
    },
    {
      _id: 3,
      year: 2008,
      works: [
        {
          name: "Senior Software Developer",
          company: "Advanced Diagnostics Hospitals & Clinics",
          desc: "Developed Asp.NET applications with Microsoft SQL Server.",
        },
        {
          name: "Level II Tech",
          company: "HP",
          desc: "Mostly involved in Hardware Testing.",
        },
      ],
    },
    {
      _id: 4,
      year: 2004,
      works: [
        {
          name: "Junior Programmer",
          company: "Allsec Technologies Limited",
          desc: "Developed ASP.NET applications.",
        },
      ],
    },
  ];

  const skills = [
    { _id: 1, name: "HTML", bgColor: "", icon: images.html },
    { _id: 2, name: "Node JS", bgColor: "", icon: images.node },
    { _id: 3, name: "Git", bgColor: "", icon: images.git },
    { _id: 4, name: "MYSQL", bgColor: "", icon: images.mysql },
    { _id: 5, name: "JavaScript", bgColor: "", icon: images.javascript },
    { _id: 6, name: "CSS", bgColor: "", icon: images.css },
    { _id: 7, name: "PHP", bgColor: "", icon: images.php },
    { _id: 8, name: "React", bgColor: "", icon: images.react },
    { _id: 9, name: "Python", bgColor: "", icon: images.python },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
