import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import './Github.css'

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="a-tittle-github">
        Days I <strong>  Code</strong>
      </h1>
      <GitHubCalendar
        username="raqhidcor"
        blockSize={15}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;