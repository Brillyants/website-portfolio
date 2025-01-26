import { Container, Row, Col } from "react-bootstrap";
import linkedinLogo from "../assets/img/linkedin-logo.svg";
import whatsappLogo from "../assets/img/whatsapp-logo.png";
import instagramLogo from "../assets/img/instagram-logo.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col className="text-center text-lg-start">
            <span className="tagline">About Me</span>
            <h2 className="about-title">
              Hi!👋 I'm<span className="purple-text"> Andrew Brillyant</span>
            </h2>
            <p className="about-desc">
              A passionate IT professional mastering both frontend and backend
              development. I specialize in creating user-centered digital
              products and am eager to contribute to innovative projects that
              turn ideas into impactful solutions.
            </p>
            <Container>
              <Row className="justify-content-center text-center text-lg-start">
                <Col xs={12} md={4} xl={2} className="mb-0">
                  <p>Date of Birth</p>
                  <p className="white-text">April 19, 2002</p>
                </Col>
                <Col xs={12} md={4} xl={2} className="mb-0">
                  <p>Phone</p>
                  <p className="white-text">(+62) 851-7441-9022</p>
                </Col>
                <Col xs={12} md={4} xl={2} className="mb-0">
                  <p>University</p>
                  <p className="white-text">UMN, Tangerang</p>
                </Col>
                <Col xs={12} md={4} xl={2} className="mb-0">
                  <p>Spoken Languages</p>
                  <p className="white-text">Bahasa - English</p>
                </Col>
                <Col xs={12} md={4} xl={2} className="mb-0">
                  <p>Interest</p>
                  <p className="white-text">Programming, Music</p>
                </Col>
                <Col xs={12} md={4} xl={2} className="mb-0">
                  <p>Social Media</p>
                  <div className="social-icon">
                    <a
                      href="https://www.linkedin.com/in/andrew-brillyant/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedinLogo} alt="Icon" />
                    </a>
                    <a
                      href="http://wa.me/6285174419022"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={whatsappLogo} alt="Icon" />
                    </a>
                    <a
                      href="https://instagram.com/andrewbrillyant"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instagramLogo} alt="Icon" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
