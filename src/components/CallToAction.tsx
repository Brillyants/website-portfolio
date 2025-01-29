import { Container, Row, Col } from "react-bootstrap";
import OutlinedButton from "./OutlinedButton";
import ctaImg from "../assets/img/cta.svg";

const CallToAction = () => {
  return (
    <section className="cta">
      <Container>
        <Row className="align-items-center">
          <Col xl={7} md={6}>
            <h2>
              Have a Project on <span className="purple-text">Your Mind?</span>
            </h2>
            <p>
              Let's turn your ideas into reality! Whether it's a website, web
              app, or a custom digital solution, I'm here to bring your vision
              to life with seamless development and cutting-edge technology.
              Let's build something great together!
            </p>
            <OutlinedButton
              text="Contact Me"
              url="http://wa.me/6285174419022"
            />
          </Col>
          <Col xl={5} md={6}>
            <img src={ctaImg} alt="CTA" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
