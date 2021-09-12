import React from 'react'
import { Container } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Timeline/Timeline.css'

export default function Timeline() {
    return (
        <div className="timeline" id="timeline">
            <Container className="pt-5">
            <h1 className="header text-left pt-5 grad-text">Timeline</h1>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#078080', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #078080' }}
                    // date="Aug 29, 2021"
                    iconStyle={{ background: '#f45d48', color: '#f45d48' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: 'white'}}> MSC Project Wing LIVE</h3>
                </VerticalTimelineElement>

            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 13, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Student Applications Open</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                    <p>
                    Students submit their applications to work on the projects.
                    </p>
                </VerticalTimelineElement>
                
            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 24, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Student Applications Closes</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                </VerticalTimelineElement>
                
            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 26, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Announcement of Project Teams</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                    <p>
                    Accepted students are alloted to their respective project teams and they start planning their projects and milestones.
                    </p>
                </VerticalTimelineElement>
                
            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Coding</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                    <p>
                    Students work on their MSC Project Wing projects.
                    </p>
                </VerticalTimelineElement>
                
            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 30, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Progress Evaluation 1</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                    <p>
                    Progress of each project will be evaluated.
                    </p>
                </VerticalTimelineElement>
                
            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 27, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Progress Evaluation 2</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                    <p>
                    Progress of each project will be evaluated.
                    </p>
                </VerticalTimelineElement>
                            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 2, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Deployment Starts</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                    <p>
                    Initiation of deployment of each project.
                    </p>
                </VerticalTimelineElement>
                
                            
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 16, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Deployment Closes</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">MSC KIIT Chapter</h4> */}
                    <p>
                    Completion of deployment of each project.
                    </p>
                </VerticalTimelineElement>
                

                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#078080', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #078080' }}
                    // date="Aug 29, 2021"
                    iconStyle={{ background: '#f45d48', color: '#f45d48' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: 'white'}}> MSC Project Wing Exhibition</h3>
 
                </VerticalTimelineElement>
               
                </VerticalTimeline>
            </Container>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
