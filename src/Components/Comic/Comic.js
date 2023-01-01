import HTMLFlipBook from 'react-pageflip'



const Comic = (props) => {
  return (
    <div className='comic-container'>
        <HTMLFlipBook width={300} height={500}>
            <div className="demoPage">Page 1</div>
            <div className="demoPage">Page 2</div>
            <div className="demoPage">Page 3</div>
            <div className="demoPage">Page 4</div>
        </HTMLFlipBook>
    </div>
  )
}

export default Comic