import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import heroImg from "../assets/img/hero-img.svg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [text, setText] = useState("");
  const toRotate = ["Web Developer", "Web Designer", "Freelancer"];
  const period = 250;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250);
    }
  };
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Andrew Brillyant - `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button onClick={() => console.log("test button hero")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={heroImg} alt="Hero Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
