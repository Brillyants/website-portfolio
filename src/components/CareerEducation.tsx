import { Container, Row, Col } from "react-bootstrap";
import suitcaseIcon from "../assets/img/suitcase.png";
import mortarBoardIcon from "../assets/img/mortarboard.png";

const CareerEducation = () => {
  return (
    <section className="career" id="career">
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <span className="tagline">Timeline</span>
              <h2 className="career-title">
                Education &<span className="purple-text"> Experience</span>
              </h2>
              <p className="career-desc">Journey of Knowledge and Growth</p>
            </div>
            <Container>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item text-lg-end text-md-end text-sm-end text-xs-start text-center"
                >
                  <img
                    src={mortarBoardIcon}
                    alt="Education"
                    className="icon-edu"
                  />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={4} md={4} xl={4}>
                        <p className="orange-text experience-year">
                          2014 - 2020
                        </p>
                      </Col>
                      <Col xs={12} sm={8} md={8} xl={8}>
                        <p className="white-text experience-title">
                          SMAK Kasih Karunia
                        </p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Finishing high school, majoring in social science with
                    average score of 85. Head of Student Council (OSIS)
                  </p>
                  <p>
                    Best Social Science Student grade X, XI, XII. Best
                    Information Technology and Communication Student grade XII
                  </p>
                  <p>
                    Semi-finalist Lomba Debat Bahasa Indonesia (LDBI) 2018.
                    Runner-up Ukira Business Competition 2018
                  </p>
                  <p className="white-text">Jakarta, Indonesia</p>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="second-career-item"
                ></Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item"
                ></Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="second-career-item text-lg-start text-md-start text-sm-start text-xs-start text-center"
                >
                  <img
                    src={mortarBoardIcon}
                    alt="Education"
                    className="icon-edu"
                  />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={8} md={8} xl={8} className="order-xs-2">
                        <p className="white-text experience-title">
                          Multimedia Nusantara University
                        </p>
                      </Col>
                      <Col xs={12} sm={4} md={4} xl={4} className="order-xs-1">
                        <p className="orange-text experience-year">
                          2020 - 2024
                        </p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Completed university with a major in Information Systems,
                    earning an academic scholarship as the top student with the
                    highest GPA in semesters 2, 3, and 4.
                  </p>
                  <p className="white-text">Tangerang, Indonesia</p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item text-lg-end text-md-end text-sm-end text-xs-start text-center"
                >
                  <img src={suitcaseIcon} alt="Career" className="icon" />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={4} md={4} xl={4}>
                        <p className="orange-text experience-year">2022</p>
                      </Col>
                      <Col xs={12} sm={8} md={8} xl={8}>
                        <p className="white-text experience-title">
                          Laboratory Assistant
                        </p>
                        <p className="white-text">
                          Universitas Multimedia Nusantara
                        </p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Laboratory assistant for the Probability and Statistics
                    course, ranked among the TOP 3 teaching assistants for
                    outstanding performance.
                  </p>

                  <p className="white-text">Tangerang, Indonesia</p>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="second-career-item"
                ></Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item"
                ></Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="second-career-item text-lg-start text-md-start text-sm-start text-xs-start text-center"
                >
                  <img src={suitcaseIcon} alt="Career" className="icon" />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={8} md={8} xl={8} className="order-xs-2">
                        <p className="white-text experience-title">
                          Front-end Web Developer
                        </p>
                        <p className="white-text">
                          Universitas Multimedia Nusantara
                        </p>
                      </Col>
                      <Col xs={12} sm={4} md={4} xl={4} className="order-xs-1">
                        <p className="orange-text experience-year">2023</p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Internship at UMN as a front-end web developer, utilizing
                    React.js to create web applications front-end.
                  </p>
                  <p className="white-text">Tangerang, Indonesia</p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item text-lg-end text-md-end text-sm-end text-xs-start text-center"
                >
                  <img src={suitcaseIcon} alt="Career" className="icon" />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={4} md={4} xl={4}>
                        <p className="orange-text experience-year">
                          2023 - 2024
                        </p>
                      </Col>
                      <Col xs={12} sm={8} md={8} xl={8}>
                        <p className="white-text experience-title">
                          Master Data Management
                        </p>
                        <p className="white-text">CIMB Niaga</p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Internship at CIMB Niaga as Master Data Management (MDM)
                    quality assurance, utilizing tools such as Customer 360, MDM
                    Hub Console, and Provisioning Tools to ensure the system
                    generate correct golden data.
                  </p>
                  <p className="white-text">Jakarta, Indonesia</p>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="second-career-item"
                ></Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item"
                ></Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="second-career-item text-lg-start text-md-start text-sm-start text-xs-start text-center"
                >
                  <img src={suitcaseIcon} alt="Career" className="icon" />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={8} md={8} xl={8} className="order-xs-2">
                        <p className="white-text experience-title">
                          Full Stack Web Developer
                        </p>
                        <p className="white-text">Indobest Artha Kreasi</p>
                      </Col>
                      <Col xs={12} sm={4} md={4} xl={4} className="order-xs-1">
                        <p className="orange-text experience-year">2024</p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Internship at Indobest Artha Kreasi as Full Stack Web
                    Developer, utilizing Laravel, Vue.js, MySQL, AWS, MariaDB,
                    and Linux to develop and maintain web applications. Handled
                    CMS project, maintained development, and resolved bugs in
                    the CMS.
                  </p>
                  <p className="white-text">Tangerang, Indonesia</p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item text-lg-end text-md-end text-sm-end text-xs-start text-center"
                >
                  <img src={suitcaseIcon} alt="Career" className="icon" />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={4} md={4} xl={4} className="order-xs-2">
                        <p className="orange-text experience-year">
                          2024 - 2025
                        </p>
                      </Col>
                      <Col xs={12} sm={8} md={8} xl={8} className="order-xs-1">
                        <p className="white-text experience-title">
                          Full Stack Web Developer
                        </p>
                        <p className="white-text">Indobest Artha Kreasi</p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Full-time Staff at Indobest Artha Kreasi as Full Stack Web
                    Developer, utilizing Laravel, Vue.js, MySQL, AWS, MariaDB,
                    and Linux to develop and maintain web applications. Handled
                    supplier and product integrations, automated finance
                    processes, created test cases, and resolved transaction
                    bugs.
                  </p>
                  <p className="white-text">Tangerang, Indonesia</p>
                </Col>
                <Col xs={12} md={6} xl={6} className="second-career-item"></Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="first-career-item"
                ></Col>
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  xl={6}
                  className="second-career-item text-lg-start text-md-start text-sm-start text-xs-start text-center"
                >
                  <img src={suitcaseIcon} alt="Career" className="icon" />
                  <Container className="year-and-experience-section">
                    <Row>
                      <Col xs={12} sm={8} md={8} xl={8} className="order-xs-2">
                        <p className="white-text experience-title">
                          Application Specialist
                        </p>
                        <p className="white-text">Prima Integrasi Solusindo</p>
                      </Col>
                      <Col xs={12} sm={4} md={4} xl={4} className="order-xs-1">
                        <p className="orange-text experience-year">
                          2025 - Present
                        </p>
                      </Col>
                    </Row>
                  </Container>
                  <p>
                    Responsible for implementing, optimizing, and monitoring the
                    interconnection between website channels and other
                    platforms, focusing on marketing automation and website
                    traffic monitoring.
                  </p>
                  <p className="white-text">Tangerang, Indonesia</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CareerEducation;
