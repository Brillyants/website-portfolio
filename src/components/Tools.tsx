import { Container, Row, Col } from "react-bootstrap";
import reactLogo from "../assets/img/react.png";
import vueLogo from "../assets/img/vue.png";
import laravelLogo from "../assets/img/laravel.png";
import elementorLogo from "../assets/img/elementor.png";
import wordpressLogo from "../assets/img/wordpress.png";
import metabaseLogo from "../assets/img/metabase.png";
import tableauLogo from "../assets/img/tableau.png";
import awsLogo from "../assets/img/aws.png";
import sitecoreLogo from "../assets/img/sitecore.png";
import salesforceLogo from "../assets/img/salesforce.png";

const Tools = () => {
  return (
    <section className="tool" id="tools">
      <Container>
        <Row>
          <Col>
            <div className="tool-bx">
              <h2>
                Tools &<span className="purple-text"> Frameworks</span>
              </h2>
              <p>
                I work with a range of tools and frameworks to build efficient
                and scalable solutions, focusing on technologies that enhance
                both frontend and backend development for seamless,
                high-performance applications.
              </p>
            </div>
            <Container>
              <Row className="justify-content-center">
                <Col xs={6} md={3} xl={1}>
                  <img src={reactLogo} alt="React" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={laravelLogo} alt="Laravel" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={vueLogo} alt="Vue" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={awsLogo} alt="AWS" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={wordpressLogo} alt="Wordpress" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={elementorLogo} alt="Elementor" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={tableauLogo} alt="Tableau" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={metabaseLogo} alt="Metabase" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={sitecoreLogo} alt="Sitecore" />
                </Col>
                <Col xs={6} md={3} xl={1}>
                  <img src={salesforceLogo} alt="Salesforce" />
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
