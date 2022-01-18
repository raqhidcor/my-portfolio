import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiHeroku,
  DiSass,
} from "react-icons/di";
import { SiHandlebarsdotjs, SiPlaycanvas, SiMaterialui, SiBootstrap, SiPostman, SiExpress } from "react-icons/si";
import './Tech.css'

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <h1 className="about-title-tech"> Tech & Tools Stack </h1>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHandlebarsdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaycanvas/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman/>
      </Col>
    </Row>
  );
}

export default Techstack;