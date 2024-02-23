import "../Css/home.css"
import { useState, useEffect } from "react";

import { HomeSymbol } from "./HomeSymbol";
import { HomeButtons } from "./HomeButtons";
import { Header } from "../Header";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    document.title = "myPortfolio";
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="homemain">
      <Header />
        <div className={`home-main `}>
          <div className="first pr-[0%] sm:pr-[40%]">
            <p className="name sm:text-[50px] text-[30px] sm:w-[100%] w-[100%] sm:tracking-[6px] tracking-[2px] ">
              Hi, I am Meet Sutariya
            </p>
            <p className="wd text-[26px] sm:text-[40px] w-[15%] sm:w-[10%] sm:tracking-[6px] tracking-[3px] ">
              Web Developer
            </p>
            <p
              className={`data ${
                isVisible ? "visible" : ""
              } sm:text-[18px] text-[14px] font-sans `}
            >
              As a skilled web developer proficient in ReactJS, HTML, CSS, and
              other relevant technologies, I bring a versatile skill set to
              create dynamic and visually appealing web applications. With
              expertise in ReactJS, I excel in crafting interactive user
              interfaces that enhance user experience and engagement. My solid
              foundation in HTML and CSS ensures pixel-perfect implementation of
              designs across various browsers and devices, ensuring a seamless
              experience for users. I thrive in collaborative environments,
              where I leverage my problem-solving abilities to tackle challenges
              efficiently and deliver high-quality solutions within deadlines.
              Whether it is building responsive websites, optimizing performance,
              or integrating third-party APIs, I am committed to delivering
              robust and scalable solutions that meet client objectives. With a
              passion for staying updated on emerging technologies and industry
              best practices, I am poised to contribute effectively to projects
              and drive innovation in web development.
            </p>
            <HomeButtons />
            <HomeSymbol />
          </div>
        </div>
      </div>
    </>
  );
};
