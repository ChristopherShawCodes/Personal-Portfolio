
import './About.css'
import Achievement from '../Achievement/Achievement'

import me from './Images/me.JPG'
import detective from './Images/detective.JPG'
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

      <div className='empty-container'></div>

        <div className='about-detective-container row'>
          <div className='container-fluid detective-container'>
            <div className='image-container col-4'>
              <img src={detective} alt='detective' className='detective-img' id='dim-img'></img>
            </div>
            <div className='about-text-container col-6'>
              <h2 id='margin'>The Creator</h2>
              <p id='margin'>I'm a creator. I create with all my senses, with every fiber of my being. I have a passion for creating immersive, interactive experiences and I especially enjoy telling stories. That's why I love to stay open to inspiration and allow myself freedom to think outside the box.</p>
              <p id='margin'>"Creativity is seeing what others see and thinking what no one else ever thought." - Albert Einstein.</p>
            </div>
              <button className='btn about-button about-detective-1'><a href='https://github.com/FramedGames1' target='_blank'  rel="noreferrer">Github</a></button>
              <button className='btn about-button about-detective-2'><a href='/comic' target='_blank'  rel="noreferrer">The Few Comic</a></button>
              <button className='btn about-button about-detective-3'><a href='/gallery' target='_blank'  rel="noreferrer">More</a></button>
          </div>
        </div>
      
        <div className='empty-container'></div>

      {/* <Achievement/> */}

        <div className='about-western-container row'>
          <div className='image-container col-4'>
            <img src={western} alt='western' className='western-img' id='dim-img'></img>
            </div>
            <div className='about-text-container col-6'>
              <h2>The Family Man</h2>
              <p>I believe that strong family bonds are essential to happiness and fulfillment, and I am committed to maintaining close relationships with my loved ones. In addition to my role as a husband and father, I also believe in the importance of leaving behind a positive legacy. I strive to be a role model for my children and to make a positive impact on those around me.</p>
          </div>
          <button className='btn about-button about-detective-1'><a href='/comic'>The Few Comic Book</a></button>
          <button className='btn about-button about-detective-2'><a href=''>Link</a></button>
          <button className='btn about-button about-detective-3'><a href=''>Link</a></button>        </div>
      <div className='empty-container'></div>


        <div className='about-comic-container row'>
          <div className='image-container col-4'>
            <img src={badGuy} alt='comic' className='comic-img' id='dim-img'></img>
          </div>
            <div className='about-text-container col-6'>
              <h2>The Gamer</h2>
              <p>I have been captivated by the world of video games since I was a child, being drawn to the endless possibilities and stories that they offer. Gaming has helped to fuel my creativity and inspires me to create. Whether I am working on a new project or simply unwinding after a long day, I always find solace in the immersive worlds of my favorite games. In my free time, you can find me with a controller in hand, lost in the virtual world and always ready for my next adventure.</p>
            </div>
              <button className='btn about-button about-detective-1'><a href='/comic'>The Few Comic Book</a></button>
              <button className='btn about-button about-detective-2'><a href=''>Link</a></button>
              <button className='btn about-button about-detective-3'><a href=''>Link</a></button>        </div>
        <div className='empty-container'></div>
  

  

    </div>
  )
}

export default About