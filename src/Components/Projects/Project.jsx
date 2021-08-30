import React from 'react'
import '../Projects/Project.css'
import { Button } from 'react-bootstrap'
import { Container, Col, Row } from 'react-bootstrap'

export default function Project() {
    return (
        <div id="projects">

            <style type="text/css">
                        {`
                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
            </style>

        <Container className="py-5">
        <br></br>
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="projects-text text-right grad-text">Projects</h1>
            <Row>
                <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                <div class="flip-card-project">
                    <div class="flip-card-inner-project">
                            <div class="flip-card-front-project">
                                <h1 className="mainhead1-project">Project 1</h1>
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
                    <div class="flip-card-project">
                        <div class="flip-card-inner-project">
                            <div class="flip-card-front-project">
                            <h1 className="mainhead1-project">Project 2</h1>
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
                <div class="flip-card-project">
                    <div class="flip-card-inner-project">
                            <div class="flip-card-front-project">
                                <h1 className="mainhead1-project">Project 3</h1>
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
                    <div class="flip-card-project">
                        <div class="flip-card-inner-project">
                            <div class="flip-card-front-project">
                            <h1 className="mainhead1-project">Project 4</h1>
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
        <div className="my-4">
                <Button variant="outline-light" size="xxl" className="btn m-2" id="apply" style={{fontFamily: 'Poppins'}} href="">
                Apply Now!!!
                </Button>
        </div>
        </div>
        
    )
}
