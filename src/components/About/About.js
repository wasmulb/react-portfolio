import './about.css';
import bioPic from '../../images/bio-pic.jpg';

const About = () =>
<div>
    <h1>About Levi</h1>
    <div class ="bio-pic">
        <img src={bioPic} alt="Picture of Levi"></img>
    </div>
    <p>Levi grew up in rural Southwest Wasington. After graduating High School, he sought adventure and moved to Seattle to
            attend the University of Washington (Go Huskies!) on an NROTC Scholarship. After completeing his B.S. in Mathematics, Levi
            recieved his commision from the U.S. Navy to be a Submarine Officer. Levi then moved to Charleston, South Carolina to start
            the Navy's extensive training pipeline. After graduating from Naval Nuclear Power Training Command, Protoype aboard the MTS-626,
            and Submarine Officer Basic Command, Levi recieved orders to return to Washington state assigned to SSBN-730, the USS Henry M Jackson.
            Aboard the Jackson, Levi was deployed on four Strategic Patrols, serving as the Main Propulsion Assistant, Damage Control Assistant,
            and Assistant Operations Officer. After thriving onboard the Jackson, Levi resigned his commision to seek civilain employment.
            He now resides in Seattle, attending a Web Development Bootcamp to pursue his true passion.</p>
</div>

export default About;