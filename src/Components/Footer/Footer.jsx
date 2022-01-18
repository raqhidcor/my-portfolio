import Typewriter from "typewriter-effect";
import "./Footer.css"

function Footer() {
  return (
    <Typewriter 
      options={{
        strings: [
          "© Deployed by: Raquel Hidalgo || 2022 "
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Footer;