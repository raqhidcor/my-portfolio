import "./ContactMe.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ContactMe() {
  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          <Col md={12} className="contact-social">
            <h1>Sweet! Let's Connect!</h1>
            <p>
              I love connecting with different people so if you want to say hi,
              I'll be happy to meet you more!
            </p>
            <ul className="contact-social-links">
              <li className="contact-social-icons">
                <a
                  href="https://github.com/raqhidcor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="contact-social-icons">
                <a
                  href="https://www.linkedin.com/in/raquel-hidalgo-corchuelo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="contact-social-icons">
                <a
                  href="mailto: raqhidcor@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default ContactMe;
