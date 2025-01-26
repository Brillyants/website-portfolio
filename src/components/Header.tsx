import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/brillyant-logo.png";
import linkedinLogo from "../assets/img/linkedin-logo.svg";
import whatsappLogo from "../assets/img/whatsapp-logo.png";
import instagramLogo from "../assets/img/instagram-logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        if (window.scrollY > headerHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Navbar
      id="header"
      expand="lg"
      className={scrolled || isToggled ? "scrolled bg-grey" : ""}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          aria-expanded={isToggled}
        >
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
              <a href="http://wa.me/6285174419022" target="_blank">
                <img src={whatsappLogo} alt="WhatsApp" />
              </a>
              <a href="https://instagram.com/andrewbrillyant" target="_blank">
                <img src={instagramLogo} alt="Instagram" />
              </a>
            </div>
            <a href="http://wa.me/6285174419022" target="_blank">
              <button className="vvd">Let's Connect</button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
