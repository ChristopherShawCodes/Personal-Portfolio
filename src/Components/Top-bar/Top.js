import './Top.css'
import logo from './Img/CS .png'

const Top = () => {


  return (
    <div className='top-container container-fluid'>
      <a href='/'>
        <img  src={logo} alt='logo' className='logo'></img>
        <h2 className='name '><span className='chris'>Chris</span>topher Shaw</h2>
      </a>
      <div className='contact-container'>
        <a href='https://www.linkedin.com/in/christophercodes/' target='_blank' className='contact-text'>Contact</a>
      </div>
    </div>
  )
}

export default Top