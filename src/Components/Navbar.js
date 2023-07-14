import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles.css'

const Navbar = () => {
  return (
    
    <div>
  <nav class="navbar navbar-expand  px-3 custom-navbar">
    <div class="container-fluid">
      <Link class="navbar-brand text-danger stynav1" to='/'>
        <img src='https://thumbs.dreamstime.com/b/education-logo-concept-graduation-cap-open-book-pages-transparency-flattened-education-logo-concept-graduation-104378681.jpg' alt='' className='imgnav rounded-pill'></img>
        &ensp;&ensp;Educare
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link stynav px-3" aria-current="page" to='/'><div className='col'>Home</div></Link>&ensp;&ensp;
          <Link class="nav-link stynav px-3" to='/courses'><div className='col'>Courses</div></Link>&ensp;&ensp;
          <Link class="nav-link stynav px-3" to='/aboutus'><div className='col'>About</div></Link>&ensp;&ensp;
        </div>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar