import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='row intro-container'>
        <div className='col-4 intro-left'>
          <p>css animation here.</p>
        </div>
        <div className='col-8 intro-right'>
          <h1>short description about me</h1>
        </div>
      </div>

      <div className='row middle-container'>
        <div className='col-12 mx-auto'></div>
      </div>


      <div className='row image-container'>
        <div className=' image-card col-4 mx-auto'></div>
        <div className=' image-card col-4 mx-auto'></div>
        <div className=' image-card col-4 mx-auto'></div>
      </div>

      <div className='row lower-container'>
        <div className='lower-contact-container'>
        <h1>lower contact container</h1>
        </div>
      </div>


    <div className='footer row'>
      <p>copyright 2022 christopher.shaw.netlify.app</p>
    </div>

    </div>
  )
}

export default Home