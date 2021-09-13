import React from 'react'
import '../Projects/Project.css'
import { Button } from 'react-bootstrap'
import { Container, Col, Row } from 'react-bootstrap'
import imgs from '../../project-img/Coding-project.svg'

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
                                <div class="flip-card-front-project-fs">
                                <h1 className="mainhead1-project">MSC Code Portal (Full Stack)</h1>
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
                                <div class="flip-card-front-project-algo">
                                    <h1 className="mainhead1-project">Algorithm VE (Algorithms)</h1>
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
                                <div class="flip-card-front-project-ml">
                                <h1 className="mainhead1-project">Gesture Navigation System (ML)</h1>

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
                                <div class="flip-card-front-project-arvr">
                                    <h1 className="mainhead1-project">Mission Mars (AR/VR)</h1>
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
                                <div class="flip-card-front-project-os">
                                    <h1 className="mainhead1-project">x86_64-decOS (OS)</h1>
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
                                <div class="flip-card-front-project-app">
                                <h1 className="mainhead1-project">Music Recommendation Web App (App)</h1>

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
                                <div class="flip-card-front-project-ai">
                                    <h1 className="mainhead1-project">Debaterx (AI)</h1>
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
                                <div class="flip-card-front-project-app">
                                <h1 className="mainhead1-project">Dosome App (App)</h1>
                                
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
                                <div class="flip-card-front-project-fs">
                                    <h1 className="mainhead1-project">Resuminest (Website)</h1>
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
