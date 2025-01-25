import { Container, Row, Col } from "react-bootstrap";
import reactLogo from "../assets/img/react.png";
import vueLogo from "../assets/img/vue.png";
import laravelLogo from "../assets/img/laravel.png";
import elementorLogo from "../assets/img/elementor.png";
import wordpressLogo from "../assets/img/wordpress.png";
import metabaseLogo from "../assets/img/metabase.png";
import tableauLogo from "../assets/img/tableau.png";
import awsLogo from "../assets/img/aws.png";

const Tools = () => {
  return (
    <section className="tool" id="tools">
      <Container>
        <Row>
          <Col>
            <div className="tool-bx">
              <h2>Tools & Framework</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <Container>
              <Row>
                <Col>
                  <img src={reactLogo} alt="" />
                </Col>
                <Col>
                  <img src={laravelLogo} alt="" />
                </Col>
                <Col>
                  <img src={vueLogo} alt="" />
                </Col>
                <Col>
                  <img src={awsLogo} alt="" />
                </Col>
                <Col>
                  <img src={wordpressLogo} alt="" />
                </Col>
                <Col>
                  <img src={elementorLogo} alt="" />
                </Col>
                <Col>
                  <img src={tableauLogo} alt="" />
                </Col>
                <Col>
                  <img src={metabaseLogo} alt="" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tools;
