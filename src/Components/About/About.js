
import './About.css'

import me from './Images/me.JPG'
import detective from './Images/detective.JPG'
import army from './Images/army.JPG'
import badGuy from './Images/bad-guy.JPG'
import comicGuy from './Images/comic.JPG'
import western from './Images/western.JPG'




const About = () => {
  return (
    <div className='container-fluid about-container'>

     
      <div className='about-top-container row'>
        <div className='about-top-left col-5'>
          <img src={me} alt='me' className='me-image'></img>
        </div>
        <div className='about-top-right col-7'>
          <h1>A little about me.</h1>
          <br/>
          <p>an interesting sentence about me space space space space</p>
          <br/>
          <br/>
          <br/>
          <p>an interesting sentence about me space space space space</p>
        </div>
      </div>
      

      <div className='container-fluid'>
        <div className='about-middle-container row '></div>
      </div>

      <div className='about-lower-container row'>

      </div>

    </div>
  )
}

export default About