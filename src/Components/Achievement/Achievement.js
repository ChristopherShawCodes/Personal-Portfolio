import './Achievement.css'

const Achievement = () => {


    const xbox =() =>{

        const last = document.querySelector('.achievement-banner:last')


        var el = document.querySelector('.achievement-banner'),
            newone = el.clone(true)

        el.before(newone)
            last.remove()
    }


  return (
    <div>
   
    <div class="container">
    <div class="achievement-banner animated">
        <div class="achievement-loader"></div>
        <div class="achievement-loader"></div>
        <div class="achievement-loader"></div>
        <div class="achievement-loader"></div>
        <div class="achievement-loader"></div>
        <div class="achievement-trophy xbox-icon xbox-logo"></div>

        <div class="achievement-text">
            <p>Achievement Unlocked</p>
            <p class="achievement-name">&ndash; Discovered About Me +100</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Achievement