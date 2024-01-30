import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Deva",
      imgurl: images.deva,
      feedback:
        "Cherian is passionate about writing code and solving clients’ problems through the development of creative and innovative software. He is vocal about his software ideas, but respects his superiors and enthusiastically tackles every assignment as he is directed. He is friendly, easy to get along with. Cherian is dedicated to providing quality work. He checks and rechecks his software before turning it in for presentation to the client. His real strength is in embracing new technologies in the shortest possible time and using it for development.",
      company: "Polymath Software Technologies",
    },
    {
      name: "Tony",
      imgurl: images.tony,
      feedback:
        "Cherian is an excellent programmer who understands the clients requirements and provides the optimum solutions. He also uses the best possible coding language to meet the client as per their requirements. He is very focussed on providing the best of his abilities to his clients and will proactively make the necessary suggestions for every challenge the client faced.",
      company: "Geochits Pvt. Ltd.",
    },
    {
      name: "Albert",
      imgurl: images.albert,
      feedback:
        "Cherian is a true professional and problem solver. He stays committed to getting the job done despite the potential challenges.",
      company: "Days Inn & Suites by Wyndham",
    },
  ];
  const brands = [
    { _id: 1, imgUrl: images.hc, name: "Houston Chronicle" },
    {
      _id: 2,
      imgUrl: images.adhs,
      name: "Advanced Diagnostics Healthcare System",
    },
    { _id: 3, imgUrl: images.hp, name: "HP" },
    { _id: 4, imgUrl: images.allsec, name: "Allsec Technologies" },
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgurl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
