import React from 'react'
import '../Styles.css'

const Courses = () => {
  return (
    <div className='bg-dark vh'>
      <br></br>
      <h2 className='px-4 vision'>Courses we provide</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">

        <div className="col">
          <div className="card">
            <img src="https://contentstatic.techgig.com/photo/93000110/What-makes-Java-still-popular-among-developers.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Java</h5>
              <p className="card-text">Java is a widely used programming language known for its platform independence and object-oriented approach. With its robust libraries and extensive community support, Java is favored for developing scalable and secure applications across various domains.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://ciracollege.com/wp-content/uploads/2020/11/How-to-Learn-Python.jpg" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">Python</h5>
              <p className="card-text">Python is a powerful and versatile programming language known for its simplicity and readability, making it an excellent choice for both beginners and experienced developers. With its extensive libraries and frameworks, Python empowers developers to build a wide range of applications.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png" className="card-img-top img-card" alt=""/>
            <div className="card-body">
              <h5 className="card-title course-title">C++</h5>
              <p className="card-text">C++ is a powerful and versatile programming language that combines the features of both high-level and low-level programming. It is widely used for developing efficient software applications, including system software, games, and embedded systems.</p>
            </div>
          </div>
        </div>
        
        
      </div>
      <footer>
        <h3 className='text-center text-secondary bg-light foot'>developed by Arjun </h3>
        </footer>
    </div>
  );  
}

export default Courses