import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter-1.svg";
import meter2 from "../assets/img/meter-2.svg";
import meter3 from "../assets/img/meter-3.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill Image" />
                  <h5>Web Designer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill Image" />
                  <h5>Data Visualization and Analytics</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill Image" />
                  <h5>Android</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill Image" />
                  <h5>Wordpress Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
