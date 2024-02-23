import { MDBBtn } from "mdb-react-ui-kit";
import { useState,useEffect } from "react";
import "../Css/homebuttons.css"
export const HomeButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  // Delaying the visibility of the first data
  setTimeout(() => {
    setIsVisible(true);
  }, 2000);
}, []);
  return (
    <div className={`buttons ${isVisible ? 'visible' : ''} sm:pt-[50px] sm:pb-[50px] pt-[25px] pb-[25px] sm:flex sm:justify-start flex justify-center w-[100%] gap-[10%]`} >
          <MDBBtn color="info sm:w-[150px] sm:text-[15px] w-[75px]text-[8px] ">
          <a href="mailto:meetp3775@gmail.com" className="text-white font-[700]">Hire me</a></MDBBtn>
          <MDBBtn color="info sm:w-[150px] sm:text-[15px] w-[75px]text-[8px]">
          <a href="/contact" className="text-white font-[700]">{`Let's Talk`}</a>
          </MDBBtn>
    </div>
  )
}