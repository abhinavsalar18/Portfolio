import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>Made by Abhinav Salar</p>
      <br></br>
      <p>Write me@: abhinav.salar99@gmail.com</p>
      <div >
          <a className="link" href="https://www.linkedin.com/in/abhinav-salar-505751220/"><FaLinkedin className="social" size={30}/></a>
          
          <a className="link" href="https://github.com/abhinavsalar18"><FaGithub className="social" size={30}/></a>
      </div>
    </footer>
  );
}

export default Footer;
