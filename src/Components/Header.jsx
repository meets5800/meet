import "./Css/header.css";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div className="main sm:flex sm:items-center sm:flex-row sm:pt-[1.5%] sm:pr-[10%] sm:pb-[1%] sm:pl-[10%] pt-[5%] pr-[10%] pb-[1%] pl-[10%]">
      <div className="portfolio">
        <NavLink to="/">
          <div style={{ color: "white" }}>Portfolio</div>
        </NavLink>
      </div>
      <div className="sm:flex sm:justify-between sm:flex-row sm:w-[40%] w-[100%] flex justify-around flex-row sm:pt-[0] pt-[4%]">
        <div className="home">
          <NavLink to="/">
            <button className="header-buttons sm:text-[18px] text-[16px]">
              Home
            </button>
          </NavLink>
        </div>
        <div className="about">
          <NavLink to="/about">
            <button className="header-buttons sm:text-[18px] text-[16px]">
              About
            </button>
          </NavLink>
        </div>
        <div className="myjournery">
          <NavLink to="/myjourney">
            <button className="header-buttons sm:text-[18px] text-[16px]">
              My Journey
            </button>
          </NavLink>
        </div>
        <div className="skills">
          <NavLink to="/skills">
            <button className="header-buttons sm:text-[18px] text-[16px]">
              Skills
            </button>
          </NavLink>
        </div>
        <div className="contact">
          <NavLink to="/contact">
            <button className="header-buttons sm:text-[18px] text-[16px]">
              Contact
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
