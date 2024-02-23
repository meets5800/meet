import { Header } from "./Header";
import { useState, useEffect } from "react";
import "./Css/fonts.css"
import "./Css/contact.css";
import { MDBFooter } from 'mdb-react-ui-kit';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    document.title = "myPortfolio | Contact";
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="contactmain">
      <Header />
      <div
        className={`contact-main  sm:pt-[2%] pt-[6%]`}
      >
        <div className="sm:text-[50px] text-[30px] sm:w-[100%] w-[100%] flex justify-center text-center font-[700] mb-[3%] font-sans">
          <div
            className={`text ${
              isVisible ? "visible" : ""
            } w-[25%] flex justify-center text-justify`}
          >
            <span>Contact</span>{" "}
            <span className="text-[skyblue]">&nbsp;Me</span>
          </div>
        </div>
        <div className="sm:w-[80%] w-[90%] p-[3px] sm:ml-[10%] ml-[5%] mr-[5%] sm:mr-[10%]">
          <form action="">
            <div className="flex sm:flex-row flex-col sm:gap-[4%] gap-[13%] h-[50px] sm:text-[20px] text-[15px] sm:mb-[2%] mb-[25%]">
              <input type="text" placeholder="Full Name" className="sm:w-[48%] w-[100%] p-[15px] border-[1px] border-sky-800 rounded-[8px] bg-transparent"/>
              <input type="email" placeholder="Email" className="sm:w-[48%] w-[100%] p-[15px] border-[1px] border-sky-800 rounded-[8px] bg-transparent"/>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-[4%] gap-[13%] h-[50px] sm:text-[20px] text-[15px]] sm:mb-[2%] mb-[25%] ">
              <input type="text" placeholder="Mobile Number" className="sm:w-[48%] w-[100%] p-[15px] border-[1px] border-sky-800 rounded-[8px] bg-transparent"/>
              <input type="text" placeholder="Email Subject" className="sm:w-[48%] w-[100%] p-[15px] border-[1px] border-sky-800 rounded-[8px] bg-transparent"/>
            </div>
            <div className="h-[400px] sm:text-[20px] text-[15px] sm:mb-[4%] mb-[20%]">
            <textarea placeholder="Your Message" className="w-[100%] p-[15px] h-[100%] border-[1px] border-sky-800 rounded-[8px] bg-transparent "/>
            </div>
            <div className="flex w-[100%] justify-center items-center sm:ml-[5%] ml-[18%]">
             <a className="submit-a">Submit</a>
            </div>
          </form>
        </div>
      </div>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgb(3, 21, 32)' }}>
      Copyright &copy; {new Date().getFullYear()} {' '} |  Designed and Maintenance by &nbsp; 
        <a href='https://www.linkedin.com/in/meets5800/'>
          Meet Sutariya
        </a>
        &nbsp; | &nbsp; All Rights Deserved
      </div>
    </MDBFooter>
    </div>
  );
};
