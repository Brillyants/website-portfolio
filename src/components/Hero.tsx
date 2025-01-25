import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Hero = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Andrew Brillyant - `}
              <span className="wrap">Web Developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button onClick={() => console.log("test button hero")}>
              Let's Connect
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
