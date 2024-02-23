import "./Css/about.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";
export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    document.title = "myPortfolio | About";
  },[])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="aboutmain">
      <Header />
      {/* to delay whole page */}
      <div
        className={`about-main  sm:pt-[2%] pt-[6%]`}
      >
        <div className="sm:text-[50px] text-[30px] sm:w-[100%] w-[100%] flex justify-center text-center font-[700] font-sans">
          <div
            className={`text ${
              isVisible ? "visible" : ""
            } w-[25%] flex justify-center text-justify`}
          >
            <span>About</span> <span className="text-[skyblue]">&nbsp;Me</span>
          </div>
        </div>

        <div className="image-container p-[3%] ">
          <div className="image ">
      
          </div>
        </div>

        <div
          className={`line ${
            isVisible ? "visible" : ""
          } sm:pt-[5px] pt-[12px] text-center sm:text-[40px] text-[25px]`}
        >
          Hi there! glad to see here
        </div>
        <div className="w-[80%] sm:pt-[3%] pt-[7%] text-justify mr-[10%] ml-[10%] sm:text-[large] text-[14px] font-serif">
          I am a dedicated web developer with a passion for crafting elegant and
          efficient solutions. Proficient in a variety of technologies including
          HTML, CSS, JavaScript, and frameworks like ReactJS, I specialize in
          building responsive and intuitive web applications. With a keen eye
          for detail and a commitment to delivering high-quality work, I thrive
          in collaborative environments where I can contribute my expertise to
          achieve project goals effectively. Continuously learning and adapting
          to new technologies, I am driven by a desire to stay at the forefront
          of web development trends and deliver innovative solutions that exceed
          expectations.
        </div>
      </div>
    </div>
  );
};

