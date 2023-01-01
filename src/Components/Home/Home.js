import './Home.css'
import scrollable from './Images/scrollable.png'
import western from './Images/western.JPG'
import detective from './Images/detective.JPG'
import badGuy from './Images/bad-guy.JPG'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='row intro-container'>

        <div className='col-4 intro-left scroll-up'>
          <div className='intro-left-container inner'>
            <img src={scrollable} alt='scrollable' className='scrollable'></img>
          </div>
        </div>

        <div className='col-8 intro-right'>
          <div className='container'>
            <p>short description about me</p>
          </div>
        </div>
      </div>

      <div className='row middle-container'>
        <div className='col-12 mx-auto'>
          <h4>Portfolio</h4>
          <p>a brief description about my portfolio</p>
          <a href='/gallery'>Visit Gallery</a>
        </div>
      </div>


      <div className='row image-container'>
        <div className=' image-card col-4 bad'>
          <img src={badGuy} alt='comic' className='home-image'></img>
        </div>
        <div className=' image-card col-4 western'>
          <img src={western} alt='western' className='home-image western'></img>
        </div>
        <div className=' image-card col-4 detective'>
          <img src={detective} alt='detective' className='home-image'></img>
        </div>
      </div>

      <div className='row lower-container'>
        <div className='col-12 lower-contact-container'>
        <h1>Let's Connect</h1>
        <p>a brief hello</p>
        <div className='email-button'>
          <p>Send Email</p>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Home