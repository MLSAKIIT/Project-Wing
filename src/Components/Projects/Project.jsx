import React from 'react'
import '../Projects/Project.css'
import { Container, Col, Row } from 'react-bootstrap'
// import imgs from '../../project-img/Coding-project.svg'

export default function Project() {
    return (
        <div className="projects" id="projects">

            <style type="text/css">
                {`
                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
            </style>

            <Container className="pb-5 pro-cont">
                <br></br>
                <h1 className="projects-text text-left grad-text">Projects</h1>
                <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-project-proj">
                            <div class="flip-card-inner-project">
                                <div class="flip-card-front-project-newext">
                                {/* <h1 className="mainhead1-project">Newext</h1> */}
                                </div>
                                <div class="flip-card-back-project">
                                    <h2><u>Project Description</u></h2>
                                    <h4>
                                        <ol>
                                            <li>Team Member 1</li>
                                            <li>Team Member 2</li>
                                            <li>Team Member 3</li>
                                        </ol>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-project-proj">
                            <div class="flip-card-inner-project">
                                <div class="flip-card-front-project-collab">
                                    {/* <h1 className="mainhead1-project">Collab.mp3</h1> */}
                                </div>
                                <div class="flip-card-back-project">
                                    <h2><u>Project Description</u></h2>
                                    <h4>
                                        <ol>

                                            <li>Team Member 1</li>
                                            <li>Team Member 2</li>
                                            <li>Team Member 3</li>
                                        </ol>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-project-proj">
                            <div class="flip-card-inner-project">
                                <div class="flip-card-front-project-cicidation">
                                {/* <h1 className="mainhead1-project">CiCidation</h1> */}

                                </div>
                                <div class="flip-card-back-project">
                                    <h2><u>Project Description</u></h2>
                                    <h4>
                                        <ol>

                                            <li>Team Member 1</li>
                                            <li>Team Member 2</li>
                                            <li>Team Member 3</li>
                                        </ol>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-project-proj">
                            <div class="flip-card-inner-project">
                                <div class="flip-card-front-project-fingsurfers">
                                    {/* <h1 className="mainhead1-project">FingSurfers</h1> */}
                                </div>
                                <div class="flip-card-back-project">
                                    <h2><u>Project Description</u></h2>
                                    <h4>
                                        <ol>

                                            <li>Team Member 1</li>
                                            <li>Team Member 2</li>
                                            <li>Team Member 3</li>
                                        </ol>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-project-proj">
                            <div class="flip-card-inner-project">
                                <div class="flip-card-front-project-arcase">
                                    {/* <h1 className="mainhead1-project">ARCase</h1> */}
                                </div>
                                <div class="flip-card-back-project">
                                    <h2><u>Project Description</u></h2>
                                    <h4>
                                        <ol>

                                            <li>Team Member 1</li>
                                            <li>Team Member 2</li>
                                            <li>Team Member 3</li>
                                        </ol>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-project-proj">
                            <div class="flip-card-inner-project">
                                <div class="flip-card-front-project-ddos">
                                {/* <h1 className="mainhead1-project">DDOS Protectors</h1> */}

                                </div>
                                <div class="flip-card-back-project">
                                    <h2><u>Project Description</u></h2>
                                    <h4>
                                        <ol>

                                            <li>Team Member 1</li>
                                            <li>Team Member 2</li>
                                            <li>Team Member 3</li>
                                        </ol>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
