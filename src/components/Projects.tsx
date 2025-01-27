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
import projSqueezy from "../assets/img/project-squeezy.png";
import projPortableAudio from "../assets/img/project-portable-audio.png";
import projAgm from "../assets/img/project-agm.png";
import projCaraCepat from "../assets/img/project-cara-cepat.png";
import projCardiNusantara from "../assets/img/project-cardinusantara.png";
import projFoodinhands from "../assets/img/project-foodinhands.png";
import projMKitchen from "../assets/img/project-m-kitchen.png";
import projSignageDigital from "../assets/img/project-signage-digital.png";
import projTeknox from "../assets/img/project-teknox.png";
import TrackVisibility from "react-on-screen";
import OutlinedButton from "./OutlinedButton";

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
      imgUrl: projPortableAudio,
    },
    {
      title: "Squeezy",
      description:
        "E-Commerce website for office utilities company using Wordpress, Elementor, and Woo-commerce",
      imgUrl: projSqueezy,
    },
    {
      title: "Nubiso",
      description:
        "E-Commerce website for signage digital company using Wordpress, Elementor, and Woo-commerce",
      imgUrl: projSignageDigital,
    },
    {
      title: "Cardi Nusantara",
      description:
        "Landing page website for personal branding using Wordpress and Elementor",
      imgUrl: projCardiNusantara,
    },
    {
      title: "M Kitchen",
      description:
        "Company profile website for baking company using Wordpress and Elementor",
      imgUrl: projMKitchen,
    },
    {
      title: "Artha Grafika Mediatama",
      description:
        "Company profile website for media advertising company using Wordpress and Elementor",
      imgUrl: projAgm,
    },
    {
      title: "Teknox",
      description:
        "Landing page website for battery retail company using Wordpress and Elementor",
      imgUrl: projTeknox,
    },
    {
      title: "Foodinhands",
      description:
        "Media/blog website for digital marketing agency using Wordpress and Elementor",
      imgUrl: projFoodinhands,
    },
    {
      title: "Cara Cepat",
      description:
        "Course website for edu agency using Wordpress, Elementor, and LearnPress",
      imgUrl: projCaraCepat,
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
            <OutlinedButton
              text="More Projects..."
              url="https://drive.google.com/drive/folders/1KBcf-3jyu-Uxqg-gDwD4ef-G0g6yCZ1D?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
