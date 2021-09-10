import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import pro from '../../images/Abt.png'

export default function About() {
    return (
        <div className="about" id="about">

            <Container>

            <h1 className="header1 text-left pt-5 grad-text">About</h1>


                <h3 className="text-left pro-para">
                MSC Project Wing is an accelerated online program to equip engineering students with skills that set them apart from the crowd by contributing and creating a major project that has some industry value.
                            <br /><br />
                            This program has been started with the vision of providing a base to the start-up ideas or product ideas within the developer community.
                </h3>

                <img src={pro} width="100%" className="pro-img" />

            </Container>
        </div>
    )
}
