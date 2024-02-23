import { Header } from "./Header";
import { useState, useEffect } from "react";
import "./Css/education.css"
export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(()=>{
    document.title = "myPortfolio | My Journey";
  },[])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="educationmain">
      <Header />
      <div
        className={`education-main  sm:pt-[2%] pt-[6%]`}
      >
        <div className="sm:text-[50px] text-[35px] sm:w-[100%] w-[100%] flex justify-center text-center font-[700] font-sans">
          <div
            className={`text ${
              isVisible ? "visible" : ""
            } w-[25%] flex justify-center text-justify  `}
          >
            <span className="text-white">My</span>{" "}
            <span className="text-[skyblue]">&nbsp;Journey</span>
          </div>
        </div>
        <div className="sm:w-[80%] w-[90%] pt-[25px] sm:ml-[10%] ml-[5%] mr-[5%] sm:mr-[10%] sm:flex flex sm:flex-row flex-col text-justify gap-7 sm:text-[16px] text-[14px] ">
          <div className="education sm:w-[50%] w-[100%]">
            <div className="flex justify-center sm:text-[30px] text-[25px] font-[800] ">Education</div>
            <br />
            <div className="cards sm:h-[280px] h-[300px]">
              <div>March, 2018</div>
              <div className="sm:flex flex sm:flex-row flex-col justify-start text-center sm:h-[40px] h-[80px] items-baseline">
                <div className="h-full sm:text-[30px] text-[25px] font-[800]">Grade 10 </div>
                <div className="h-full sm:mt-0 mt-[-20px]" >
                  (from Ramkrishna Vidyabhavan,Surat)
                </div>
              </div>
              <br />
              <div className="sm:mt-0 mt-[-25px]">
                Accomplished Grade 10 graduate of 2018, demonstrating strong
                academic achievements across various subjects. Proven ability to
                excel in both individual coursework and collaborative projects.
              </div>
            </div>
            <div className="cards sm:h-[280px] h-[300px]">
              <div>March,2020</div>
              <div className="sm:flex flex sm:flex-row flex-col justify-start text-center sm:h-[40px] h-[80px] items-baseline">
                <div className="h-full sm:text-[30px] text-[25px] font-[800]">Grade 12 </div>
                <div className="h-full sm:mt-0 mt-[-20px]">
                  (from Ramkrishna Vidyabhavan,Surat)
                </div>
              </div>
              <br />
              <div className="sm:mt-0 mt-[-25px]">
                Graduated with distinction in 2018 from Science stream,
                specializing in Physics, Chemistry, and Mathematics.
                Demonstrated academic excellence and proficiency in
                problem-solving. Committed to continued growth and success in
                PCM fields.
              </div>
            </div>
            <div className="cards sm:h-[280px] h-[300px]">
              <div>August 2020 - Present</div>
              <div className="sm:text-[30px] text-[25px] font-[800]">B.E. - Computer Eng.</div>
              <div>(from A.D.Patel Institute of Technology, Anand)</div>
              <br />
              <div>
                Pursuing Computer Engineering, currently in 8th semester.Demonstrated proficiency in coding, problem-solving, and software development. Committed to advancing knowledge and contributing effectively in the tech industry.
              </div>
            </div>
          </div>

          <div className="exp sm:w-[50%] w-[100%]">
            <div className="flex justify-center sm:text-[30px] text-[25px] font-[800]">Experience</div>
            <br />  
            <div className="cards sm:h-[280px] h-[300px]">
              <div>May 2022 - June 2022</div>
              <div className="sm:text-[30px] text-[25px] font-[800]">Front-End Developement Intern </div>
              <div>
                (at BVM Infotech,Surat)
              </div>
              <br />
              <div>
              Gain hands-on experience in web development through this internship. Work on real projects, learn essential coding skills, and contribute to creating dynamic front end for websites.
              </div>
            </div>
            <div className="cards sm:h-[280px] h-[300px]">
              <div>May 2023 - June 2023</div>
              <div className="sm:text-[30px] text-[25px] font-[800]">ReactJS Developement Intern </div>
              <div>
                (at TatvaSoft,Ahmedabad)
              </div>
              <br />
              <div>
              Interned remotely at Tatvasoft, specializing in ReactJS development. Contributed to web application projects, collaborating with a global team. Gained hands-on experience in front-end development, enhancing skills in ReactJS and remote collaboration.
              </div>
            </div>
            <div className="cards sm:h-[280px] h-[300px]">
              <div>December 2023 - Present</div>
              <div className="sm:text-[30px] text-[25px] font-[800]">Web Development Intern</div>
              <div>(at BVM Infotech,Surat)</div>
              <div>
                Pursuing Computer Engineering, currently in 8th semester.
                Demonstrated proficiency in coding, problem-solving, and
                software development. Committed to advancing knowledge and
                contributing effectively in the tech industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
