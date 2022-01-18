import "./About.css";
import AboutMe from "../../images/about.png";
import Certified from "../../images/certified.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={AboutMe} alt="" className="about-img" />
        </div>
      </div>

      <div className="about-right">
        <h1 className="about-title">Let me introduce myself</h1>
        <p className="about-sub">
          {" "}
          I'm a front-end web developer living in Valencia (Spain). 
        </p>
        <p className="about-description">
          I'm willing to take any challenge to grow in the tech industry; I
          studied Journalism but I made the decision to become a career changer
          since I always felt this connection with computers and web development
          so this curiosity drove me to take a Web Development Bootcamp at the
          tech school Ironhack where I could develop full-stack apps and learn a
          tech-stack that allows me to create my path in this fascinating world.
          <br></br>
        </p>
        <p  className="about-description">
            With a background in team and project management, I developed a
            logical and detail-orientated mindset necessary in a busy and
            autonomous working environment. My experience as Customer Service
            Representative enhanced these skills and I quickly learnt to adapt
            and communicate under pressure. It was through these experiences and
            the skills that I learnt that I came to realise my goal of becoming
            a web developer.
          </p>
        

        <div>
          <div className="about-certified">
            <a
              href="https://www.credential.net/b74ed3c6-7824-45eb-8802-0cc3a8a964dc#gs.o7954w"
              target="blank"
            >
              <img src={Certified} alt="ironhack-certificate" className="about-certified-img" />
            </a>
            <div className="about-certified-text">
              <h4 className="about-certified-title">Graduation Certificate</h4>
              <p className="about-certified-description">
                Web Developement Bootcamp - Ironhack 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About