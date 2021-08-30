import React from 'react'
import '../Landing/Landing.css'
import { Button } from 'react-bootstrap'
import discord from '../../images/discord2.png'
import ParticleBackground from '../ParticleBackground/ParticleBackground'


export default function Landing() {
    return (
        
        <div className="landing" id="home">
            <ParticleBackground />
              <style type="text/css">
                    {`
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
            <h3 className="topline" style={{fontFamily: 'Poppins'}}>Outshine your skills and develop your own sponsored Projects!!</h3>
            <h1 className="mainhead">Project Wing</h1>
            <h1 className="mainhead2">by Microsoft Student Community, KIIT Chapter</h1>

            <h3 className="date" style={{fontFamily: 'Poppins'}}>October - November, 2021</h3>

            <div className="my-4">
                <Button data-aos="fade-right" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}} href="#projects">
                Projects
                </Button>{' '}
                <Button data-aos="fade-left" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{fontFamily: 'Poppins'}} href="" target="__blank"   >
                <img src={discord} style={{maxHeight: '30px'}} alt={"discord img"}/>{' '}Discord
                </Button>
                
            </div>
            
        </div>
        
    )
}