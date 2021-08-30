import React from 'react'
import { Container } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Timeline/Timeline.css'

export default function Timeline() {
    return (
        <div className="timeline" id="timeline">
            <Container className="pt-5">
            <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="header text-left pt-5 grad-text">Timeline</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
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
                    date="Sept 3, 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    {/* <h3 className="vertical-timeline-element-title"></h3> */}
                    <h4 className="vertical-timeline-element-subtitle">Ideation Form Closes</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 5, 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    {/* <h3 className="vertical-timeline-element-title"></h3> */}
                    <h4 className="vertical-timeline-element-subtitle">Announcement of Finalized Projects</h4>
                    <p>
                    All the finalized projects will be added to the site.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 12, 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    {/* <h3 className="vertical-timeline-element-title"></h3> */}
                    <h4 className="vertical-timeline-element-subtitle">Recruitment for Project Wing Opens</h4>
                    <p>
                    Developers will be recruited for the projects.
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 17, 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    {/* <h3 className="vertical-timeline-element-title"></h3> */}
                    <h4 className="vertical-timeline-element-subtitle">Promotional Meet</h4>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 24, 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    {/* <h3 className="vertical-timeline-element-title"></h3> */}
                    <h4 className="vertical-timeline-element-subtitle">Recruitment Form Closes</h4>
                </VerticalTimelineElement>
              
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 26, 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Announcement of Teams</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
                    <p>
                    Accepted students will be alloted to their teams.
                    </p>
                </VerticalTimelineElement>
                  
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Oct 2, 2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">MSC Project Wing LIVE </h3>
                    {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
                    <p>
                    All the teams start working on their projects.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Nov ,2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Stage 1</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Nov ,2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Stage 2</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Dec 16,2021"
                    iconStyle={{ background: '#f45d48', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">MSC Project Wing Exhibition</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                />
                </VerticalTimeline>
            </Container>
        </div>
    )
}
