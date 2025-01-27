import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/brillyant-logo.png";
import SocialIcons from "./SocialIcons";
import OutlinedButton from "./OutlinedButton";

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
        <Navbar.Brand href="#hero">
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
            <SocialIcons />
            <OutlinedButton
              text="Let's Connect"
              url="http://wa.me/6285174419022"
            />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
