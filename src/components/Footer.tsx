import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/brillyant-logo.png";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="#hero">
              <img src={logo} alt="Logo" id="logo" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialIcons />
            <p>
              Build with <b>React, Vite, Typescript, and Bootstrap</b> 💕
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
