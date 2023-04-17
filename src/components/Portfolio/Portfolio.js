import './portfolio.css'
import recGrabberPic from '../../images/recgrabber-sc.png';
import braggingRights from '../../images/bragging-right-sc.png'

const Portfolio = () =>
<div className="portfolio">
    <h1>Levi's Portfolio</h1>
    <div className='project'>
        <h2>RecGrabber</h2>
        <img src={recGrabberPic}></img>
        <a target="_blank" href="https://wasmulb.github.io/RecGrabber/">Deployed Website</a>
        <a target="_blank" href="https://github.com/wasmulb/RecGrabber">GitHub Repo</a>
    </div>
    <div className='project'>
        <h2>Bragging Rights</h2>
        <img src={braggingRights}></img>
        <a target="_blank" href="https://braggingrights.herokuapp.com/">Deployed Website</a>
        <a target="_blank" href="https://github.com/wasmulb/bragging-rights">GitHub Repo</a>
    </div>
    <div className='project'>
        <h2>Watch Worthy</h2>
        <img src={braggingRights}></img>
        <a target="_blank" href="https://watch-worthy.herokuapp.com/">Deployed Website</a>
        <a target="_blank" href="https://github.com/wasmulb/WatchWorthy">GitHub Repo</a>
    </div>
</div>

export default Portfolio;