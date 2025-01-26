import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/brillyant-logo.png";
import linkedinLogo from "../assets/img/linkedin-logo.svg";
import whatsappLogo from "../assets/img/whatsapp-logo.png";
import instagramLogo from "../assets/img/instagram-logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="text-end">
          <Nav className="me-auto">
            <Nav.Link href="#skills" className="navbar-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#tools" className="navbar-link">
              Tools
            </Nav.Link>
            <Nav.Link href="#projects" className="navbar-link">
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/andrewbrillyant/">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
              <a href="http://wa.me/6285174419022">
                <img src={whatsappLogo} alt="WhatsApp" />
              </a>
              <a href="https://instagram.com/andrewbrillyant">
                <img src={instagramLogo} alt="Instagram" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("test connect")}>
              Let's Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
