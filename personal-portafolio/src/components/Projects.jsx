import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import '../App.css'

export default function Projects () {
    const projects = [
        {
            title: "Business Startup",
            descripton: "Desing & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            descripton: "Desing & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            descripton: "Desing & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            descripton: "Desing & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            descripton: "Desing & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            descripton: "Desing & Development",
            imgUrl: projImg3,
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar semper ante, at viverra ante tincidunt a. Praesent vitae massa a leo tristique vehicula tempor non quam. Morbi at condimentum risus. Duis ac tempor felis. Donec vitae malesuada purus. Fusce et hendrerit nunc. Integer ut egestas dui. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum arcu eu lacus efficitur, at tempus libero imperdiet. Vivamus auctor, turpis iaculis vestibulum semper, velit leo imperdiet orci, at mollis mi velit id orci.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center aling-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="thrid">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="backgorund-image-right" src={colorSharp2} />
        </section>
    )
}