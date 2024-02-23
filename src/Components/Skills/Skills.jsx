import { Header } from "../Header";
import "../Css/skills.css";
import { useState, useEffect } from "react";
import { Coding } from "./Coding";
import { Personal } from "./Personal";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "myPortfolio | Skills";
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="skillsmain">
      <Header />
      <div
        className={`skill-main sm:pt-[2%] pt-[6%]`}
      >
        <div className="sm:text-[50px] text-[30px] sm:w-[100%] w-[100%] flex justify-center text-center font-[700] font-sans">
          <div
            className={`text ${
              isVisible ? "visible" : ""
            } w-[25%] flex justify-center text-justify`}
          >
            <span>My</span> <span className="text-[skyblue]">&nbsp;Skills</span>
          </div>
        </div>

        <div
          className={`line ${
            isVisible ? "visible" : ""
          } w-[85%] sm:flex flex sm:flex-row flex-col sm:justify-between justify-center gap-[5%] sm:pt-[25px] pt-[20px] text-center sm:text-[25px] text-[15px] ml-[5%] mr-[5%] `}
        >
          <div className="sm:w-[50%] w-full">
            <p className="sm:text-[35px] text-[20px] sm:mr-[0%] mr-[-5%]">Coding Skills</p>
            <Coding />
          </div>
          <br />
          <div className="sm:w-[50%] w-full">
            <p className="sm:text-[35px] text-[20px] sm:mr-[0%] mr-[-5%]">Personal Skills</p>
            <Personal />
          </div>
        </div>
      </div>
    </div>
  );
};
