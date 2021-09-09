import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import pro from '../../images/Abt.png'

export default function About() {
    return (
        <div className="about" id="about">
            {/* <Container className="pt-5">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="header1 text-right grad-text">About</h1> */}

            <Container>
                {/* <h1 className="pro-text text-left pt-5 grad-text">About</h1> */}

                <h3 className="text-left pro-para">
                MSC Project Wing is an accelerated online program to equip engineering students with skills that set them apart from the crowd by contributing and creating a major project that has some industry value.
                            <br /><br />
                            This program has been started with the vision of providing a base to the start-up ideas or product ideas within the developer community.
                </h3>

                <img src={pro} width="100%" className="pro-img" />



                {/* <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <img className="pw-img" src={aboutpng} alt="about" />
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <h3 className="text-left para" id="about-para">
                            MSC Project Wing is an accelerated online program to equip engineering students with skills that set them apart from the crowd by contributing and creating a major project that has some industry value.
                            <br /><br />
                            This program has been started with the vision of providing a base to the start-up ideas or product ideas within the developer community.
                        </h3>
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}
