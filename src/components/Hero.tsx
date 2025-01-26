import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import heroImg from "../assets/img/hero-img.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [text, setText] = useState("");
  const toRotate = ["Software Engineer", "Web Developer", "Data Practicion"];
  const period = 150;

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
            <span className="tagline">Andrew Brillyant</span>
            <h1>
              {`Also Known As `}
              <span className="wrap purple-text">{text}</span>
            </h1>
            <p>
              An IT enthusiast passionate about transforming ideas into
              impactful solutions, with a keen eye for innovation and a drive
              for excellence. I specialize in crafting seamless digital
              experiences that inspire and deliver results 🌟
            </p>
            <a href="http://wa.me/6285174419022" target="_blank">
              <button>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </a>
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
