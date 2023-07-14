import React from 'react'
import '../Styles.css'
import {Carousel} from 'react-bootstrap'
const Home = () => {
  return (
    <div className=''>
      <div className='backsty vh '>
        <br></br>
        <div className='d-flex justify-content-center '>
          <Carousel className='caros'>
            <Carousel.Item className='car1 text-center'>
              <h3>"Educare has set my career!"</h3>
              <p>-Arjun Shetty</p>
              <br></br><br></br>
            </Carousel.Item>

            <Carousel.Item className='car3 text-center'>
              <h3>"Learn to improve!"</h3>
              <p>-Steve Jobs</p>
              <br></br><br></br>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='row container-fluid'>
            <div className='container-fluid col-6 mx-auto'>
              <div className='justify-content-center px-5 pb-5'>
              <form className='justify-content-center form' style={{ backgroundColor: 'white' }}>
  <h2 className='maintext vision1'>Login</h2><br></br>
  <div>
    <label htmlFor='email ' className='labels vision1'><h5>Email: </h5></label>
    <input type='email' placeholder='Enter Email Address' className='form-control inputmade' name='Email' />
  </div><br></br>
  <div>
    <label htmlFor='password' className='labels vision1'><h5>Password: </h5></label>
    <input type='password' placeholder='Enter Password' className='form-control inputmade' name='Password'></input>
  </div><br></br>
  <div>
    <label htmlFor='checkbox' className='labels vision1'> Remember Me:&ensp;</label>
    <input type='checkbox' className='custom-control custom-checkbox'></input>
  </div><br></br>
  <div className='d-grid px-3'>
    <button className='btn btn-success' type='submit'>Login</button>
  </div>
</form><br></br>

            </div>
          </div>
          <div className='container-fluid col-6 px-5 pt-5'>
            <h2 className='intro1'>Welcome to, Educare!</h2><br></br>
            <h3 className='intro2'>Your Evolution of Education begins!</h3><br></br>
            
          </div>
        </div>
        <footer>
        <h3 className='text-center text-secondary bg-light foot'>developed by Arjun </h3>
        </footer>
      </div>
    </div>
  );
  
}

export default Home