import React from 'react'
import '../Domains/Domains.css'
import { Container, Col, Row } from 'react-bootstrap'
import learner from '../../domain-img/learner.png'
import appdev from '../../domain-img/appdev.png'
import arvr from '../../domain-img/arvr.png'
import backend from '../../domain-img/backend.png'
import db from '../../domain-img/db.png'
import deployment from '../../domain-img/deployment.png'
import frontend from '../../domain-img/frontend.png'
import ml from '../../domain-img/ml.png'
import web from '../../domain-img/web.png'

export default function Domains() {
    return (
        <div className="domains" id="domains">

            <style type="text/css">
                {`
                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
            </style>

            <Container className="py-5 pro-cont">
                <br></br>
                <h1 className="domains-text text-left grad-text">Domains</h1>
                <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                            <img alt=""  src={learner} className="dom-img" width="100%"/>
                            <h2 className="dom-text">Learner</h2>
                        </div>
                    </Col>

                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={arvr} className="dom-img" width="100%"/>
                        <h2 className="dom-text">AR/ VR</h2>
                            
                        </div>
                    </Col>

                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={deployment} className="dom-img" width="100%"/>
                        <h2 className="dom-text">Deployment</h2>
                            
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={frontend} className="dom-img" width="100%"/>
                        <h2 className="dom-text">Frontend</h2>
                            
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={backend} className="dom-img" width="100%"/>
                        <h2 className="dom-text">Backend</h2>
                            
                        </div>
                    </Col>

                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={web} className="dom-img" width="100%"/>
                        <h2 className="dom-text">Web Technologies</h2>
                            
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={ml} className="dom-img" width="100%"/>
                        <h2 className="dom-text">Machine Learning</h2>
                            
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={db} className="dom-img" width="100%"/>
                        <h2 className="dom-text">Database</h2>
                            
                        </div>
                    </Col>

                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" md={4} className="pt-5">
                        <div class="flip-card-project">
                        <img alt=""  src={appdev} className="dom-img" width="100%"/>
                        <h2 className="dom-text">App Development</h2>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
