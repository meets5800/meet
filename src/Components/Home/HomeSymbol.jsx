import "../Css/homesymbols.css";
import { useState, useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
export const HomeSymbol = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2500);
  }, []);
  return (
    <div
      className={`symbols ${
        isVisible ? "visible" : ""
      } sm:flex sm:justify-start flex justify-center h-[50px] w-[100%] `}
    >
      <p className="line1 sm:text-[large] text-[15px] sm:flex flex sm:w-[20%] w-[35%] h-[100%] mt-0 items-center font-[500]">
        Connect with me:
      </p>
      <div className="sm:flex flex sm:justify-around sm:w-[30%] w-[50%] justify-around items-center sm:gap-[10px] gap-[4px]">
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#3b5998" }}
        >
          <a href="https://www.facebook.com/meet.sutariya2908" target="_blanlk">
            <MDBIcon fab icon="facebook-f" size="lg" />
          </a>
        </MDBBtn>
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#55acee" }}
        >
          <a href="https://www.linkedin.com/in/meets5800/" target="_blank">
            <MDBIcon fab icon="linkedin" size="lg" />
          </a>
        </MDBBtn>
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#55acee" }}
        >
          <a href="https://www.instagram.com/sutariya_meeet/" target="_blank">
            <MDBIcon fab icon="instagram" size="lg" />
          </a>
        </MDBBtn>
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#55acee" }}
        >
          <a href="https://github.com/meets5800" target="_blank">
            <MDBIcon fab icon="github" size="lg" />
          </a>
        </MDBBtn>
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#55acee" }}
        >
          <a href="https://twitter.com/meetp5800" target="_blank">
            <MDBIcon fab icon="twitter" size="lg" />
          </a>
        </MDBBtn>
      </div>
    </div>
  );
};
