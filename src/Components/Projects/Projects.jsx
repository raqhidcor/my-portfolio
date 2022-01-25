import { Container, Row, Col } from "react-bootstrap";
import ProjectsCard from "./ProjectsCards";
import "./Projects.css";
import 'animate.css';

import pistachio from "../../images/pistachio-ville.png";
import critterpedia from "../../images/my-critterpedia.png";
import grouping from "../../images/grouping.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={pistachio}
              title="Pistachio Ville"
              description="Pistachio Ville is my first complete deployed project at Ironhack's Web Development bootcamp. I've used Canvas for the game, Vainilla JS for DOM manipulation and CSS3 for the styling."
              link="https://raqhidcor.github.io/raquelhidalgo-Pistachio-Ville-Game/"
              repo="https://github.com/raqhidcor/raquelhidalgo-Pistachio-Ville-Game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={critterpedia}
              title="My Critterpedia Maker "
              description="My Critterpedia Maker is a web created with ❤️ for all the animal crossing fans. I've used firstly Axios to connect with ACNH API; NodeJS and ExpressJs for the routes and server; BcryptJs for authentication; MongoDB for the data base and Handlebars, Bootstrap and CSS3 for the Front."
              link="https://my-critterpedia-maker.herokuapp.com/"
              repo="https://github.com/raqhidcor/raquelhidalgo-My-Critterpedia-Maker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={grouping}
              title="Grouping"
              description="Grouping is a Human Resources Management web application in which employees and HR team can have access to some interesting features to improve the company productivity and daily basis organization."
              link="https://app-grouping.herokuapp.com/"
              repo="https://github.com/raqhidcor/Grouping--App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
