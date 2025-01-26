import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projAcademicGuidance from "../assets/img/project-academic-guidance.png";
import projGelatozilla from "../assets/img/project-gelatozilla.png";
import projRamadhan from "../assets/img/project-ramadhan.png";
import projSalesRecommendation from "../assets/img/project-sales-recommendation.png";
import projFoodie from "../assets/img/project-foodie.png";
import projDiabetesPrediction from "../assets/img/project-diabetes-prediction.png";
import projDiabetesClustering from "../assets/img/project-diabetes-clustering.png";
import projStock from "../assets/img/project-stock.png";
import projTableau from "../assets/img/project-tableau.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const webProjects = [
    {
      title: "Ramadhan Promo",
      description: "Landing page build with Native HTML, CSS, Javascript",
      imgUrl: projRamadhan,
    },
    {
      title: "Gelatozilla",
      description:
        "Company profile web build with HTML, CSS, PHP, Javacript, MySQL",
      imgUrl: projGelatozilla,
    },
    {
      title: "Sales Recommendation",
      description:
        "Recommendation web build with Laravel, Blade, PHP,Python, Minio, MySQL",
      imgUrl: projSalesRecommendation,
    },
    {
      title: "Academic Guidance",
      description: "Academic guidance web build with React",
      imgUrl: projAcademicGuidance,
    },
  ];

  const androidProjects = [
    {
      title: "Foodie",
      description:
        "Food ordering app (Admin + Client) build with Android Studio, XML, Java, PHP, MySQL, SQLite",
      imgUrl: projFoodie,
    },
  ];

  const dataProjects = [
    {
      title: "Stock Analysis",
      description: "Probability and statistic analysis using R and R Studio",
      imgUrl: projStock,
    },
    {
      title: "Oil Pipeline Accident",
      description: "Data visualization project using Tableau",
      imgUrl: projTableau,
    },
    {
      title: "Diabetes Prediction",
      description:
        "Machine learning model prediction using Python and Jupyter Notebook",
      imgUrl: projDiabetesPrediction,
    },
    {
      title: "Diabetes Data Analysis",
      description: "Data analysis clustering using R and R Studio",
      imgUrl: projDiabetesClustering,
    },
  ];

  const wpProjects = [
    {
      title: "Portable Audio",
      description:
        "E-Commerce website for portable audio company using Wordpress, Elementor, and Woo-commerce",
      imgUrl: projImg1,
    },
    {
      title: "Squeezy",
      description:
        "E-Commerce website for office utilities company using Wordpress, Elementor, and Woo-commerce",
      imgUrl: projImg3,
    },
    {
      title: "Nubiso",
      description:
        "E-Commerce website for clothing company using Wordpress, Elementor, and Woo-commerce",
      imgUrl: projImg1,
    },
    {
      title: "EB Fashion Grosir",
      description:
        "E-Commerce website for clothing company using Wordpress, Elementor, and Woo-commerce",
      imgUrl: projImg1,
    },
    {
      title: "M Kitchen",
      description:
        "Company profile website for baking company using Wordpress and Elementor",
      imgUrl: projImg3,
    },
    {
      title: "The Premiere House",
      description:
        "Company profile website for real estate company using Wordpress and Elementor",
      imgUrl: projImg3,
    },
    {
      title: "Teknox",
      description:
        "Landing page website for battery retail company using Wordpress and Elementor",
      imgUrl: projImg1,
    },
    {
      title: "Foodinhands",
      description:
        "Media/blog website for digital marketing agency using Wordpress and Elementor",
      imgUrl: projImg1,
    },
    {
      title: "Cara Cepat",
      description:
        "Course website for edu agency using Wordpress, Elementor, and LearnPress",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I’ve had the opportunity to work on diverse projects,
                    leveraging cutting-edge technologies to create impactful
                    solutions. Each project highlights my commitment to quality,
                    user experience, and innovation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item className="project-nav-item">
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="project-nav-item">
                        <Nav.Link eventKey="second">Android</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="project-nav-item">
                        <Nav.Link eventKey="third">Data</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="project-nav-item">
                        <Nav.Link eventKey="fourth">WP</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {androidProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {dataProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {wpProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
