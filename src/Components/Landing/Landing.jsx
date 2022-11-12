import React from 'react'
import '../Landing/Landing.css'

import { Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import ParticleBackground from '../ParticleBackground/ParticleBackground'


import pro from '../../images/Landingimg.png'


export default function Landing() {
    return (


        <div className="landing" id="home">
            <ParticleBackground />

            <Row>
                <Col sm={6}>


                    <style type="text/css">
                        {`
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                    </style>

                    <h1 className="topline" style={{ fontFamily: 'DM Sans' }}>Outshine your skills and develop your own sponsored projects</h1>
                    <h1 className="mainhead">PROJECT WING</h1>
                    <h1 className="mainhead2" style={{ fontFamily: 'DM Sans' }}>By Microsoft Student Community, KIIT Chapter</h1>


                    <Button variant="outline-light" size="xxl" className="btn m-2" style={{ fontFamily: 'DM Sans' }} href="https://forms.office.com/r/titE6sAPE3" target="_blank">
                        Apply Now
                    </Button>

                </Col>

                <Col sm={6}>
                    <img alt=""  src={pro} width="100%" className="Landingimg-img" />
                </Col>

            </Row>

        <br></br>
        <br></br>
        <br></br>
        </div>



    )
}