import './portfolio.css'
import recGrabberPic from '../../images/recgrabber-sc.png';
import braggingRights from '../../images/bragging-right-sc.png'

const Portfolio = () =>
<div className="portfolio">
    <h1>Levi's Portfolio</h1>
    <div className='project'>
        <h2>RecGrabber</h2>
        <img src={recGrabberPic}></img>
        <a>Deployed Website</a>
        <a>GitHub Repo</a>
    </div>
    <div className='project'>
        <h2>Bragging Rights</h2>
        <img src={braggingRights}></img>
        <a>Deployed Website</a>
        <a>GitHub Repo</a>
    </div>
</div>

export default Portfolio;