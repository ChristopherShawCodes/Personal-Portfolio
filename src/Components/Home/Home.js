import './Home.css'
import scrollable from './Images/scrollable.png'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='row intro-container'>
        <div className='col-4 intro-left'>
        <div className='intro-left-container'></div>
          <img src={scrollable} alt='scrollable' className='scrollable'></img>
        </div>
        <div className='col-8 intro-right'>
          <p>short description about me</p>

<div className='container'>


  
</div>


        </div>
      </div>

      <div className='row middle-container'>
        <div className='col-12 mx-auto'>
          <h4>Portfolio</h4>
          <p>a brief description about my portfolio</p>
          <a href='#'>Visit Gallery</a>
        </div>
      </div>


      <div className='row image-container'>
        <div className=' image-card col-4 mx-auto'>img</div>
        <div className=' image-card col-4 mx-auto'>img</div>
        <div className=' image-card col-4 mx-auto'>img</div>
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