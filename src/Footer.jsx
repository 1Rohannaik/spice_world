import logo from "./logo.png";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className="footer1" />
      <div className="footer3">
        <center>
          <p>SHRINIDHI</p>
          <p>ENTERPRISES</p>
        </center>
        <div className="font1">
          <p>
            Family Business Of 4th Generation Into Chilli Business , Expertise
            In Quality & Prices.
          </p>
        </div>
      </div>
      <div className="font2">
        <h3>Quick Link</h3>
        <p>About Us</p>
        <p>Our Products</p>
        <p>Market Rates</p>
        <p>contact Us</p>
      </div>
      <div>
        <div className="font3">
          <h3>Contact Us</h3>
          <p>
            <IoLocation /> About Us
          </p>
          <p>
            <FaPhoneAlt /> 8951460800
          </p>
          <p>
            <IoIosTime /> 9:30 am- 7:30 pm
          </p>
          <p>
            <MdEmail /> shrinidhi123@gmail.com
          </p>
        </div>
      </div>
      <div className="copy">
        <p>Copyright © 2024 SHREENIDHI ENTERPRISES | Created by Rohan Naik</p>
      </div>
    </div>
  );
}

export default Footer;
