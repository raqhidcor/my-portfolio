import Typewriter from "typewriter-effect";
import "./Type.css"

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;