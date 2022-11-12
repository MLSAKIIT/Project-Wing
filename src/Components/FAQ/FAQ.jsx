import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Container, Button } from 'react-bootstrap'
import '../FAQ/FAQ.css'

export default function FAQ() {
    return (
        <div className="faq" id="faq">
            <Container className="py-5">
                <h1 className="faq-text text-left pt-5 grad-text">FAQ's</h1>

                <Accordion className="mx-2 accordion">
                    <Card className="card-acc">
                        <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="0">
                            <div className="d-flex justify-content-between">
                                <div>
                                    1. Is MSC Project Wing a recruiting program for MSC, KIIT Chapter?
                                </div>
                                <span>+</span>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-body-acc">No. The accepted students will work on projects under the umbrella of MSC and can get an oppurtunity to join MSC, KIIT Chapter if they excel in their respective projects.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="card-acc">
                        <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="1">
                            <div className="d-flex justify-content-between">
                                <div>
                                    2. What are the perks of joining the program?
                                </div>
                                <span>+</span>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="card-body-acc">
                                <ul>
                                    <li>Certificates will be awarded on the completion of the project.</li>
                                    <li>Opportunity to contribute to an industrial project</li>
                                    <li>Platform to grow your network</li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="card-acc">
                        <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="2">
                            <div className="d-flex justify-content-between">
                                <div>
                                    3. How can I register?
                                </div>
                                <span>+</span>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="card-body-acc">The registration form will go live on 13th November 2022 on the MSC Project Wing official website and will be open till 18th November 2022.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="card-acc">
                        <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    4. What is the selection process?
                                </div>
                                <span>+</span>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="card-body-acc">The selection will take place through application screening and interviews.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="card-acc">
                        <Accordion.Toggle className="acc-toggle" as={Card.Header} eventKey="4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    5. What if I have more questions?
                                </div>
                                <span>+</span>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="card-body-acc">Feel free to drop your queries on our Instagram handle @msckiit. </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <div style={{ marginTop: '5rem'}}>
                <Button variant="outline-light" size="xxl" className="btn m-2" style={{ fontFamily: 'DM Sans' }} href="https://forms.office.com/r/titE6sAPE3" target="_blank">
                    Apply Now
                </Button>
                </div>
            </Container>
        </div>
    )
}
