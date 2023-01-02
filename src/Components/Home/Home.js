import './Home.css'
import Ola from 'ola'
import scrollable from './Images/scrollable.png'
import western from './Images/western.JPG'
import detective from './Images/detective.JPG'
import badGuy from './Images/bad-guy.JPG'

const Home = () => {

  document.querySelectorAll('.lower-contact-button').forEach((elem) => {

    const canvas = elem.querySelector('.button__canvas')
    const ctx = canvas.getContext('2d')
    
    const offset = 32
    const background = ' rgb(34, 163, 159)'
    const foreground = 'rgb(243, 239, 224)'
  
    let points = []
    let position
    
    const distance = new Ola({
      value: offset
    })
  
    const size = () => {
  
      canvas.width = canvas.getBoundingClientRect().width
      canvas.height = canvas.getBoundingClientRect().height
      
      position = new Ola({
        x: canvas.width / 2,
        y: canvas.height / 2
      })
      
      const pixelsWidth = canvas.width - offset * 2
      const pixelsHeight = canvas.height - offset * 2
      
      const leftTop = [ offset, offset ]
      const rightTop = [ canvas.width - offset, offset ]
      const rightBottom = [ canvas.width - offset, canvas.height - offset ]
      const leftBottom = [ offset, canvas.height - offset ]
      
      points = []
  
      Array(pixelsWidth).fill().forEach((_, index) => {
        points.push([
          leftTop[0] + index,
          leftTop[1]
        ])
      })
      
      Array(pixelsHeight).fill().forEach((_, index) => {
        points.push([
          rightTop[0],
          rightTop[1] + index
        ])
      })
      
      Array(pixelsWidth).fill().forEach((_, index) => {
        points.push([
          rightBottom[0] - index,
          rightBottom[1]
        ])
      })
      
      Array(pixelsHeight).fill().forEach((_, index) => {
        points.push([
          leftBottom[0],
          leftBottom[1] - index
        ])
      })
      
    }
  
    size()
    
    const reset = () => {
  
      ctx.fillStyle = background
      ctx.fillRect(0, 0, canvas.width, canvas.height)
  
    }
  
    const draw = () => {
  
      ctx.fillStyle = foreground
      ctx.beginPath()
      
      points.forEach((point, index) => {
        
        const [ vx, vy ] = attract(point)
              
        if (index === 0) ctx.moveTo(vx, vy)
        else ctx.lineTo(vx, vy)
              
      })
      
      ctx.closePath()
      ctx.fill()
  
    }
    
    const attract = (point) => {
          
      const [ x, y ] = point
  
      const dx = x - position.x
      const dy = y - position.y
      
      const dist = Math.sqrt(dx * dx + dy * dy)
      const dist2 = Math.max(1, dist)
      
      const d = Math.min(dist2, Math.max(12, (dist2 / 4) - dist2))
      const D = dist2 * distance.value
      
      return [
        x + (d / D) * (position.x - x),
        y + (d / D) * (position.y - y)
      ]
  
    }
  
    const loop = () => {
      reset()
      draw()
      requestAnimationFrame(loop)
    }
  
    window.onresize = size
  
    canvas.onmousemove = (e) => {
  
      position.set({
        x: e.clientX - e.target.getBoundingClientRect().left,
        y: e.clientY - e.target.getBoundingClientRect().top
      }, 200)
    
    }
    
    canvas.onmouseenter = () => {
      
      distance.set({
        value: 1
      }, 200)
      
    }
    
    canvas.onmouseleave = () => {
      
      position.set({
        x: canvas.width / 2,
        y: canvas.height / 2
      }, 2000)
      
      distance.set({
        value: offset
      }, 12000)
      
    }
  
    loop()
  
  })




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
        <a href="#" class="lower-contact-button">
	<canvas class="button__canvas"></canvas>
	<span class="button__text">Hover me I am liquid</span>
</a>

        </div>
      </div>

    </div>
  )
}

export default Home