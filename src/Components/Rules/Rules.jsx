import React from "react";
import { Accordion, Card } from 'react-bootstrap'
import { Container, Col, Row, Button } from 'react-bootstrap'
import '../Rules/Rules.css'

export default function Rules() {
    return(
        <div className="rules" id="rules">
        <Container className="py-5">
        <h1 className="rules-text text-left pt-5 grad-text">Rules</h1>
        
        <Accordion className="mx-2 accordion">
        <Card>
            <Card.Header>Rules & Code of Conduct</Card.Header>
            <Card.Body>
                <Card.Title>1. Certificates will be awarded to the participants who complete their projects.</Card.Title>
                <Card.Title>2. Participants will be selected for a project but will have the liberty to change the project in accordance with their lead. (T&C applied)</Card.Title>
                <Card.Title>3. Every participant must work for 2 months to avail the perks of the project wing program.</Card.Title>
                <Card.Title>4. Every learner should make a minimum of 10 Github contributions for their project.</Card.Title>
                <Card.Title>5. Participants will be assigned a project based on their skill sets, they cannot choose their project.</Card.Title>
                <Card.Title>6. The registration window will be open from 12th September 2021 to 24th September 2021. Recruitment will be through application screening and interviews.</Card.Title>
                <Card.Title>7. Every participant must complete the tasks assigned to them on time. Any kind of long term delay or inactivity will lead to dismissal from the team.</Card.Title>
                <Card.Title>8. The MSC project wing is a national level event. Students from any college in India can participate.</Card.Title>
                <Card.Title>9. Eligibility criteria: Undergraduate or graduate student from India with any major.</Card.Title>
            </Card.Body>
        </Card>
        </Accordion>
        </Container>

        </div>
    )
}