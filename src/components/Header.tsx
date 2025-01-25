import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navbar-link">
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#project" className="navbar-link">
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
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
