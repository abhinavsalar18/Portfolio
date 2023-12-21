import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <div className="title">
            <p className="section--title" style={{padding: "10px 0px 10px 0px"}}>Hey, I'm Abhinav </p>
            <h1 className="hero--section--title" style={{padding: "10px 0px 15px 0px"}}>
              <span className="hero--section-title--color" >Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            </p>
            <Link to="Contact" className="btn btn-primary">Get In Touch</Link>
          </div>
          <div className="img-box">
            <img class="main-img"  src="https://img.freepik.com/premium-vector/programmer-coder-concentrated-working-project-developing-programming-coding-technologies_569013-338.jpg" alt="img" />
          </div>
        </div>
        
      </div>
      {/* <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div> */}
    </section>
  );
}
