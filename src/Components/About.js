import React from 'react'
import {Accordion} from 'react-bootstrap'
const About = () => {
  return (
    <div className='abtbg-total bg-dark'>
        <div className='abtbg vh'>
            <h1 className='org text-center vision'>"Changes occur in small steps..are you ready to take the leap"</h1>
        </div><br></br><br></br><br></br>
        <h2 className='text-center vision'>Contact and About Us</h2>
        <div className='d-flex justify-content-center'>
        <Accordion defaultActiveKey="0" flush className='acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2 className='acchead'>Organisation Name</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
        Educare By Arjun
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2 className='acchead'>Location & Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          Suratkal, Mangalore, Karnataka
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header ><h2 className='acchead'>Phone Number</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          +91-12-34-45-56-67
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h2 className='acchead'>Email Address</h2></Accordion.Header>
        <Accordion.Body className='text-center accon'>
          educare@sahyadri.edu.in
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div><br></br><br></br>

        <br></br><br></br><br></br>
        <div>
            <h2 className='text-center vision'>Our Mission</h2>
            <h4 className='text-center vision1 px-5'>The mission of educational websites is to provide accessible and comprehensive learning resources and fostering knowledge acquisition.</h4>
        </div><br></br><br></br>

        
        <footer>
        <h3 className='text-center text-secondary bg-light foot'>developed by Arjun </h3>
        </footer>
    </div>
  )
}

export default About