import React from 'react'
import { Container } from 'react-bootstrap'
import '../Procedure/Procedure.css'
import pro from '../../images/pro1.png'
import promob from '../../images/promob.png'

export default function Procedure() {
    return (
        <div className="procedures" id="procedure">
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <h1 className="pro-text text-left grad-text">Procedure</h1>


                <h3 className="text-left pro-para">
                    At MSC, we believe that we can make the most of the technology if we use it to tackle real-world problems.
                    MSC Project Wing is an online program aiming to hone the technical skills of students by exposing them to real-world software development scenarios. The motive of the program is to add more value to your projects by gaining sponsorships. Students will work in teams over a period of 2 months to build a project of industrial value.
                </h3>

                <img src={pro} width="100%" className="pro-img" />
                <img src={promob} width="100%" className="pro-img-mob" />

            </Container>

        </div>
    )
}
