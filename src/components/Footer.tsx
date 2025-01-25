import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/brillyant-logo.png";
import linkedinLogo from "../assets/img/linkedin-logo.svg";
import whatsappLogo from "../assets/img/whatsapp-logo.png";
import instagramLogo from "../assets/img/instagram-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" id="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/andrew-brillyant/">
                <img src={linkedinLogo} alt="Icon" />
              </a>
              <a href="http://wa.me/6285174419022">
                <img src={whatsappLogo} alt="Icon" />
              </a>
              <a href="https://instagram.com/andrewbrillyant">
                <img src={instagramLogo} alt="Icon" />
              </a>
            </div>
            <p>Build with React + Vite + Typescript + Bootstrap 💕</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
