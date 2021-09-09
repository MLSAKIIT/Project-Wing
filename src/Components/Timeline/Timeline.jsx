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
                    date="Aug 29, 2021"
                    iconStyle={{ background: '#078080', color: '#f45d48' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> MSC Meet</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Ideation Form Releases</h4>
                    <p>
                    MSC members submit their project ideas with a SRS and team members' names.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#078080', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #078080' }}
                    date="Aug 29, 2021"
                    iconStyle={{ background: '#078080', color: '#f45d48' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> MSC Meet</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Ideation Form Releases</h4>
                    <p>
                    MSC members submit their project ideas with a SRS and team members' names.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#078080', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #078080' }}
                    date="Aug 29, 2021"
                    iconStyle={{ background: '#078080', color: '#f45d48' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> MSC Meet</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Ideation Form Releases</h4>
                    <p>
                    MSC members submit their project ideas with a SRS and team members' names.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#078080', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #078080' }}
                    date="Aug 29, 2021"
                    iconStyle={{ background: '#078080', color: '#f45d48' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> MSC Meet</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Ideation Form Releases</h4>
                    <p>
                    MSC members submit their project ideas with a SRS and team members' names.
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#078080', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #078080' }}
                    date="Aug 29, 2021"
                    iconStyle={{ background: '#078080', color: '#f45d48' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> MSC Meet</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Ideation Form Releases</h4>
                    <p>
                    MSC members submit their project ideas with a SRS and team members' names.
                    </p>
                </VerticalTimelineElement>
               
                </VerticalTimeline>
            </Container>
        </div>
    )
}
